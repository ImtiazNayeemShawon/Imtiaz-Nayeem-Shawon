"use client";

/* Shared building blocks for the v3 "Systems" design: fonts, icons, pill nav, ⌘K palette, pixel background,
   page frame for subpages. Styles: ./v3.css. Used by app/page.js and the pages under app/(pages). */

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import localFont from "next/font/local";
import "./v3.css";
import { LINKS, NAV, SOCIALS } from "./data";

const grotesk = localFont({ src: "./fonts/SpaceGrotesk.ttf", weight: "300 700", variable: "--font-grotesk", display: "swap" });
const iserif = localFont({ src: "./fonts/InstrumentSerif-Italic.ttf", weight: "400", style: "italic", variable: "--font-iserif", display: "swap" });
const jbmono = localFont({ src: "./fonts/JetBrainsMono.ttf", weight: "100 800", variable: "--font-jbmono", display: "swap" });
export const FONT_VARS = `${grotesk.variable} ${iserif.variable} ${jbmono.variable}`;

/* ---------- icons (Lucide paths, drawn with currentColor) ---------- */
export const PATHS = {
  arrowUR: <><path d="M7 7h10v10" /><path d="M7 17 17 7" /></>,
  arrowR: <><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></>,
  plus: <><path d="M12 5v14" /><path d="M5 12h14" /></>,
  lock: <><rect width="18" height="11" x="3" y="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></>,
  copy: <><rect width="14" height="14" x="8" y="8" rx="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></>,
  bot: <><path d="M12 8V4H8" /><rect width="16" height="12" x="4" y="8" rx="2" /><path d="M2 14h2" /><path d="M20 14h2" /><path d="M15 13v2" /><path d="M9 13v2" /></>,
  search: <><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /><path d="M8 11h6" /><path d="M11 8v6" /></>,
  plug: <><path d="M12 22v-5" /><path d="M15 8V2" /><path d="M17 8a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1z" /><path d="M9 8V2" /></>,
  server: <><rect width="20" height="8" x="2" y="2" rx="2" /><rect width="20" height="8" x="2" y="14" rx="2" /><path d="M6 6h.01" /><path d="M6 18h.01" /></>,
  activity: <><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" /></>,
  monitor: <><rect width="20" height="14" x="2" y="3" rx="2" /><path d="M8 21h8" /><path d="M12 17v4" /><path d="m7 10 2 2-2 2" /><path d="M11 14h5" /></>,
};
export const Icon = ({ name, className = "ic" }) => <svg className={className} viewBox="0 0 24 24" aria-hidden="true">{PATHS[name]}</svg>;
export const GithubMark = () => (
  <svg className="bic" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
);

const BRAND = {
 "x": "M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z",
 "instagram": "M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077",
 "facebook": "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z",
 "youtube": "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
 "linkedin": "M3 1h18a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zM4.9 6.5a1.6 1.6 0 1 0 3.2 0a1.6 1.6 0 1 0-3.2 0zM5 9.5h3V19H5zM10 9.5h2.9v1.3c.5-.9 1.6-1.6 3.2-1.6 2.6 0 3.9 1.6 3.9 4.6V19h-3v-4.6c0-1.4-.5-2.3-1.7-2.3-1.3 0-2.3.9-2.3 2.6V19H10z"
};
/* Brand marks: Simple Icons paths (LinkedIn is a simple "in" mark), filled with currentColor */
export const Brand = ({ name, className = "bic" }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d={BRAND[name]} /></svg>
);

Object.assign(PATHS, {
  mail: <><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></>,
  menu: <><path d="M4 8h16" /><path d="M4 16h16" /></>,
  file: <><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M10 13H8" /><path d="M16 17H8" /></>,
  cal: <><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M16 2v4" /><path d="M8 2v4" /><path d="M3 10h18" /></>,
  hash: <><path d="M4 9h16" /><path d="M4 15h16" /><path d="M10 3 8 21" /><path d="M16 3l-2 18" /></>,
  check: <><path d="M20 6 9 17l-5-5" /></>,
});

/* ---------- small hooks ---------- */
export const reduced = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* Counts up once when scrolled into view. Renders the final number on the server and without JS. */
export function Count({ to }) {
  const ref = useRef(null);
  const [n, setN] = useState(to);
  useEffect(() => {
    const el = ref.current;
    if (!el || reduced() || !("IntersectionObserver" in window)) return;
    let raf;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const step = (t) => { const p = Math.min(1, (t - t0) / 1200); setN(Math.round(to * (1 - Math.pow(1 - p, 3)))); if (p < 1) raf = requestAnimationFrame(step); };
      setN(0); raf = requestAnimationFrame(step);
    }, { threshold: 0.6 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [to]);
  return <span ref={ref}>{n}</span>;
}

/* Fades a block up as it enters the viewport. Content stays readable if JS never runs. */
export function Reveal({ as: Tag = "div", className = "", children, ...rest }) {
  const ref = useRef(null);
  const [pre, setPre] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || reduced() || !("IntersectionObserver" in window)) return;
    if (el.getBoundingClientRect().top <= window.innerHeight) return;
    setPre(true);
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setPre(false); io.disconnect(); } }, { rootMargin: "0px 0px -8% 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <Tag ref={ref} className={`rv ${pre ? "pre" : ""} ${className}`} {...rest}>{children}</Tag>;
}

/* Cards light up under the pointer: sets --mx/--my for a radial glow in CSS. */
export const glow = (e) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
};

export function SecHead({ eyebrow, title, note, action }) {
  return (
    <Reveal className="sec-head">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        {note && <p className="sec-note">{note}</p>}
      </div>
      {action}
    </Reveal>
  );
}


/* ---------- background: flickering pixel grid (top of page) ---------- */
export function PixelField() {
  const ref = useRef(null);
  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    const CELL = 18, GAP = 3;
    let w, h, cols, rows, cells, raf, last = 0, visible = true;
    const size = () => {
      const dpr = Math.min(devicePixelRatio || 1, 2);
      w = cv.clientWidth; h = cv.clientHeight;
      cv.width = w * dpr; cv.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(w / CELL); rows = Math.ceil(h / CELL);
      cells = Float32Array.from({ length: cols * rows }, () => Math.random() * 0.06);
    };
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < cells.length; i++) {
        const a = cells[i];
        if (a < 0.012) continue;
        ctx.fillStyle = a > 0.2 ? `rgba(212,255,58,${a * 0.55})` : `rgba(255,255,255,${a})`;
        ctx.fillRect((i % cols) * CELL, Math.floor(i / cols) * CELL, CELL - GAP, CELL - GAP);
      }
    };
    const tick = (t) => {
      raf = requestAnimationFrame(tick);
      if (!visible || t - last < 90) return;
      last = t;
      for (let k = 0; k < cells.length * 0.02; k++) {
        const i = (Math.random() * cells.length) | 0;
        cells[i] = Math.random() < 0.012 ? 0.32 : Math.random() * 0.075;
      }
      for (let i = 0; i < cells.length; i++) if (cells[i] > 0.08) cells[i] *= 0.93;
      draw();
    };
    size(); draw();
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; });
    io.observe(cv);
    addEventListener("resize", size);
    if (!reduced()) raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); io.disconnect(); removeEventListener("resize", size); };
  }, []);
  return <canvas className="pixels" ref={ref} aria-hidden="true" />;
}

/* ---------- navbar: floating pill ---------- */
export function Logo() {
  return (
    <svg className="logo" viewBox="0 0 32 32" aria-hidden="true">
      <rect x="1" y="1" width="30" height="30" rx="15" />
      <path d="M11 10v12M16 10h6l-6 12h6" />
    </svg>
  );
}


/* links: [{ id, href, label }]. On the home page href is "#id"; on subpages it points back to the home page or a route. */
export function Nav({ links, active, onPalette, homeHref = "#top" }) {
  const [scrolled, setScrolled] = useState(false);
  const prog = useRef(null);
  useEffect(() => {
    const on = () => {
      setScrolled(scrollY > 24);
      const h = document.documentElement.scrollHeight - innerHeight;
      if (prog.current) prog.current.style.transform = `scaleX(${h > 0 ? scrollY / h : 0})`;
    };
    addEventListener("scroll", on, { passive: true }); on();
    return () => removeEventListener("scroll", on);
  }, []);
  return (
    <header className={`nav-wrap ${scrolled ? "scrolled" : ""}`}>
      <nav className="pill-nav" aria-label="Main">
        <Link className="nav-logo" href={homeHref} aria-label="Imtiaz Nayeem Shawon, home"><Logo /></Link>
        <div className="nav-links">
          {links.map((n) => <Link key={n.href} href={n.href} className={active === n.id ? "on" : ""}>{n.label}</Link>)}
        </div>
        <button type="button" className="nav-k" onClick={onPalette} aria-label="Open command menu"><kbd>⌘</kbd><kbd>K</kbd></button>
        <button type="button" className="nav-menu" onClick={onPalette} aria-label="Open menu"><Icon name="menu" /></button>
        <a className="nav-cta" href={`mailto:${LINKS.email}`}><Icon name="mail" />Email</a>
        <i className="nav-prog" ref={prog} aria-hidden="true" />
      </nav>
    </header>
  );
}

/* ---------- command palette (⌘K, also the mobile menu) ---------- */
export function Palette({ open, onClose }) {
  const [q, setQ] = useState("");
  const [i, setI] = useState(0);
  const [toast, setToast] = useState("");
  const input = useRef(null);
  const go = (id) => () => { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: "smooth" }); else location.href = `/#${id}`; };
  const ext = (url) => () => window.open(url, "_blank", "noopener,noreferrer");
  const items = [
    ...NAV.map((n) => ({ group: "Jump to", label: n.label, icon: "hash", run: go(n.id) })),
    { group: "Jump to", label: "Stack", icon: "hash", run: go("skills") },
    { group: "Actions", label: "Book a 30-min call", icon: "cal", run: ext(LINKS.call) },
    { group: "Actions", label: "Copy email address", icon: "copy", keep: true, run: async () => { try { await navigator.clipboard.writeText(LINKS.email); setToast("Email copied"); } catch { setToast(LINKS.email); } } },
    { group: "Pages", label: "Home", icon: "arrowR", run: () => (location.href = "/") },
    { group: "Pages", label: "All projects", icon: "arrowR", run: () => (location.href = "/projects") },
    { group: "Pages", label: "Wins & ECA", icon: "arrowR", run: () => (location.href = "/eca") },
    { group: "Pages", label: "Resume", icon: "file", run: () => (location.href = "/resume") },
    { group: "Profiles", label: "GitHub", icon: "arrowUR", run: ext(LINKS.github) },
    ...SOCIALS.map((s) => ({ group: "Profiles", label: s.name, icon: "arrowUR", run: ext(s.url) })),
  ];
  const list = items.filter((it) => it.label.toLowerCase().includes(q.trim().toLowerCase()));

  useEffect(() => {
    if (!open) return;
    setQ(""); setI(0); setToast("");
    const prev = document.body.style.overflow; document.body.style.overflow = "hidden";
    setTimeout(() => input.current?.focus(), 10);
    return () => { document.body.style.overflow = prev; };
  }, [open]);
  useEffect(() => { setI(0); }, [q]);

  if (!open) return null;
  const run = (it) => { it.run(); if (!it.keep) onClose(); };
  const onKey = (e) => {
    if (e.key === "Escape") onClose();
    else if (e.key === "ArrowDown") { e.preventDefault(); setI((v) => Math.min(v + 1, list.length - 1)); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setI((v) => Math.max(v - 1, 0)); }
    else if (e.key === "Enter" && list[i]) run(list[i]);
  };
  let lastGroup = "";
  return (
    <div className="pal-back" onClick={onClose}>
      <div className="pal" role="dialog" aria-modal="true" aria-label="Command menu" onClick={(e) => e.stopPropagation()} onKeyDown={onKey}>
        <div className="pal-in">
          <Icon name="search" />
          <input ref={input} value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search sections and actions…" aria-label="Search commands" />
          <kbd>esc</kbd>
        </div>
        <ul className="pal-list" role="listbox">
          {list.length === 0 && <li className="pal-empty">No matches. Try “call” or “work”.</li>}
          {list.map((it, k) => {
            const head = it.group !== lastGroup ? (lastGroup = it.group) : null;
            return (
              <li key={it.group + it.label}>
                {head && <span className="pal-group">{head}</span>}
                <button type="button" role="option" aria-selected={k === i} className={k === i ? "on" : ""} onMouseEnter={() => setI(k)} onClick={() => run(it)}>
                  <Icon name={it.icon} /><span>{it.label}</span><Icon name="arrowR" className="ic pal-go" />
                </button>
              </li>
            );
          })}
        </ul>
        <div className="pal-foot"><span><kbd>↑</kbd><kbd>↓</kbd> move</span><span><kbd>↵</kbd> open</span>{toast && <b>{toast}</b>}</div>
      </div>
    </div>
  );
}


export function WinBar({ host }) {
  return <div className="winbar"><i /><i /><i /><span>{host}</span></div>;
}


export function CopyRow({ label, value }) {
  const [ok, setOk] = useState(false);
  const ref = useRef(null);
  const copy = async () => {
    try { await navigator.clipboard.writeText(value); setOk(true); setTimeout(() => setOk(false), 1600); }
    catch { const r = document.createRange(); r.selectNodeContents(ref.current); const s = getSelection(); s.removeAllRanges(); s.addRange(r); }
  };
  return (
    <div className="line">
      <span className="k">{label}</span><span className="v" ref={ref}>{value}</span>
      <button className={`copy ${ok ? "ok" : ""}`} type="button" onClick={copy}><Icon name={ok ? "check" : "copy"} /><span>{ok ? "Copied" : "Copy"}</span></button>
    </div>
  );
}

export function SocialRow({ className = "" }) {
  return (
    <div className={`socials ${className}`}>
      {SOCIALS.map((s) => (
        <a key={s.key} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={`${s.name}: ${s.handle}`} title={s.name}><Brand name={s.key} /></a>
      ))}
    </div>
  );
}


/* ⌘K / Ctrl+K toggles the command menu. Returns [open, setOpen]. */
export function usePalette() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onKey = (e) => { if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); setOpen((v) => !v); } };
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  }, []);
  return [open, setOpen];
}

export function Footer() {
  return (
    <footer className="foot wrap">
      <span className="foot-l"><Logo /><span>Imtiaz Nayeem Shawon <small>· {LINKS.site}</small></span></span>
      <SocialRow className="foot-socials" />
      <button className="totop" type="button" onClick={() => scrollTo({ top: 0, behavior: "smooth" })}>Back to top ↑</button>
    </footer>
  );
}

/* Links in the nav on pages other than home. */
export const SUB_NAV = [
  { id: "home", href: "/", label: "Home" },
  { id: "projects", href: "/projects", label: "Work" },
  { id: "eca", href: "/eca", label: "Recognition" },
  { id: "resume", href: "/resume", label: "Resume" },
  { id: "contact", href: "/#contact", label: "Contact" },
];

/* Page frame for subpages: background, nav, ⌘K menu, footer and a closing call to action. */
export function Frame({ active, children, cta = true }) {
  const [pal, setPal] = usePalette();
  const close = useCallback(() => setPal(false), [setPal]);
  return (
    <div className={`imz3 sub ${FONT_VARS}`}>
      <PixelField />
      <div className="vignette" aria-hidden="true" />
      <Nav links={SUB_NAV} active={active} onPalette={() => setPal(true)} homeHref="/" />
      <main className="wrap">
        {children}
        {cta && (
          <Reveal className="sub-cta" onMouseMove={glow}>
            <div>
              <span className="eyebrow">Next step</span>
              <h2>Have an AI idea? <span className="h1-2">Let&apos;s ship it.</span></h2>
            </div>
            <div className="hero-ctas">
              <a className="pill-w" href={LINKS.call} target="_blank" rel="noopener noreferrer"><Icon name="cal" />Book a 30-min call</a>
              <a className="pill-g" href={`mailto:${LINKS.email}`}>{LINKS.email} <Icon name="arrowUR" /></a>
            </div>
          </Reveal>
        )}
      </main>
      <Footer />
      <Palette open={pal} onClose={close} />
    </div>
  );
}

/* Big page title used at the top of every subpage. */
export function PageHead({ eyebrow, title, lead, children }) {
  return (
    <header className="page-head">
      <Link href="/" className="back"><Icon name="arrowR" className="ic ic-flip" />Back home</Link>
      <span className="eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      {lead && <p className="lead">{lead}</p>}
      {children}
    </header>
  );
}
