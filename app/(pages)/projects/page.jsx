"use client";

/* All projects — v3 "Systems" design. Shared frame: app/(components)/imtiazz/ui.jsx */

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Frame, PageHead, Icon, Reveal, glow } from "@/app/(components)/imtiazz/ui";
import { CASES } from "@/app/(components)/imtiazz/cases";

const PROJECTS = [
  {
    name: "Eva CMO · Hyperscaler AI",
    cat: "AI Chief Marketing Officer",
    url: "https://hyperscalerai.co",
    desc: "EVA, an AI CMO that plans, launches and optimizes paid ads across Meta, Google, TikTok, LinkedIn and X in one workspace. I built the secure backend (RBAC, MCP, Meta Ads API integrations, Redis caching, asynchronous workflows) and the orchestration layer for the LLM agents behind campaign automation and marketing insights.",
    tags: ["Multi-Agent Orchestration", "MCP", "Meta Ads API", "RBAC", "Redis", "Async Workflows"],
    status: "Live",
    year: "2026",
    role: "Lead Engineer",
    study: "hyperscaler",
    highlights: [
      "Orchestration layer for multiple LLM agents running campaign automation",
      "Secure backend with RBAC and MCP access from Claude",
      "Meta Ads API integrations with Redis caching",
      "Asynchronous workflows for long-running marketing jobs",
      "Human approval in the Action Center before anything goes live",
    ],
  },
  {
    name: "IOMI",
    cat: "AI Wealth OS for Entrepreneurs",
    url: "https://iomifinance.com",
    desc: "An AI wealth OS for entrepreneurs. A NestJS, PostgreSQL and TypeORM backend with Redis, JWT, Google OAuth2 and Plaid for secure financial data sync, and a Next.js frontend with React, Zustand and Recharts for financial dashboards and AI-powered recommendations.",
    tags: ["NestJS", "PostgreSQL", "TypeORM", "Redis", "Plaid", "OAuth2", "Next.js", "Recharts"],
    status: "Live",
    year: "2026",
    role: "Full Stack Engineer",
    study: "iomi",
    highlights: [
      "Secure financial data sync with Plaid",
      "JWT and Google OAuth2 authentication",
      "NestJS + PostgreSQL + TypeORM backend with Redis",
      "Financial dashboards in Next.js with Recharts",
      "AI-powered financial recommendations",
    ],
  },
  {
    name: "Vestornet",
    cat: "Mortgage Social Platform",
    url: "https://vestornet.com",
    desc: "A mortgage-focused social platform where agents, brokers, realtors and lenders connect. I led full-stack development: real-time chat, verified profiles, search and personalized feeds, with notification and newsfeed services on APNs and Firebase.",
    tags: ["React Native", "Real-time Chat", "APNs", "Firebase", "Search", "Feeds"],
    status: "Live",
    year: "2025",
    role: "Lead Full Stack Engineer",
    study: "vestornet",
    highlights: [
      "Real-time chat between verified professionals",
      "Personalized newsfeed and notification services",
      "Push notifications with APNs and Firebase",
      "Verified profiles and search",
    ],
  },
  {
    name: "Scalova AI",
    cat: "AI Content Platform",
    url: "https://scalova.ai",
    desc: "Agentic content platform built at AaladinAI. I built the backend architecture in Python and Pinecone, with multi-LLM integrations and orchestration for AI workflows, REST APIs with JWT and RBAC, Redis caching, and Docker, GitHub Actions and AWS infrastructure for production.",
    tags: ["Python", "Pinecone", "Multi-LLM", "REST APIs", "JWT / RBAC", "Redis", "Docker", "AWS"],
    status: "Live",
    year: "2025",
    role: "Backend Engineer",
    highlights: [
      "Backend architecture in Python with Pinecone retrieval",
      "Multi-LLM integrations and workflow orchestration",
      "REST APIs secured with JWT and RBAC",
      "Redis caching for faster responses",
      "Docker, GitHub Actions and AWS for production",
    ],
  },
  {
    name: "Dealer Nexus",
    cat: "SaaS Platform",
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
const FILTERS = [["all", "All"], ["live", "Live"], ["nda", "Under NDA"]];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("all");
  const [active, setActive] = useState(slugify(PROJECTS[0].name));
  const list = useMemo(() => PROJECTS.filter((p) => filter === "all" || (filter === "live" ? p.status === "Live" : p.status !== "Live")), [filter]);
  const live = PROJECTS.filter((p) => p.status === "Live").length;

  /* scroll-spy for the side index */
  useEffect(() => {
    const obs = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: "-30% 0px -60% 0px" }
    );
    list.forEach((p) => { const el = document.getElementById(slugify(p.name)); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, [list]);

  return (
    <Frame active="projects">
      <PageHead eyebrow="Work · 2021 → now" title={<>Everything I&apos;ve <span className="h1-2">shipped.</span></>}
        lead="AI systems, SaaS platforms, e-commerce and digital products. Several are under NDA; architecture and execution details are available on a call.">
        <div className="head-stats">
          <div><b>{PROJECTS.length}</b><span>Products</span></div>
          <div><b>{live}</b><span>Live &amp; public</span></div>
          <div><b>{PROJECTS.length - live}</b><span>Under NDA</span></div>
          <div><b>{CASES.length}</b><span>Case studies</span></div>
        </div>
      </PageHead>

      <section className="sec-tight">
        <Reveal className="sec-head"><div><span className="eyebrow">Deep dives</span><h2>Case studies</h2></div></Reveal>
        <Reveal className="case-cards four">
          {CASES.map((c) => (
            <Link key={c.slug} href={`/project/${c.slug}`} className="cc" onMouseMove={glow}>
              <span className="cc-img">
                {c.cover ? <Image src={c.cover.src} alt={`${c.name} home page`} width={c.cover.w} height={c.cover.h} /> : <span className="cc-ph">{c.name}</span>}
              </span>
              <span className="cc-txt"><b>{c.name}{c.em && ` ${c.em}`}</b><small>{c.cat}</small></span>
              <span className="rbtn"><Icon name="arrowUR" /></span>
            </Link>
          ))}
        </Reveal>
      </section>

      <section className="sec-tight">
        <Reveal className="sec-head">
          <div><span className="eyebrow">Index</span><h2>All projects</h2></div>
          <div className="tabs" role="tablist" aria-label="Filter projects">
            {FILTERS.map(([k, l]) => (
              <button key={k} type="button" role="tab" className="tab" aria-selected={filter === k} onClick={() => setFilter(k)}>{l}</button>
            ))}
          </div>
        </Reveal>

        <div className="plist-wrap">
          <nav className="pindex" aria-label="Projects">
            {list.map((p) => {
              const id = slugify(p.name);
              return (
                <a key={id} href={`#${id}`} className={active === id ? "on" : ""}>
                  <span>{String(PROJECTS.indexOf(p) + 1).padStart(2, "0")}</span>{p.name}
                </a>
              );
            })}
          </nav>

          <div className="plist">
            {list.map((p) => (
              <Reveal as="article" key={p.name} id={slugify(p.name)} className="pcard" onMouseMove={glow}>
                <div className="pcard-top">
                  <span className="pnum">{String(PROJECTS.indexOf(p) + 1).padStart(2, "0")}</span>
                  <p className="case-meta">{p.cat} <i>•</i> {p.year} <i>•</i> {p.role}</p>
                  <span className={`badge ${p.status === "Live" ? "lime" : ""}`}>{p.status === "Live" ? "Live" : "NDA"}</span>
                </div>
                <h3>{p.name}</h3>
                <p className="case-desc">{p.desc}</p>
                <ul className="phl">{p.highlights.map((h) => <li key={h}><Icon name="check" />{h}</li>)}</ul>
                <div className="chips">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
                {p.url ? (
                  <div className="case-links">
                    {p.study && <Link className="link" href={`/project/${p.study}`}>Read case study <Icon name="arrowR" /></Link>}
                    <a className="link" href={p.url} target="_blank" rel="noopener noreferrer">Visit {p.url.replace(/^https?:\/\//, "")} <Icon name="arrowUR" /></a>
                  </div>
                ) : (
                  <p className="pnda"><Icon name="lock" />Under NDA. Happy to walk through the architecture and decisions on a call.</p>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </Frame>
  );
}
