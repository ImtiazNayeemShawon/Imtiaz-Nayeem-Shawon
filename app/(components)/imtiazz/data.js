/* Content for the home page (v2 Daily brief design). Edit text here, not in page.js. */

export const LINKS = {
  call: "https://cal.com/imtiaznayeem/30min",
  github: "https://github.com/ImtiazNayeemShawon",
  email: "hello@imtiazz.me",
  phone: "+880 1796 876012",
  site: "www.imtiazz.me",
};

export const NAV = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const HERO = {
  hi: "Hi, I'm Imtiaz",
  handle: "imtiazz",
  title: ["I'm an AI", "Systems Engineer."],
  lead: "One engineer. From model to production.",
  meta: ["5+ years experience", "Agents · RAG · LLMOps", "Dhaka · Remote worldwide"],
  sub: "RAG pipelines, multi-agent systems and LLM-powered SaaS. Now a Software Engineer at Oxale Infotech, focused on AI and backend.",
  stats: [
    { value: 5, suffix: "+", label: "Years building" },
    { value: 2, suffix: " yrs", label: "Focused on AI & LLM products" },
    { value: 3, suffix: "", label: "AI SaaS products orchestrated" },
    { value: 2, suffix: "×", label: "AI Olympiad wins" },
  ],
  tags: ["TypeScript", "LangGraph", "RAG", "NestJS", "Next.js"],
};

export const MARQUEE = [
  ["LangGraph"], ["Claude"], ["NestJS"], ["Next.js"], ["Pinecone"], ["BullMQ"], ["Hono.js"],
  ["Redis"], ["Gemini"], ["PostgreSQL"], ["AWS"], ["React Native"], ["Docker"], ["MCP"],
];

export const SERVICES = [
  { icon: "bot", title: "AI", em: "agents", desc: "Multi-step agents that plan, call your tools and APIs, and finish real tasks." },
  { icon: "search", title: "RAG &", em: "search", desc: "Accurate, cited answers over your docs and data, with hybrid search and re-ranking." },
  { icon: "plug", title: "LLM", em: "integration", desc: "Claude, GPT or Gemini added to your product with tool calling, streaming and guardrails." },
  { icon: "server", title: "Scalable", em: "backends", desc: "FastAPI and NestJS APIs with auth, RBAC, queues and Redis caching, built for load." },
  { icon: "activity", title: "LLMOps &", em: "cost", desc: "Evals, monitoring and semantic caching that cut latency and token spend in production." },
  { icon: "monitor", title: "SaaS", em: "MVPs", desc: "Idea to launched product: backend, frontend, payments and deploy on AWS or Vercel." },
];

export const SKILLS = {
  ai: { label: "Backend / AI", items: ["TypeScript", "Python", "Node.js", "NestJS", "Express", "Hono.js", "LangGraph", "LangChain", "RAG", "Multi-Agent Systems", "Claude / GPT / Gemini", "Pinecone", "MCP", "REST APIs", "Microservices"] },
  sys: { label: "System design & data", items: ["Redis", "BullMQ", "Message Queues", "Event-Driven Architecture", "Async Processing", "PostgreSQL", "MongoDB", "TypeORM", "Schema Design", "Query Optimization"] },
  fe: { label: "Frontend", items: ["Next.js (SSR/SSG)", "React", "React Native", "Zustand", "Recharts", "Responsive UI"] },
  ops: { label: "Security, DevOps & integrations", items: ["RBAC / ABAC", "JWT / OAuth2", "Secure API Design", "AWS", "Docker", "Nginx", "GitHub Actions", "CI/CD", "Stripe", "Plaid", "Dropbox Sign", "Meta Graph API", "APNs", "Firebase"] },
};

export const EXPERIENCE = [
  {
    date: "Aug 2026 – Now",
    ongoing: true,
    role: "Software Engineer",
    org: "Oxale Infotech",
    desc: "Focused on AI and backend engineering: LLM-powered features, APIs and the services behind them, built for production.",
    hl: "AI and backend",
  },
  {
    date: "Sep 2025 – Jul 2026",
    role: "Software Engineer",
    org: "ScaleBuild AI · New York (Remote)",
    desc: "Designed and built backend services and APIs for a production SaaS platform, including service architecture, background jobs and third-party integrations. Built event-driven architecture, Redis caching and queue-based processing that cut average response times by around 40%, and developed AI orchestration across 3 successful SaaS products.",
    hl: "around 40%",
  },
  {
    date: "Aug – Sep 2025",
    role: "Backend Engineer",
    org: "AaladinAI · Dhaka (Contract)",
    desc: "Built the backend architecture for Scalova using Python and Pinecone, including multi-LLM integrations and orchestration for AI workflows. Designed REST APIs with JWT and RBAC, added Redis caching, and set up Docker, GitHub Actions and AWS infrastructure for production.",
    hl: "Scalova",
  },
  {
    date: "Mar – Aug 2025",
    role: "Full Stack Engineer",
    org: "PixiQor · Dhaka (Remote)",
    desc: "Built production REST APIs with Node.js and Express and React Native features for apps published on the App Store and Google Play. Deployed and maintained backend services with monitoring, keeping 99.9% uptime across production apps.",
    hl: "99.9% uptime",
  },
  {
    date: "Sep 2024 – Feb 2025",
    role: "Full Stack Engineer",
    org: "OutNet · UK (Remote)",
    desc: "Built full-stack features with MongoDB, REST APIs and Next.js, improving page load times by around 60%. Integrated payment systems, fixed critical production issues and contributed to code reviews.",
    hl: "around 60%",
  },
  {
    date: "Aug 2023 – Aug 2024",
    role: "Full Stack Engineer",
    org: "Freelance · Remote",
    desc: "Built full-stack applications and APIs for 10+ client projects, including products with AI features and automation. Contributed to technical standards around testing, security and code quality across projects.",
    hl: "10+ client projects",
  },
];

export const FEATURED = [
  { name: "Eva", em: "CMO", role: "Lead Engineer", year: "Live", headline: "EVA, an AI CMO that runs paid ads on autopilot",
    desc: "A secure backend with RBAC, MCP, Meta Ads API integrations, Redis caching and asynchronous workflows for an AI marketing automation platform, plus the orchestration layer for the LLM agents that run campaign automation and marketing insights.",
    art: "ads", cat: "AI Chief Marketing Officer", tags: ["Multi-agent orchestration", "MCP", "Meta Ads API", "RBAC", "Redis", "Async workflows"], url: "https://hyperscalerai.co", host: "hyperscalerai.co", study: "/project/hyperscaler" },
  { name: "IOMI", em: "", role: "Full Stack Engineer", year: "Live", headline: "An AI wealth OS that plans a founder's next move",
    desc: "A NestJS, PostgreSQL and TypeORM backend with Redis, JWT, Google OAuth2 and Plaid for secure financial data sync, and a Next.js frontend with Zustand and Recharts for financial dashboards and AI-powered recommendations.",
    art: "wealth", cat: "AI Wealth OS for Entrepreneurs", tags: ["NestJS", "PostgreSQL", "Plaid", "OAuth2", "Next.js", "Recharts"], url: "https://iomifinance.com", host: "iomifinance.com", study: "/project/iomi" },
  { name: "VestorNet", em: "", role: "Lead Full Stack Engineer", year: "2025", headline: "Where mortgage pros connect and close deals",
    desc: "Led full-stack development of a React Native and Next.js platform with a Laravel backend: verified profiles, real-time chat, search and a personalized newsfeed, with notifications on APNs and Firebase.",
    art: "img", img: "https://res.cloudinary.com/dif5pfkci/image/upload/v1756140509/Device_Mockup_Aug_25_2025_2_dyipfy.png", cat: "Mortgage networking platform", tags: ["React Native", "Next.js", "Laravel", "Real-time chat", "Redis", "Firebase"], url: "https://vestornet.com", host: "vestornet.com", study: "/project/vestornet" },
  { name: "Scalova", em: "AI", role: "Backend Engineer", year: "2025", headline: "The backend for an agentic content platform",
    desc: "Built at AaladinAI: the backend architecture in Python and Pinecone, with multi-LLM integrations and orchestration for AI workflows, REST APIs with JWT and RBAC, Redis caching, and Docker, GitHub Actions and AWS for production.",
    art: "agent", cat: "AI content platform", tags: ["Python", "Pinecone", "Multi-LLM", "Redis", "Docker", "AWS"], url: "https://scalova.ai", host: "scalova.ai" },
];

/* About section on the home page (from the resume summary). */
export const ABOUT = {
  lead: "I'm a full-stack engineer with 5+ years of building production systems in TypeScript, Node.js, NestJS and Next.js. For the last 2 years I've focused on AI and LLM products.",
  body: [
    "I build LangGraph multi-agent workflows, RAG pipelines and integrations with Claude, GPT and Gemini, and the backend that keeps them fast and safe: queues, caching, event-driven services and secure APIs.",
    "I like owning features end to end, from database design and APIs to frontend, testing and deployment. Outside client work I compete in AI olympiads and explain AI simply on social media.",
  ],
  facts: [
    ["Based in", "Dhaka, Bangladesh · open to remote"],
    ["Focus", "AI agents, RAG, LLM-powered SaaS"],
    ["Core stack", "TypeScript · NestJS · Next.js · Python"],
    ["Education", "A Levels, Mathematics & Computer Science"],
  ],
};

export const NDA = ["Cosmpulse", "Ryun Shim Portfolio", "MZ Media Agency", "Zipbox Agency", "Frosty Icepod", "Skynetix"];

export const WINS = [
  { year: "2026", title: "International AI Olympiad", badge: "National Winner", lime: true },
  { year: "2025", title: "Bangladesh AI Olympiad", badge: "Regional Winner" },
  { year: "2023/24", title: "NASA Space Apps Challenge", badge: "Galactic Problem Solver" },
];

export const SCORES = [
  { value: 55, label: "LeetCode solved" },
  { value: 273, label: "CodeChef solved" },
];

export const ECA = [
  ["Technovation Hackathon 2025", "Top 10"],
  ["NHSPC 2025", "Regional Winner"],
  ["ZippyAI & MindSpace AI", "Co-founder"],
];

/* Social profiles: shown in the Content section, Contact and the footer. */
export const SOCIALS = [
  { key: "youtube", name: "YouTube", handle: "@Imtiaznayeemshawon", url: "https://www.youtube.com/@Imtiaznayeemshawon", what: "Explainers & long form" },
  { key: "instagram", name: "Instagram", handle: "@imtiaz.shw", url: "https://www.instagram.com/imtiaz.shw/", what: "AI Made Simple reels" },
  { key: "linkedin", name: "LinkedIn", handle: "Imtiaz Nayeem Shawon", url: "https://www.linkedin.com/in/imtiaz-nayeem-shawon-658525414/", what: "Daily brief posts" },
  { key: "x", name: "X", handle: "@imtiaz_ns", url: "https://x.com/imtiaz_ns", what: "Daily brief & notes" },
  { key: "facebook", name: "Facebook", handle: "imtiaznayeemshawon", url: "https://www.facebook.com/imtiaznayeemshawon", what: "Reels & updates" },
];

/* Content journey, in order. */
export const JOURNEY = [
  { when: "Before", title: "Random", em: "reels", desc: "Posted whatever caught my eye. Fun, but no thread tying it together." },
  { when: "Oct 2026", title: "Daily", em: "brief", desc: "One poster a day on the AI and software news that matters, every morning." },
  { when: "Oct 2026", title: "AI Made", em: "Simple", desc: "Reels that show how AI actually works, for normal people and fast learners." },
  { when: "Next", title: "Build in", em: "public", desc: "Ship AI products and explain how they work while I build them.", next: true },
];
