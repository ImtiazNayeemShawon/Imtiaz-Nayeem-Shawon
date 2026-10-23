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
  { id: "watch", label: "Watch" },
  { id: "blog", label: "Blog" },
  { id: "achievements", label: "Wins" },
  { id: "contact", label: "Contact" },
];

export const HERO = {
  sub: "RAG pipelines, multi-agent systems and LLM-powered SaaS. Most recently led AI at ScaleBuild AI.",
  stats: [
    { value: 5, suffix: "+", label: "Years building" },
    { value: 50, suffix: "+", label: "Projects shipped" },
    { text: "AI lead", label: "Ex-ScaleBuild AI" },
    { text: "Remote", label: "Open to work", open: true },
  ],
  tags: ["Python", "LangGraph", "RAG", "FastAPI", "Next.js"],
};

export const MARQUEE = [
  ["LangGraph"], ["Claude", true], ["FastAPI"], ["Next.js"], ["Pinecone", true], ["NestJS"],
  ["Redis"], ["Gemini", true], ["PostgreSQL"], ["AWS"], ["React Native", true], ["Docker"],
];

export const SERVICES = [
  { icon: "bot", title: "AI", em: "agents", desc: "Multi-step agents that use your tools and get real work done." },
  { icon: "search", title: "RAG &", em: "search", desc: "Accurate answers over your documents, data and knowledge base." },
  { icon: "monitor", title: "SaaS", em: "MVPs", desc: "From idea to launched product: backend, frontend and deploy." },
];

export const SKILLS = {
  ai: { label: "AI / LLM", items: ["Python", "LangGraph", "RAG & Vector Search", "Agentic AI Workflows", "Claude / GPT / Gemini / Groq", "Pinecone / pgvector / Qdrant", "Prompt Engineering", "AI Microservices", "LLM Tool Calling", "Multi-step Reasoning", "LLMOps", "Redis Semantic Cache"] },
  be: { label: "Backend", items: ["Node.js", "FastAPI", "NestJS", "Express.js", "REST APIs", "GraphQL", "Microservices", "RBAC / JWT / OAuth2", "Redis Caching", "Auth Systems", "WebSocket"] },
  fe: { label: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Zustand", "React Native", "Framer Motion"] },
  ops: { label: "DevOps / DB", items: ["AWS (EC2, S3, Lambda)", "Docker", "MongoDB & Mongoose", "PostgreSQL & Prisma", "Vercel / Railway / DigitalOcean", "Nginx", "CI/CD Pipelines", "Cloudinary"] },
};

export const EXPERIENCE = [
  {
    date: "Sep 2025 – Jun 2026",
    role: "Lead Software Engineer + Company Ops",
    org: "ScaleBuild AI · New York (Remote)",
    desc: "Led an AI-powered SaaS platform end to end and architected Redis and queue infrastructure that cut response times by 40%. Promoted to Lead, Company Operations in April 2026, overseeing strategy, hiring and cross-team coordination for a 10+ person team.",
    hl: "40%",
  },
  {
    date: "Jan 2021 – Now",
    ongoing: true,
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

/* Reels: set `src` to a file in /public/reels, or `embed` to a YouTube/Instagram embed URL. */
export const REELS = [
  { ep: "EP. 001", title: "Google gave AI its own email", src: "/reels/ep001.mp4", poster: "/reels/ep001.jpg" },
  { ep: "EP. 002", title: "Coming soon" },
  { ep: "EP. 003", title: "Coming soon" },
  { ep: "Video", title: "Coming soon", slot: "YouTube", long: true },
];

/* Blog: replace href with the real post URL when it exists. */
export const POSTS = [
  { tag: "Security", date: "22.10.2026", title: "Your PHP patch is", em: "due", hl: "today", href: "#blog" },
  { tag: "AI Infra", date: "21.10.2026", title: "Same model, different", em: "silicon", hl: "any chip", href: "#blog" },
  { tag: "AI Security", date: "21.10.2026", title: "One hacker, zero", em: "hands", hl: "agent speed", href: "#blog" },
];

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
