// All portfolio content in one place. Edit here to update the site.

export const social = {
  email: 'hey@akash.dev',
  github: 'https://github.com/akashgupta1909',
  linkedin: 'https://www.linkedin.com/in/akashgupta1909',
  twitter: 'https://twitter.com/akashgupta1909',
  resume: '/resume.pdf',
}

export const nav = [
  { num: '01.', label: 'about', href: '#about' },
  { num: '02.', label: 'skills', href: '#skills' },
  { num: '03.', label: 'projects', href: '#projects' },
  { num: '04.', label: 'experience', href: '#experience' },
]

export const hero = {
  eyebrow: '> Staff Software Engineer · Platform & Distributed Systems',
  name: 'Akash Gupta',
  tagline: 'I architect systems that scale to millions.',
  blurb:
    'Staff engineer with 11+ years designing distributed systems, leading platform teams, and shipping products used by tens of millions. I turn ambiguous, org-wide problems into durable architecture — and grow the engineers around me while I do it.',
  stats: [
    { value: '11+', label: 'years exp' },
    { value: '50M+', label: 'daily requests served' },
    { value: '30+', label: 'engineers mentored' },
  ],
}

// Tokenized code lines for the hero terminal. Each token: [text, colorKey]
export const heroCode = [
  [['const ', 'key'], ['engineer', 'id'], [' = ', 'punct'], ['{', 'punct']],
  [['  name', 'fn'], [': ', 'punct'], ["'Akash Gupta'", 'str'], [',', 'punct']],
  [['  role', 'fn'], [': ', 'punct'], ["'Staff Software Engineer'", 'str'], [',', 'punct']],
  [
    ['  stack', 'fn'], [': [', 'punct'], ["'TS'", 'str'], [', ', 'punct'],
    ["'React'", 'str'], [', ', 'punct'], ["'Go'", 'str'], [', ', 'punct'],
    ["'AWS'", 'str'], ['],', 'punct'],
  ],
  [['  shipsFast', 'fn'], [': ', 'punct'], ['true', 'num'], [',', 'punct']],
  [['}', 'punct']],
  [['', 'punct']],
  [
    ['engineer', 'id'], ['.', 'punct'], ['build', 'fn'], ['(', 'punct'],
    ['ideas', 'id'], [');', 'punct'],
  ],
  [['// → deployed to production ✓', 'comment']],
]

export const about = {
  paragraphs: [
    "I'm Akash — a staff software engineer working at the intersection of deep technical work and technical leadership. Over the past decade I've designed platforms that stay fast and reliable under real-world load, and set architectural direction for teams shipping to millions of people.",
    'I care about the fundamentals — clean abstractions, strong observability, and helping engineers move quickly with confidence. I lead as much through RFCs, design reviews, and mentorship as through code, and I still love getting deep into a gnarly performance or reliability problem.',
  ],
  currently: [
    'Leading mobile platform architecture at Coinbase',
    'Mentoring senior & staff engineers across 3 teams',
    'Writing about distributed systems & eng leadership',
  ],
  card: {
    initials: 'AK',
    name: 'Akash Gupta',
    role: 'Staff Engineer · SF / Remote',
    status: 'Open to Staff / Principal roles',
  },
}

export const skillGroups = [
  { icon: '{ }', title: 'Languages', tags: ['TypeScript', 'JavaScript', 'Go', 'Python', 'Rust', 'SQL'] },
  { icon: '</>', title: 'Frontend', tags: ['React', 'React Native', 'Next.js', 'Redux', 'Tailwind', 'GraphQL'] },
  { icon: '[ ]', title: 'Backend', tags: ['Node.js', 'gRPC', 'PostgreSQL', 'Redis', 'Kafka', 'REST'] },
  { icon: '~/', title: 'Cloud & DevOps', tags: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'Datadog'] },
  {
    icon: '◈',
    title: 'Architecture & Leadership',
    badge: 'staff-level',
    wide: true,
    tags: [
      'System Design', 'Distributed Systems', 'Event-Driven Arch', 'Observability',
      'Mentorship', 'Tech Strategy', 'RFCs & Design Reviews', 'Incident Response', 'Team Leadership',
    ],
  },
]

export const projects = [
  {
    icon: '{ }', name: 'Atlas', flagship: true,
    desc: 'Redis-compatible, Raft-replicated store I designed and led — now backing 40+ internal services.',
    metric: 'p99 < 0.8ms', metricSub: '· 40+ services', tags: ['Go', 'Raft', 'gRPC'],
  },
  {
    icon: '</>', name: 'Prism UI',
    desc: 'Org-wide component system + token pipeline I drove to adoption across 30+ product teams.',
    metric: '30+ teams', metricSub: '· 50% faster delivery', tags: ['React', 'TypeScript', 'Design Systems'],
  },
  {
    icon: '[ ]', name: 'FlowPay', flagship: true,
    desc: 'Offline-first payments platform I architected for exactly-once, idempotent settlement at scale.',
    metric: '$2B+ / yr', metricSub: '· 99.99% uptime', tags: ['Go', 'Event Sourcing', 'React Native'],
  },
  {
    icon: '~/', name: 'DevPulse',
    desc: 'Streaming observability platform with real-time anomaly detection I led end-to-end.',
    metric: '10M events/min', metricSub: '· sub-second alerts', tags: ['Kafka', 'ClickHouse', 'Go'],
  },
  {
    icon: '</>', name: 'Forge',
    desc: 'Self-hosted CI orchestrator with distributed caching I built to slash org-wide build times.',
    metric: '−60% builds', metricSub: '· $1.4M/yr saved', tags: ['Rust', 'Kubernetes', 'Caching'],
  },
  {
    icon: '{*}', name: 'Lexi', flagship: true,
    desc: 'LLM-powered code-review platform I shipped to catch bugs before they reach main.',
    metric: '35% of bugs', metricSub: '· caught pre-merge', tags: ['Python', 'LLMs', 'AWS'],
  },
]

export const projectsNote =
  'Most of my work lives in private & enterprise repos — these are anonymized case studies. Happy to walk through the architecture and trade-offs in a conversation.'

export const architecture = {
  eyebrow: '// reference architecture — FlowPay platform',
  title: 'How I design the pieces to fit together',
  subtitle:
    'An anonymized view of a payments platform I architected — event-driven, resilient, and horizontally scalable end to end.',
  columns: [
    { label: 'CLIENTS', items: ['Web App', 'Mobile App', 'Partner API'] },
    { label: 'EDGE / GATEWAY', items: ['API Gateway', 'Auth · JWT', 'Rate Limiter'] },
    { label: 'SERVICES', items: ['Payments Svc', 'Ledger Svc', 'Risk Engine', 'Notifications'] },
    { label: 'DATA & STREAMING', items: ['PostgreSQL', 'Redis Cache', 'Kafka Bus', 'S3 / Archive'] },
  ],
  features: [
    '⟳ exactly-once, idempotent settlement',
    '◎ 99.99% uptime SLA',
    '⚡ p99 < 120ms end-to-end',
    '⇄ horizontally sharded by tenant',
  ],
}

export const experience = [
  {
    period: '2021 — Present', role: 'Staff Software Engineer', company: '@ Coinbase',
    desc: 'Technical lead for the Retail mobile platform serving 80M+ users. I own the architecture of the org-wide screen framework, drove a 40% cold-start improvement, and mentor a cohort of senior and staff engineers.',
    tags: ['Architecture', 'React Native', 'TypeScript', 'GraphQL'],
  },
  {
    period: '2018 — 2021', role: 'Senior Software Engineer', company: '@ Stripe',
    desc: 'Owned payment-orchestration services moving billions in volume. Designed an idempotent retry engine, led the on-call rotation, and cut failed-charge rates by 18%.',
    tags: ['Go', 'gRPC', 'Kafka', 'PostgreSQL'],
  },
  {
    period: '2014 — 2018', role: 'Software Engineer', company: '@ Atlassian',
    desc: 'Shipped collaborative features across Jira and led the front-end migration to a modern React + GraphQL stack.',
    tags: ['React', 'Node.js', 'Redux'],
  },
]

export const funStatus = [
  { icon: '♪', label: 'NOW PLAYING', value: 'Lofi beats to debug to — chillhop' },
  { icon: '⚙', label: 'NOW BUILDING', value: 'todo2issue — a CLI that ships your TODOs' },
  { icon: '❏', label: 'NOW READING', value: 'Designing Data-Intensive Applications' },
]

export const funStats = [
  { icon: '☕', value: '9,214', label: 'cups of coffee' },
  { icon: '🐛', value: '38,500', label: 'bugs squashed' },
  { icon: '🦆', value: '180', label: 'rubber ducks consulted' },
  { icon: '⌨', value: '11', label: 'keyboards worn out' },
]

export const jokes = [
  { q: 'Why do programmers prefer dark mode?', a: 'Because light attracts bugs. 🐛' },
  { q: 'How many programmers does it take to change a light bulb?', a: "None — that's a hardware problem." },
  { q: 'Why do Java developers wear glasses?', a: "Because they don't C#." },
  { q: "Why was the function sad after a great date?", a: "It never got a callback." },
  { q: 'A SQL query walks into a bar,', a: 'walks up to two tables and asks: "Can I join you?"' },
  { q: 'Why did the developer go broke?', a: 'Because he used up all his cache. 💸' },
]

export const contact = {
  eyebrow: '05. what’s next?',
  title: 'Let’s build something great.',
  blurb:
    "I'm always open to discussing new products, ambitious ideas, or opportunities to build meaningful things together. My inbox is always open — let's talk.",
  socials: [
    { label: 'GitHub', href: social.github },
    { label: 'LinkedIn', href: social.linkedin },
    { label: 'X / Twitter', href: social.twitter },
    { label: 'Email', href: `mailto:${social.email}` },
  ],
}
