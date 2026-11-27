/* Case studies at /project/[slug]. Keep them short: one or two screenshots, the problem, what I built, the stack.
   Screenshots live in public/case/. Order here is the order shown on /projects and in "Next case study". */

export const CASES = [
  {
    slug: "hyperscaler",
    name: "Hyperscaler",
    em: "AI",
    cat: "AI Chief Marketing Officer",
    role: "Lead Engineer",
    year: "2026",
    status: "Live",
    url: "https://hyperscalerai.co",
    summary:
      "EVA is an AI CMO that plans, launches and optimizes paid ads across Meta, Google, TikTok, LinkedIn and X from one workspace, with a human approving every change before it goes live.",
    cover: { src: "/case/hyperscaler-hero.png", w: 800, h: 500 },
    shot: { src: "/case/hyperscaler-dash.png", w: 640, h: 360, caption: "The EVA dashboard: budget pacing, recommendations and live campaign metrics." },
    problem: [
      "Ad spend scattered across five platforms, each with its own dashboard",
      "Hours every week lost to manual bid and budget changes",
      "Underperforming campaigns and bad audiences spotted too late",
    ],
    built: [
      "The orchestration layer for the LLM agents that run campaign automation and insights",
      "A secure backend with RBAC, plus MCP access so teams can analyze ads from Claude",
      "Meta Ads API integrations with Redis caching",
      "Asynchronous workflows for long-running marketing jobs",
      "An approval flow: EVA proposes, nothing ships until a person approves it",
    ],
    stack: ["Multi-agent orchestration", "MCP", "Meta Ads API", "Node.js", "RBAC", "Redis", "Async workflows", "Slack"],
  },
  {
    slug: "iomi",
    name: "IOMI",
    em: "",
    cat: "AI Wealth OS for Entrepreneurs",
    role: "Full Stack Engineer",
    year: "2026",
    status: "Live",
    url: "https://iomifinance.com",
    summary:
      "IOMI puts a founder's personal and business wealth in one live net worth: bank accounts, company equity, real estate and collectibles. It then ranks the next best money moves with AI.",
    cover: { src: "/case/iomi-hero.png", w: 800, h: 500 },
    shot: { src: "/case/iomi-ai.png", w: 800, h: 500, caption: "Ask IOMI AI and the Capital Efficiency Score, computed by a deterministic engine." },
    problem: [
      "Founders' wealth is split across LLCs, holding companies and personal accounts",
      "Banks and aggregators can't see real estate, equity or collectibles",
      "General AI assistants guess at the numbers instead of computing them",
    ],
    built: [
      "A NestJS, PostgreSQL and TypeORM backend with Redis",
      "Secure, read-only financial data sync with Plaid",
      "JWT and Google OAuth2 authentication",
      "Next.js dashboards with Zustand and Recharts",
      "AI recommendations on top of deterministic net worth and score math",
    ],
    stack: ["NestJS", "PostgreSQL", "TypeORM", "Redis", "Plaid", "OAuth2", "Next.js", "Zustand", "Recharts"],
  },
  {
    slug: "vestornet",
    name: "VestorNet",
    em: "",
    cat: "Mortgage networking platform",
    role: "Lead Full Stack Engineer",
    year: "2025",
    status: "Live",
    url: "https://vestornet.com",
    summary:
      "A social network for the mortgage industry where agents, brokers, realtors and lenders connect, verify each other and close deals together.",
    cover: { src: "https://res.cloudinary.com/dif5pfkci/image/upload/v1756140509/Device_Mockup_Aug_25_2025_2_dyipfy.png", w: 1200, h: 800 },
    problem: [
      "No central place for mortgage professionals to meet and work together",
      "Hard to tell which professionals are credible",
      "Slow back and forth between agents, brokers and lenders",
    ],
    built: [
      "Verified profiles with role-based badges",
      "Real-time chat between every user type",
      "A personalized newsfeed and notifications on APNs and Firebase",
      "Search tailored to mortgage needs",
      "A Next.js admin dashboard for reporting",
    ],
    stack: ["React Native", "Expo", "Zustand", "Laravel 11", "Redis", "AWS S3", "Next.js", "Firebase"],
    stats: [["300+", "Verified professionals"], ["6 mo", "To launch"]],
  },
  {
    slug: "flourish",
    name: "Flourish",
    em: "",
    cat: "Personal finance companion",
    role: "Full Stack Engineer",
    year: "2025",
    status: "In development",
    url: null,
    summary:
      "A mobile and web app for personal finance: track transactions and investments, set goals, and ask an AI assistant about your money.",
    cover: null,
    problem: [
      "Spending, income and investments live in different apps",
      "Little visibility into how a portfolio is really doing",
      "Goals are hard to set and even harder to keep track of",
    ],
    built: [
      "A Bun and Hono API with MongoDB and Redis",
      "Bank account sync with Plaid and webhooks with Svix",
      "AI insights and chat with the OpenAI API",
      "An Expo React Native app with in-app purchases through RevenueCat",
      "A React and Vite web dashboard with charts and goal tracking",
    ],
    stack: ["Bun", "Hono", "MongoDB", "Redis", "Plaid", "OpenAI", "Clerk", "React Native", "React", "Vite"],
    stats: [["4 mo", "Build time"], ["3", "Apps: mobile, web, API"]],
  },
];

export const caseBySlug = (slug) => CASES.find((c) => c.slug === slug);
