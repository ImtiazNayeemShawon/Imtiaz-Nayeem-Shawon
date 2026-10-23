"use client";

/* Home page — "v2 Daily brief" design (paper, ink, lime). Styles: app/(components)/imtiazz/imtiazz.css
   Content: app/(components)/imtiazz/data.js. The previous home page is kept in app/_legacy/OldHomePage.jsx. */

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import localFont from "next/font/local";
import "./(components)/imtiazz/imtiazz.css";
import {
  LINKS, NAV, HERO, MARQUEE, SERVICES, SKILLS, EXPERIENCE, FEATURED, NDA, REELS, POSTS, WINS, SCORES, ECA,
} from "./(components)/imtiazz/data";

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
  monitor: <><rect width="20" height="14" x="2" y="3" rx="2" /><path d="M8 21h8" /><path d="M12 17v4" /><path d="m7 10 2 2-2 2" /><path d="M11 14h5" /></>,
};
const Icon = ({ name, className = "ic" }) => <svg className={className} viewBox="0 0 24 24" aria-hidden="true">{PATHS[name]}</svg>;
const GithubMark = () => (
  <svg className="bic" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
);

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

function Watch() {
  return (
    <section className="sec" id="watch">
      <SecHead kicker="WATCH" note="AI MADE SIMPLE" title="Reels &" em="videos"
        action={<a className="visit" href="#watch">All episodes <Icon name="arrowUR" /></a>} />
      <Reveal className="reels">
        {REELS.map((r, i) => (
          <article key={i} className={`reel ${r.src || r.embed ? "" : "soon"}`}>
            <div className="frame">
              {r.src ? <video src={r.src} poster={r.poster} controls playsInline preload="none" />
                : r.embed ? <iframe src={r.embed} title={r.title} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen style={{ width: "100%", height: "100%", border: 0 }} />
                : <div className="ph"><span className="mono">{r.slot || r.ep}</span><b>{r.long ? <>Long <i>form</i></> : <>Next <i>episode</i></>}</b><span className="mono">Embed slot</span></div>}
            </div>
            <div className="rmeta"><span className="mono">{r.ep}</span><b>{r.title}</b></div>
          </article>
        ))}
      </Reveal>
    </section>
  );
}

function Blog() {
  return (
    <section className="sec" id="blog">
      <SecHead kicker="BLOG" note="DAILY BRIEF" title="Notes from the" em="build"
        action={<a className="visit" href="#blog">All posts <Icon name="arrowUR" /></a>} />
      <Reveal className="posts">
        {POSTS.map((p) => (
          <a key={p.title} className="post" href={p.href}>
            <span className="pmeta mono"><b>{p.tag}</b>{p.date}</span>
            <h3>{p.title} <i>{p.em}</i></h3>
            <span className="pfoot"><em>{p.hl}</em><Icon name="arrowUR" /></span>
          </a>
        ))}
      </Reveal>
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
          <div className="edu"><span className="pill sm">Education</span><b>A Levels · Maths &amp; CS</b><p>Capstone School International</p></div>
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
  const [theme, setTheme] = useState(null); // null = follow the system setting
  const [active, setActive] = useState("summary");

  useEffect(() => { try { const s = localStorage.getItem("imtiazz-theme"); if (s) setTheme(s); } catch {} }, []);
  const toggleTheme = useCallback(() => {
    setTheme((cur) => {
      const now = cur || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
      const next = now === "dark" ? "light" : "dark";
      try { localStorage.setItem("imtiazz-theme", next); } catch {}
      return next;
    });
  }, []);

  /* nav highlight */
  useEffect(() => {
    const on = () => {
      const y = scrollY + 160; let c = NAV[0].id;
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
    <div className={`imz ${grotesk.variable} ${iserif.variable} ${jbmono.variable}`} data-imz={theme || undefined}>
      <div className="grain" aria-hidden="true" />
      <div className="wrap">
        <Header active={active} onTheme={toggleTheme} />
        <Hero />
        <Marquee />
        <Services />
        <Skills />
        <Experience />
        <Projects />
        <Watch />
        <Blog />
        <Wins />
        <Contact />
        <footer className="foot mono">
          <span className="site">{LINKS.site}</span>
          <button className="totop mono" type="button" onClick={() => scrollTo({ top: 0, behavior: "smooth" })}>Back to top ↑</button>
        </footer>
      </div>
    </div>
  );
}
