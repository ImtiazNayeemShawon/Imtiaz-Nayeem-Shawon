"use client";

/* AI Inbox Assistant service page — same "v2 Daily brief" theme as the home page.
   Base styles: app/(components)/imtiazz/imtiazz.css · Page styles: ./inbox.css · Content: ./data.js */

import { useEffect, useRef, useState, useCallback } from "react";
import "../../(components)/imtiazz/imtiazz.css";
import "./inbox.css";
import {
  LINKS, VIDEO, NAV, HERO, FEED, CHANNELS, OUTCOMES, LEAKS, STEPS, CHAT, INCLUDED, PRICING, TIMELINE, FAQ,
} from "./data";

/* ---------- icons (Lucide paths, drawn with currentColor) ---------- */
const PATHS = {
  arrowUR: <><path d="M7 7h10v10" /><path d="M7 17 17 7" /></>,
  arrowR: <><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></>,
  arrowD: <><path d="M12 5v14" /><path d="m19 12-7 7-7-7" /></>,
  plus: <><path d="M12 5v14" /><path d="M5 12h14" /></>,
  check: <path d="M20 6 9 17l-5-5" />,
  copy: <><rect width="14" height="14" x="8" y="8" rx="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></>,
  sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></>,
  moon: <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />,
  ghost: <><path d="M9 10h.01" /><path d="M15 10h.01" /><path d="M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z" /></>,
  zap: <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />,
  message: <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />,
  bot: <><path d="M12 8V4H8" /><rect width="16" height="12" x="4" y="8" rx="2" /><path d="M2 14h2" /><path d="M20 14h2" /><path d="M15 13v2" /><path d="M9 13v2" /></>,
  plug: <><path d="M12 22v-5" /><path d="M15 8V2" /><path d="M17 8a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1z" /><path d="M9 8V2" /></>,
  activity: <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />,
  instagram: <><rect width="20" height="20" x="2" y="2" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><path d="M17.5 6.5h.01" /></>,
  facebook: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
  whatsapp: <><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /><path d="M9.5 9.5c0 2.8 2.2 5 5 5l1-1.5-2-1-1 .8a3.5 3.5 0 0 1-1.8-1.8l.8-1-1-2Z" /></>,
  form: <><rect width="8" height="4" x="8" y="2" rx="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><path d="M12 11h4" /><path d="M12 16h4" /><path d="M8 11h.01" /><path d="M8 16h.01" /></>,
  mail: <><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></>,
  calendar: <><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M16 2v4" /><path d="M8 2v4" /><path d="M3 10h18" /><path d="m9 16 2 2 4-4" /></>,
  sheet: <><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M3 9h18" /><path d="M3 15h18" /><path d="M9 3v18" /></>,
  bell: <><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></>,
  clock: <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>,
  shield: <><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" /></>,
  userCheck: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="m16 11 2 2 4-4" /></>,
};
const Icon = ({ name, className = "ic" }) => <svg className={className} viewBox="0 0 24 24" aria-hidden="true">{PATHS[name]}</svg>;

/* ---------- small helpers (same behaviour as the home page) ---------- */
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

function SecHead({ kicker, title, em }) {
  return (
    <Reveal className="sec-head">
      <div>
        <div className="kicker mono"><b>{kicker}</b></div>
        <h2>{title} <i>{em}</i></h2>
      </div>
    </Reveal>
  );
}

function ytId(url = "") {
  const m = url.match(/(?:shorts\/|youtu\.be\/|embed\/|[?&]v=)([\w-]{11})/);
  return m ? m[1] : null;
}

/* ---------- navbar ---------- */
function Header({ active, theme, onTheme }) {
  const prog = useRef(null);
  useEffect(() => {
    const on = () => { const h = document.documentElement.scrollHeight - innerHeight; if (prog.current) prog.current.style.transform = `scaleX(${h > 0 ? scrollY / h : 0})`; };
    addEventListener("scroll", on, { passive: true }); on();
    return () => removeEventListener("scroll", on);
  }, []);
  return (
    <header className="ib-nav">
      <a className="brand mono" href="#top"><i className="dot" aria-hidden="true" />IMTIAZZ</a>
      <nav className="ib-links mono" aria-label="Sections">
        {NAV.map((n) => <a key={n.id} href={`#${n.id}`} className={active === n.id ? "on" : ""}>{n.label}</a>)}
      </nav>
      <div className="ib-tools">
        <button className="ib-theme" type="button" onClick={onTheme} aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}>
          <Icon name={theme === "dark" ? "sun" : "moon"} />
        </button>
        <a className="ib-navcta mono" href={LINKS.call} target="_blank" rel="noopener noreferrer">Book a demo</a>
      </div>
      <i className="progress" ref={prog} aria-hidden="true" />
    </header>
  );
}

/* ---------- sections ---------- */
function HeroFeed() {
  return (
    <figure className="fig">
      <div className="ib-feed" role="img" aria-label="Inbox: messages from Instagram, a website form, WhatsApp and email, each answered within seconds">
        <div className="ib-feed-head mono"><span><i className="dot" aria-hidden="true" />Live inbox</span><span className="ib-hl">4 / 4 answered</span></div>
        {FEED.map((f, i) => (
          <div key={f.ch} className="ib-msg" style={{ animationDelay: `${0.5 + i * 0.35}s` }}>
            <span className="ib-msg-ic"><Icon name={f.icon} /></span>
            <span className="ib-msg-body"><b>{f.ch}</b><span>&ldquo;{f.msg}&rdquo;</span></span>
            <span className="ib-msg-st mono" style={{ animationDelay: `${0.9 + i * 0.35}s` }}><Icon name="check" />{f.t}</span>
          </div>
        ))}
      </div>
    </figure>
  );
}

function Hero() {
  return (
    <section className="hero ib-hero" id="top">
      <div className="left">
        <div className="kicker mono"><b>{HERO.kicker}</b></div>
        <h1>Every inquiry<br /><i>answered.</i></h1>
        <p className="sub">{HERO.sub}</p>
        <div className="ctas">
          <a className="btn primary" href={LINKS.call} target="_blank" rel="noopener noreferrer">Book a free demo →</a>
          <a className="btn ghost" href="#how">How it works</a>
        </div>
        <div className="ib-works" aria-label="Works with Instagram, Messenger, WhatsApp, website forms and email">
          {CHANNELS.map((c) => <span key={c.label} title={c.label}><Icon name={c.icon} /></span>)}
        </div>
      </div>
      <div className="right"><HeroFeed /></div>
    </section>
  );
}

function Video() {
  const [play, setPlay] = useState(false);
  const id = ytId(VIDEO.youtube);
  let inner;
  if (id) {
    inner = play ? (
      <iframe src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&playsinline=1&rel=0`} title={VIDEO.title}
        allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen />
    ) : (
      <button type="button" className="thumb" onClick={() => setPlay(true)} aria-label={`Play: ${VIDEO.title}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`} alt="" loading="lazy" />
        <span className="play" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg></span>
      </button>
    );
  } else if (VIDEO.mp4) {
    inner = <video src={VIDEO.mp4} poster={VIDEO.poster || undefined} controls playsInline preload="metadata" />;
  } else {
    inner = (
      <div className="ib-vph">
        <span className="play" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg></span>
        <b>Demo <i>coming soon</i></b>
      </div>
    );
  }
  return (
    <Reveal as="section" className="ib-video" id="video">
      <figure className="fig">
        <div className="ib-vframe">{inner}</div>
        <figcaption className="mono"><span>Watch</span><span>{VIDEO.title}</span></figcaption>
      </figure>
    </Reveal>
  );
}

function Marquee() {
  const row = (hidden) => CHANNELS.concat(OUTCOMES.map((o) => ({ label: o.label, serif: true }))).map((c, i) => (
    <span key={`${hidden}${i}`} aria-hidden={hidden || undefined}>{c.serif ? <i>{c.label}</i> : c.label}</span>
  ));
  return <div className="marquee" aria-label="Channels and outcomes"><div className="track">{row(false)}{row(true)}</div></div>;
}

function Leaks() {
  return (
    <section className="sec" id="problem">
      <SecHead kicker="THE PROBLEM" title="Leads go" em="cold" />
      <Reveal className="ib-leaks">
        {LEAKS.map((l) => (
          <div key={l.em} className="ib-leak">
            <span className="ib-leak-ic"><Icon name={l.icon} /></span>
            <h3>{l.title} <i>{l.em}</i></h3>
          </div>
        ))}
      </Reveal>
    </section>
  );
}

function Flow() {
  const inY = [10, 30, 50, 70, 90];
  const outY = [100 / 6, 50, 500 / 6];
  return (
    <Reveal className="ib-flow" role="img" aria-label="Diagram: Instagram, Messenger, WhatsApp, website forms and email feed one AI assistant, which books consultations, logs leads and alerts your team">
      <div className="ib-col ib-in">
        <div className="ib-stack">
          {CHANNELS.map((c) => <span key={c.label} className="ib-chip"><Icon name={c.icon} />{c.label}</span>)}
        </div>
      </div>
      <svg className="ib-wires" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        {inY.map((y, i) => <path key={i} d={`M0 ${y} C 55 ${y}, 45 50, 100 50`} />)}
      </svg>
      <div className="ib-arrow" aria-hidden="true"><Icon name="arrowD" /></div>
      <div className="ib-col ib-core">
        <div className="ib-brain">
          <svg viewBox="0 0 200 160" className="art" aria-hidden="true">
            <rect className="f" x="10" y="10" width="180" height="140" rx="36" />
            <rect className="dash marching" x="30" y="28" width="140" height="104" rx="24" />
            <rect className="lime" x="48" y="46" width="104" height="68" rx="16" />
            <rect className="ink eye" x="74" y="64" width="13" height="30" rx="6" />
            <rect className="ink eye" x="113" y="64" width="13" height="30" rx="6" />
          </svg>
          <b>AI <i>assistant</i></b>
        </div>
      </div>
      <svg className="ib-wires" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        {outY.map((y, i) => <path key={i} d={`M0 50 C 55 50, 45 ${y}, 100 ${y}`} />)}
      </svg>
      <div className="ib-arrow" aria-hidden="true"><Icon name="arrowD" /></div>
      <div className="ib-col ib-out">
        <div className="ib-stack">
          {OUTCOMES.map((o) => <span key={o.label} className="ib-chip ib-chip-out"><Icon name={o.icon} />{o.label}</span>)}
        </div>
      </div>
    </Reveal>
  );
}

function How() {
  return (
    <section className="sec" id="how">
      <SecHead kicker="HOW IT WORKS" title="One assistant," em="every channel" />
      <Flow />
      <Reveal as="ol" className="ib-strip" aria-label="Steps">
        {STEPS.map((s, i) => (
          <li key={s.label}>
            <span className="ib-strip-ic"><Icon name={s.icon} /><em className="mono">{i + 1}</em></span>
            <b>{s.label}</b>
          </li>
        ))}
      </Reveal>
    </section>
  );
}

function Demo() {
  return (
    <section className="sec" id="demo">
      <SecHead kicker="EXAMPLE" title="What clients" em="see" />
      <Reveal className="ib-demo">
        <figure className="fig ib-phone-fig">
          <div className="ib-phone" aria-label="Example Instagram conversation between a client and the AI assistant">
            <div className="ib-phone-head">
              <span className="ib-av" aria-hidden="true"><Icon name="instagram" /></span>
              <span><b>{CHAT.account}</b><small className="mono">{CHAT.time}</small></span>
            </div>
            <div className="ib-chat">
              {CHAT.msgs.map((m, i) => (
                <div key={i} className={`ib-bub ${m.from === "ai" ? "ai" : "them"}`}>
                  {m.from === "ai" && <span className="ib-ai mono">AI</span>}
                  {m.text}
                </div>
              ))}
            </div>
          </div>
          <figcaption className="mono"><span>Example</span><span>Fictional spa</span></figcaption>
        </figure>
        <ol className="ib-log" aria-label="What happened behind the scenes">
          {CHAT.log.map(([t, a, ic]) => (
            <li key={t}>
              <span className="ib-log-ic"><Icon name={ic} /></span>
              <b>{a}</b>
              <span className="mono">{t}</span>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}

function Included() {
  return (
    <section className="sec" id="included">
      <SecHead kicker="WHAT YOU GET" title="Everything" em="included" />
      <Reveal className="ib-inc">
        {INCLUDED.map((s) => (
          <div key={s.title + s.em} className="ib-inc-card">
            <span className="sic"><Icon name={s.icon} /></span>
            <h3>{s.title} <i>{s.em}</i></h3>
          </div>
        ))}
      </Reveal>
    </section>
  );
}

function PriceCard({ p, featured }) {
  return (
    <div className={`ib-pcard ${featured ? "feat" : ""}`}>
      <div className="ib-ptop">
        <span className={`pill sm ${featured ? "ink" : ""}`}>{p.label}</span>
        <div className="ib-price"><b>{p.price}</b><span className="mono">{p.per}</span></div>
      </div>
      <ul>{p.items.map((it) => <li key={it}><Icon name="check" />{it}</li>)}</ul>
    </div>
  );
}

function Pricing() {
  return (
    <section className="sec" id="pricing">
      <SecHead kicker="PRICING" title="Simple" em="pricing" />
      <Reveal className="ib-pricing">
        <PriceCard p={PRICING.setup} featured />
        <span className="ib-plus" aria-hidden="true"><Icon name="plus" /></span>
        <PriceCard p={PRICING.monthly} />
      </Reveal>
      <Reveal className="ib-total">
        <div><b>$700 <i>+</i> $100/mo</b><span>{PRICING.note}</span></div>
        <a className="btn primary" href={LINKS.call} target="_blank" rel="noopener noreferrer">Book a free demo →</a>
      </Reveal>
    </section>
  );
}

function Timeline() {
  return (
    <section className="sec" id="timeline">
      <SecHead kicker="TIMELINE" title="Live in" em="7 days" />
      <Reveal as="ol" className="journey ib-journey">
        {TIMELINE.map((j) => (
          <li key={j.when} className={j.next ? "next" : ""}>
            <span className="jdot" aria-hidden="true" />
            <span className="jwhen mono">{j.when}</span>
            <h3>{j.title} <i>{j.em}</i></h3>
          </li>
        ))}
      </Reveal>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="sec" id="faq">
      <SecHead kicker="FAQ" title="Quick" em="answers" />
      <Reveal className="ib-faq">
        {FAQ.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q} className="ib-fq" data-open={isOpen}>
              <button type="button" aria-expanded={isOpen} aria-controls={`fq-${i}`} onClick={() => setOpen(isOpen ? -1 : i)}>
                <span className="ib-fqq">{f.q}</span>
                <span className="tog"><Icon name="plus" /></span>
              </button>
              {isOpen && <div className="ib-fa" id={`fq-${i}`}><p>{f.a}</p></div>}
            </div>
          );
        })}
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

function Cta() {
  return (
    <section className="sec" id="contact">
      <Reveal className="contact ib-cta">
        <div>
          <h2><span className="nw">Stop losing leads</span><br />to <span className="hlb">slow replies.</span></h2>
          <div className="ctas" style={{ marginTop: 40 }}><a className="btn primary" href={LINKS.call} target="_blank" rel="noopener noreferrer">Book a free demo →</a></div>
        </div>
        <div className="lines">
          <CopyRow label="Email" value={LINKS.email} />
          <div className="line"><span className="k mono">Call</span><a className="v" href={LINKS.call} target="_blank" rel="noopener noreferrer">30-min intro call</a><Icon name="arrowUR" /></div>
        </div>
      </Reveal>
    </section>
  );
}

/* ---------- page ---------- */
const THEME_KEY = "imtiazz-inbox-theme"; // own key, so this page always opens in light mode unless the visitor switched it here

export default function InboxPage({ fontVars = "" }) {
  const [theme, setTheme] = useState("light");
  const [active, setActive] = useState("");

  useEffect(() => { try { const s = localStorage.getItem(THEME_KEY); if (s === "dark") setTheme("dark"); } catch {} }, []);
  const toggleTheme = useCallback(() => {
    setTheme((cur) => {
      const next = cur === "dark" ? "light" : "dark";
      try { localStorage.setItem(THEME_KEY, next); } catch {}
      return next;
    });
  }, []);

  useEffect(() => {
    const on = () => {
      const y = scrollY + 160; let c = "";
      NAV.forEach(({ id }) => { const el = document.getElementById(id); if (el && el.getBoundingClientRect().top + scrollY <= y) c = id; });
      setActive(c);
    };
    addEventListener("scroll", on, { passive: true }); on();
    return () => removeEventListener("scroll", on);
  }, []);

  return (
    <div className={`imz ib-page ${fontVars}`} data-imz={theme}>
      <div className="grain" aria-hidden="true" />
      <div className="wrap">
        <Header active={active} theme={theme} onTheme={toggleTheme} />
        <Hero />
        <Video />
        <Marquee />
        <Leaks />
        <How />
        <Demo />
        <Included />
        <Pricing />
        <Timeline />
        <Faq />
        <Cta />
        <footer className="foot mono">
          <span className="site">{LINKS.site}</span>
          <button className="totop mono" type="button" onClick={() => scrollTo({ top: 0, behavior: "smooth" })}>Back to top ↑</button>
        </footer>
      </div>
    </div>
  );
}
