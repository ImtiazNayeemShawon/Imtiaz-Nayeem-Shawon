"use client";

/* Home page — "v3 Systems" design (dark, pixel grid, floating pill nav). Styles: app/(components)/imtiazz/v3.css
   Shared parts (nav, ⌘K menu, icons, background): app/(components)/imtiazz/ui.jsx. Content: app/(components)/imtiazz/data.js. */

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

const Scene3D = dynamic(() => import("./(components)/imtiazz/three"), { ssr: false });
import {
  LINKS, NAV, HERO, MARQUEE, SERVICES, SKILLS, EXPERIENCE, FEATURED, NDA, WINS, SCORES, ECA, SOCIALS, JOURNEY, ABOUT,
} from "./(components)/imtiazz/data";
import {
  FONT_VARS, Icon, Brand, GithubMark, Count, Reveal, glow, SecHead, PixelField, Logo, Nav, Palette, WinBar, CopyRow, SocialRow, Footer,
} from "./(components)/imtiazz/ui";

const SKILL_ITEMS = Object.entries(SKILLS).flatMap(([k, v]) => v.items.map((t) => [t, k]));

const HOME_LINKS = NAV.map((n) => ({ ...n, href: `#${n.id}` }));

/* ---------- hero ---------- */
/* Line-drawn sheet showing one agent run: plan, retrieve, call a tool, answer. A highlight scans the steps. */
function HeroSketch() {
  const rows = ["plan · 3 steps", "retrieve · pinecone", "tool · search_docs", "answer · cited"];
  return (
    <svg className="sketch" viewBox="0 0 380 330" role="img" aria-label="Sketch of an AI agent run: plan, retrieve, call a tool, answer">
      <g className="sk-back"><rect x="96" y="34" width="232" height="262" rx="28" transform="rotate(9 212 165)" /></g>
      <g transform="rotate(-6 190 165)">
        <g className="sk-draw">
          <path className="sk-sheet" d="M92 26 H292 Q314 26 314 48 V246 L262 300 H92 Q70 300 70 278 V48 Q70 26 92 26 Z" />
          <path className="sk" d="M314 246 H284 Q262 246 262 268 V300" />
          <circle className="sk" cx="104" cy="60" r="10" />
          <path className="sk" d="M124 56 H214 M124 66 H178" />
          <circle className="sk-dot" cx="288" cy="58" r="4" />
          {rows.map((_, k) => (
            <g key={k}>
              <rect className="sk" x="90" y={94 + k * 40} width="204" height="28" rx="14" />
              <circle className="sk" cx="106" cy={108 + k * 40} r="6" />
              <rect className="sk" x="252" y={102 + k * 40} width="30" height="12" rx="6" />
            </g>
          ))}
          <path className="sk sig" d="M96 268 c8 -26 18 -26 20 -2 s10 -20 18 -8 s8 12 16 0 s12 -6 34 -10" />
        </g>
        <rect className="sk-scan" x="90" y="94" width="204" height="28" rx="14" />
        {rows.map((r, k) => <text key={r} className="sk-t" x="120" y={112 + k * 40}>{r}</text>)}
      </g>
    </svg>
  );
}

function CopyPill() {
  const [ok, setOk] = useState(false);
  const copy = async () => {
    try { await navigator.clipboard.writeText(LINKS.email); setOk(true); setTimeout(() => setOk(false), 1600); }
    catch { location.href = `mailto:${LINKS.email}`; }
  };
  return (
    <button type="button" className={`pill-w ${ok ? "ok" : ""}`} onClick={copy} aria-label={`Copy email address ${LINKS.email}`}>
      <Icon name={ok ? "check" : "copy"} /><span>{ok ? "Copied to clipboard" : LINKS.email}</span>
    </button>
  );
}

function Hero() {
  const li = SOCIALS.find((s) => s.key === "linkedin")?.url;
  return (
    <section className="hero" id="top">
      <div className="hero-l">
        <p className="hi">{HERO.hi} <span>({HERO.handle})</span></p>
        <h1>{HERO.title[0]}<br /><span className="h1-2">{HERO.title[1]}</span></h1>
        <p className="lead">{HERO.lead}</p>
        <div className="hero-ctas">
          <CopyPill />
          <a className="pill-g" href={LINKS.github} target="_blank" rel="noopener noreferrer">GitHub <Icon name="arrowUR" /></a>
          {li && <a className="pill-g" href={li} target="_blank" rel="noopener noreferrer">LinkedIn <Icon name="arrowUR" /></a>}
        </div>
        <ul className="hero-meta">{HERO.meta.map((m) => <li key={m}>{m}</li>)}</ul>
      </div>
      <div className="hero-r">
        <Scene3D kind="core" />
        <HeroSketch />
        <Link className="resume" href="/resume">
          <span><b>View my resume</b><small>Experience, selected work &amp; capabilities</small></span>
          <span className="rbtn"><Icon name="arrowUR" /></span>
        </Link>
      </div>
      <div className="hero-sub">
        <p>{HERO.sub}</p>
        <div className="avail"><i aria-hidden="true" />Open to remote AI work</div>
      </div>
    </section>
  );
}

function Proof() {
  const row = (hidden) => MARQUEE.map(([t], i) => <span key={`${hidden}${i}`} aria-hidden={hidden || undefined}>{t}</span>);
  return (
    <section className="proof" aria-label="At a glance">
      <Reveal className="stats">
        {HERO.stats.map((s) => (
          <div key={s.label}>
            <b>{s.text ?? <><Count to={s.value} />{s.suffix}</>}</b>
            <span>{s.label}</span>
          </div>
        ))}
      </Reveal>
      <div className="marquee" aria-label="Tools I use"><div className="track">{row(false)}{row(true)}</div></div>
    </section>
  );
}

/* ---------- selected work: built-in UI mockups ---------- */
function AgentMock() {
  const nodes = [["Planner", 50, 14], ["Researcher", 22, 46], ["Writer", 80, 46], ["Critic", 50, 78]];
  const edges = ["M50 22 C50 32 26 34 22 42", "M50 22 C50 32 76 34 80 42", "M24 52 C26 64 44 70 48 74", "M78 52 C76 64 56 70 52 74"];
  return (
    <div className="mock m-agent" aria-hidden="true">
      <WinBar host="scalova.ai / agents" />
      <div className="m-body">
        <aside className="m-side">
          <span className="m-lbl">Runs</span>
          {["Launch post", "SEO brief", "Newsletter", "Thread"].map((r, k) => <span key={r} className={`m-run ${k === 0 ? "on" : ""}`}><i />{r}</span>)}
        </aside>
        <div className="m-graph">
          <svg viewBox="0 0 100 90" preserveAspectRatio="none">
            {edges.map((d, k) => <path key={k} id={`me${k}`} d={d} />)}
            {edges.map((_, k) => (
              <circle key={k} r="1.4"><animateMotion dur="2.4s" begin={`${k * 0.6}s`} repeatCount="indefinite"><mpath href={`#me${k}`} /></animateMotion></circle>
            ))}
          </svg>
          {nodes.map(([n, x, y], k) => <span key={n} className={`m-node n${k}`} style={{ left: `${x}%`, top: `${y}%` }}><i />{n}</span>)}
        </div>
        <div className="m-log">
          <span><b>planner</b> split task → 3 subtasks</span>
          <span><b>researcher</b> retrieve(pinecone, k=8)</span>
          <span><b>writer</b> draft(claude) streaming…</span>
          <span className="ok"><b>critic</b> checks passed ✓</span>
        </div>
      </div>
    </div>
  );
}

function LeadsMock() {
  const leads = [["SUV · financing", "Finance desk"], ["Trade-in request", "Appraisal"], ["Test drive · weekend", "Sales desk"], ["Service booking", "Service"]];
  return (
    <div className="mock m-leads" aria-hidden="true">
      <WinBar host="dealernexus.com / leads" />
      <div className="m-body2">
        <div className="m-kpis">{[72, 48, 88].map((v, k) => <div key={k} className="m-kpi"><span /><b style={{ width: `${v}%` }} /></div>)}</div>
        <div className="m-chart">{[38, 52, 44, 70, 58, 84, 66, 92, 74, 60, 80, 96].map((v, k) => <i key={k} style={{ height: `${v}%`, animationDelay: `${k * 0.05}s` }} />)}</div>
        <ul className="m-rows">
          {leads.map(([a, b], k) => <li key={a}><span className="m-av" /><span className="m-lt">{a}</span><em className={`d${k}`}>→ {b}</em></li>)}
        </ul>
      </div>
    </div>
  );
}

function AdsMock() {
  const ch = [["Meta", 82], ["Google Ads", 64], ["TikTok", 46], ["LinkedIn", 30]];
  return (
    <div className="mock m-ads" aria-hidden="true">
      <WinBar host="eva · ai cmo" />
      <div className="m-body3">
        <div className="m-chat">
          <span className="m-lbl">EVA</span>
          <p className="b-you">Where am I wasting spend this week?</p>
          <p className="b-eva"><i />Two ad sets are under target. I drafted a shift to your best audience.</p>
          <div className="m-act">
            <span><b>Action Center</b>Reallocate budget · 2 ad sets</span>
            <em>Approve</em>
          </div>
        </div>
        <div className="m-ch">
          <span className="m-lbl">Channels</span>
          {ch.map(([n, v], k) => (
            <div key={n} className="m-chr"><span>{n}</span><i><b style={{ width: `${v}%`, animationDelay: `${k * 0.12}s` }} /></i></div>
          ))}
          <div className="m-ins"><i />Opportunity found</div>
        </div>
      </div>
    </div>
  );
}

function WealthMock() {
  const accts = [["Business checking", "Synced"], ["Brokerage", "Synced"], ["Savings", "Syncing"]];
  return (
    <div className="mock m-wealth" aria-hidden="true">
      <WinBar host="iomi · wealth os" />
      <div className="m-body4">
        <div className="m-net">
          <span className="m-lbl">Net worth</span>
          <span className="m-big" />
          <svg viewBox="0 0 200 70" preserveAspectRatio="none">
            <defs><linearGradient id="wg" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#5BE1FF" stopOpacity=".35" /><stop offset="1" stopColor="#5BE1FF" stopOpacity="0" /></linearGradient></defs>
            <path className="area" d="M0 58 L20 52 L40 55 L60 44 L80 47 L100 36 L120 39 L140 26 L160 30 L180 16 L200 12 L200 70 L0 70 Z" />
            <path className="line" d="M0 58 L20 52 L40 55 L60 44 L80 47 L100 36 L120 39 L140 26 L160 30 L180 16 L200 12" />
          </svg>
        </div>
        <ul className="m-accts">
          {accts.map(([a, st]) => <li key={a}><span className="m-bank" />{a}<em className={st === "Synced" ? "" : "live"}>{st}</em></li>)}
        </ul>
        <div className="m-rec"><i /><span><b>AI recommendation</b>Idle cash could work harder. Review a plan?</span></div>
      </div>
    </div>
  );
}

function Work() {
  return (
    <section className="sec" id="projects">
      <SecHead eyebrow="A selection" title="Selected work"
        action={<Link className="link" href="/projects">All projects <Icon name="arrowUR" /></Link>} />
      <div className="cases">
        {FEATURED.map((p, k) => (
          <Reveal as="article" key={p.host} className={`case ${k % 2 ? "flip" : ""}`}>
            <a className="case-vis" href={p.url} target="_blank" rel="noopener noreferrer" onMouseMove={glow} aria-label={`Visit ${p.host}`}>
              {p.art === "agent" ? <AgentMock /> : p.art === "ads" ? <AdsMock /> : p.art === "wealth" ? <WealthMock /> : p.art === "img"
                ? <span className="case-img"><Image src={p.img} alt={`${p.name} ${p.em} app screens`} width={900} height={640} /></span> : <LeadsMock />}
            </a>
            <div className="case-txt">
              <p className="case-meta">{p.name}{p.em && ` ${p.em}`} <i>•</i> {p.cat} <i>•</i> {p.role} <i>•</i> {p.year}</p>
              <h3>{p.headline}</h3>
              <p className="case-desc">{p.desc}</p>
              <div className="chips">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
              <div className="case-links">
                <a className="link" href={p.url} target="_blank" rel="noopener noreferrer">Visit {p.host} <Icon name="arrowUR" /></a>
                {p.study && <Link className="link" href={p.study}>Read case study <Icon name="arrowR" /></Link>}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal className="nda">
        <span className="nda-h"><Icon name="lock" />Client work under NDA</span>
        <div>{NDA.map((n) => <span key={n}>{n}</span>)}</div>
      </Reveal>
    </section>
  );
}

function Services() {
  return (
    <section className="sec sec-3d" id="services">
      <Scene3D kind="graph" />
      <SecHead eyebrow="Services" title="What I build for you" note="AI that does real work inside your product, and the backend that keeps it fast and safe." />
      <Reveal className="bento">
        {SERVICES.map((s, k) => (
          <a key={s.em} href={LINKS.call} target="_blank" rel="noopener noreferrer" className="card" onMouseMove={glow}>
            <span className="card-n">0{k + 1}</span>
            <span className="card-ic"><Icon name={s.icon} /></span>
            <h3>{s.title} {s.em}</h3>
            <p>{s.desc}</p>
            <span className="card-go">Discuss this <Icon name="arrowR" /></span>
          </a>
        ))}
      </Reveal>
    </section>
  );
}

/* Interactive 3D: one agent run, stage by stage. Click a stage (in 3D or in the list) or run the whole thing. */
const RUN_STEPS = [
  { name: "Query", tag: "input", text: "A user asks: “Which of my campaigns are wasting budget this week?” The request arrives with their account and permissions.", log: "POST /agent/run  user=acme  scope=ads:read" },
  { name: "Plan", tag: "LangGraph", text: "A planner model breaks the question into steps: fetch spend, compare against ROAS targets, rank the waste, draft fixes.", log: "plan → [fetch_spend, score_roas, rank, draft]" },
  { name: "Retrieve", tag: "RAG · Pinecone", text: "Hybrid search pulls the account's goals, past decisions and playbook notes, so the answer is grounded in their data.", log: "retrieve k=8  hybrid  rerank → 5 chunks" },
  { name: "Tools", tag: "MCP · APIs", text: "The agent calls real tools: the Meta Ads API for live spend and a scoring service, queued and cached with BullMQ and Redis.", log: "tool meta_ads.insights(7d)  200  312ms" },
  { name: "Answer", tag: "guardrails", text: "A cited answer with the three worst ad sets and one-click fixes. Nothing changes until a person approves it.", log: "answer  citations=4  pending_approval=3" },
];

function AgentRun() {
  const [active, setActive] = useState(0);
  const [running, setRunning] = useState(false);
  const pause = useRef(0);
  const timers = useRef([]);
  /* gentle auto-advance until someone interacts */
  useEffect(() => {
    const id = setInterval(() => {
      if (running || Date.now() < pause.current) return;
      setActive((a) => (a + 1) % RUN_STEPS.length);
    }, 3600);
    return () => clearInterval(id);
  }, [running]);
  useEffect(() => () => timers.current.forEach(clearTimeout), []);
  const choose = (i) => { pause.current = Date.now() + 12000; setActive(i); };
  const run = () => {
    timers.current.forEach(clearTimeout);
    setRunning(true); pause.current = Date.now() + 15000;
    timers.current = RUN_STEPS.map((_, i) => setTimeout(() => setActive(i), i * 900));
    timers.current.push(setTimeout(() => setRunning(false), RUN_STEPS.length * 900 + 300));
  };
  const st = RUN_STEPS[active];
  return (
    <section className="sec" id="agent-run">
      <SecHead eyebrow="Interactive · Agent run" title="Watch an agent think" note="Click a stage in 3D or in the list, drag to look around, or run the whole thing." />
      <Reveal className="run">
        <div className="run-3d">
          <Scene3D kind="run" opts={{ active, running }} onEvent={(e) => e.type === "pick" && choose(e.i)}
            label="3D view of an agent run with five stages: query, plan, retrieve, tools, answer" />
          <span className="run-hint mono">drag · click a node</span>
        </div>
        <div className="run-side">
          <ol className="run-steps">
            {RUN_STEPS.map((x, i) => (
              <li key={x.name}>
                <button type="button" className={i === active ? "on" : ""} aria-pressed={i === active} onClick={() => choose(i)}>
                  <span className="mono">0{i + 1}</span>{x.name}<small>{x.tag}</small>
                </button>
              </li>
            ))}
          </ol>
          <div className="run-card" aria-live="polite">
            <span className="eyebrow">Stage 0{active + 1} · {st.tag}</span>
            <h3>{st.name}</h3>
            <p>{st.text}</p>
            <code className="mono">{st.log}</code>
          </div>
          <button type="button" className="pill-w run-go" onClick={run} disabled={running}>
            <Icon name={running ? "check" : "arrowR"} />{running ? "Running…" : "Run the agent"}
          </button>
        </div>
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
      <SecHead eyebrow="Stack" title="Tools I ship with" note="Drag the globe to spin it. Click any skill to open its group." />
      <div className="skills-wrap">
      <Reveal className="stack">
        <div className="tabs" role="tablist" aria-label="Skill domains">
          {keys.map((k, i) => (
            <button key={k} ref={(el) => (tabRefs.current[k] = el)} id={`tab-${k}`} className="tab" role="tab" type="button"
              aria-selected={tab === k} tabIndex={tab === k ? 0 : -1} onClick={() => setTab(k)} onKeyDown={(e) => onKey(e, i)}>
              {SKILLS[k].label}<span>{SKILLS[k].items.length}</span>
            </button>
          ))}
        </div>
        <div className="panel" role="tabpanel" aria-labelledby={`tab-${tab}`} key={tab}>
          {SKILLS[tab].items.map((t, i) => <span key={t} className="chip" style={{ animationDelay: `${i * 0.03}s` }}>{t}</span>)}
        </div>
      </Reveal>
      <div className="skills-3d">
        <Scene3D kind="skills" opts={{ tab, items: SKILL_ITEMS }} onEvent={(e) => e.type === "pick" && setTab(e.group)}
          label="A 3D globe of every skill; the selected group is highlighted" />
      </div>
      </div>
    </section>
  );
}

function highlight(text, hl) {
  if (!hl || !text.includes(hl)) return text;
  const [a, b] = text.split(hl);
  return <>{a}<b>{hl}</b>{b}</>;
}

function About() {
  const [shape, setShape] = useState("sphere");
  return (
    <section className="sec" id="about">
      <div className="about">
        <Reveal className="about-photo" onMouseMove={glow}>
          <span className="ap-grid" aria-hidden="true" />
          <span className="ap-glow" aria-hidden="true" />
          <Scene3D kind="morph" onEvent={(e) => e.type === "shape" && setShape(e.name)} />
          <Image src="/imtiaz.png" alt="Portrait of Imtiaz Nayeem Shawon" width={500} height={500} sizes="(max-width: 900px) 90vw, 460px" />
          <span className="ap-tag tl">IMTIAZ NAYEEM SHAWON</span>
          <span className="ap-tag br"><i aria-hidden="true" />Open to remote</span>
          <span className="ap-tag bl">23.81° N · 90.41° E</span>
          <span className="ap-tag tr ap-hint">Click · {shape}</span>
        </Reveal>
        <Reveal className="about-txt">
          <span className="eyebrow">About</span>
          <h2>Engineer first.<br /><span className="h1-2">AI by focus.</span></h2>
          <p className="about-lead">{ABOUT.lead}</p>
          {ABOUT.body.map((t) => <p key={t} className="about-p">{t}</p>)}
          <dl className="facts">
            {ABOUT.facts.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
          </dl>
          <div className="hero-ctas">
            <Link className="pill-w" href="/resume"><Icon name="file" />View resume</Link>
            <a className="pill-g" href={LINKS.call} target="_blank" rel="noopener noreferrer">Book a call <Icon name="arrowUR" /></a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Experience() {
  const [open, setOpen] = useState(0);
  return (
    <section className="sec" id="experience">
      <SecHead eyebrow="Experience · 2023 → now" title="Where I've built" />
      <Reveal className="xp">
        {EXPERIENCE.map((x, i) => {
          const isOpen = open === i;
          return (
            <div key={x.role + x.date} className="xrow" data-open={isOpen}>
              <button type="button" className="xsum" aria-expanded={isOpen} aria-controls={`xp-${i}`} onClick={() => setOpen(isOpen ? -1 : i)}>
                <span className="when">{x.date}{x.ongoing && <em>Now</em>}</span>
                <span className="role">{x.role}</span>
                <span className="org">{x.org}</span>
                <span className="tog"><Icon name="plus" /></span>
              </button>
              {isOpen && <div className="xdesc" id={`xp-${i}`}><p>{highlight(x.desc, x.hl)}</p></div>}
            </div>
          );
        })}
      </Reveal>
    </section>
  );
}

function Content() {
  return (
    <section className="sec" id="content">
      <SecHead eyebrow="Content · AI made simple" title="Building in public" note="I build AI by day and explain it for everyone else. Short, clear, no jargon." />
      <Reveal as="ol" className="journey">
        {JOURNEY.map((j) => (
          <li key={j.title + j.em} className={j.next ? "next" : ""}>
            <span className="jdot" aria-hidden="true" />
            <span className="jwhen">{j.when}</span>
            <h3>{j.title} {j.em}</h3>
            <p>{j.desc}</p>
          </li>
        ))}
      </Reveal>
      <Reveal className="socials-grid">
        {SOCIALS.map((s) => (
          <a key={s.key} className="scard" href={s.url} target="_blank" rel="noopener noreferrer" onMouseMove={glow}>
            <span className="sbadge"><Brand name={s.key} /></span>
            <span className="sname">{s.name}</span>
            <span className="shandle">{s.handle}</span>
            <span className="swhat">{s.what}</span>
            <Icon name="arrowUR" className="ic sgo" />
          </a>
        ))}
      </Reveal>
    </section>
  );
}

function Wins() {
  return (
    <section className="sec" id="achievements">
      <SecHead eyebrow="Recognition" title="Wins & ranks"
        action={<Link className="link" href="/eca">All ECA <Icon name="arrowUR" /></Link>} />
      <Reveal className="two">
        <div>
          <ul className="wins">
            {WINS.map((w) => (
              <li key={w.title}><span className="yr">{w.year}</span><span className="t">{w.title}</span><span className={`badge ${w.lime ? "lime" : ""}`}>{w.badge}</span></li>
            ))}
          </ul>
          <div className="scores">
            {SCORES.map((s) => <div key={s.label} className="score"><b><Count to={s.value} />+</b><span>{s.label}</span></div>)}
          </div>
        </div>
        <div className="eca" id="eca">
          <h3>Extracurricular</h3>
          <ul>{ECA.map(([t, r]) => <li key={t}>{t}<span>{r}</span></li>)}</ul>
          <div className="edu"><span>Education</span><b>A Levels · Mathematics &amp; Computer Science</b><p>Capstone School · SSC, Cumilla Modern High School (2023)</p></div>
        </div>
      </Reveal>
    </section>
  );
}

function Contact() {
  return (
    <section className="sec" id="contact">
      <Reveal className="contact" onMouseMove={glow}>
        <Scene3D kind="wave" />
        <div>
          <span className="eyebrow">Contact · open to remote work</span>
          <h2>Have an AI idea?<br /><span className="h1-2">Let&apos;s ship it.</span></h2>
          <div className="hero-ctas">
            <a className="pill-w" href={LINKS.call} target="_blank" rel="noopener noreferrer"><Icon name="cal" />Book a 30-min call</a>
            <a className="pill-g" href={`mailto:${LINKS.email}`}>Send an email <Icon name="arrowUR" /></a>
          </div>
          <SocialRow className="contact-socials" />
        </div>
        <div className="lines">
          <CopyRow label="Email" value={LINKS.email} />
          <CopyRow label="Phone" value={LINKS.phone} />
          <div className="line"><span className="k">GitHub</span><a className="v" href={LINKS.github} target="_blank" rel="noopener noreferrer">ImtiazNayeemShawon</a><GithubMark /></div>
        </div>
      </Reveal>
    </section>
  );
}

/* ---------- page ---------- */
export default function Page() {
  const [active, setActive] = useState("");
  const [pal, setPal] = useState(false);
  const closePal = useCallback(() => setPal(false), []);

  /* nav highlight */
  useEffect(() => {
    const on = () => {
      const y = scrollY + 200; let c = "";
      NAV.forEach(({ id }) => { const el = document.getElementById(id); if (el && el.getBoundingClientRect().top + scrollY <= y) c = id; });
      if (innerHeight + scrollY >= document.documentElement.scrollHeight - 8) c = NAV[NAV.length - 1].id;
      setActive(c);
    };
    addEventListener("scroll", on, { passive: true }); on();
    return () => removeEventListener("scroll", on);
  }, []);

  /* keyboard: ⌘K / Ctrl+K opens the command menu, 1–9 jump to a section */
  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); setPal((v) => !v); return; }
      const tag = e.target?.tagName?.toLowerCase();
      if (e.ctrlKey || e.metaKey || e.altKey || tag === "input" || tag === "textarea" || document.querySelector(".pal")) return;
      if (e.key >= "1" && e.key <= "9") { const n = NAV[+e.key - 1]; if (n) document.getElementById(n.id)?.scrollIntoView({ behavior: "smooth" }); }
    };
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className={`imz3 ${FONT_VARS}`}>
      <PixelField />
      <div className="vignette" aria-hidden="true" />
      <Nav links={HOME_LINKS} active={active} onPalette={() => setPal(true)} />
      <main className="wrap">
        <Hero />
        <Proof />
        <About />
        <Services />
        <Work />
        <AgentRun />
        <Skills />
        <Experience />
        <Content />
        <Wins />
        <Contact />
      </main>
      <Footer />
      <Palette open={pal} onClose={closePal} />
    </div>
  );
}
