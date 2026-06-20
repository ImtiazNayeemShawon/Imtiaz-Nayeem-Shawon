"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

/* ══════════════════════════════════════════
   DATA (mirrored from page.js)
══════════════════════════════════════════ */
const PROJECTS = [
  {
    name: "Scalova AI",
    cat: "AI SaaS Platform",
    emoji: "🤖",
    url: "https://scalova.ai",
    desc: "Full-stack agentic content generation platform built at AaladinAI. Powered by LangGraph, Claude API, and Pinecone for multi-agent orchestration, semantic search over indexed document stores, and real-time LLM output streaming. System includes persistent agent state, human-in-the-loop checkpoints, and Redis-cached embeddings for low-latency responses.",
    tags: ["LangGraph", "Claude API", "Pinecone", "FastAPI", "Next.js", "Redis", "Python", "Semantic Search"],
    status: "Live",
    year: "2025",
    role: "Lead Software Engineer",
    highlights: [
      "Multi-agent orchestration with LangGraph cyclic state machines",
      "Semantic vector search using Pinecone embeddings",
      "Real-time streaming output to frontend clients",
      "Redis caching for prompt embeddings, reducing latency by ~40%",
      "FastAPI microservices optimized for concurrent LLM requests",
    ],
  },
  {
    name: "Dealer Nexus",
    cat: "SaaS Platform",
    emoji: "⚡",
    url: "https://dealernexus.com",
    desc: "Automotive dealership unified portal — custom dashboard, secure authentication flows with RBAC, intelligent lead routing logic, and high-performance REST API integrations for coordinating complex dealer workflows, lead intake pipelines, and real-time dealership data management.",
    tags: ["Next.js", "REST API", "RBAC", "Authentication", "Lead Routing", "Dashboard", "Node.js"],
    status: "Live",
    year: "2024",
    role: "Full-Stack Engineer",
    highlights: [
      "Role-based access control (RBAC) for multi-tier user management",
      "Intelligent lead routing and assignment workflows",
      "Real-time dashboard with dealership performance metrics",
      "Secure multi-factor authentication system",
      "High-performance REST API integrations with third-party dealer platforms",
    ],
  },
  {
    name: "Cosmpulse",
    cat: "Productivity SaaS",
    emoji: "✅",
    url: null,
    desc: "A focused habit tracking and daily productivity dashboard. Features interactive visual habit tracker components, streak visualization, daily logging systems, and user progress analytics. Built with a lightweight Zustand state management layer for snappy client-side performance. Designed for consistent daily use without cognitive overhead.",
    tags: ["React", "Zustand", "Dashboard", "User Tracking", "Visual Analytics", "Node.js", "MongoDB"],
    status: "Confidential",
    year: "2024",
    role: "Full-Stack Engineer",
    highlights: [
      "Interactive visual habit tracker with streak visualization",
      "Daily logging system with flexible habit categories",
      "Progress analytics and performance charting",
      "Lightweight Zustand state management for fast UI",
      "User account management and data persistence",
    ],
  },
  {
    name: "Ryun Shim Portfolio",
    cat: "Academic Showcase",
    emoji: "🎓",
    url: null,
    desc: "Premium visual CV for a Cornell University graduate — minimal, high-performance profile site with animated components, academic publication indexes, credential display systems, and seamless contact integration. Optimized for fast load times and academic credibility. Built to convert academic prestige into professional opportunities.",
    tags: ["Next.js", "Framer Motion", "Portfolio", "Performance", "TypeScript", "Tailwind CSS"],
    status: "Confidential",
    year: "2024",
    role: "Frontend Engineer",
    highlights: [
      "Animated section reveals with Framer Motion viewport detection",
      "Academic publication index with sorting and filtering",
      "Sub-2s Time to Interactive on cold load",
      "Mobile-first responsive layout for all screen sizes",
      "Seamless contact and collaboration request integration",
    ],
  },
  {
    name: "MZ Media Agency",
    cat: "Digital Agency",
    emoji: "📱",
    url: null,
    desc: "High-converting agency website for an established video production company. Features optimized video case study players, client review carousels, performance-enhanced media delivery via Cloudinary, and multi-step lead capture systems. Built for maximum conversion and SEO performance.",
    tags: ["Next.js", "Tailwind CSS", "SEO", "Lead Capture", "Cloudinary", "Video Streaming", "Analytics"],
    status: "Confidential",
    year: "2024",
    role: "Full-Stack Engineer",
    highlights: [
      "Cloudinary-powered optimized video delivery and case studies",
      "Multi-step lead capture funnels with CRM integration",
      "Client testimonial and review carousel systems",
      "Core Web Vitals optimization (LCP, CLS, FID)",
      "On-page SEO structure for agency service keywords",
    ],
  },
  {
    name: "Zipbox Agency",
    cat: "Design & Dev Agency",
    emoji: "🎨",
    url: null,
    desc: "Visually outstanding portfolio showcase for a premium design agency. Features complex horizontal scroll components, custom micro-interaction animations, a bespoke CSS Grid layout, and creative design elements that capture high-value design leads. Built to demonstrate creative engineering capability to sophisticated clients.",
    tags: ["React", "Horizontal Scroll", "Tailwind CSS", "Micro-interactions", "Custom Animation", "Framer Motion"],
    status: "Confidential",
    year: "2024",
    role: "Frontend Engineer",
    highlights: [
      "Custom horizontal scroll experience with smooth physics",
      "Bespoke micro-interaction animations for each section",
      "Creative CSS Grid layout with variable column spans",
      "Portfolio showcase with project case study modals",
      "High-performance animation with no layout shift",
    ],
  },
  {
    name: "Frosty Icepod",
    cat: "E-Commerce",
    emoji: "🛒",
    url: null,
    desc: "High-converting product e-commerce catalog for an ice pod retail brand. Custom shopping cart engine with quantity management, a native review and rating system, full Stripe checkout integration with webhooks, and conversion-optimized product and landing pages designed for maximum purchase intent.",
    tags: ["Next.js", "Stripe API", "Cart System", "Webhooks", "MongoDB", "Conversion Optimization", "Node.js"],
    status: "Confidential",
    year: "2025",
    role: "Full-Stack Engineer",
    highlights: [
      "Custom shopping cart with persistent state management",
      "Stripe Checkout with webhook-based order fulfillment",
      "Native customer review and rating system",
      "Product detail pages optimized for conversion",
      "Inventory management admin panel",
    ],
  },
  {
    name: "Skynetix",
    cat: "Marketing Agency",
    emoji: "📢",
    url: null,
    desc: "Premium multi-page marketing hub for a digital marketing firm. Comprehensive service listings with detailed case study sections, client proof systems, service intake funnels with qualification logic, and a fully responsive layout architecture built to establish authority and generate qualified leads at scale.",
    tags: ["Next.js", "Lead Flow", "Marketing", "Multi-page", "Responsive", "Tailwind CSS", "SEO"],
    status: "Confidential",
    year: "2025",
    role: "Full-Stack Engineer",
    highlights: [
      "Multi-page architecture with service-specific landing pages",
      "Service intake funnels with lead qualification logic",
      "Client case study system with results metrics",
      "Comprehensive SEO structure across all pages",
      "Fully responsive layout for all device sizes",
    ],
  },
];

const slugify = (str) => str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

/* ══════════════════════════════════════════
   COMPONENT
══════════════════════════════════════════ */
export default function ProjectsPage() {
  const [active, setActive]   = useState(PROJECTS[0].name);
  const [theme, setTheme]     = useState("dark");

  /* ── Theme persistence ── */
  useEffect(() => {
    try { const s = localStorage.getItem("p-theme"); if (s) setTheme(s); } catch {}
  }, []);
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem("p-theme", theme); } catch {}
  }, [theme]);

  /* ── Scroll-spy ── */
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.getAttribute("data-proj")); }),
      { rootMargin: "-25% 0px -60% 0px" }
    );
    PROJECTS.forEach((p) => {
      const el = document.getElementById(slugify(p.name));
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const scrollTo = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const isLight = theme === "light";

  return (
    <div className="layout">
      {/* ════════ SIDEBAR ════════ */}
      <aside className="proj-page-sidebar">
        <Link href="/" className="proj-page-back">
          ← Back to Portfolio
        </Link>
        <p className="nav-section-label">Projects ({PROJECTS.length})</p>
        <nav style={{ display: "flex", flexDirection: "column", gap: 2, flex: 1 }}>
          {PROJECTS.map((p, i) => (
            <button
              key={p.name}
              onClick={() => scrollTo(slugify(p.name))}
              className={`nav-item${active === p.name ? " active" : ""}`}
              style={{ fontSize: 12.5 }}
            >
              <span className="nav-item-left">
                <span className="nav-icon">{p.emoji}</span>
                <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{p.name}</span>
              </span>
              <span style={{ fontSize: 10, opacity: 0.4, flexShrink: 0 }}>{String(i + 1).padStart(2, "0")}</span>
            </button>
          ))}
        </nav>
        <div style={{ borderTop: "1px solid var(--border)", paddingTop: 14 }}>
          <button
            onClick={() => setTheme((p) => p === "dark" ? "light" : "dark")}
            className="theme-toggle"
            style={{ width: "100%" }}
          >
            <div className={`toggle-track${isLight ? " on" : ""}`}><div className="toggle-knob" /></div>
            <span>{isLight ? "Light mode" : "Dark mode"}</span>
          </button>
        </div>
      </aside>

      {/* ════════ MAIN ════════ */}
      <main className="proj-page-main">
        <h1 className="proj-page-title">Projects</h1>
        <p className="proj-page-subtitle">
          {PROJECTS.length} projects across AI systems, SaaS platforms, e-commerce, and digital products.
          Several are under NDA — architecture and execution details available on request.
        </p>

        {PROJECTS.map((p, i) => (
          <div
            key={p.name}
            id={slugify(p.name)}
            data-proj={p.name}
            className="proj-full-section"
          >
            <div className="proj-full-cat">
              <span>{p.cat}</span>
              <span style={{ opacity: 0.4 }}>·</span>
              <span>{p.year}</span>
              <span style={{ opacity: 0.4 }}>·</span>
              <span>{p.role}</span>
            </div>

            <div className="proj-full-title">
              <span>{p.emoji}</span>
              <span>{p.name}</span>
              {p.url && (
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="proj-full-link">
                  Live ↗
                </a>
              )}
              <span className={`proj-full-status-badge${p.status === "Live" ? " live" : " nda"}`}>
                {p.status === "Live" ? "✓ Live" : "🔒 Confidential"}
              </span>
            </div>

            <p className="proj-full-desc">{p.desc}</p>

            {/* Highlights */}
            <div style={{ marginBottom: 16 }}>
              <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 8 }}>
                Key Highlights
              </p>
              <ul style={{ display: "flex", flexDirection: "column", gap: 5, listStyle: "none" }}>
                {p.highlights.map((h) => (
                  <li key={h} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 13, color: "var(--text-sub)", lineHeight: 1.55 }}>
                    <span style={{ color: "var(--accent-text)", flexShrink: 0, marginTop: 2 }}>›</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="proj-full-tags">
              {p.tags.map((t) => <span key={t} className="proj-full-tag">{t}</span>)}
            </div>

            {!p.url && (
              <div style={{ marginTop: 12, padding: "9px 13px", borderRadius: 7, background: "var(--input-bg)", border: "1px solid var(--border)", fontSize: 12, color: "var(--text-muted)", lineHeight: 1.6 }}>
                🔒 Under NDA. Architecture patterns, system design, and technical decisions are consistent with my
                publicly visible work. Happy to discuss specifics on a call.
              </div>
            )}
          </div>
        ))}

        {/* Footer CTA */}
        <div style={{ marginTop: 48, padding: "24px 0", borderTop: "1px solid var(--border)", display: "flex", flexWrap: "wrap", alignItems: "center", gap: 12 }}>
          <a href="https://cal.com/imtiaznayeem/30min" target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", background: "var(--accent)", color: "#fff", borderRadius: 8, fontSize: 13, fontWeight: 500 }}>
            Book a call to discuss →
          </a>
          <a href="mailto:hello@imtiazz.me"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", border: "1px solid var(--border)", color: "var(--text-sub)", borderRadius: 8, fontSize: 13 }}>
            ✉ hello@imtiazz.me
          </a>
          <Link href="/" style={{ fontSize: 13, color: "var(--text-muted)", marginLeft: "auto" }}>
            ← Back to portfolio
          </Link>
        </div>
      </main>
    </div>
  );
}
