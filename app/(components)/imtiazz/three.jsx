"use client";

/* WebGL scenes for the home page, built on plain three.js.
   <Scene3D kind="core" | "graph" | "wave" />
   - three.js loads on demand (a separate chunk), only once the canvas is near the viewport
   - the render loop runs only while the canvas is visible
   - with prefers-reduced-motion one still frame is drawn
   - fewer particles on small screens, pixel ratio capped */

import { useEffect, useRef } from "react";

const LIME = 0xd4ff3a, VIO = 0x8b7cff, CY = 0x5be1ff;

/* Small deterministic random, so the graph looks the same on every load. */
function rng(seed) {
  let a = seed >>> 0;
  return () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/* Soft round point sprite, shared by every scene. */
const DOT_FRAG = /* glsl */ `
  varying vec3 vColor; varying float vAlpha;
  void main(){
    vec2 c = gl_PointCoord - .5; float d = length(c);
    if (d > .5) discard;
    float a = smoothstep(.5, 0., d); a *= a;
    gl_FragColor = vec4(vColor, a * vAlpha);
  }`;

function dots(THREE, { positions, vertex, uniforms, attrs = {} }) {
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  Object.entries(attrs).forEach(([k, [arr, n]]) => g.setAttribute(k, new THREE.BufferAttribute(arr, n)));
  const m = new THREE.ShaderMaterial({
    uniforms, vertexShader: vertex, fragmentShader: DOT_FRAG,
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
  });
  return new THREE.Points(g, m);
}

/* ---------- 1. Neural core (hero): a breathing particle sphere with orbit rings ---------- */
function makeCore(THREE, { small, dpr }) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
  camera.position.set(0, 0, 7.2);
  const root = new THREE.Group(); scene.add(root);

  const N = small ? 2600 : 5200;
  const pos = new Float32Array(N * 3), seed = new Float32Array(N);
  const r = rng(7);
  for (let i = 0; i < N; i++) {
    const y = 1 - (i / (N - 1)) * 2, rad = Math.sqrt(1 - y * y), th = i * 2.399963;
    pos.set([Math.cos(th) * rad, y, Math.sin(th) * rad], i * 3);
    seed[i] = r();
  }
  const uniforms = {
    uTime: { value: 0 }, uPx: { value: dpr },
    uA: { value: new THREE.Color(LIME) }, uB: { value: new THREE.Color(VIO) }, uC: { value: new THREE.Color(CY) },
  };
  const sphere = dots(THREE, {
    positions: pos, uniforms, attrs: { aSeed: [seed, 1] },
    vertex: /* glsl */ `
      uniform float uTime, uPx; uniform vec3 uA, uB, uC;
      attribute float aSeed; varying vec3 vColor; varying float vAlpha;
      void main(){
        vec3 p = position;
        float w = sin(p.x*3.1 + uTime*.9) * sin(p.y*2.7 - uTime*.7) * sin(p.z*3.3 + uTime*.6);
        float bump = .22*w + .05*sin(aSeed*40. + uTime*2.);
        vec3 q = p * (1.75 + bump);
        vec4 mv = modelViewMatrix * vec4(q, 1.);
        gl_Position = projectionMatrix * mv;
        float k = clamp(w*1.6 + .5, 0., 1.);
        vColor = mix(mix(uB, uC, aSeed), uA, smoothstep(.55, 1., k));
        float facing = clamp(normalize(normalMatrix*p).z*.5 + .6, .15, 1.);
        vAlpha = (.45 + .55*k) * facing;
        gl_PointSize = (2. + 3.*k) * uPx * (6. / -mv.z);
      }`,
  });
  root.add(sphere);

  /* inner wireframe */
  const ico = new THREE.LineSegments(
    new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(0.95, 1)),
    new THREE.LineBasicMaterial({ color: LIME, transparent: true, opacity: 0.22, blending: THREE.AdditiveBlending, depthWrite: false })
  );
  root.add(ico);

  /* orbit rings with a "satellite" each */
  const rings = [];
  [[2.25, 1.2, 0.3, VIO], [2.6, -0.5, 1.1, CY], [2.0, 0.2, -1.0, LIME]].forEach(([R, rx, rz, col], k) => {
    const pts = []; for (let i = 0; i <= 160; i++) { const a = (i / 160) * Math.PI * 2; pts.push(new THREE.Vector3(Math.cos(a) * R, 0, Math.sin(a) * R)); }
    const ring = new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts),
      new THREE.LineBasicMaterial({ color: col, transparent: true, opacity: 0.18, blending: THREE.AdditiveBlending, depthWrite: false }));
    const sat = new THREE.Mesh(new THREE.SphereGeometry(0.05, 12, 12), new THREE.MeshBasicMaterial({ color: col }));
    const halo = new THREE.Mesh(new THREE.SphereGeometry(0.14, 12, 12), new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: 0.18, blending: THREE.AdditiveBlending, depthWrite: false }));
    const g = new THREE.Group(); g.rotation.set(rx, 0, rz); g.add(ring, sat, halo); root.add(g);
    rings.push({ g, sat, halo, R, speed: 0.35 + k * 0.17, off: k * 2 });
  });

  return {
    scene, camera,
    update(t, m) {
      uniforms.uTime.value = t;
      root.rotation.y = t * 0.12 + m.x * 0.5;
      root.rotation.x = -m.y * 0.35;
      ico.rotation.set(t * 0.3, t * 0.22, 0);
      rings.forEach((o) => {
        const a = t * o.speed + o.off;
        o.sat.position.set(Math.cos(a) * o.R, 0, Math.sin(a) * o.R);
        o.halo.position.copy(o.sat.position);
      });
    },
  };
}

/* ---------- 2. Agent graph (services): nodes, edges and signals flowing between agents ---------- */
function makeGraph(THREE, { small, dpr }) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
  camera.position.set(0, 0, 9);
  const root = new THREE.Group(); scene.add(root);
  const r = rng(42);

  const N = small ? 26 : 38, nodes = [];
  for (let i = 0; i < N; i++) {
    const u = r() * 2 - 1, th = r() * Math.PI * 2, rad = 2.2 + r() * 1.4, s = Math.sqrt(1 - u * u);
    nodes.push(new THREE.Vector3(Math.cos(th) * s * rad * 1.35, u * rad * 0.8, Math.sin(th) * s * rad));
  }
  /* edges: each node to its 3 nearest */
  const edges = [], seen = new Set(), adj = nodes.map(() => []);
  nodes.forEach((a, i) => {
    nodes.map((b, j) => [j, a.distanceTo(b)]).filter(([j]) => j !== i).sort((x, y) => x[1] - y[1]).slice(0, 3).forEach(([j]) => {
      const key = i < j ? `${i}-${j}` : `${j}-${i}`;
      if (seen.has(key)) return; seen.add(key); edges.push([i, j]); adj[i].push(j); adj[j].push(i);
    });
  });
  const ep = new Float32Array(edges.length * 6);
  edges.forEach(([i, j], k) => { ep.set([...nodes[i].toArray(), ...nodes[j].toArray()], k * 6); });
  const eg = new THREE.BufferGeometry(); eg.setAttribute("position", new THREE.BufferAttribute(ep, 3));
  root.add(new THREE.LineSegments(eg, new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.17, blending: THREE.AdditiveBlending, depthWrite: false })));

  /* nodes */
  const np = new Float32Array(N * 3), size = new Float32Array(N), col = new Float32Array(N * 3);
  const cA = new THREE.Color(LIME), cB = new THREE.Color(VIO), cC = new THREE.Color(0xededef);
  nodes.forEach((v, i) => {
    np.set(v.toArray(), i * 3);
    const hub = adj[i].length >= 4;
    size[i] = hub ? 18 : 8 + r() * 4;
    (hub ? cA : i % 3 === 0 ? cB : cC).toArray(col, i * 3);
  });
  const uniforms = { uTime: { value: 0 }, uPx: { value: dpr } };
  root.add(dots(THREE, {
    positions: np, uniforms, attrs: { aSize: [size, 1], aCol: [col, 3] },
    vertex: /* glsl */ `
      uniform float uTime, uPx; attribute float aSize; attribute vec3 aCol;
      varying vec3 vColor; varying float vAlpha;
      void main(){
        vec4 mv = modelViewMatrix * vec4(position, 1.);
        gl_Position = projectionMatrix * mv;
        vColor = aCol; vAlpha = .9;
        gl_PointSize = aSize * (1. + .12*sin(uTime*2. + position.x*3.)) * uPx * (9. / -mv.z);
      }`,
  }));

  /* signals: each hops along edges, lime head */
  const P = small ? 22 : 40, pulses = [];
  for (let k = 0; k < P; k++) { const a = Math.floor(r() * N); pulses.push({ a, b: adj[a][Math.floor(r() * adj[a].length)], t: r(), v: 0.5 + r() * 0.7 }); }
  const pp = new Float32Array(P * 3);
  const pg = new THREE.BufferGeometry(); pg.setAttribute("position", new THREE.BufferAttribute(pp, 3));
  const pulseMat = new THREE.ShaderMaterial({
    uniforms: { uPx: { value: dpr }, uCol: { value: new THREE.Color(LIME) } },
    vertexShader: /* glsl */ `
      uniform float uPx; uniform vec3 uCol; varying vec3 vColor; varying float vAlpha;
      void main(){ vec4 mv = modelViewMatrix * vec4(position,1.); gl_Position = projectionMatrix*mv;
        vColor = uCol; vAlpha = 1.; gl_PointSize = 12. * uPx * (9. / -mv.z); }`,
    fragmentShader: DOT_FRAG, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
  });
  root.add(new THREE.Points(pg, pulseMat));
  const tmp = new THREE.Vector3();
  let last = 0;

  return {
    scene, camera,
    update(t, m) {
      const dt = Math.min(0.05, t - last); last = t;
      uniforms.uTime.value = t;
      pulses.forEach((p, k) => {
        p.t += dt * p.v;
        if (p.t >= 1) { p.t = 0; const nx = adj[p.b]; const prev = p.a; p.a = p.b; p.b = nx.length > 1 ? nx.filter((x) => x !== prev)[Math.floor(Math.random() * (nx.length - 1))] : nx[0]; }
        tmp.lerpVectors(nodes[p.a], nodes[p.b], p.t); pp.set(tmp.toArray(), k * 3);
      });
      pg.attributes.position.needsUpdate = true;
      root.rotation.y = t * 0.08 + m.x * 0.4;
      root.rotation.x = 0.15 - m.y * 0.25;
    },
  };
}

/* ---------- 3. Wave field (contact): a lime terrain of points ---------- */
function makeWave(THREE, { small, dpr }) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
  camera.position.set(0, 2.6, 6.5); camera.lookAt(0, 0, -1);
  const W = small ? 120 : 210, H = small ? 60 : 96;
  const pos = new Float32Array(W * H * 3);
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    pos.set([(x / (W - 1) - 0.5) * 16, 0, (y / (H - 1) - 0.5) * 9 - 1.5], (y * W + x) * 3);
  }
  const uniforms = { uTime: { value: 0 }, uPx: { value: dpr }, uM: { value: new THREE.Vector2() }, uA: { value: new THREE.Color(LIME) }, uB: { value: new THREE.Color(0x7a7a8c) } };
  const pts = dots(THREE, {
    positions: pos, uniforms,
    vertex: /* glsl */ `
      uniform float uTime, uPx; uniform vec2 uM; uniform vec3 uA, uB;
      varying vec3 vColor; varying float vAlpha;
      void main(){
        vec3 p = position;
        float h = sin(p.x*.55 + uTime*.8)*.35 + sin(p.z*.9 - uTime*.6)*.3 + sin((p.x+p.z)*.35 + uTime*.4)*.4;
        float d = distance(p.xz, uM*vec2(8.,4.5) + vec2(0.,-1.5));
        h += .6*exp(-d*d*.18)*sin(d*2.2 - uTime*3.);
        p.y = h;
        vec4 mv = modelViewMatrix * vec4(p,1.);
        gl_Position = projectionMatrix * mv;
        float k = smoothstep(.0, .9, h);
        vColor = mix(uB, uA, k);
        vAlpha = (.55 + .45*k) * smoothstep(-6.5, -2., p.z) * (1. - smoothstep(4.5, 8., abs(p.x)));
        gl_PointSize = (3.6 + 4.4*k) * uPx * (7. / -mv.z);
      }`,
  });
  scene.add(pts);
  return {
    scene, camera,
    update(t, m) { uniforms.uTime.value = t; uniforms.uM.value.set(m.x, -m.y); },
  };
}

/* ---------- shared pointer controls for interactive scenes ----------
   Drag to rotate (with inertia), hover and click picking. touch-action: pan-y keeps page scroll on phones. */
function controls(THREE, canvas, camera, { targets = () => [], onHover, onPick, drag = true } = {}) {
  const ray = new THREE.Raycaster(), ndc = new THREE.Vector2(-9, -9);
  const st = { rx: 0, ry: 0, vx: 0, vy: 0, down: null, moved: 0, hover: null, active: false };
  const setNdc = (e) => {
    const b = canvas.getBoundingClientRect();
    ndc.set(((e.clientX - b.left) / b.width) * 2 - 1, -((e.clientY - b.top) / b.height) * 2 + 1);
  };
  const pick = () => {
    ray.setFromCamera(ndc, camera);
    const hit = ray.intersectObjects(targets(), false)[0];
    return hit ? hit.object : null;
  };
  const down = (e) => { st.down = { x: e.clientX, y: e.clientY }; st.moved = 0; st.active = true; };
  const move = (e) => {
    setNdc(e);
    if (st.down && drag) {
      const dx = e.clientX - st.down.x, dy = e.clientY - st.down.y;
      st.moved += Math.abs(dx) + Math.abs(dy);
      st.vy = dx * 0.006; st.vx = dy * 0.004;
      st.ry += st.vy; st.rx = Math.max(-0.8, Math.min(0.8, st.rx + st.vx));
      st.down = { x: e.clientX, y: e.clientY };
    }
    const h = pick();
    if (h !== st.hover) { st.hover = h; canvas.style.cursor = h ? "pointer" : drag ? "grab" : ""; onHover?.(h); }
  };
  const up = () => {
    if (st.down && st.moved < 6) { const h = pick(); onPick?.(h); }
    st.down = null;
  };
  const leave = () => { st.down = null; ndc.set(-9, -9); if (st.hover) { st.hover = null; onHover?.(null); } };
  canvas.style.cursor = drag ? "grab" : "";
  canvas.addEventListener("pointerdown", down);
  canvas.addEventListener("pointermove", move);
  window.addEventListener("pointerup", up);
  canvas.addEventListener("pointerleave", leave);
  canvas.addEventListener("pointercancel", leave);
  return {
    st,
    step(dt, auto = 0) {
      if (!st.down) { st.vy *= 0.94; st.vx *= 0.9; st.ry += st.vy + auto * dt; st.rx = Math.max(-0.8, Math.min(0.8, st.rx + st.vx)); st.rx *= 0.985; }
    },
    dispose() {
      canvas.removeEventListener("pointerdown", down); canvas.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up); canvas.removeEventListener("pointerleave", leave); canvas.removeEventListener("pointercancel", leave);
    },
  };
}

/* ---------- 4. Morph (about): particles that morph between shapes on click, and scatter from the cursor ---------- */
const SHAPES = ["sphere", "knot", "helix", "galaxy"];
function shapePoints(name, N, r) {
  const out = new Float32Array(N * 3);
  for (let i = 0; i < N; i++) {
    let x, y, z;
    if (name === "sphere") {
      const yy = 1 - (i / (N - 1)) * 2, rad = Math.sqrt(1 - yy * yy), th = i * 2.399963;
      x = Math.cos(th) * rad * 1.5; y = yy * 1.5; z = Math.sin(th) * rad * 1.5;
    } else if (name === "knot") {
      const t = (i / N) * Math.PI * 2, p = 2, q = 3, R = 1 + 0.42 * Math.cos(q * t);
      const a = r() * Math.PI * 2, tube = 0.16 * Math.sqrt(r());
      x = R * Math.cos(p * t) + tube * Math.cos(a); y = R * Math.sin(p * t) + tube * Math.sin(a); z = 0.42 * Math.sin(q * t) * 1.6 + tube * Math.cos(a + 1);
      x *= 1.15; y *= 1.15;
    } else if (name === "helix") {
      const strand = i % 3, t = (i / N) * 7 * Math.PI - 3.5 * Math.PI, yy = (t / (3.5 * Math.PI)) * 1.9;
      if (strand < 2) { const a = t + strand * Math.PI; x = Math.cos(a) * 0.75; z = Math.sin(a) * 0.75; y = yy; }
      else { const a = Math.floor(t * 1.6) / 1.6, s = r() * 2 - 1; x = Math.cos(a) * 0.75 * s; z = Math.sin(a) * 0.75 * s; y = (a / (3.5 * Math.PI)) * 1.9; }
      x += (r() - 0.5) * 0.05; z += (r() - 0.5) * 0.05;
    } else {
      const arm = i % 3, d = Math.pow(r(), 0.7) * 2, a = d * 2.4 + (arm * Math.PI * 2) / 3 + (r() - 0.5) * 0.5;
      x = Math.cos(a) * d; z = Math.sin(a) * d; y = (r() - 0.5) * 0.18 * (2.2 - d);
    }
    out.set([x, y, z], i * 3);
  }
  return out;
}
function makeMorph(THREE, { small, dpr, canvas, emit, reduce }) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
  camera.position.set(0, 0, 6.4);
  const root = new THREE.Group(); scene.add(root);
  root.position.y = 0.35; root.scale.setScalar(1.22);
  const N = small ? 2600 : 4800, r = rng(11);
  const shapes = SHAPES.map((s) => shapePoints(s, N, r));
  const A = shapes[0].slice(), B = shapes[0].slice(), rnd = new Float32Array(N);
  for (let i = 0; i < N; i++) rnd[i] = r();
  const uniforms = {
    uTime: { value: 0 }, uMix: { value: 1 }, uPx: { value: dpr }, uM: { value: new THREE.Vector3(99, 99, 0) },
    uA: { value: new THREE.Color(LIME) }, uB: { value: new THREE.Color(VIO) }, uC: { value: new THREE.Color(CY) },
  };
  const pts = dots(THREE, {
    positions: new Float32Array(N * 3), uniforms, attrs: { aA: [A, 3], aB: [B, 3], aR: [rnd, 1] },
    vertex: /* glsl */ `
      uniform float uTime, uMix, uPx; uniform vec3 uM, uA, uB, uC;
      attribute vec3 aA, aB; attribute float aR; varying vec3 vColor; varying float vAlpha;
      void main(){
        float e = uMix < .5 ? 4.*uMix*uMix*uMix : 1. - pow(-2.*uMix + 2., 3.) / 2.;
        float d = clamp(e * 1.25 - aR * .25, 0., 1.);
        vec3 p = mix(aA, aB, d);
        p += .03 * vec3(sin(uTime*1.3 + aR*30.), cos(uTime*1.1 + aR*20.), sin(uTime*.9 + aR*10.));
        vec4 wp = modelMatrix * vec4(p, 1.);
        vec3 away = wp.xyz - uM; float dist = length(away.xy);
        wp.xyz += normalize(away + 1e-4) * .55 * exp(-dist*dist*2.2);
        vec4 mv = viewMatrix * wp;
        gl_Position = projectionMatrix * mv;
        float h = clamp(p.y * .3 + .5, 0., 1.);
        vColor = mix(mix(uB, uC, aR), uA, smoothstep(.35, .9, h));
        vAlpha = .55 + .45 * h;
        gl_PointSize = (1.8 + 2.4 * aR) * uPx * (6. / -mv.z);
      }`,
  });
  pts.frustumCulled = false;
  root.add(pts);
  let cur = 0, last = 0, since = 0;
  const morphTo = (k) => {
    const m = uniforms.uMix.value;
    for (let i = 0; i < N * 3; i++) A[i] = A[i] + (B[i] - A[i]) * Math.min(1, m); /* approx current spot */
    B.set(shapes[k]); cur = k; uniforms.uMix.value = 0; since = 0;
    pts.geometry.attributes.aA.needsUpdate = true; pts.geometry.attributes.aB.needsUpdate = true;
    emit({ type: "shape", name: SHAPES[k] });
  };
  const ctl = controls(THREE, canvas, camera, { onPick: () => morphTo((cur + 1) % SHAPES.length) });
  const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0), ray = new THREE.Raycaster(), hit = new THREE.Vector3(), ndc = new THREE.Vector2();
  const onMove = (e) => {
    const b = canvas.getBoundingClientRect();
    ndc.set(((e.clientX - b.left) / b.width) * 2 - 1, -((e.clientY - b.top) / b.height) * 2 + 1);
    ray.setFromCamera(ndc, camera); if (ray.ray.intersectPlane(plane, hit)) uniforms.uM.value.copy(hit);
  };
  const onLeave = () => uniforms.uM.value.set(99, 99, 0);
  canvas.addEventListener("pointermove", onMove); canvas.addEventListener("pointerleave", onLeave);
  emit({ type: "shape", name: SHAPES[0] });
  return {
    scene, camera, interactive: true,
    update(t) {
      const dt = Math.min(0.05, t - last); last = t; since += dt;
      uniforms.uTime.value = t;
      uniforms.uMix.value = Math.min(1, uniforms.uMix.value + dt * 0.55);
      if (!reduce && since > 7) morphTo((cur + 1) % SHAPES.length);
      ctl.step(dt, reduce ? 0 : 0.18);
      root.rotation.set(ctl.st.rx + 0.25, ctl.st.ry, 0);
    },
    dispose() { ctl.dispose(); canvas.removeEventListener("pointermove", onMove); canvas.removeEventListener("pointerleave", onLeave); },
  };
}

/* ---------- 5. Agent run (interactive section): five stages on a curve, click one, or run them all ---------- */
function makeRun(THREE, { small, dpr, canvas, emit, opts }) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
  camera.position.set(0, 0.6, 10);
  const root = new THREE.Group(); scene.add(root);
  const geos = [
    new THREE.OctahedronGeometry(0.62), new THREE.IcosahedronGeometry(0.62, 0), new THREE.TorusGeometry(0.5, 0.16, 10, 28),
    new THREE.BoxGeometry(0.85, 0.85, 0.85), new THREE.DodecahedronGeometry(0.62),
  ];
  const lime = new THREE.Color(LIME), white = new THREE.Color(0xededef), vio = new THREE.Color(VIO);
  const nodes = geos.map((g, i) => {
    const grp = new THREE.Group();
    const fill = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ color: VIO, transparent: true, opacity: 0.08, depthWrite: false }));
    const edges = new THREE.LineSegments(new THREE.EdgesGeometry(g), new THREE.LineBasicMaterial({ color: 0xededef, transparent: true, opacity: 0.55 }));
    const hitbox = new THREE.Mesh(new THREE.SphereGeometry(1.05, 10, 10), new THREE.MeshBasicMaterial({ visible: false }));
    hitbox.userData.i = i;
    const halo = new THREE.Mesh(new THREE.SphereGeometry(0.8, 24, 24), new THREE.MeshBasicMaterial({ color: LIME, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false }));
    grp.add(fill, edges, halo, hitbox); root.add(grp);
    return { grp, fill, edges, halo, hitbox, s: 1 };
  });
  /* the path and the particles that flow along it */
  const P = small ? 70 : 120;
  const flow = new Float32Array(P * 3), seeds = new Float32Array(P);
  for (let k = 0; k < P; k++) seeds[k] = k / P;
  const fg = new THREE.BufferGeometry(); fg.setAttribute("position", new THREE.BufferAttribute(flow, 3));
  const flowMat = new THREE.ShaderMaterial({
    uniforms: { uPx: { value: dpr }, uCol: { value: new THREE.Color(LIME) }, uHot: { value: 0 } },
    vertexShader: /* glsl */ `uniform float uPx, uHot; uniform vec3 uCol; varying vec3 vColor; varying float vAlpha;
      void main(){ vec4 mv = modelViewMatrix*vec4(position,1.); gl_Position = projectionMatrix*mv;
        vColor = uCol; vAlpha = .55 + .45*uHot; gl_PointSize = (5. + 4.*uHot) * uPx * (10. / -mv.z); }`,
    fragmentShader: DOT_FRAG, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
  });
  root.add(new THREE.Points(fg, flowMat));
  let curve = null, line = null;
  const layout = (aspect) => {
    const vertical = aspect < 0.95;
    nodes.forEach((n, i) => {
      const u = i / 4 - 0.5;
      if (vertical) n.grp.position.set(Math.sin(i * 1.3) * 0.9, -u * 8.2, Math.cos(i * 1.1) * 0.6);
      else n.grp.position.set(u * 9.2, Math.sin(i * 1.4) * 0.7, -Math.abs(u) * 2.2);
    });
    const tan = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
    const dist = vertical ? Math.max(5.3 / tan, 1.9 / (tan * aspect)) : Math.max(4 / tan, 5.7 / (tan * aspect));
    camera.position.set(0, vertical ? 0 : 0.6, dist);
    camera.lookAt(0, 0, -0.6);
    curve = new THREE.CatmullRomCurve3(nodes.map((n) => n.grp.position.clone()));
    const pts = curve.getPoints(200);
    if (line) { root.remove(line); line.geometry.dispose(); line.material.dispose(); }
    line = new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.14 }));
    root.add(line);
  };
  layout(1.8);
  let active = opts?.active ?? 0, running = !!opts?.running, hover = -1, last = 0, flowT = 0;
  const ctl = controls(THREE, canvas, camera, {
    targets: () => nodes.map((n) => n.hitbox),
    onHover: (o) => { hover = o ? o.userData.i : -1; emit({ type: "hover", i: hover }); },
    onPick: (o) => { if (o) emit({ type: "pick", i: o.userData.i }); },
  });
  const tmp = new THREE.Vector3();
  return {
    scene, camera, interactive: true,
    resize: layout,
    set(o) { if (o) { active = o.active ?? active; running = !!o.running; } },
    update(t, m) {
      const dt = Math.min(0.05, t - last); last = t;
      flowT += dt * (running ? 0.32 : 0.07);
      flowMat.uniforms.uHot.value += ((running ? 1 : 0) - flowMat.uniforms.uHot.value) * 0.08;
      for (let k = 0; k < P; k++) {
        const u = (seeds[k] + flowT) % 1;
        curve.getPointAt(u, tmp); flow.set([tmp.x + Math.sin(k * 7.1 + t) * 0.05, tmp.y + Math.cos(k * 3.3 + t) * 0.05, tmp.z], k * 3);
      }
      fg.attributes.position.needsUpdate = true;
      nodes.forEach((n, i) => {
        const on = i === active, hov = i === hover;
        n.s += ((on ? 1.45 : hov ? 1.2 : 1) - n.s) * 0.1;
        n.grp.scale.setScalar(n.s);
        n.grp.rotation.x += dt * (on ? 1.1 : 0.25); n.grp.rotation.y += dt * (on ? 1.5 : 0.35);
        n.edges.material.color.lerp(on ? lime : hov ? white : white, 0.12);
        n.edges.material.opacity += ((on ? 1 : hov ? 0.85 : 0.45) - n.edges.material.opacity) * 0.1;
        n.fill.material.color.lerp(on ? lime : vio, 0.1);
        n.fill.material.opacity += ((on ? 0.18 : 0.07) - n.fill.material.opacity) * 0.1;
        n.halo.material.opacity += ((on ? 0.13 + 0.05 * Math.sin(t * 4) : 0) - n.halo.material.opacity) * 0.1;
      });
      ctl.step(dt, 0);
      ctl.st.ry *= 0.97; /* drift back to the front view */
      root.rotation.set(ctl.st.rx * 0.5 - m.y * 0.08, ctl.st.ry + m.x * 0.12, 0);
    },
    dispose() { ctl.dispose(); },
  };
}

/* ---------- 6. Skill sphere (stack): every skill on a sphere; drag it, click a skill to open its group ---------- */
function makeSkills(THREE, { small, canvas, emit, opts, el }) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
  camera.position.set(0, 0, 9.5);
  const root = new THREE.Group(); scene.add(root);
  const items = opts?.items || [];
  const font = getComputedStyle(el).fontFamily || "sans-serif";
  const R = 3.1, sprites = [];
  items.forEach(([label, group], i) => {
    const c = document.createElement("canvas"), ctx = c.getContext("2d");
    const fs = 54; ctx.font = `500 ${fs}px ${font}`;
    const w = Math.ceil(ctx.measureText(label).width) + 40; c.width = w; c.height = fs + 30;
    ctx.font = `500 ${fs}px ${font}`; ctx.fillStyle = "#fff"; ctx.textBaseline = "middle"; ctx.fillText(label, 20, c.height / 2 + 2);
    const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 4;
    const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false }));
    const h = small ? 0.4 : 0.36; sp.scale.set((h * w) / c.height, h, 1); sp.userData = { group, base: sp.scale.clone(), k: 1 };
    const y = 1 - (i / Math.max(1, items.length - 1)) * 2, rad = Math.sqrt(1 - y * y), th = i * 2.399963;
    sp.position.set(Math.cos(th) * rad * R, y * R * 0.92, Math.sin(th) * rad * R);
    root.add(sp); sprites.push(sp);
  });
  /* faint wire globe behind the labels */
  const globe = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(R * 0.82, 2)),
    new THREE.LineBasicMaterial({ color: VIO, transparent: true, opacity: 0.12, depthWrite: false }));
  root.add(globe);
  let tab = opts?.tab, hover = null, last = 0;
  const lime = new THREE.Color(LIME), dim = new THREE.Color(0x9a9aa6), white = new THREE.Color(0xffffff);
  const ctl = controls(THREE, canvas, camera, {
    targets: () => sprites,
    onHover: (o) => { hover = o; },
    onPick: (o) => { if (o) emit({ type: "pick", group: o.userData.group }); },
  });
  const wp = new THREE.Vector3();
  return {
    scene, camera, interactive: true,
    set(o) { if (o?.tab) tab = o.tab; },
    resize(aspect) {
      const tan = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
      camera.position.z = Math.max((R + 0.3) / tan, (R + (small ? 1.9 : 1.0)) / (tan * aspect));
    },
    update(t) {
      const dt = Math.min(0.05, t - last); last = t;
      ctl.step(dt, hover ? 0 : 0.22);
      root.rotation.set(ctl.st.rx + 0.15, ctl.st.ry, 0);
      globe.rotation.y = -t * 0.05;
      sprites.forEach((sp) => {
        const on = sp.userData.group === tab, hov = sp === hover;
        sp.getWorldPosition(wp);
        const front = THREE.MathUtils.clamp((wp.z + R) / (2 * R), 0, 1);
        sp.material.color.lerp(hov ? white : on ? lime : dim, 0.15);
        const target = (on ? 0.4 : 0.12) + front * (on ? 0.6 : 0.5);
        sp.material.opacity += ((hov ? 1 : target) - sp.material.opacity) * 0.15;
        sp.userData.k += ((hov ? 1.35 : on ? 1.12 : 1) - sp.userData.k) * 0.15;
        sp.scale.copy(sp.userData.base).multiplyScalar(sp.userData.k);
      });
    },
    dispose() { ctl.dispose(); sprites.forEach((s) => s.material.map.dispose()); },
  };
}

const MAKERS = { core: makeCore, graph: makeGraph, wave: makeWave, morph: makeMorph, run: makeRun, skills: makeSkills };

export default function Scene3D({ kind, className = "", opts, onEvent, label }) {
  const box = useRef(null), api = useRef(null), optsRef = useRef(opts), evRef = useRef(onEvent);
  optsRef.current = opts; evRef.current = onEvent;
  const optKey = JSON.stringify(opts ?? null);
  useEffect(() => { api.current?.set?.(optsRef.current); }, [optKey]);

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    let disposed = false, cleanup = () => {};

    const start = async () => {
      const THREE = await import("three");
      if (disposed) return;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const small = window.innerWidth < 760;
      const dpr = Math.min(window.devicePixelRatio || 1, small ? 1.5 : 1.75);
      let renderer;
      try {
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
      } catch { return; } /* no WebGL: the section simply has no 3D */
      renderer.setPixelRatio(dpr);
      renderer.setClearColor(0x000000, 0);
      el.appendChild(renderer.domElement);

      const emit = (e) => evRef.current?.(e);
      const s = MAKERS[kind](THREE, { small, dpr, reduce, el, canvas: renderer.domElement, emit, opts: optsRef.current });
      api.current = s;
      const live = !reduce || s.interactive; /* interactive scenes keep rendering so clicks still answer */
      const mouse = { x: 0, y: 0 }, target = { x: 0, y: 0 };

      const resize = () => {
        const w = el.clientWidth, h = el.clientHeight;
        if (!w || !h) return;
        renderer.setSize(w, h, false);
        s.camera.aspect = w / h; s.camera.updateProjectionMatrix();
        s.resize?.(w / h);
      };
      resize();
      const ro = new ResizeObserver(resize); ro.observe(el);

      const onMove = (e) => {
        const b = el.getBoundingClientRect();
        target.x = Math.max(-1, Math.min(1, ((e.clientX - b.left) / b.width) * 2 - 1));
        target.y = Math.max(-1, Math.min(1, ((e.clientY - b.top) / b.height) * 2 - 1));
      };
      window.addEventListener("pointermove", onMove, { passive: true });

      let raf = 0, visible = false;
      const t0 = performance.now();
      const frame = () => {
        raf = 0;
        if (!visible) return;
        mouse.x += (target.x - mouse.x) * 0.05; mouse.y += (target.y - mouse.y) * 0.05;
        s.update((performance.now() - t0) / 1000, reduce ? { x: 0, y: 0 } : mouse);
        renderer.render(s.scene, s.camera);
        raf = requestAnimationFrame(frame);
      };
      const io = new IntersectionObserver(([e]) => {
        visible = e.isIntersecting;
        if (!live) { if (visible) { s.update(2.5, mouse); renderer.render(s.scene, s.camera); } return; }
        if (visible && !raf) raf = requestAnimationFrame(frame);
      });
      io.observe(el);
      requestAnimationFrame(() => el.classList.add("on"));

      cleanup = () => {
        cancelAnimationFrame(raf); io.disconnect(); ro.disconnect();
        window.removeEventListener("pointermove", onMove);
        s.dispose?.();
        s.scene.traverse((o) => { o.geometry?.dispose(); o.material?.dispose(); });
        renderer.dispose(); renderer.domElement.remove();
        api.current = null;
      };
    };

    /* only load three.js once the section is close */
    const near = new IntersectionObserver(([e]) => { if (e.isIntersecting) { near.disconnect(); start(); } }, { rootMargin: "400px 0px" });
    near.observe(el);
    return () => { disposed = true; near.disconnect(); cleanup(); };
  }, [kind]);

  return <div ref={box} className={`s3d s3d-${kind} ${className}`} aria-hidden={label ? undefined : "true"} role={label ? "img" : undefined} aria-label={label} />;
}
