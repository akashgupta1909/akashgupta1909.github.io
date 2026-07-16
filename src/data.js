// All portfolio content in one place. Edit here to update the site.
// Content sourced from Akash's latest resume + GitHub (github.com/akashgupta1909).

export const social = {
  email: "akash.gupta.anup@gmail.com",
  github: "https://github.com/akashgupta1909",
  linkedin: "https://www.linkedin.com/in/akash-gupta-1909/",
  leetcode: "https://leetcode.com/u/akashgupta1909/",
  resume: "/resume.pdf",
};

export const nav = [
  { num: "01.", label: "about", href: "#about" },
  { num: "02.", label: "experience", href: "#experience" },
  { num: "03.", label: "projects", href: "#projects" },
  { num: "04.", label: "skills", href: "#skills" },
];

export const hero = {
  eyebrow: "> Software Engineer @ Coinbase",
  name: "Akash Gupta",
  tagline: "I build platforms that onboard millions.",
  blurb:
    "Software Engineer at Coinbase, where I lead the frontend architecture for Unified Onboarding, a plugin-based system across React & React Native serving 100M+ users. IIIT Gwalior grad. I've shipped payments, accounting, and reconciliation systems at scale, and work across Go, gRPC and GraphQL. I like clean abstractions, fast systems, and shipping things people actually use.",
  stats: [
    { value: "100M+", label: "users onboarded" },
    { value: "70%", label: "faster onboarding" },
    { value: "3+", label: "years shipping code" },
  ],
};

// Tokenized code lines for the hero terminal. Each token: [text, colorKey]
export const heroCode = [
  [
    ["const ", "key"],
    ["engineer", "id"],
    [" = ", "punct"],
    ["{", "punct"],
  ],
  [
    ["  name", "fn"],
    [": ", "punct"],
    ["'Akash Gupta'", "str"],
    [",", "punct"],
  ],
  [
    ["  role", "fn"],
    [": ", "punct"],
    ["'Software Engineer @ Coinbase'", "str"],
    [",", "punct"],
  ],
  [
    ["  stack", "fn"],
    [": [", "punct"],
    ["'TS'", "str"],
    [", ", "punct"],
    ["'React Native'", "str"],
    [", ", "punct"],
    ["'Go'", "str"],
    [", ", "punct"],
    ["'gRPC'", "str"],
    ["],", "punct"],
  ],
  [
    ["  shipsFast", "fn"],
    [": ", "punct"],
    ["true", "num"],
    [",", "punct"],
  ],
  [["}", "punct"]],
  [["", "punct"]],
  [
    ["engineer", "id"],
    [".", "punct"],
    ["build", "fn"],
    ["(", "punct"],
    ["ideas", "id"],
    [");", "punct"],
  ],
  [["// → onboarding for 100M+ users ✓", "comment"]],
];

export const about = {
  paragraphs: [
    "I'm Akash, a software engineer who likes living where a polished frontend meets a fast, reliable backend. I did my Integrated B.Tech + M.Tech in IT at IIIT Gwalior, and spent most of college shipping real products through internships instead of just reading about them.",
    "At Coinbase I lead the frontend architecture for Unified Onboarding, a plugin-based system across React & React Native for 100M+ users — where I cut first paint from 7s to 2s and took feature launches from weeks to days. Across two stints at KoinX I built crypto-tax and B2B accounting systems for 1.5M+ people, from payments to inter-wallet reconciliation. I care about clean abstractions, observability, and making launches boring (in the best way).",
  ],
  currently: [
    "Software Engineer at Coinbase — onboarding platform",
    "Working across React Native, Go, gRPC & GraphQL",
    "Shipping to a 130M+ user product",
  ],
  card: {
    initials: "AK",
    name: "Akash Gupta",
    role: "Software Engineer · Bangalore, India",
    status: "Always up for a good conversation",
  },
};

export const skillGroups = [
  {
    icon: "{ }",
    title: "Languages",
    tags: ["TypeScript", "JavaScript", "Go", "C/C++", "Solidity", "SQL"],
  },
  {
    icon: "</>",
    title: "Frontend",
    tags: ["React", "React Native", "Next.js", "Redux", "Relay", "HTML / CSS"],
  },
  {
    icon: "[ ]",
    title: "Backend",
    tags: ["Node.js", "Express", "Go", "gRPC", "GraphQL", "NATS"],
  },
  {
    icon: "~/",
    title: "Data & Infra",
    tags: ["PostgreSQL", "MongoDB", "Redis", "Datadog", "Bugsnag", "Firebase"],
  },
  {
    icon: "◈",
    title: "Also in my toolkit",
    badge: "day-to-day",
    wide: true,
    tags: [
      "Snowflake",
      "Amplitude",
      "Eppo",
      "Okta",
      "Chai & Mocha",
      "REST APIs",
      "Payments (Stripe · PhonePe · Razorpay)",
      "System Design",
      "Git",
    ],
  },
];

export const projects = [
  {
    icon: "{ }",
    name: "Unified Onboarding",
    flagship: true,
    desc: "Plugin-based onboarding across React & React Native that replaced Coinbase’s legacy flows — 12+ money-movement flows, 36 reusable plugin contracts, first paint cut from 7s to 2s.",
    metric: "100M+ users",
    metricSub: "· 70% faster",
    tags: ["React Native", "Go", "gRPC"],
  },
  {
    icon: "</>",
    name: "KoinX Platform",
    flagship: true,
    desc: "Crypto-tax & B2B accounting used by 1.5M+ people — scalable React frontend, PhonePe/Stripe payments, inter-wallet reconciliation, and CSV/PDF/Excel reporting pipelines.",
    metric: "1.5M+ users",
    metricSub: "· B2B + B2C",
    tags: ["React", "Node.js", "Redis"],
  },
  {
    icon: "[ ]",
    name: "Internal LLM Extension",
    desc: "Chrome extension giving 10k+ Coinbase employees secure access to internal LLMs — React with GraphQL/Relay, Okta auth, plus Bugsnag and Snowflake.",
    metric: "10k+ employees",
    metricSub: "· @ Coinbase",
    tags: ["React", "GraphQL", "Okta"],
  },
  {
    icon: "~/",
    name: "Expense Tracker",
    desc: "Self-hosted expense tracker in Go — because I'd rather not trust third-party apps with my financial data.",
    metric: "self-hosted",
    metricSub: "· personal data, my rules",
    tags: ["Go", "SQLite", "CLI"],
  },
  {
    icon: "</>",
    name: "Real-Time Leaderboard",
    desc: "Low-latency real-time leaderboard service built on Go with Redis sorted sets and MongoDB for persistence.",
    metric: "real-time",
    metricSub: "· Go + Redis",
    tags: ["Go", "Redis", "MongoDB"],
  },
  {
    icon: "{*}",
    name: "Secure-Morph",
    desc: "Blockchain user-verification scheme using chameleon hashing, implemented in Solidity on Ethereum.",
    metric: "research",
    metricSub: "· chameleon hashing",
    tags: ["Solidity", "Ethereum", "Web3"],
  },
];

export const projectsNote =
  "A mix of production work at Coinbase & KoinX (under NDA) and side projects I build to go deep on systems. The personal ones are open on GitHub — happy to walk through any of it.";

export const architecture = {
  eyebrow:
    "// reference architecture — unified onboarding platform (anonymized)",
  title: "How I fit the pieces together",
  subtitle:
    "An anonymized view of the plugin-based onboarding platform I lead at Coinbase — React & React Native clients on a Go/gRPC Hybrid Manager, fully configurable and shipping to 100M+ users.",
  columns: [
    { label: "CLIENTS", items: ["Web (React)", "Mobile (RN)", "12+ Flows"] },
    {
      label: "PLUGIN SYSTEM",
      items: ["36 Contracts", "Orchestrator", "Config Layer"],
    },
    { label: "HYBRID MANAGER", items: ["Go Service", "gRPC", "GraphQL"] },
    {
      label: "SERVICES & OBS",
      items: ["Payments", "Compliance", "Wallet", "Datadog"],
    },
  ],
  features: [
    "⚡ first paint 7s → 2s (−70%)",
    "◎ 100M+ users onboarded",
    "⇄ 25+ consumer services migrated",
    "◈ design-system adoption 98%",
  ],
};

export const experience = [
  {
    period: "Jun 2025 — Present",
    role: "Software Engineer",
    company: "@ Coinbase",
    desc: "Lead frontend architecture and the global rollout of Unified Onboarding across React & React Native, a plugin-based system with 36 reusable contracts and 12+ money-movement flows for 100M+ users. Cut first paint 7s→2s (−70%), built a Go/gRPC/GraphQL Hybrid Manager, and drove client migration across 25+ consumer services (payments, compliance, wallet, institutional).",
    tags: ["React Native", "Go", "gRPC", "GraphQL"],
  },
  {
    period: "Aug 2024 — May 2025",
    role: "Software Engineer · Intern",
    company: "@ KoinX",
    desc: "Built advanced reporting & filtering for B2B accounting — category, asset-amount, timezone and treasury drill-downs with CSV/PDF/Excel export pipelines. Designed an end-to-end inter-wallet reconciliation workflow (transaction matching, treasury mapping, stablecoin handling) and consolidated accounting APIs, schemas and CRM integrations (Zoho, Stripe).",
    tags: ["React", "Node.js", "Stripe", "Zoho"],
  },
  {
    period: "May 2024 — Aug 2024",
    role: "Software Engineer · Intern",
    company: "@ Coinbase",
    desc: "Built a Chrome extension giving 10k+ internal employees access to internal LLMs — React with GraphQL/Relay and Okta auth, plus Bugsnag error monitoring and Snowflake analytics.",
    tags: ["React", "GraphQL", "Relay", "Okta"],
  },
  {
    period: "May 2022 — May 2024",
    role: "Software Engineer · Intern",
    company: "@ KoinX",
    desc: "Led a scalable React frontend for a crypto-tax platform used by 1M+ people, integrated PhonePe & Stripe payments for 10k+ users across India & Australia, and cut response times ~85% with Redis. Used NATS for events and Chai/Mocha for testing.",
    tags: ["React", "Node.js", "Redis", "NATS"],
  },
  {
    period: "Feb 2022 — May 2022",
    role: "Software Engineer · Intern",
    company: "@ MuxEmail",
    desc: "Integrated triggers with Salla impacting 10k+ users across the Middle East, and shipped internationalization with i18next, React and Redux.",
    tags: ["React", "Redux", "i18next"],
  },
];

export const funStatus = [
  {
    icon: "⚙",
    label: "NOW BUILDING",
    value: "Expense Tracker — self-hosted, in Go",
  },
  {
    icon: "📚",
    label: "NOW LEARNING",
    value: "Distributed systems & Go internals",
  },
  {
    icon: "♪",
    label: "NOW PLAYING",
    value: "Lofi beats to debug to — chillhop",
  },
];

export const funStats = [
  { icon: "☕", value: "9,214", label: "cups of coffee" },
  { icon: "🐛", value: "3,800", label: "bugs squashed" },
  { icon: "🏆", value: "4", label: "hackathon podiums" },
  { icon: "🚀", value: "130M+", label: "user product shipped" },
];

export const jokes = [
  {
    q: "Why do programmers prefer dark mode?",
    a: "Because light attracts bugs. 🐛",
  },
  {
    q: "How many programmers does it take to change a light bulb?",
    a: "None — that's a hardware problem.",
  },
  { q: "Why do Java developers wear glasses?", a: "Because they don't C#." },
  {
    q: "Why was the function sad after a great date?",
    a: "It never got a callback.",
  },
  {
    q: "A SQL query walks into a bar,",
    a: 'walks up to two tables and asks: "Can I join you?"',
  },
  {
    q: "Why did the developer go broke?",
    a: "Because he used up all his cache. 💸",
  },
];

export const contact = {
  eyebrow: "05. what’s next?",
  title: "Let’s build something great.",
  blurb:
    "I'm always up for talking about frontend platforms, payments, or a gnarly systems problem — or just to say hi. My inbox is always open — let's talk.",
  socials: [
    { label: "GitHub", href: social.github },
    { label: "LinkedIn", href: social.linkedin },
    { label: "Email", href: `mailto:${social.email}` },
    { label: "Résumé", href: social.resume },
  ],
};
