"use client";

/* Home page — "v2 Daily brief" design (paper, ink, lime). Styles: app/(components)/imtiazz/imtiazz.css
   Content: app/(components)/imtiazz/data.js. The previous home page is kept in app/_legacy/OldHomePage.jsx. */

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import localFont from "next/font/local";
import "./(components)/imtiazz/imtiazz.css";
import {
  LINKS, NAV, HERO, MARQUEE, SERVICES, SKILLS, EXPERIENCE, FEATURED, NDA, WINS, SCORES, ECA, SOCIALS, JOURNEY,
} from "./(components)/imtiazz/data";
import VIDEOS from "@/data/videos.json";

/* Same font files as the social-posts poster kit */
const grotesk = localFont({ src: "./(components)/imtiazz/fonts/SpaceGrotesk.ttf", weight: "300 700", variable: "--font-grotesk", display: "swap" });
const iserif = localFont({ src: "./(components)/imtiazz/fonts/InstrumentSerif-Italic.ttf", weight: "400", style: "italic", variable: "--font-iserif", display: "swap" });
const jbmono = localFont({ src: "./(components)/imtiazz/fonts/JetBrainsMono.ttf", weight: "100 800", variable: "--font-jbmono", display: "swap" });

/* ---------- icons (Lucide paths, drawn with currentColor) ---------- */
const PATHS = {
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
const Icon = ({ name, className = "ic" }) => <svg className={className} viewBox="0 0 24 24" aria-hidden="true">{PATHS[name]}</svg>;
const GithubMark = () => (
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
const Brand = ({ name, className = "bic" }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d={BRAND[name]} /></svg>
);
function SocialRow({ className = "" }) {
  return (
    <div className={`socials ${className}`}>
      {SOCIALS.map((s) => (
        <a key={s.key} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={`${s.name}: ${s.handle}`} title={s.name}><Brand name={s.key} /></a>
      ))}
    </div>
  );
}

/* ---------- small hooks ---------- */
function useReducedMotion() {
  const [r, setR] = useState(false);
  useEffect(() => { setR(window.matchMedia("(prefers-reduced-motion: reduce)").matches); }, []);
  return r;
}

/* Counts up once when scrolled into view. Renders the final number on the server and without JS. */
function Count({ to }) {
  const ref = useRef(null);
  const [n, setN] = useState(to);
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    let raf;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const step = (t) => { const p = Math.min(1, (t - t0) / 1100); setN(Math.round(to * (1 - Math.pow(1 - p, 3)))); if (p < 1) raf = requestAnimationFrame(step); };
      setN(0); raf = requestAnimationFrame(step);
    }, { threshold: 0.6 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [to]);
  return <span ref={ref}>{n}</span>;
}

/* Slides a block up as it enters the viewport. Content stays readable if JS never runs. */
function Reveal({ as: Tag = "div", className = "", children, ...rest }) {
  const ref = useRef(null);
  const [pre, setPre] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    if (el.getBoundingClientRect().top <= window.innerHeight) return;
    setPre(true);
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setPre(false); io.disconnect(); } }, { rootMargin: "0px 0px -8% 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <Tag ref={ref} className={`rv ${pre ? "pre" : ""} ${className}`} {...rest}>{children}</Tag>;
}

function SecHead({ kicker, note, title, em, action }) {
  return (
    <Reveal className="sec-head">
      <div>
        <div className="kicker mono"><b>{kicker}</b><span>// {note}</span></div>
        <h2>{title} <i>{em}</i></h2>
      </div>
      {action}
    </Reveal>
  );
}

/* ---------- sections ---------- */
function Header({ active, onTheme }) {
  const prog = useRef(null);
  useEffect(() => {
    const on = () => { const h = document.documentElement.scrollHeight - innerHeight; if (prog.current) prog.current.style.transform = `scaleX(${h > 0 ? scrollY / h : 0})`; };
    addEventListener("scroll", on, { passive: true }); on();
    return () => removeEventListener("scroll", on);
  }, []);
  return (
    <header className="top mono">
      <a className="brand" href="#summary"><i className="dot" aria-hidden="true" />IMTIAZZ / PORTFOLIO</a>
      <nav className="nav" aria-label="Sections">
        {NAV.map((n) => <a key={n.id} href={`#${n.id}`} className={active === n.id ? "on" : ""}>{n.label}</a>)}
      </nav>
      <div className="tools"><button className="theme mono" type="button" onClick={onTheme} aria-label="Toggle dark mode">Dark / Light</button></div>
      <i className="progress" ref={prog} aria-hidden="true" />
    </header>
  );
}

function HeroDiagram() {
  const nodes = [[20, 40, "RAG PIPELINES"], [340, 40, "MULTI-AGENT"], [20, 536, "LLM SAAS"], [340, 536, "SCALABLE APIS"]];
  const routes = ["M120 104 C 120 170, 210 160, 222 226", "M440 104 C 440 170, 350 160, 338 226", "M120 536 C 120 470, 210 480, 222 414", "M440 536 C 440 470, 350 480, 338 414"];
  return (
    <figure className="fig">
      <svg className="art" viewBox="0 0 560 640" role="img" aria-label="Diagram: RAG pipelines, multi-agent workflows, LLM SaaS and scalable APIs connect into one AI system">
        <g className="draw">
          {routes.map((d, i) => <path key={i} id={`zr${i}`} className="s" d={d} />)}
          <path className="s" d="M168 320 H70" /><circle className="end" cx="60" cy="320" r="10" />
          <path className="s" d="M392 320 H490" /><circle className="end" cx="500" cy="320" r="10" />
          <rect className="f" x="168" y="220" width="224" height="200" rx="44" />
        </g>
        {nodes.map(([x, y, label]) => (
          <g key={label} className="node"><rect className="f2" x={x} y={y} width="200" height="64" rx="32" /><text x={x + 100} y={y + 39}>{label}</text></g>
        ))}
        <rect className="dash marching" x="194" y="246" width="172" height="148" rx="28" />
        <rect className="lime" x="214" y="282" width="132" height="78" rx="18" />
        <rect className="ink eye" x="246" y="302" width="16" height="36" rx="8" />
        <rect className="ink eye" x="298" y="302" width="16" height="36" rx="8" />
        <circle className="ink" cx="206" cy="398" r="7" />
        <g className="packets">
          {routes.map((_, i) => (
            <circle key={i} className="packet" r="8">
              <animateMotion dur="2.6s" begin={`-${(i * 0.65).toFixed(2)}s`} repeatCount="indefinite" calcMode="spline" keyPoints="0;1" keyTimes="0;1" keySplines=".6 0 .3 1">
                <mpath href={`#zr${i}`} />
              </animateMotion>
            </circle>
          ))}
        </g>
      </svg>
      <figcaption className="mono"><span>FIG. 01</span><span>What I build</span></figcaption>
    </figure>
  );
}

function Hero() {
  return (
    <section className="hero" id="summary">
      <div className="left">
        <div className="kicker mono"><b>AI ENGINEER</b><span>// FULL-STACK · DHAKA, BD</span></div>
        <h1>I build AI<br />that <i>ships.</i></h1>
        <p className="name">Imtiaz Nayeem Shawon <span>· AI Engineer &amp; Full-Stack Developer</span></p>
        <p className="sub">{HERO.sub}</p>
        <div className="stats" aria-label="At a glance">
          {HERO.stats.map((s) => (
            <div key={s.label}>
              <b className={s.open ? "open" : ""}>{s.open && <i aria-hidden="true" />}{s.text ?? <span><Count to={s.value} />{s.suffix}</span>}</b>
              <span className="mono">{s.label}</span>
            </div>
          ))}
        </div>
        <div className="tags">{HERO.tags.map((t) => <span key={t} className="pill">{t}</span>)}</div>
        <div className="ctas">
          <a className="btn primary" href={LINKS.call} target="_blank" rel="noopener noreferrer">Book a call →</a>
          <a className="btn ghost" href="#projects">See projects</a>
        </div>
      </div>
      <div className="right"><HeroDiagram /></div>
    </section>
  );
}

function Marquee() {
  const row = (hidden) => MARQUEE.map(([t, serif], i) => <span key={`${hidden}${i}`} aria-hidden={hidden || undefined}>{serif ? <i>{t}</i> : t}</span>);
  return <div className="marquee" aria-label="Tools I use"><div className="track">{row(false)}{row(true)}</div></div>;
}

function Services() {
  return (
    <section className="sec" id="services">
      <SecHead kicker="SERVICES" note="HIRE ME FOR" title="How I can" em="help" />
      <Reveal className="svc">
        {SERVICES.map((s) => (
          <a key={s.em} href={LINKS.call} target="_blank" rel="noopener noreferrer">
            <span className="sic"><Icon name={s.icon} /></span>
            <h3>{s.title} <i>{s.em}</i></h3>
            <p>{s.desc}</p>
            <span className="go mono">Discuss <Icon name="arrowR" /></span>
          </a>
        ))}
      </Reveal>
    </section>
  );
}

function Skills() {
  const keys = Object.keys(SKILLS);
  const [tab, setTab] = useState("ai");
  const tabRefs = useRef({});
  const onKey = (e, i) => {
    const d = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!d) return;
    const k = keys[(i + d + keys.length) % keys.length];
    setTab(k); tabRefs.current[k]?.focus();
  };
  return (
    <section className="sec" id="skills">
      <SecHead kicker="SKILLS" note="4 DOMAINS" title="The" em="stack" />
      <Reveal>
        <div className="tabs" role="tablist" aria-label="Skill domains">
          {keys.map((k, i) => (
            <button key={k} ref={(el) => (tabRefs.current[k] = el)} id={`tab-${k}`} className="tab" role="tab" type="button"
              aria-selected={tab === k} tabIndex={tab === k ? 0 : -1} onClick={() => setTab(k)} onKeyDown={(e) => onKey(e, i)}>
              {SKILLS[k].label}<span>{SKILLS[k].items.length}</span>
            </button>
          ))}
        </div>
        <div className="panel" role="tabpanel" aria-labelledby={`tab-${tab}`} key={tab}>
          {SKILLS[tab].items.map((t, i) => <span key={t} className="chip" style={{ animationDelay: `${i * 0.04}s` }}>{t}</span>)}
        </div>
      </Reveal>
    </section>
  );
}

function highlight(text, hl) {
  if (!hl || !text.includes(hl)) return text;
  const [a, b] = text.split(hl);
  return <>{a}<b>{hl}</b>{b}</>;
}

function Experience() {
  const [open, setOpen] = useState(0);
  return (
    <section className="sec" id="experience">
      <SecHead kicker="EXPERIENCE" note="2021 → NOW" title="Where I've" em="worked" />
      <Reveal className="xp">
        {EXPERIENCE.map((x, i) => {
          const isOpen = open === i;
          return (
            <div key={x.role + x.date} className="xrow" data-open={isOpen}>
              <button type="button" className="summary" aria-expanded={isOpen} aria-controls={`xp-${i}`} onClick={() => setOpen(isOpen ? -1 : i)}>
                <span className="when mono">{x.date}{x.ongoing && <span className="pill lime sm">Ongoing</span>}</span>
                <span className="role">{x.role}</span>
                <span className="org">{x.org}</span>
                <span className="tog"><Icon name="plus" /></span>
              </button>
              {isOpen && <div className="desc" id={`xp-${i}`}><p>{highlight(x.desc, x.hl)}</p></div>}
            </div>
          );
        })}
      </Reveal>
    </section>
  );
}

function ProjectArt({ kind }) {
  if (kind === "car") return (
    <svg className="art" viewBox="0 0 420 220" role="img" aria-label="Line drawing: a car connected to a dealership dashboard">
      <path className="f" d="M30 150 V120 L70 78 H190 L232 120 V150 Z" />
      <path className="dash" d="M84 92 H176 L204 120 H62 Z" />
      <circle className="f" cx="80" cy="154" r="22" /><circle className="f" cx="184" cy="154" r="22" />
      <circle className="ink" cx="80" cy="154" r="6" /><circle className="ink" cx="184" cy="154" r="6" />
      <path className="s" d="M232 120 H262" />
      <rect className="f2" x="262" y="34" width="134" height="150" rx="14" />
      <path className="s" d="M262 64 H396" style={{ strokeWidth: 5 }} />
      <rect className="lime" x="282" y="84" width="40" height="78" rx="8" style={{ strokeWidth: 5 }} />
      <rect className="f2" x="334" y="110" width="40" height="52" rx="8" />
      <circle className="end" cx="40" cy="200" r="9" /><path className="s" d="M49 200 H380" /><circle className="end" cx="390" cy="200" r="9" />
    </svg>
  );
  return (
    <svg className="art" viewBox="0 0 420 220" role="img" aria-label="Line drawing: a content agent writing posts">
      <rect className="f" x="20" y="24" width="150" height="150" rx="34" />
      <rect className="dash" x="40" y="44" width="110" height="110" rx="22" />
      <rect className="lime" x="56" y="72" width="78" height="52" rx="14" />
      <rect className="ink eye" x="76" y="86" width="11" height="24" rx="5" /><rect className="ink eye" x="103" y="86" width="11" height="24" rx="5" />
      <path className="s" d="M170 70 H230" /><path className="s" d="M170 100 H230" /><path className="s" d="M170 130 H230" />
      <rect className="f2" x="236" y="40" width="160" height="56" rx="12" /><path className="s" d="M256 60 H350" style={{ strokeWidth: 6 }} /><path className="dash" d="M256 78 H376" />
      <rect className="f2" x="236" y="104" width="160" height="56" rx="12" /><path className="s" d="M256 124 H330" style={{ strokeWidth: 6 }} /><path className="dash" d="M256 142 H376" />
      <circle className="end" cx="40" cy="200" r="9" /><path className="s" d="M49 200 H380" /><circle className="end" cx="390" cy="200" r="9" />
    </svg>
  );
}

function Projects() {
  return (
    <section className="sec" id="projects">
      <SecHead kicker="PROJECTS" note={`${FEATURED.length} LIVE · ${NDA.length} NDA`} title="Things I've" em="shipped"
        action={<Link className="visit" href="/projects">All projects <Icon name="arrowUR" /></Link>} />
      <Reveal className="feat">
        {FEATURED.map((p) => (
          <article key={p.host} className="proj">
            <figure className="fig shot">
              <ProjectArt kind={p.art} />
              <figcaption className="mono"><span>{p.fig}</span><span>{p.figLabel}</span></figcaption>
            </figure>
            <div className="body">
              <h3>{p.name} <i>{p.em}</i></h3>
              <p>{p.cat}</p>
              <div className="chips">{p.tags.map((t) => <span key={t} className="pill sm">{t}</span>)}</div>
              <div className="row"><span className="pill ink sm">Live</span>
                <a className="visit" href={p.url} target="_blank" rel="noopener noreferrer">{p.host} <Icon name="arrowUR" /></a></div>
            </div>
          </article>
        ))}
      </Reveal>
      <Reveal className="nda-head mono">Client work <span>Under NDA</span></Reveal>
      <Reveal className="nda">
        {NDA.map((n) => <div key={n}><b>{n}</b><span className="mono"><Icon name="lock" />NDA</span></div>)}
      </Reveal>
    </section>
  );
}

function Content() {
  return (
    <section className="sec" id="content">
      <SecHead kicker="CONTENT" note="AI MADE SIMPLE" title="Building in" em="public" />
      <Reveal className="journey-intro">
        <p>I build AI by day and explain it for everyone else. Short, clear, no jargon.</p>
      </Reveal>
      <Reveal as="ol" className="journey">
        {JOURNEY.map((j, i) => (
          <li key={j.title + j.em} className={j.next ? "next" : ""}>
            <span className="jdot" aria-hidden="true" />
            <span className="jwhen mono">{j.when}</span>
            <h3>{j.title} <i>{j.em}</i></h3>
            <p>{j.desc}</p>
          </li>
        ))}
      </Reveal>
      <Reveal className="social-cards">
        {SOCIALS.map((s) => (
          <a key={s.key} className="scard" href={s.url} target="_blank" rel="noopener noreferrer">
            <span className="sbadge"><Brand name={s.key} /></span>
            <span className="sname">{s.name}</span>
            <span className="shandle mono">{s.handle}</span>
            <span className="swhat">{s.what}</span>
            <span className="sgo mono">Follow <Icon name="arrowUR" /></span>
          </a>
        ))}
      </Reveal>
    </section>
  );
}

/* ---------- videos (from data/videos.json) ---------- */
function ytId(url = "") {
  const m = url.match(/(?:shorts\/|youtu\.be\/|embed\/|[?&]v=)([\w-]{11})/);
  return m ? m[1] : null;
}
const toVideos = (list = []) => list.map((v) => ({ ...v, id: ytId(v.url) })).filter((v) => v.id);

/* Shows the thumbnail first and only loads the YouTube player when clicked (keeps the page fast). */
function YtCard({ v, label, vertical }) {
  const [play, setPlay] = useState(false);
  return (
    <article className={`yt ${vertical ? "vert" : "wide"}`}>
      <div className="frame">
        {play ? (
          <iframe src={`https://www.youtube-nocookie.com/embed/${v.id}?autoplay=1&playsinline=1&rel=0`} title={v.title || label}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen />
        ) : (
          <button type="button" className="thumb" onClick={() => setPlay(true)} aria-label={`Play: ${v.title || label}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`} alt="" loading="lazy" />
            <span className="play" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg></span>
          </button>
        )}
      </div>
      <div className="rmeta"><span className="mono">{label}{v.date ? ` · ${v.date}` : ""}</span>{v.title && <b>{v.title}</b>}</div>
    </article>
  );
}

function Watch() {
  const shorts = toVideos(VIDEOS.shorts);
  const long = toVideos(VIDEOS.long);
  const yt = SOCIALS.find((s) => s.key === "youtube")?.url;
  const rail = useRef(null);
  const scroll = (dir) => { const el = rail.current; if (el) el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" }); };
  return (
    <section className="sec" id="watch">
      <SecHead kicker="WATCH" note="AI MADE SIMPLE" title="Reels &" em="videos"
        action={<a className="visit" href={yt} target="_blank" rel="noopener noreferrer">YouTube channel <Icon name="arrowUR" /></a>} />

      <Reveal className="vhead">
        <h3 className="mono">Shorts <span>{shorts.length}</span></h3>
        <div className="vnav">
          <button type="button" onClick={() => scroll(-1)} aria-label="Previous shorts"><svg className="ic" viewBox="0 0 24 24"><path d="m15 18-6-6 6-6" /></svg></button>
          <button type="button" onClick={() => scroll(1)} aria-label="Next shorts"><svg className="ic" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6" /></svg></button>
        </div>
      </Reveal>
      <div className="rail" ref={rail}>
        {shorts.map((v, i) => <YtCard key={v.id} v={v} vertical label={`Short ${String(shorts.length - i).padStart(2, "0")}`} />)}
      </div>

      <Reveal className="vhead vhead-long">
        <h3 className="mono">Long videos <span>{long.length}</span></h3>
      </Reveal>
      {long.length ? (
        <Reveal className="longs">
          {long.map((v, i) => <YtCard key={v.id} v={v} label={`Video ${String(long.length - i).padStart(2, "0")}`} />)}
        </Reveal>
      ) : (
        <Reveal className="vempty">
          <div><b>First long video is <i>on the way</i></b><p>Deeper walkthroughs of how real AI systems are built.</p></div>
          <a className="btn ghost" href={yt} target="_blank" rel="noopener noreferrer">Subscribe on YouTube</a>
        </Reveal>
      )}
    </section>
  );
}

/* ---------- blog (Daily brief posts from GitHub via /api/brief) ---------- */
/* Poster copy can contain <br>, <i>, <em>. Render it as text with italic serif accents, nothing else. */
function RichText({ html = "" }) {
  const clean = html.replace(/<br\s*\/?>/gi, " ").replace(/<(?!\/?(i|em)>)[^>]+>/gi, "");
  const parts = clean.split(/<(?:i|em)>(.*?)<\/(?:i|em)>/gi);
  return <>{parts.map((t, k) => (k % 2 ? <i key={k}>{t}</i> : t))}</>;
}

function PostModal({ post, onClose }) {
  const closeRef = useRef(null);
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    addEventListener("keydown", onKey);
    closeRef.current?.focus();
    const prev = document.body.style.overflow; document.body.style.overflow = "hidden";
    return () => { removeEventListener("keydown", onKey); document.body.style.overflow = prev; };
  }, [onClose]);
  const li = SOCIALS.find((s) => s.key === "linkedin")?.url;
  return (
    <div className="pmodal" role="dialog" aria-modal="true" aria-label="Post" onClick={onClose}>
      <div className="pbox" onClick={(e) => e.stopPropagation()}>
        <button ref={closeRef} type="button" className="pclose" onClick={onClose} aria-label="Close"><Icon name="plus" /></button>
        {post.image && (
          <div className="pimg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={post.image} alt={post.headline.replace(/<[^>]+>/g, " ")} />
          </div>
        )}
        <div className="ptext">
          <span className="pmeta mono"><b>{post.kicker}</b>{post.date}</span>
          <h3><RichText html={post.headline} /></h3>
          {post.highlight && <span className="pfoot">{post.old && <s>{post.old}</s>}<em>{post.highlight}</em></span>}
          {post.subline && <p className="psub"><RichText html={post.subline} /></p>}
          {post.topic && <p className="ptopic">{post.topic}</p>}
          <div className="pacts">
            {post.source && <a className="visit" href={post.source} target="_blank" rel="noopener noreferrer">Source <Icon name="arrowUR" /></a>}
            {li && <a className="btn primary" href={li} target="_blank" rel="noopener noreferrer">Follow on LinkedIn</a>}
          </div>
        </div>
      </div>
    </div>
  );
}

function Blog() {
  const [state, setState] = useState({ loading: true, posts: [] });
  const [all, setAll] = useState(false);
  const [open, setOpen] = useState(null);
  const li = SOCIALS.find((s) => s.key === "linkedin")?.url;
  useEffect(() => {
    let alive = true;
    fetch("/api/brief").then((r) => r.json()).then((d) => { if (alive) setState({ loading: false, posts: d.posts || [] }); })
      .catch(() => { if (alive) setState({ loading: false, posts: [] }); });
    return () => { alive = false; };
  }, []);
  const posts = all ? state.posts : state.posts.slice(0, 6);
  return (
    <section className="sec" id="blog">
      <SecHead kicker="BLOG" note="DAILY BRIEF" title="Notes from the" em="build"
        action={li && <a className="visit" href={li} target="_blank" rel="noopener noreferrer">Follow on LinkedIn <Icon name="arrowUR" /></a>} />
      {state.loading ? (
        <div className="posts" aria-busy="true">{[0, 1, 2].map((k) => <div key={k} className="post skel"><span /><span /><span /></div>)}</div>
      ) : state.posts.length === 0 ? (
        <div className="vempty"><div><b>Posts are <i>on the way</i></b><p>New daily briefs land on LinkedIn every morning.</p></div>
          {li && <a className="btn ghost" href={li} target="_blank" rel="noopener noreferrer">Read on LinkedIn</a>}</div>
      ) : (
        <>
          <Reveal className="posts">
            {posts.map((p) => (
              <button key={p.slug} type="button" className="post" onClick={() => setOpen(p)}>
                {p.image && (
                  <span className="pthumb">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.image} alt="" loading="lazy" />
                  </span>
                )}
                <span className="pmeta mono"><b>{p.kicker}</b>{p.date}</span>
                <h3><RichText html={p.headline} /></h3>
                <span className="pfoot">{p.highlight ? <em>{p.highlight}</em> : <span />}<Icon name="arrowUR" /></span>
              </button>
            ))}
          </Reveal>
          {state.posts.length > 6 && !all && (
            <div className="pmore"><button type="button" className="btn ghost" onClick={() => setAll(true)}>Show more posts</button></div>
          )}
        </>
      )}
      {open && <PostModal post={open} onClose={() => setOpen(null)} />}
    </section>
  );
}

function Wins() {
  return (
    <section className="sec" id="achievements">
      <SecHead kicker="ACHIEVEMENTS" note="OLYMPIADS · ECA" title="Wins &" em="ranks"
        action={<Link className="visit" href="/eca">All ECA <Icon name="arrowUR" /></Link>} />
      <Reveal className="two">
        <div>
          <ul className="wins">
            {WINS.map((w) => (
              <li key={w.title}><span className="yr mono">{w.year}</span><span className="t">{w.title}</span><span className={`pill sm ${w.lime ? "lime" : ""}`}>{w.badge}</span></li>
            ))}
          </ul>
          <div className="scores">
            {SCORES.map((s) => <div key={s.label} className="score"><b><Count to={s.value} />+</b><span className="mono">{s.label}</span></div>)}
          </div>
        </div>
        <div className="eca" id="eca">
          <h3 className="mono">Extracurricular <span>ECA</span></h3>
          <ul>{ECA.map(([t, r]) => <li key={t}>{t}<span>{r}</span></li>)}</ul>
          <div className="edu"><span className="pill sm">Education</span><b>A Levels · Maths, Physics &amp; CS</b><p>Capstone School International</p></div>
        </div>
      </Reveal>
    </section>
  );
}

function CopyRow({ label, value }) {
  const [ok, setOk] = useState(false);
  const ref = useRef(null);
  const copy = async () => {
    try { await navigator.clipboard.writeText(value); setOk(true); setTimeout(() => setOk(false), 1600); }
    catch { const r = document.createRange(); r.selectNodeContents(ref.current); const s = getSelection(); s.removeAllRanges(); s.addRange(r); }
  };
  return (
    <div className="line">
      <span className="k mono">{label}</span><span className="v" ref={ref}>{value}</span>
      <button className={`copy ${ok ? "ok" : ""}`} type="button" onClick={copy}><Icon name="copy" /><span>{ok ? "Copied" : "Copy"}</span></button>
    </div>
  );
}

function Contact() {
  return (
    <section className="sec" id="contact">
      <Reveal className="contact">
        <div>
          <div className="kicker mono"><b>CONTACT</b><span>// OPEN TO REMOTE WORK</span></div>
          <h2>Let&apos;s build<br />something that <span className="hlb">ships.</span></h2>
          <div className="ctas" style={{ marginTop: 44 }}><a className="btn primary" href={LINKS.call} target="_blank" rel="noopener noreferrer">Book a 30-min call →</a></div>
          <SocialRow className="contact-socials" />
        </div>
        <div className="lines">
          <CopyRow label="Email" value={LINKS.email} />
          <CopyRow label="Phone" value={LINKS.phone} />
          <div className="line"><span className="k mono">GitHub</span><a className="v" href={LINKS.github} target="_blank" rel="noopener noreferrer">ImtiazNayeemShawon</a><GithubMark /></div>
        </div>
      </Reveal>
    </section>
  );
}

/* ---------- page ---------- */
export default function Page() {
  const [theme, setTheme] = useState("light"); // light by default; visitors can switch to dark
  const [active, setActive] = useState("summary");

  useEffect(() => { try { const s = localStorage.getItem("imtiazz-theme"); if (s) setTheme(s); } catch {} }, []);
  const toggleTheme = useCallback(() => {
    setTheme((cur) => {
      const next = cur === "dark" ? "light" : "dark";
      try { localStorage.setItem("imtiazz-theme", next); } catch {}
      return next;
    });
  }, []);

  /* nav highlight */
  useEffect(() => {
    const on = () => {
      const y = scrollY + 160; let c = "";
      NAV.forEach(({ id }) => { const el = document.getElementById(id); if (el && el.getBoundingClientRect().top + scrollY <= y) c = id; });
      setActive(c);
    };
    addEventListener("scroll", on, { passive: true }); on();
    return () => removeEventListener("scroll", on);
  }, []);

  /* keyboard: 1–9 jump to a section, T toggles theme */
  useEffect(() => {
    const onKey = (e) => {
      const tag = e.target?.tagName?.toLowerCase();
      if (e.ctrlKey || e.metaKey || e.altKey || tag === "input" || tag === "textarea") return;
      if (e.key >= "1" && e.key <= "9") { const n = NAV[+e.key - 1]; if (n) document.getElementById(n.id)?.scrollIntoView({ behavior: "smooth" }); }
      if (e.key === "t" || e.key === "T") toggleTheme();
    };
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  }, [toggleTheme]);

  return (
    <div className={`imz ${grotesk.variable} ${iserif.variable} ${jbmono.variable}`} data-imz={theme}>
      <div className="grain" aria-hidden="true" />
      <div className="wrap">
        <Header active={active} onTheme={toggleTheme} />
        <Hero />
        <Marquee />
        <Services />
        <Skills />
        <Experience />
        <Projects />
        <Content />
        <Watch />
        <Blog />
        <Wins />
        <Contact />
        <footer className="foot mono">
          <span className="site">{LINKS.site}</span>
          <SocialRow className="foot-socials" />
          <button className="totop mono" type="button" onClick={() => scrollTo({ top: 0, behavior: "smooth" })}>Back to top ↑</button>
        </footer>
      </div>
    </div>
  );
}
