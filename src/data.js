// All portfolio content in one place. Edit here to update the site.
// Content sourced from Akash's real resume + GitHub (github.com/akashgupta1909).

export const social = {
  email: "akash.gupta.anup@gmail.com",
  github: "https://github.com/akashgupta1909",
  linkedin: "https://www.linkedin.com/in/akash-gupta-1909/",
  resume: "/resume.pdf",
};

export const nav = [
  { num: "01.", label: "about", href: "#about" },
  { num: "02.", label: "experience", href: "#experience" },
  { num: "03.", label: "projects", href: "#projects" },
  { num: "04.", label: "skills", href: "#skills" },
];

export const hero = {
  eyebrow: "> Software Engineer · Full-Stack · Payments & Backend Systems",
  name: "Akash Gupta",
  tagline: "I build products that reach millions of users.",
  blurb:
    "Software Engineer at Coinbase and an IIIT Gwalior grad. Over the last few years I've shipped a React frontend serving 1M+ users at KoinX, wired up payments across India & Australia, and built backend systems in Go & Node. I like clean abstractions, fast caches, and shipping things people actually use.",
  stats: [
    { value: "3+", label: "years shipping code" },
    { value: "1M+", label: "users reached" },
    { value: "4×", label: "hackathon podiums" },
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
    ["'React'", "str"],
    [", ", "punct"],
    ["'Node'", "str"],
    [", ", "punct"],
    ["'Go'", "str"],
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
  [["// → shipped to 1M+ users ✓", "comment"]],
];

export const about = {
  paragraphs: [
    "I'm Akash — a full-stack engineer who likes living at the boundary of a clean React frontend and a fast, reliable backend. I did my Integrated B.Tech + M.Tech in IT at IIIT Gwalior, and spent most of college shipping real products through internships instead of just reading about them.",
    "At KoinX I led the frontend architecture for a crypto-tax platform used by over a million people, integrated PhonePe & Stripe payments, and cut response times ~85% with Redis. At Coinbase I built internal tooling used by 10k+ employees. Outside work I build backend systems in Go — mostly because I want to understand how things actually work under the hood.",
  ],
  currently: [
    "Software Engineer at Coinbase",
    "Building a self-hosted expense tracker in Go",
    "Going deep on backend & distributed systems",
  ],
  card: {
    initials: "AK",
    name: "Akash Gupta",
    role: "Software Engineer · Gwalior, India",
    status: "Open to full-time SWE roles",
  },
};

export const skillGroups = [
  {
    icon: "{ }",
    title: "Languages",
    tags: ["JavaScript", "TypeScript", "Go", "Solidity", "C/C++", "SQL"],
  },
  {
    icon: "</>",
    title: "Frontend",
    tags: ["React", "Next.js", "Redux", "Relay", "HTML / CSS", "i18next"],
  },
  {
    icon: "[ ]",
    title: "Backend",
    tags: ["Node.js", "Express", "GraphQL", "REST", "NATS", "gRPC"],
  },
  {
    icon: "~/",
    title: "Data & Infra",
    tags: ["MongoDB", "PostgreSQL", "Redis", "Firebase", "Git", "REST API"],
  },
  {
    icon: "◈",
    title: "Also in my toolkit",
    badge: "always learning",
    wide: true,
    tags: [
      "Payments (Stripe · PhonePe · Razorpay)",
      "Ethereum",
      "Truffle",
      "Chai & Mocha",
      "Bugsnag",
      "Snowflake",
      "Okta",
      "System Design",
      "Mentoring 300+ students",
    ],
  },
];

export const projects = [
  {
    icon: "{ }",
    name: "Internal LLM Extension",
    flagship: true,
    desc: "Chrome extension giving 10k+ Coinbase employees secure access to internal LLMs — built at Coinbase with React, GraphQL/Relay and Okta auth.",
    metric: "10k+ employees",
    metricSub: "· @ Coinbase",
    tags: ["React", "GraphQL", "Okta"],
  },
  {
    icon: "</>",
    name: "KoinX Platform",
    flagship: true,
    desc: "Scalable React frontend for a crypto-tax platform serving 1M+ users, with PhonePe & Stripe payments and ~85% faster responses via Redis caching.",
    metric: "1M+ users",
    metricSub: "· 85% faster",
    tags: ["React", "Node.js", "Redis"],
  },
  {
    icon: "[ ]",
    name: "Expense Tracker",
    desc: "Self-hosted expense tracker in Go — because I'd rather not trust third-party apps with my financial data.",
    metric: "self-hosted",
    metricSub: "· personal data, my rules",
    tags: ["Go", "SQLite", "CLI"],
  },
  {
    icon: "~/",
    name: "Real-Time Leaderboard",
    desc: "Low-latency real-time leaderboard service built on Go with Redis sorted sets and MongoDB for persistence.",
    metric: "real-time",
    metricSub: "· Go + Redis",
    tags: ["Go", "Redis", "MongoDB"],
  },
  {
    icon: "</>",
    name: "Caching Proxy",
    desc: "An HTTP caching proxy server in Go backed by Redis — a build-to-learn project to internalize the fundamentals.",
    metric: "from scratch",
    metricSub: "· systems deep-dive",
    tags: ["Go", "Redis", "HTTP"],
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
  "A mix of production work (under NDA at Coinbase & KoinX) and side projects I build to go deep on systems. Most of the personal ones are open on GitHub — happy to walk through any of it.";

export const architecture = {
  eyebrow: "// reference architecture — crypto-tax platform (anonymized)",
  title: "How I fit the pieces together",
  subtitle:
    "An anonymized view of the KoinX platform I helped build — a React frontend on Node services, Redis-cached and event-driven with NATS, serving over a million users.",
  columns: [
    { label: "CLIENTS", items: ["Web App", "Mobile Web", "Partner API"] },
    {
      label: "EDGE / API",
      items: ["Node / Express API", "Auth", "Rate Limiter"],
    },
    {
      label: "SERVICES",
      items: ["Tax Engine", "Payments Svc", "Sync Workers", "Notifications"],
    },
    {
      label: "DATA & EVENTS",
      items: ["MongoDB", "Redis Cache", "NATS Bus", "PostgreSQL"],
    },
  ],
  features: [
    "⟳ NATS event-driven sync",
    "⚡ ~85% faster via Redis caching",
    "◎ 1M+ users served",
    "⇄ PhonePe + Stripe payments",
  ],
};

export const experience = [
  {
    period: "May 2024 — Aug 2024 | June 2025 — Present",
    role: "Software Engineer",
    company: "@ Coinbase",
    desc: "Started as an SWE Intern and stayed on. Built a Chrome extension giving 10k+ internal employees access to internal LLMs — React with GraphQL/Relay, Okta auth, plus Bugsnag error monitoring and Snowflake analytics.",
    tags: ["React", "GraphQL", "Relay", "Okta"],
  },
  {
    period: "May 2022 — May 2024 | Aug 2024 - June 2025",
    role: "Software Development Intern",
    company: "@ KoinX",
    desc: "Led a scalable React frontend for a crypto-tax platform used by 1M+ people. Integrated PhonePe & Stripe payments for 10k+ users across India & Australia, and cut response times ~85% with Redis. Used NATS for events and Chai/Mocha for testing.",
    tags: ["React", "Node.js", "Redis", "NATS"],
  },
  {
    period: "Feb 2022 - May 2022",
    role: "Software Development Intern",
    company: "@ MuxEmail",
    desc: "Drove trigger integrations with Salla impacting 10k+ users across the Middle East, and shipped internationalization with i18next, React and Redux.",
    tags: ["React", "Redux", "i18next"],
  },
  {
    period: "Sept 2021 - Dec 2021",
    role: "Frontend Intern",
    company: "@ Levo",
    desc: "Revamped the frontend architecture for a home-entertainment platform with React & Redux, and integrated the Razorpay payments gateway with accurate payment recording.",
    tags: ["React", "Redux", "Razorpay"],
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
  { icon: "👨‍🏫", value: "300+", label: "students taught" },
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
    "I'm looking for full-time software engineering roles and always happy to talk about payments, backend systems, or shipping fast. My inbox is always open — let's talk.",
  socials: [
    { label: "GitHub", href: social.github },
    { label: "LinkedIn", href: social.linkedin },
    { label: "Email", href: `mailto:${social.email}` },
    { label: "Résumé", href: social.resume },
  ],
};
