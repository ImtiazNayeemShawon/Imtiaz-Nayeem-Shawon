/* Content for the hidden AI Inbox Assistant service page (/ai-inbox).
   Edit text, prices and the demo video here, not in InboxPage.jsx. */

export const LINKS = {
  call: "https://cal.com/imtiaznayeem/30min",
  email: "imtiaznayim95@gmail.com",
  site: "www.imtiazz.me",
};

/* Demo video under the hero. Fill ONE of these:
   youtube: any YouTube link (watch, youtu.be, shorts or embed)
   mp4:     a file in /public, e.g. "/videos/ai-inbox-demo.mp4" (poster optional)
   Leave both empty to show the "coming soon" frame. */
export const VIDEO = {
  youtube: "",
  mp4: "",
  poster: "",
  title: "60-sec walkthrough",
};

export const NAV = [
  { id: "how", label: "How it works" },
  { id: "pricing", label: "Pricing" },
  { id: "faq", label: "FAQ" },
];

export const HERO = {
  kicker: "AI INBOX ASSISTANT",
  sub: "AI that replies to your DMs, forms and emails in seconds, then books the consultation.",
};

/* Animated inbox in the hero */
export const FEED = [
  { icon: "instagram", ch: "Instagram", msg: "how much is lip filler?", t: "2s" },
  { icon: "form", ch: "Website form", msg: "Laser consultation", t: "4s" },
  { icon: "whatsapp", ch: "WhatsApp", msg: "Any slots Saturday?", t: "3s" },
  { icon: "mail", ch: "Email", msg: "Do you offer packages?", t: "6s" },
];

export const CHANNELS = [
  { icon: "instagram", label: "Instagram" },
  { icon: "facebook", label: "Messenger" },
  { icon: "whatsapp", label: "WhatsApp" },
  { icon: "form", label: "Website forms" },
  { icon: "mail", label: "Email" },
];

export const OUTCOMES = [
  { icon: "calendar", label: "Consult booked" },
  { icon: "sheet", label: "Lead logged" },
  { icon: "bell", label: "Team alerted" },
];

export const LEAKS = [
  { icon: "clock", title: "Slow", em: "replies" },
  { icon: "moon", title: "Missed", em: "at night" },
  { icon: "form", title: "Forms", em: "unread" },
  { icon: "ghost", title: "No", em: "follow-up" },
];

export const STEPS = [
  { icon: "message", label: "Message in" },
  { icon: "zap", label: "Instant reply" },
  { icon: "userCheck", label: "Qualified" },
  { icon: "calendar", label: "Booked" },
  { icon: "sheet", label: "Logged" },
];

/* Example conversation (fictional spa) */
export const CHAT = {
  account: "glowstudio.spa",
  time: "Sat 11:42 PM",
  msgs: [
    { from: "them", text: "hi! how much is lip filler? 😊" },
    { from: "ai", text: "Hi! It starts at $450, and the consultation is free. Thu 4:30 PM or Sat 11 AM?" },
    { from: "them", text: "sat 11 works" },
    { from: "ai", text: "Booked ✅ Sat 11:00 AM. What's your name and phone number?" },
    { from: "them", text: "Sara, (555) 010-2233" },
    { from: "ai", text: "Thanks Sara, see you Saturday 💛" },
  ],
  log: [
    ["23:42:07", "New DM", "message"],
    ["23:42:09", "Replied · 2s", "zap"],
    ["23:43:30", "Booked", "calendar"],
    ["23:43:52", "Lead saved", "sheet"],
    ["23:43:53", "Team alerted", "bell"],
  ],
};

export const INCLUDED = [
  { icon: "plug", title: "5 channels", em: "connected" },
  { icon: "bot", title: "Trained on", em: "your spa" },
  { icon: "userCheck", title: "Lead", em: "qualifying" },
  { icon: "calendar", title: "Calendar", em: "booking" },
  { icon: "sheet", title: "Lead sheet", em: "or CRM" },
  { icon: "bell", title: "Team", em: "alerts" },
  { icon: "clock", title: "Auto", em: "follow-up" },
  { icon: "shield", title: "Safety", em: "guardrails" },
  { icon: "activity", title: "Testing &", em: "launch" },
];

export const PRICING = {
  setup: {
    label: "Setup",
    price: "$700",
    per: "one-time",
    items: ["Up to 5 channels", "AI trained on your spa", "Booking + lead sheet", "Alerts + human handoff", "Testing & launch"],
  },
  monthly: {
    label: "Care plan",
    price: "$100",
    per: "/ month",
    items: ["Hosting + AI usage", "Updates when prices change", "Monitoring + fixes", "Monthly lead report"],
  },
  note: "Free demo on your own services before you pay.",
};

export const TIMELINE = [
  { when: "Day 1", title: "Kickoff", em: "call" },
  { when: "Day 2–3", title: "Build &", em: "train" },
  { when: "Day 4–5", title: "Test &", em: "refine" },
  { when: "Day 6–7", title: "Go", em: "live", next: true },
];

export const FAQ = [
  { q: "Do I need to change my accounts or website?", a: "No. It plugs into what you already use." },
  { q: "Will it sound like a robot?", a: "No. It's written in your brand voice, and you approve the tone before launch." },
  { q: "What about medical questions?", a: "It never gives medical advice. Those questions go straight to your staff." },
  { q: "Who owns the accounts and leads?", a: "You do. Everything stays in your name." },
  { q: "Can I cancel?", a: "Yes. The care plan is month to month." },
];
