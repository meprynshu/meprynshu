import type {
  ContactLink,
  Education,
  Experience,
  Identity,
  Project,
  Skill,
} from '@/types'

export const IDENTITY: Identity = {
  name: 'Priyanshu Verma',
  role: 'Full Stack Engineer',
  location: 'Uttarakhand, India',
}

export const EXPERIENCES: Experience[] = [
  {
    id: '01',
    period: {
      year: '2025',
      month: '10',
    },
    range: 'Oct 2025 – Present',
    role: 'AI Engineer Intern',
    company: 'Stamp',
    companyUrl: 'https://trystamp.ai',
    bullets: [
      'Architected and delivered core components of an Accounts Payable AI Agent powering invoice ingestion, validation, and approval workflows for enterprise customers in production.',
      'Engineered scalable, event-driven microservices using AWS Lambda to enable reliable and cost-efficient processing of high-volume invoice pipelines, and designed computing graph-based execution flows for deterministic state transitions with built-in fault tolerance across distributed services.',
      'Built and maintained multiple serverless services integrating with external ERP systems and internal APIs to ensure real-time financial data synchronization and workflow consistency.',
      'Optimized AI-driven document parsing and validation pipelines to significantly reduce manual review effort while maintaining high accuracy and operational reliability.',
      'Partnered closely with product managers and finance stakeholders to translate real-world accounting processes into robust production-grade automation systems, and contributed to architecture discussions around scalability, observability, retry strategies, and failure recovery to ensure production resilience.',
    ],
    tags: [
      '#typescript',
      '#nodejs',
      '#aws-lambda',
      '#serverless-architecture',
      '#aws-s3',
      '#cloudflare-workers',
      '#event-driven-systems',
      '#ai-agents',
    ],
    highlightTerms: [
      'Accounts Payable AI Agent',
      'invoice ingestion',
      'validation',
      'approval workflows',
      'enterprise customers',
      'event-driven microservices',
      'AWS Lambda',
      'computing graph-based execution flows',
      'deterministic state transitions',
      'fault tolerance',
      'serverless services',
      'ERP systems',
      'real-time financial data synchronization',
      'AI-driven document parsing',
      'production-grade automation systems',
      'scalability',
      'observability',
      'retry strategies',
      'failure recovery',
      'production resilience',
    ],
  },
  {
    id: '02',
    period: {
      year: '2024',
      month: '12',
    },
    range: 'Dec 2024 – Jan 2026',
    role: 'Frontend Engineer Intern',
    company: 'GrowMeOrganic',
    companyUrl: 'https://www.growmeorganic.com',
    bullets: [
      'Architected and implemented a step-by-step flow for a high-quality user and developer experience, where the second step appears only after the first is completed using Context API, and the system is now used by multiple users.',
      'Contributed heavily to building the landing page from scratch by implementing pixel-perfect designs and driving discussions on production-grade technologies for landing page architecture.',
      'Owned end-to-end design, implementation, and validation of features in collaboration with designers, senior engineers, and PMs to ensure correctness, scalability, and production readiness.',
      'Actively participated in design reviews, code reviews, and GitHub discussions to align with the team on production-grade implementation quality.',
    ],
    tags: [
      '#typescript',
      '#react',
      '#astrojs',
      '#context-api',
      '#jotai',
      '#s3',
      '#cloudflare-workers',
    ],
    highlightTerms: [
      'step-by-step flow',
      'high-quality user and developer experience',
      'second step',
      'Context API',
      'multiple users',
      'landing page',
      'pixel-perfect designs',
      'production-grade technologies',
      'end-to-end design',
      'implementation',
      'validation',
      'correctness',
      'scalability',
      'production readiness',
      'design reviews',
      'code reviews',
      'GitHub discussions',
      'production-grade implementation quality',
    ],
  },
]

export const EDUCATION: Education = {
  degree: 'B.Tech Computer Science',
  institution: 'FET GKV Haridwar',
  expectedGraduation: 'Expected 2028',
}

export const SKILLS: Skill[] = [
  { index: '01', name: 'Neo4j' },
  { index: '02', name: 'Vector DBs' },
  { index: '03', name: 'RAG' },
  { index: '04', name: 'GraphRAG' },
  { index: '05', name: 'Next.js' },
  { index: '06', name: 'TypeScript' },
  { index: '07', name: 'Node.js' },
  { index: '08', name: 'Agentic Memory' },
]

export const PROJECTS: Project[] = [
  {
    id: '01',
    name: 'Blog App on Solana',
    href: 'https://blog-dapp-iota.vercel.app/',
    summary:
      'A decentralized publishing app where posts and identity are connected to Solana wallet flows.',
    signal: 'Demonstrates wallet auth, on-chain UX, and reliable client-state handling.',
    tags: ['#solana', '#web3', '#wallet-auth', '#dapp'],
  },
  {
    id: '02',
    name: 'Solana Wallet Generator',
    href: 'https://wallet-generate-me8r.vercel.app/',
    summary:
      'A utility-first wallet generator built for fast keypair creation and clean developer-friendly workflows.',
    signal: 'Demonstrates cryptographic primitives, secure UX patterns, and practical tooling.',
    tags: ['#solana', '#cryptography', '#typescript', '#tooling'],
  },
  {
    id: '03',
    name: 'Highly Animated Website',
    href: 'https://pause-six.vercel.app/',
    summary:
      'A motion-heavy marketing experience with layered transitions and premium interaction details.',
    signal: 'Demonstrates advanced animation systems, layout craft, and frontend polish.',
    tags: ['#animation', '#frontend', '#ux', '#creative-dev'],
  },
  {
    id: '04',
    name: 'Native WebSocket Chat App',
    href: 'https://chat-liard-zeta-73.vercel.app/',
    summary:
      'A real-time chat platform using native WebSockets for low-latency, bi-directional messaging.',
    signal: 'Demonstrates event-driven thinking, connection lifecycle handling, and realtime UI.',
    tags: ['#websocket', '#realtime', '#chat', '#system-design'],
  },
]

export const SOCIAL_LINKS = {
  github: 'https://github.com/meprynshu',
  linkedin: 'https://www.linkedin.com/in/priyanshu-verma-709711227/',
  x: 'https://x.com/PriyanshuV_code',
}

export const CONTACT_LINKS: ContactLink[] = [
  {
    label: 'github.sh',
    href: SOCIAL_LINKS.github,
  },
  {
    label: 'linkedin.pdf',
    href: SOCIAL_LINKS.linkedin,
  },
  {
    label: 'x.log',
    href: SOCIAL_LINKS.x,
  },
]
