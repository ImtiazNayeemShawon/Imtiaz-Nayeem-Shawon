"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";

/* ══════════════════════════════════════════
   DATA
══════════════════════════════════════════ */
const NAV_ITEMS = [
  { id: "summary",      icon: "📋", label: "Summary",      kbd: "1" },
  { id: "skills",       icon: "🛠️", label: "Skills",       kbd: "2" },
  { id: "experience",   icon: "💼", label: "Experience",   kbd: "3" },
  { id: "projects",     icon: "🚀", label: "Projects",     kbd: "4" },
  { id: "achievements", icon: "🏆", label: "Achievements", kbd: "5" },
  { id: "eca",          icon: "🎖️", label: "ECA",          kbd: "6" },
  { id: "contact",      icon: "✉️", label: "Contact",      kbd: "7" },
];

const SKILLS = [
  {
    cat: "AI / LLM",
    chips: ["Python", "LangGraph", "RAG & Vector Search", "Agentic AI Workflows",
      "Claude / GPT / Gemini / Groq", "Pinecone / pgvector / Qdrant",
      "Prompt Engineering", "AI Microservices", "LLM Tool Calling",
      "Multi-step Reasoning", "LLMOps", "Redis Semantic Cache"],
  },
  {
    cat: "Backend",
    chips: ["Node.js", "FastAPI", "NestJS", "Express.js",
      "REST APIs", "GraphQL", "Microservices", "RBAC / JWT / OAuth2",
      "Redis Caching", "Auth Systems", "WebSocket"],
  },
  {
    cat: "Frontend / Mobile",
    chips: ["React", "Next.js", "TypeScript", "Tailwind CSS",
      "Redux Toolkit", "Zustand", "React Native", "Framer Motion"],
  },
  {
    cat: "DevOps / DB",
    chips: ["AWS (EC2, S3, Lambda)", "Docker", "MongoDB & Mongoose",
      "PostgreSQL & Prisma", "Vercel / Railway / DigitalOcean",
      "Nginx", "CI/CD Pipelines", "Cloudinary"],
  },
];

const FEATURED_SKILLS = [
  "Python", "FastAPI", "LangGraph", "React", "Next.js",
  "Node.js", "NestJS", "TypeScript", "MongoDB", "PostgreSQL",
  "Redis", "RAG & Vector Search", "React Native", "AWS", "Docker",
];

const EXPERIENCE = [
  // ── Current / Recent ──
  {
    role: "Lead Software Engineer + Lead, Company Operations",
    company: "ScaleBuild AI · New York (Remote)",
    date: "Sept 2025 – Present",
    desc: "Led AI-powered SaaS platform end-to-end; architected Redis/queue infrastructure cutting response times by 40%. Promoted to Lead, Company Operations (Apr 2026) — overseeing strategy, hiring, and cross-team coordination for a 10+ person team.",
    current: true,
  },
  {
    role: "Lead Software Engineer",
    company: "AaladinAI · Dhaka",
    date: "Aug – Sept 2025",
    desc: "Built Scalova AI — a full-stack agentic content platform using LangGraph, Claude, and Pinecone. Designed multi-step reasoning pipelines and stateful agent orchestration layers for AI content generation at scale.",
  },
  {
    role: "Co-Founder & CTO",
    company: "Zippix LTD",
    date: "Jan 2021 – Present",
    desc: "Architected backend and full-stack systems for 50+ client projects across industries. Led engineering teams of 3–5 developers; defined code standards, system architecture, and delivery pipelines.",
    current: true,
  },
  {
    role: "Full Stack Engineer",
    company: "PixiQor",
    date: "Feb – Aug 2025",
    desc: "Built REST APIs and React Native mobile apps shipped to App Store & Google Play. Integrated NestJS backend services, led mobile dev team, maintained 99.9% uptime.",
  },
  {
    role: "Full Stack Engineer",
    company: "OutNet · UK (Remote)",
    date: "Sept 2024 – Jan 2025",
    desc: "Engineered Node.js REST APIs, structured MongoDB schemas, integrated Next.js SSR pages achieving 60% faster load times. Participated in code reviews and collaborated with cross-functional teams.",
  },
  // ── Earlier roles ──
  {
    role: "Web Developer → IT Executive",
    company: "Bangladesh Space Research Society (BSRS)",
    date: "2022 – 2023",
    desc: "Joined as a web developer designing web applications and dashboards for event management. Promoted to IT Executive for dedication and performance — managed the IT operations and digital presence of the society.",
    earlier: true,
  },
  {
    role: "Web Developer",
    company: "Mental Health Care Bangladesh",
    date: "2022 – 2023",
    desc: "Contributed as web developer in the IT team — designed blogs, event management platforms, and organizational websites supporting mental health awareness initiatives across schools, colleges, and universities.",
    earlier: true,
  },
  {
    role: "IT Team Member",
    company: "Aruddho Ekattor",
    date: "2022 – 2023",
    desc: "Worked in the IT team of this youth development non-profit. Designed and developed web applications and event management platforms, collaborating with senior members on digital strategy.",
    earlier: true,
  },
  {
    role: "Developer Volunteer",
    company: "Cyber Teens Bangladesh",
    date: "2022 – 2024",
    desc: "Contributed as developer to make the internet safer for younger generations — combating cyberbullying, raising cyber security awareness, and teaching coding basics to junior participants.",
    earlier: true,
  },
];

export const PROJECTS = [
  {
    name: "Scalova AI",
    cat: "AI SaaS Platform",
    emoji: "🤖",
    url: "https://scalova.ai",
    desc: "Full-stack agentic content generation platform. LangGraph + Claude + Pinecone powering multi-agent workflows, semantic search over document indexes, and real-time output streaming. Built at AaladinAI.",
    tags: ["LangGraph", "Claude API", "Pinecone", "FastAPI", "Next.js", "Redis"],
    status: "Live",
  },
  {
    name: "Dealer Nexus",
    cat: "SaaS Platform",
    emoji: "⚡",
    url: "https://dealernexus.com",
    desc: "Automotive dealership unified portal — custom dashboard, secure authentication flows, lead routing logic, and high-performance API integrations for coordinating complex dealer workflows and lead intake pipelines.",
    tags: ["Next.js", "REST API", "Authentication", "Lead Routing", "Dashboard"],
    status: "Live",
  },
  {
    name: "Cosmpulse",
    cat: "Productivity SaaS",
    emoji: "✅",
    desc: "Simplified habit tracking dashboard with interactive visual habit trackers and daily user logging systems. Built for consistent daily productivity workflows with lightweight Zustand state management.",
    tags: ["React", "Zustand", "Dashboard", "User Tracking", "Visual Analytics"],
    status: "Confidential",
  },
  {
    name: "Ryun Shim Portfolio",
    cat: "Academic Showcase",
    emoji: "🎓",
    desc: "Premium visual CV for a Cornell University graduate — minimal, high-speed profile with animated components, publication indexes, academic credential display, and contact integration.",
    tags: ["Next.js", "Framer Motion", "Portfolio", "Performance"],
    status: "Confidential",
  },
  {
    name: "MZ Media Agency",
    cat: "Digital Agency",
    emoji: "📱",
    desc: "High-converting agency website with optimized video case study players, client review widgets, performance-enhanced media delivery via Cloudinary, and lead capture systems for an established video agency.",
    tags: ["Next.js", "Tailwind CSS", "SEO", "Lead Capture", "Cloudinary", "Video"],
    status: "Confidential",
  },
  {
    name: "Zipbox Agency",
    cat: "Design & Dev Agency",
    emoji: "🎨",
    desc: "Visually outstanding portfolio showcase for a premium design agency — complex horizontal scroll components, custom micro-interactions, and a responsive bespoke grid layout capturing high-value design leads.",
    tags: ["React", "Horizontal Scroll", "Tailwind CSS", "Micro-interactions"],
    status: "Confidential",
  },
  {
    name: "Frosty Icepod",
    cat: "E-Commerce",
    emoji: "🛒",
    desc: "High-converting product e-commerce catalog for an ice pod retail brand — custom shopping cart engine, review system, Stripe checkout integration, and conversion-optimized landing and product pages.",
    tags: ["Next.js", "Stripe API", "Cart System", "Conversion Optimization"],
    status: "Confidential",
  },
  {
    name: "Skynetix",
    cat: "Marketing Agency",
    emoji: "📢",
    desc: "Premium multi-page marketing hub for a digital marketing firm — comprehensive service listings, client case studies, intake funnels, and fully responsive layout architecture built for authority and lead generation.",
    tags: ["Next.js", "Lead Flow", "Marketing", "Multi-page", "Responsive"],
    status: "Confidential",
  },
];

const ACHIEVEMENTS = [
  { title: "International AI Olympiad",    sub: "National Winner · Training Camp at IIT, Univ. of Dhaka", year: "2026" },
  { title: "Bangladesh AI Olympiad",       sub: "Regional Winner · National Round Qualifier",              year: "2025" },
  { title: "NASA Space Apps Challenge",    sub: "Team Lead · AstroTots · Galactic Problem Solver",         year: "2023/24" },
  { title: "LeetCode",                     sub: "55+ Problems Solved",                                     year: "Ongoing" },
  { title: "CodeChef",                     sub: "Rating 273+",                                             year: "Ongoing" },
];

const ECA_CATS = [
  { id: "all",          label: "All" },
  { id: "volunteering", label: "Volunteering" },
  { id: "hackathons",   label: "Hackathons" },
  { id: "olympiads",    label: "Olympiads" },
  { id: "awards",       label: "Awards" },
  { id: "startups",     label: "Startups" },
];

const ECA_ITEMS = [
  // Volunteering
  { cat: "volunteering", title: "Bangladesh Space Research Society", meta: "Web Dev → IT Executive · 2022–2023", desc: "Joined as web developer, promoted to IT Executive. Designed web apps and dashboards for event management, managed digital presence.", badge: "Promoted" },
  { cat: "volunteering", title: "Mental Health Care Bangladesh", meta: "Web Developer · IT Team · 2022–2023", desc: "Designed blogs, event management platforms, and organizational websites supporting mental health awareness in schools, colleges, and universities.", badge: "Volunteer" },
  { cat: "volunteering", title: "Aruddho Ekattor", meta: "IT Team Member · 2022–2023", desc: "Youth development non-profit. Worked in IT team designing web applications and event management platforms for national youth initiatives.", badge: "Volunteer" },
  { cat: "volunteering", title: "Cyber Teens Bangladesh", meta: "Developer Volunteer · 2022–2024", desc: "Contributed as developer to make the internet safer for younger generations — combating cyberbullying, raising awareness, teaching coding to juniors.", badge: "Volunteer" },
  // Hackathons
  { cat: "hackathons", title: "Technovation Hackathon 2025", meta: "Top 10 · Programming Hero", desc: "Built AI-powered crop market monitoring and plant disease detection tool. Implemented a chatbot interface providing timely plant health insights for farmers.", badge: "Top 10 🏅" },
  { cat: "hackathons", title: "NASA Space Apps Challenge", meta: "Team Lead · AstroTots · 2023 & 2024", desc: "Led Team AstroTots to the 'Galactic Problem Solver' position. Developed and presented a space exploration project to NASA judges; built strong mentor network.", badge: "Galactic Problem Solver" },
  // Olympiads
  { cat: "olympiads", title: "International AI Olympiad", meta: "IAIO 2026 · IIT, University of Dhaka", desc: "Selected for training camp at the Institute of Information Technology (IIT), University of Dhaka. Two days of intensive AI learning and competitive problem solving.", badge: "Training Camp ✓" },
  { cat: "olympiads", title: "Bangladesh AI Olympiad", meta: "BDAIO 2025 · National Round", desc: "Cleared preliminary and National rounds. Showcased AI skills at a national competitive level — remarkable experience in applied AI problem solving.", badge: "National Round" },
  { cat: "olympiads", title: "National HS Programming Contest", meta: "NHSPC 2025 · Regional Winner", desc: "Won the regional round, received a medal and certificate. Selected for the national round in competitive programming.", badge: "Regional Winner 🥇" },
  { cat: "olympiads", title: "Bangladesh Informatics Olympiad", meta: "BDOI 2024", desc: "Cleared first round, solved 2 of 5 problems. First-time participation in BDOI — great introduction to national-level competitive programming.", badge: "1st Round Cleared" },
  { cat: "olympiads", title: "Bangladesh Junior Science Olympiad", meta: "BDJSO", desc: "Cleared divisional round. Traveled to Chittagong for the competition. Met notable individuals including Munir Chowdhury — valuable national academic experience.", badge: "Divisional Round" },
  { cat: "olympiads", title: "ICT Olympiad Bangladesh", meta: "Multi-round Qualifier", desc: "Cleared selection, regional, and divisional rounds. Gained valuable competitive experience across multiple stages of this national ICT competition.", badge: "Divisional Round" },
  // Awards
  { cat: "awards", title: "Creative Junior Award", meta: "Cyber Teens · Batch Topper", desc: "Coding Batch Topper Award presented by Sadat Rahman (International Children's Peace Prize Winner) and Monir Hossain (CEO, Creative IT). First major recognition.", badge: "🏆 Award" },
  { cat: "awards", title: "NASA Space Apps — Galactic Problem Solver", meta: "NASA · Virtual Bangladesh 2023", desc: "Team AstroTots achieved the prestigious 'Galactic Problem Solver' position in NASA Space Apps Challenge Bangladesh through innovation and dedication.", badge: "🌍 NASA" },
  // Startups
  { cat: "startups", title: "Zippix Limited, UK", meta: "Co-Founder & CTO · Jan 2021 – Present", desc: "UK-based software agency — custom websites, mobile apps, SaaS platforms, and AI tools for businesses of all sizes. 50+ client projects delivered.", badge: "🚀 Active" },
  { cat: "startups", title: "ZippyAI", meta: "Co-Founder", desc: "LinkedIn Chrome extension that generates contextually relevant comments for LinkedIn posts to boost engagement and professional visibility on the platform.", badge: "Built" },
  { cat: "startups", title: "MindSpace AI", meta: "Co-Founder", desc: "AI-driven mental health support platform — personalized AI tools, community engagement features, and accessible resources for individuals dealing with mental health challenges.", badge: "Built" },
];

/* ══════════════════════════════════════════
   COMPONENT
══════════════════════════════════════════ */
export default function Page() {
  const [active, setActive]              = useState("summary");
  const [theme, setTheme]                = useState("dark");
  const [sidebarOpen, setSidebar]        = useState(false);
  const [showKbdHint, setKbdHint]        = useState(true);
  const [ecaTab, setEcaTab]              = useState("all");
  const [contextMenu, setContextMenu]    = useState(null);
  const [peekProject, setPeekProject]    = useState(null);
  const [peekPos, setPeekPos]            = useState({ x: 300, y: 200 });
  const [fullscreenProject, setFullscreen] = useState(null);

  const dragRef = useRef({ active: false, startX: 0, startY: 0, winX: 0, winY: 0 });
  const mainRef = useRef(null);

  /* ── Theme persistence ── */
  useEffect(() => {
    try { const s = localStorage.getItem("p-theme"); if (s) setTheme(s); } catch {}
  }, []);
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem("p-theme", theme); } catch {}
  }, [theme]);

  /* ── Kbd hint auto-hide ── */
  useEffect(() => { const t = setTimeout(() => setKbdHint(false), 7000); return () => clearTimeout(t); }, []);

  /* ── Scroll-spy ── */
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: "-30% 0px -55% 0px" }
    );
    NAV_ITEMS.forEach(({ id }) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  /* ── Drag handling (peek window) ── */
  useEffect(() => {
    const onMove = (e) => {
      if (!dragRef.current.active) return;
      const dx = e.clientX - dragRef.current.startX;
      const dy = e.clientY - dragRef.current.startY;
      setPeekPos({
        x: Math.max(0, Math.min(window.innerWidth - 400, dragRef.current.winX + dx)),
        y: Math.max(0, Math.min(window.innerHeight - 120, dragRef.current.winY + dy)),
      });
    };
    const onUp = () => { dragRef.current.active = false; };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => { window.removeEventListener("mousemove", onMove); window.removeEventListener("mouseup", onUp); };
  }, []);

  /* ── Close context menu on click outside ── */
  useEffect(() => {
    if (!contextMenu) return;
    const close = () => setContextMenu(null);
    const t = setTimeout(() => window.addEventListener("click", close), 10);
    return () => { clearTimeout(t); window.removeEventListener("click", close); };
  }, [contextMenu]);

  const scrollTo = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setSidebar(false);
  }, []);

  /* ── Keyboard navigation ── */
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") { setContextMenu(null); setPeekProject(null); setFullscreen(null); return; }
      const tag = e.target?.tagName?.toLowerCase();
      if (tag === "input" || tag === "textarea" || tag === "select") return;
      if (e.key >= "1" && e.key <= "7" && !e.ctrlKey && !e.metaKey) {
        const item = NAV_ITEMS[parseInt(e.key, 10) - 1];
        if (item) scrollTo(item.id);
      }
      if ((e.key === "j" || e.key === "k") && !e.ctrlKey && !e.metaKey) {
        const idx = NAV_ITEMS.findIndex((n) => n.id === active);
        scrollTo(NAV_ITEMS[e.key === "j" ? Math.min(idx + 1, NAV_ITEMS.length - 1) : Math.max(idx - 1, 0)].id);
      }
      if (e.key === "t" && !e.ctrlKey && !e.metaKey) setTheme((p) => p === "dark" ? "light" : "dark");
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [active, scrollTo]);

  /* ── Context menu ── */
  const handleContextMenu = (e, project) => {
    e.preventDefault();
    setContextMenu({
      x: Math.min(e.clientX, window.innerWidth - 200),
      y: Math.min(e.clientY, window.innerHeight - 150),
      project,
    });
  };

  const openPeek = (project, cx, cy) => {
    setPeekPos({ x: Math.max(10, Math.min(cx - 200, window.innerWidth - 410)), y: Math.max(10, Math.min(cy - 60, window.innerHeight - 500)) });
    setPeekProject(project);
  };

  const onPeekMouseDown = (e) => {
    dragRef.current = { active: true, startX: e.clientX, startY: e.clientY, winX: peekPos.x, winY: peekPos.y };
  };

  const isLight = theme === "light";
  const filteredECA = ecaTab === "all" ? ECA_ITEMS : ECA_ITEMS.filter((i) => i.cat === ecaTab);

  return (
    <>
      {/* ── Mobile top bar ── */}
      <div className="mobile-bar">
        <span className="mobile-bar-name">Imtiaz Nayeem</span>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <button onClick={() => setTheme((p) => p === "dark" ? "light" : "dark")}
            style={{ fontSize: 16, padding: "2px 8px", borderRadius: 6, background: "var(--input-bg)", border: "1px solid var(--border)" }}>
            {isLight ? "🌙" : "☀️"}
          </button>
          <div className="hamburger" onClick={() => setSidebar((o) => !o)}>
            <span /><span /><span />
          </div>
        </div>
      </div>

      <div className={`sidebar-overlay${sidebarOpen ? " open" : ""}`} onClick={() => setSidebar(false)} />

      <div className="layout">
        {/* ════════ SIDEBAR ════════ */}
        <aside className={`sidebar${sidebarOpen ? " open" : ""}`}>
          <div className="sb-profile">
            <div className="sb-avatar">👨‍💻</div>
            <div>
              <p className="sb-name">Imtiaz Nayeem</p>
              <p className="sb-role">AI Engineer</p>
            </div>
          </div>
          <p className="nav-section-label">Portfolio</p>
          <nav className="sidebar-nav">
            {NAV_ITEMS.map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)}
                className={`nav-item${active === item.id ? " active" : ""}`}>
                <span className="nav-item-left">
                  <span className="nav-icon">{item.icon}</span>
                  {item.label}
                </span>
                <span className="nav-kbd">{item.kbd}</span>
              </button>
            ))}
          </nav>
          <div className="sb-bottom">
            <button className="theme-toggle" onClick={() => setTheme((p) => p === "dark" ? "light" : "dark")}>
              <div className={`toggle-track${isLight ? " on" : ""}`}><div className="toggle-knob" /></div>
              <span>{isLight ? "Light mode" : "Dark mode"}</span>
              <span style={{ marginLeft: "auto", fontSize: 11, opacity: 0.45 }}>T</span>
            </button>
            <a href="mailto:hello@imtiazz.me" className="sb-link"><span>✉</span> hello@imtiazz.me</a>
            <a href="https://github.com/ImtiazNayeemShawon" target="_blank" rel="noopener noreferrer" className="sb-link">
              <span>⌥</span> github.com/ImtiazNayeemShawon
            </a>
            <a href="https://cal.com/imtiaznayeem/30min" target="_blank" rel="noopener noreferrer" className="sb-cta">
              Book a call →
            </a>
          </div>
        </aside>

        {/* ════════ MAIN ════════ */}
        <main className="main-content" ref={mainRef}>
          <div className="bento-grid">

            {/* HERO */}
            <section id="summary" className="bento-card b-hero">
              <div className="hero-badge"><span className="hero-badge-dot" />Available for opportunities</div>
              <h1 className="hero-name">Imtiaz Nayeem Shawon</h1>
              <p className="hero-title">AI Engineer &amp; Full-Stack Developer · Dhaka, Bangladesh</p>
              <p className="hero-summary">
                5+ years building production AI systems — RAG pipelines, multi-agent workflows (LangGraph), and
                LLM-integrated SaaS platforms — backed by strong full-stack and backend engineering (Python, Node.js,
                scalable APIs, RBAC, Redis). Currently leading AI product development and company operations at ScaleBuild AI.
              </p>
              <div className="hero-tags">
                {["Python", "LangGraph", "RAG", "FastAPI", "Next.js", "React", "NestJS", "AWS", "Redis"].map((t) => (
                  <span key={t} className="hero-tag">{t}</span>
                ))}
              </div>
            </section>

            {/* STATUS */}
            <div className="bento-card b-status">
              <div className="status-hdr"><span className="status-dot" />Open to work</div>
              <div className="info-table">
                {[["Location","Dhaka, BD"],["Experience","5+ years"],["Current","ScaleBuild AI"],
                  ["Projects","50+ delivered"],["Remote","Available"],["Phone","+880 1796 876012"]].map(([l, v]) => (
                  <div key={l} className="info-row">
                    <span className="info-label">{l}</span>
                    <span className="info-value">{v}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* SKILLS */}
            <section id="skills" className="bento-card b-skills">
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 18 }}>
                <p className="card-label" style={{ margin: 0 }}>🛠️ Skills &amp; Capabilities</p>
                <span style={{ fontSize: 11, color: "var(--text-muted)" }}>
                  {SKILLS.reduce((acc, g) => acc + g.chips.length, 0)} skills &middot; {SKILLS.length} domains
                </span>
              </div>

              {/* Featured primary stack */}
              <div className="skills-featured">
                {FEATURED_SKILLS.map((s) => (
                  <span key={s} className="skills-feat-chip">{s}</span>
                ))}
              </div>

              {/* 4-col category grid */}
              <div className="skills-cats-grid">
                {SKILLS.map((g) => (
                  <div key={g.cat} className="skills-cat-col">
                    <p className="skills-cat-label">{g.cat}</p>
                    <div className="skills-chips">
                      {g.chips.map((c) => <span key={c} className="skill-chip">{c}</span>)}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* EXPERIENCE */}
            <section id="experience" className="bento-card b-experience">
              <p className="card-label">💼 Experience</p>
              <div className="exp-list">
                <div className="exp-section-divider">
                  <span>Current &amp; Recent</span>
                </div>
                {EXPERIENCE.filter((e) => !e.earlier).map((e, i) => (
                  <div key={i} className={`exp-item${e.current ? " is-current" : ""}`}>
                    <div className="exp-top">
                      <span className="exp-role">{e.role}</span>
                      <span className="exp-date">{e.date}</span>
                    </div>
                    <span className="exp-company">{e.company}</span>
                    <p className="exp-desc">{e.desc}</p>
                  </div>
                ))}
                <div className="exp-section-divider" style={{ marginTop: 8 }}>
                  <span>Earlier Roles</span>
                </div>
                {EXPERIENCE.filter((e) => e.earlier).map((e, i) => (
                  <div key={i} className="exp-item is-earlier">
                    <div className="exp-top">
                      <span className="exp-role">{e.role}</span>
                      <span className="exp-date">{e.date}</span>
                    </div>
                    <span className="exp-company">{e.company}</span>
                    <p className="exp-desc">{e.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ACHIEVEMENTS */}
            <section id="achievements" className="bento-card b-achieve">
              <p className="card-label">🏆 Achievements</p>
              <div className="achieve-list">
                {ACHIEVEMENTS.map((a) => (
                  <div key={a.title} className="achieve-item">
                    <div>
                      <div className="achieve-title">{a.title}</div>
                      <div className="achieve-sub-text">{a.sub}</div>
                    </div>
                    <span className="achieve-badge">{a.year}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 16, paddingTop: 14, borderTop: "1px solid var(--border)" }}>
                <p className="card-label">📝 Also</p>
                <p style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.65 }}>
                  Participated in numerous local exams, events, and competitions. Worked with robotics at the DC Office
                  Robotics Lab and taught robotics basics to students, furthering my passion for technology and education.
                </p>
              </div>
            </section>

            {/* PROJECTS */}
            <section id="projects" className="bento-card b-projects">
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                <p className="card-label" style={{ margin: 0 }}>🚀 Projects — {PROJECTS.length} Total</p>
                <Link href="/projects" className="projects-cta" style={{ marginTop: 0, padding: "5px 12px", fontSize: 12 }}>
                  View all in detail →
                </Link>
              </div>

              <div className="projects-grid">
                {PROJECTS.map((p) => (
                  <div key={p.name} className="proj-card" onContextMenu={(e) => handleContextMenu(e, p)}>
                    <div className="proj-card-top">
                      <div>
                        <p className="proj-cat">{p.cat}</p>
                        <p className="proj-name">{p.name}</p>
                      </div>
                      {p.url
                        ? <a href={p.url} target="_blank" rel="noopener noreferrer" className="proj-ext" title="View live" onClick={(e) => e.stopPropagation()}>↗</a>
                        : <span className="proj-ext" style={{ cursor: "default", opacity: 0.3 }}>🔒</span>}
                    </div>
                    <p className="proj-desc">{p.desc}</p>
                    <div className="proj-tags">{p.tags.map((t) => <span key={t} className="proj-tag">{t}</span>)}</div>
                    <div className="proj-status-row">
                      <span className="proj-status">{p.status === "Live" ? "✓ Live" : "🔒 Confidential"}</span>
                    </div>
                    <p className="proj-ctx-hint">⋮ right-click for options</p>
                  </div>
                ))}
              </div>

              <div className="nda-notice">
                🔒 <strong>NDA Note:</strong> Several client projects, backend systems, and agentic workflows cannot be
                shown publicly due to confidentiality agreements. Architecture decisions and coding execution remain
                consistent across all delivery cycles.
              </div>
            </section>

            {/* ECA */}
            <section id="eca" className="bento-card b-eca">
              <p className="card-label">🎖️ Extra-Curricular Activities</p>
              <div className="eca-tabs">
                {ECA_CATS.map((c) => (
                  <button key={c.id} onClick={() => setEcaTab(c.id)}
                    className={`eca-tab${ecaTab === c.id ? " active" : ""}`}>
                    {c.label}
                    <span style={{ marginLeft: 5, fontSize: 10, opacity: 0.55 }}>
                      {c.id === "all" ? ECA_ITEMS.length : ECA_ITEMS.filter((i) => i.cat === c.id).length}
                    </span>
                  </button>
                ))}
              </div>
              <div className="eca-grid">
                {filteredECA.map((item) => (
                  <div key={item.title} className="eca-item">
                    <p className="eca-item-title">{item.title}</p>
                    <p className="eca-item-meta">{item.meta}</p>
                    <p className="eca-item-desc">{item.desc}</p>
                    <span className="eca-item-badge">{item.badge}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* CONTACT */}
            <section id="contact" className="bento-card b-contact">
              <div className="contact-grid">
                <div>
                  <p className="contact-section-label">🎓 Education</p>
                  <p className="edu-line">A Levels — Mathematics &amp; Computer Science</p>
                  <p className="edu-school">Capstone School International, Dhaka</p>
                  <p className="contact-section-label" style={{ marginTop: 18 }}>📍 Location</p>
                  <p className="edu-line">Dhaka, Bangladesh</p>
                  <p className="edu-school">Available for Remote &amp; On-site roles</p>
                </div>
                <div>
                  <p className="contact-section-label">✉️ Contact</p>
                  <div className="contact-links">
                    <a href="mailto:hello@imtiazz.me" className="c-link"><span>✉</span> hello@imtiazz.me</a>
                    <a href="tel:+8801796876012" className="c-link"><span>📞</span> +880 1796 876012</a>
                    <a href="https://github.com/ImtiazNayeemShawon" target="_blank" rel="noopener noreferrer" className="c-link">
                      <span>⌥</span> github.com/ImtiazNayeemShawon
                    </a>
                    <a href="https://cal.com/imtiaznayeem/30min" target="_blank" rel="noopener noreferrer" className="cta-btn">
                      Book a 30-min call →
                    </a>
                  </div>
                </div>
                <div>
                  <p className="contact-section-label">⌨️ Keyboard Shortcuts</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                    {[
                      { keys: ["1", "–", "7"], desc: "Jump to section" },
                      { keys: ["J"], desc: "Next section" },
                      { keys: ["K"], desc: "Previous section" },
                      { keys: ["T"], desc: "Toggle dark / light" },
                      { keys: ["Esc"], desc: "Close popups" },
                    ].map((s, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12 }}>
                        <span style={{ display: "inline-flex", gap: 3, alignItems: "center", flexShrink: 0 }}>
                          {s.keys.map((k, ki) =>
                            k === "–" ? (
                              <span key={ki} style={{ color: "var(--text-muted)", fontSize: 11 }}>–</span>
                            ) : (
                              <span key={ki} className="kbd">{k}</span>
                            )
                          )}
                        </span>
                        <span style={{ color: "var(--text-muted)" }}>{s.desc}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ marginTop: 16, padding: "10px 12px", borderRadius: 7, background: "var(--input-bg)", border: "1px solid var(--border)", fontSize: 11.5, color: "var(--text-muted)", lineHeight: 1.6 }}>
                    💡 <strong>Tip:</strong> Right-click any project card for a quick peek or fullscreen view.
                  </div>
                </div>
              </div>
            </section>

          </div>
        </main>
      </div>

      {/* ════════ CONTEXT MENU ════════ */}
      {contextMenu && (
        <div className="ctx-menu" style={{ left: contextMenu.x, top: contextMenu.y }} onClick={(e) => e.stopPropagation()}>
          <button className="ctx-item" onClick={() => { openPeek(contextMenu.project, contextMenu.x, contextMenu.y); setContextMenu(null); }}>
            <span className="ctx-icon">👁</span> Quick Peek
          </button>
          <button className="ctx-item" onClick={() => { setFullscreen(contextMenu.project); setContextMenu(null); }}>
            <span className="ctx-icon">⛶</span> View Fullscreen
          </button>
          <div className="ctx-divider" />
          <Link href="/projects" className="ctx-item" onClick={() => setContextMenu(null)}>
            <span className="ctx-icon">↗</span> View All Projects
          </Link>
        </div>
      )}

      {/* ════════ PEEK WINDOW ════════ */}
      {peekProject && (
        <div className="peek-window" style={{ left: peekPos.x, top: peekPos.y }}>
          <div className="peek-header" onMouseDown={onPeekMouseDown}>
            <div className="peek-win-controls">
              <button className="peek-ctrl close-btn" onClick={() => setPeekProject(null)} title="Close (Esc)" />
              <button className="peek-ctrl expand-btn"
                onClick={() => { setFullscreen(peekProject); setPeekProject(null); }}
                title="Fullscreen" />
            </div>
            <span className="peek-window-title">{peekProject.name}</span>
            <span className="peek-drag-hint">drag to move</span>
          </div>
          <div className="peek-body">
            <p className="peek-proj-cat">{peekProject.cat}</p>
            <p className="peek-proj-name">{peekProject.emoji} {peekProject.name}</p>
            <p className="peek-proj-desc">{peekProject.desc}</p>
            <div className="peek-proj-tags">
              {peekProject.tags.map((t) => <span key={t} className="peek-proj-tag">{t}</span>)}
            </div>
            {peekProject.url && (
              <a href={peekProject.url} target="_blank" rel="noopener noreferrer" className="peek-proj-link">
                View live ↗
              </a>
            )}
            <p className="peek-proj-status">
              {peekProject.status === "Live" ? "✓ Live project" : "🔒 Confidential / Client Portal"}
            </p>
          </div>
        </div>
      )}

      {/* ════════ FULLSCREEN MODAL ════════ */}
      {fullscreenProject && (
        <div className="fullscreen-overlay" onClick={() => setFullscreen(null)}>
          <div className="fullscreen-modal" onClick={(e) => e.stopPropagation()}>
            <div className="fullscreen-header">
              <div className="fullscreen-controls">
                <button className="peek-ctrl close-btn" onClick={() => setFullscreen(null)} title="Close (Esc)" />
              </div>
              <span className="fullscreen-title">{fullscreenProject.name}</span>
              <span className="fullscreen-cat-badge">{fullscreenProject.cat}</span>
            </div>
            <div className="fullscreen-body">
              <span className="fullscreen-proj-icon">{fullscreenProject.emoji}</span>
              <h2 className="fullscreen-proj-title">{fullscreenProject.name}</h2>
              <p className="fullscreen-proj-desc">{fullscreenProject.desc}</p>

              <div className="fullscreen-props">
                <div className="fullscreen-prop">
                  <span className="fullscreen-prop-key">Category</span>
                  <span className="fullscreen-prop-val">{fullscreenProject.cat}</span>
                </div>
                <div className="fullscreen-prop">
                  <span className="fullscreen-prop-key">Status</span>
                  <span className="fullscreen-prop-val">
                    {fullscreenProject.status === "Live" ? "✓ Live / Public" : "🔒 Confidential — NDA"}
                  </span>
                </div>
                <div className="fullscreen-prop">
                  <span className="fullscreen-prop-key">Stack</span>
                  <div className="fullscreen-tags">
                    {fullscreenProject.tags.map((t) => <span key={t} className="fullscreen-tag">{t}</span>)}
                  </div>
                </div>
              </div>

              {fullscreenProject.url && (
                <a href={fullscreenProject.url} target="_blank" rel="noopener noreferrer" className="fullscreen-link-btn">
                  View Live Project ↗
                </a>
              )}
              {!fullscreenProject.url && (
                <div style={{ padding: "12px 16px", borderRadius: 8, background: "var(--input-bg)", border: "1px solid var(--border)", fontSize: 13, color: "var(--text-muted)", marginTop: 16 }}>
                  🔒 This project is under NDA. Architecture decisions, system design patterns, and technical execution
                  are consistent with my publicly visible work. Available for discussion in a call.
                </div>
              )}
              <div style={{ marginTop: 20 }}>
                <Link href="/projects" style={{ fontSize: 13, color: "var(--accent-text)", display: "inline-flex", alignItems: "center", gap: 6 }}>
                  ← View all {PROJECTS.length} projects in detail
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ════════ KBD HINT TOAST ════════ */}
      <div className={`kbd-toast${showKbdHint ? "" : " hidden"}`}>
        <span>Press</span>
        <span className="kbd">1</span><span>–</span><span className="kbd">7</span>
        <span>to jump ·</span>
        <span className="kbd">J</span><span className="kbd">K</span>
        <span>to move ·</span>
        <span className="kbd">T</span>
        <span>theme ·</span>
        <span style={{ fontStyle: "italic", fontSize: 11 }}>right-click projects</span>
        <button onClick={() => setKbdHint(false)} style={{ marginLeft: 4, fontSize: 12, opacity: 0.4 }}>✕</button>
      </div>
    </>
  );
}
