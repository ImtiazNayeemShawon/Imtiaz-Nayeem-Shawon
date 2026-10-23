/* Content for the home page (v2 Daily brief design). Edit text here, not in page.js. */

export const LINKS = {
  call: "https://cal.com/imtiaznayeem/30min",
  github: "https://github.com/ImtiazNayeemShawon",
  email: "hello@imtiazz.me",
  phone: "+880 1796 876012",
  site: "www.imtiazz.me",
};

export const NAV = [
  { id: "summary", label: "Summary" },
  { id: "services", label: "Services" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Work" },
  { id: "projects", label: "Projects" },
  { id: "content", label: "Content" },
  { id: "watch", label: "Watch" },
  { id: "blog", label: "Blog" },
  { id: "achievements", label: "Wins" },
  { id: "contact", label: "Contact" },
];

export const HERO = {
  sub: "RAG pipelines, multi-agent systems and LLM-powered SaaS. Now a Software Engineer at Oxale Infotech, focused on AI and backend.",
  stats: [
    { value: 5, suffix: "+", label: "Years building" },
    { value: 50, suffix: "+", label: "Projects shipped" },
    { text: "AI lead", label: "Ex-ScaleBuild AI" },
    { value: 2, suffix: "×", label: "AI Olympiad wins" },
  ],
  tags: ["Python", "LangGraph", "RAG", "FastAPI", "Next.js"],
};

export const MARQUEE = [
  ["LangGraph"], ["Claude", true], ["FastAPI"], ["Next.js"], ["Pinecone", true], ["NestJS"],
  ["Redis"], ["Gemini", true], ["PostgreSQL"], ["AWS"], ["React Native", true], ["Docker"],
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
  ai: { label: "AI / LLM", items: ["Python", "LangGraph", "RAG & Vector Search", "Agentic AI Workflows", "Claude / GPT / Gemini / Groq", "Pinecone / pgvector / Qdrant", "Prompt Engineering", "AI Microservices", "LLM Tool Calling", "Multi-step Reasoning", "LLMOps", "Redis Semantic Cache"] },
  be: { label: "Backend", items: ["Node.js", "FastAPI", "NestJS", "Express.js", "REST APIs", "GraphQL", "Microservices", "RBAC / JWT / OAuth2", "Redis Caching", "Auth Systems", "WebSocket"] },
  fe: { label: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Zustand", "React Native", "Framer Motion"] },
  ops: { label: "DevOps / DB", items: ["AWS (EC2, S3, Lambda)", "Docker", "MongoDB & Mongoose", "PostgreSQL & Prisma", "Vercel / Railway / DigitalOcean", "Nginx", "CI/CD Pipelines", "Cloudinary"] },
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
    date: "Sep 2025 – Jun 2026",
    role: "Lead Software Engineer + Company Ops",
    org: "ScaleBuild AI · New York (Remote)",
    desc: "Led an AI-powered SaaS platform end to end and architected Redis and queue infrastructure that cut response times by 40%. Promoted to Lead, Company Operations in April 2026, overseeing strategy, hiring and cross-team coordination for a 10+ person team.",
    hl: "40%",
  },
  {
    date: "Jan 2021 – Aug 2026",
    role: "Freelance Developer",
    org: "Independent · Remote",
    desc: "Architected backend and full-stack systems for 50+ client projects across industries. Led engineering teams of 3 to 5 developers and defined code standards, system architecture and delivery pipelines.",
    hl: "50+ client projects",
  },
  {
    date: "Aug – Sep 2025",
    role: "Lead Software Engineer",
    org: "AaladinAI · Dhaka",
    desc: "Built Scalova AI, a full-stack agentic content platform using LangGraph, Claude and Pinecone. Designed multi-step reasoning pipelines and stateful agent orchestration for AI content generation at scale.",
    hl: "Scalova AI",
  },
  {
    date: "Feb – Aug 2025",
    role: "Full Stack Engineer",
    org: "PixiQor",
    desc: "Built REST APIs and React Native apps shipped to the App Store and Google Play. Integrated NestJS backend services, led the mobile dev team and maintained 99.9% uptime.",
    hl: "99.9% uptime",
  },
  {
    date: "Sep 2024 – Jan 2025",
    role: "Full Stack Engineer",
    org: "OutNet · UK (Remote)",
    desc: "Engineered Node.js REST APIs and MongoDB schemas, and integrated Next.js SSR pages for 60% faster load times. Took part in code reviews and worked with cross-functional teams.",
    hl: "60% faster",
  },
  {
    date: "2022 – 2024",
    role: "Web Developer → IT Executive",
    org: "BSRS · Mental Health Care BD · Aruddho Ekattor · Cyber Teens BD",
    desc: "Built web apps, dashboards and event platforms for non-profits and a research society. Promoted to IT Executive at the Bangladesh Space Research Society, managing its IT operations and digital presence.",
    hl: "IT Executive",
  },
];

export const FEATURED = [
  { name: "Scalova", em: "AI", fig: "FIG. 02", figLabel: "Agentic content", art: "agent", cat: "AI SaaS platform", tags: ["LangGraph", "Claude API", "Pinecone", "FastAPI"], url: "https://scalova.ai", host: "scalova.ai" },
  { name: "Dealer", em: "Nexus", fig: "FIG. 03", figLabel: "Dealership portal", art: "car", cat: "Automotive dealership portal", tags: ["Next.js", "REST API", "Lead Routing"], url: "https://dealernexus.com", host: "dealernexus.com" },
];

export const NDA = ["Cosmpulse", "Ryun Shim Portfolio", "MZ Media Agency", "Zipbox Agency", "Frosty Icepod", "Skynetix"];

export const WINS = [
  { year: "2026", title: "International AI Olympiad", badge: "National Winner", lime: true },
  { year: "2025", title: "Bangladesh AI Olympiad", badge: "Regional Winner" },
  { year: "2023/24", title: "NASA Space Apps Challenge", badge: "Galactic Problem Solver" },
];

export const SCORES = [
  { value: 55, label: "LeetCode solved" },
  { value: 273, label: "CodeChef rating" },
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
