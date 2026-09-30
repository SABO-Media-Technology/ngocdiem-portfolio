export interface PersonalInfo {
  name: string;
  brand: string;
  positioning: string;
  tagline: string;
  labels: string[];
  introCopy: string;
  aboutCopy: string;
  aboutHighlights: string[];
  philosophyHeadline: string[];
  philosophyCopy: string;
  contactHeadline: string[];
  contactSub: string;
  email: string;
  facebook: string;
  linkedin: string;
  website: string;
  avatar: string;
  location: string;
  status: string;
}

export interface WhatIDoItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  items: string[];
  tags: string[];
}

export interface CaseStudyGalleryItem {
  label: string;
  category: string;
  desc: string;
  colorScheme?: string;
  badge?: string;
}

export interface ProjectCaseStudy {
  id: string;
  number: string;
  title: string;
  role: string;
  tags: string[];
  tagline: string;
  description?: string;
  challenge: string;
  approach: string;
  whatIDid: string[];
  tools: string[];
  outcome: string;
  gallery: CaseStudyGalleryItem[];
}

export interface DeskFile {
  name: string;
  size: string;
  type: string;
  desc: string;
  status?: string;
  tags?: string[];
}

export interface DeskFolder {
  id: string;
  slug: string;
  name: string;
  badge: string;
  tagline: string;
  description: string;
  files: DeskFile[];
}

export interface ToolItem {
  name: string;
  role: string;
  desc: string;
  badge: string;
}

export interface ToolCategory {
  id: string;
  title: string;
  tagline: string;
  items: ToolItem[];
}

export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  desc: string;
  deliverable: string;
}

export interface TimelineEntry {
  period: string;
  company: string;
  role: string;
  field: string;
  summary: string;
  highlights: string[];
  current?: boolean;
}

// -------------------------------------------------------------
// 1. PERSONAL INFORMATION
// -------------------------------------------------------------
export const PERSONAL_INFO: PersonalInfo = {
  name: "Võ Ngọc Diễm",
  brand: "Business Operations × Digital × AI × Creative",
  positioning: "Operations-minded. Digital-driven. Always improving.",
  tagline: "“I make things work. Then I make them better.”",
  labels: ["OPERATIONS", "HR & ADMIN", "FINANCE", "DIGITAL", "AI", "CREATIVE"],
  introCopy:
    "I’m a Finance & Banking graduate with hands-on experience across business operations, administration, finance, digital content, design and AI-powered workflows. Working across different functions has taught me to look at problems from both the operational and digital perspective.",
  aboutCopy:
    "My background started in Finance & Banking, but my work has expanded across operations, administration, finance, digital content, design and technology. I enjoy connecting different disciplines and finding practical ways to improve how things work.",
  aboutHighlights: [
    "FINANCE & BANKING",
    "BUSINESS OPERATIONS",
    "DIGITAL",
    "AI",
    "CREATIVE",
  ],
  philosophyHeadline: ["GOOD WORK", "SHOULD MAKE", "THINGS", "SIMPLER."],
  philosophyCopy:
    "Whether it’s managing operations, creating content, working with AI or developing digital solutions, I’m always looking for a better way to make things work.",
  contactHeadline: ["HAVE", "SOMETHING", "TO BUILD?"],
  contactSub: "“Let’s create something useful.”",
  email: "ngocdiem1112@gmail.com",
  facebook: "https://facebook.com/vongocdiem",
  linkedin: "https://linkedin.com/in/vongocdiem",
  website: "https://diem.saboarena.com",
  avatar: "/avatar.jpg",
  location: "Ho Chi Minh City, Vietnam",
  status: "ONLINE // 2026 ACTIVE",
};

// -------------------------------------------------------------
// 2. WHAT I DO — 4 CORE BUSINESS LAYERS
// -------------------------------------------------------------
export const WHAT_I_DO: WhatIDoItem[] = [
  {
    id: "operations",
    number: "01",
    title: "OPERATIONS",
    subtitle: "Business & Process Backbone",
    description:
      "Bridging ground-level club dynamics with streamlined standard operating procedures (SOPs), venue schedules, and premier customer experiences.",
    items: [
      "Business Operations",
      "Process Management",
      "Event Management",
      "Customer Experience",
    ],
    tags: ["SOPs", "Club Operations", "Tournament Flow", "Venue CX"],
  },
  {
    id: "admin-finance",
    number: "02",
    title: "ADMIN & FINANCE",
    subtitle: "Governance & Internal Systems",
    description:
      "Backed by a rigorous Finance & Banking foundation. Managing organizational records, internal personnel flows, cost control, and audit-ready documentation.",
    items: [
      "HR Administration",
      "Internal Operations",
      "Accounting Support",
      "Documentation",
    ],
    tags: ["Finance/Banking", "Personnel Admin", "Cost Tracking", "Audit SOP"],
  },
  {
    id: "digital",
    number: "03",
    title: "DIGITAL",
    subtitle: "Brand Presence & Web Interfaces",
    description:
      "Translating company objectives into sharp digital touchpoints, coordinated social channels, cohesive branding, and modern web application projects.",
    items: [
      "Social Media",
      "Content Strategy",
      "Brand Management",
      "Website / Web-App Projects",
    ],
    tags: ["Brand Identity", "Content Direction", "Web Apps", "Campaigns"],
  },
  {
    id: "ai-automation",
    number: "04",
    title: "AI & AUTOMATION",
    subtitle: "Intelligent Systems & Leverage",
    description:
      "Harnessing generative AI tools and automated triggers to accelerate content turnarounds, reduce administrative drag, and build smarter workflows.",
    items: [
      "AI Tools",
      "Workflow Automation",
      "Content Systems",
      "Digital Solutions",
    ],
    tags: ["Prompt Architecture", "AI Automation", "Video AI", "Pipelines"],
  },
];

// -------------------------------------------------------------
// 3. SELECTED WORK — 4 EDITORIAL CASE STUDIES
// -------------------------------------------------------------
export const SELECTED_PROJECTS: ProjectCaseStudy[] = [
  {
    id: "sabo-billiards",
    number: "01",
    title: "SABO BILLIARDS",
    role: "Operations & Marketing Coordinator",
    tags: ["OPERATIONS", "MARKETING", "EVENT MANAGEMENT"],
    tagline:
      "Managing and developing operational, marketing and digital activities for a billiards club ecosystem.",
    description:
      "A comprehensive operational and marketing engagement for a high-traffic billiards sports and entertainment venue, connecting in-person tournament staging with digital player ecosystems.",
    challenge:
      "Running tournament days and everyday club sessions requires synchronizing table turnover, customer registration, event promotion, prize protocols, and digital bracket updates without operational delays.",
    approach:
      "Built standardized checklists for floor staff, created high-visibility print and social campaign materials, and integrated physical club tournaments directly with the SABO Arena tournament app.",
    whatIDid: [
      "Coordinated live tournament operations, player registration, and referee match timing",
      "Designed event promotional posters, outdoor banners, and entrance standees (300 DPI)",
      "Standardized club daily opening, turnover, and closing administrative procedures",
      "Bridged physical venue operations with the digital SABO Arena bracket system",
      "Managed customer feedback loops and VIP membership onboarding flows",
    ],
    tools: [
      "SABO Arena Platform",
      "Canva Pro",
      "Google Sheets",
      "CapCut",
      "Meta Business Suite",
    ],
    outcome:
      "Significantly improved tournament turnaround times, eliminated manual bracket confusion, established repeatable floor procedures, and created a recognizable visual identity for the venue.",
    gallery: [
      {
        label: "Tournament Posters",
        category: "Print & Key Visual",
        desc: "High-contrast tournament key visual with glossy cyber chrome accents and clear sponsor hierarchy",
        badge: "300 DPI PRINT",
      },
      {
        label: "Event Visuals",
        category: "Social Campaign",
        desc: "Omni-channel graphic packages for championship announcements, bracket releases, and winner honors",
        badge: "DIGITAL ASSETS",
      },
      {
        label: "Club Activities",
        category: "Floor Operations",
        desc: "Live match coordination, referee scoreboards, and spectator staging layouts",
        badge: "OPERATIONAL SOP",
      },
      {
        label: "Membership System",
        category: "Customer Experience",
        desc: "Club member tiering, benefits sheet, and direct QR check-in workflow",
        badge: "RETENTION",
      },
      {
        label: "Social Media Campaigns",
        category: "Community Growth",
        desc: "Short-form video recaps and match highlights capturing club energy",
        badge: "VIRAL REACH",
      },
      {
        label: "SABO Arena Mobile Flow",
        category: "Digital Integration",
        desc: "Live bracket visualization, real-time match statuses, and digital player check-in",
        badge: "FLUTTER CLIENT",
      },
    ],
  },
  {
    id: "sabo-media-tech",
    number: "02",
    title: "SABO MEDIA & TECHNOLOGY",
    role: "Operations Specialist & Digital Content Producer",
    tags: ["DIGITAL", "AI", "BUSINESS SOLUTIONS"],
    tagline:
      "Supporting digital products, content systems and technology-driven business solutions.",
    challenge:
      "Fast-paced technology operations demand tight alignment between client deadlines, software release sprints, brand cohesion, and multi-channel content production.",
    approach:
      "Implemented structured agile tracking frameworks, unified digital design templates, and introduced automated content drafting workflows to support both client-facing and proprietary technology rollouts.",
    whatIDid: [
      "Tracked cross-functional project deliverables, client milestones, and internal task queues",
      "Designed presentation pitch decks, branding assets, and client interface mockups",
      "Drafted technical documentation, user guides, and feature announcement briefs",
      "Assisted in testing user-facing web and mobile applications prior to deployment",
      "Maintained internal operational expense records and vendor contracts",
    ],
    tools: [
      "Google Workspace",
      "Figma",
      "Next.js Ecosystem",
      "ChatGPT",
      "Slack / Notion",
    ],
    outcome:
      "Increased visibility across project pipelines, lowered revision cycles on digital deliverables, and established standardized documentation templates for corporate clients.",
    gallery: [
      {
        label: "Website Visuals",
        category: "Web & UI",
        desc: "Sleek geometric company portals and product landing pages with dark glassmorphism",
        badge: "RESPONSIVE WEB",
      },
      {
        label: "Branding Systems",
        category: "Visual Identity",
        desc: "Typographic guidelines, metallic color swatches, and vector icon collections",
        badge: "DESIGN TOKENS",
      },
      {
        label: "SaaS Interfaces",
        category: "Product Design",
        desc: "Clean administrative interfaces and data dashboards built for operational clarity",
        badge: "DASHBOARD UI",
      },
      {
        label: "Digital Content System",
        category: "Editorial",
        desc: "Curated weekly publishing calendar and multi-platform promotional kits",
        badge: "CONTENT PIPELINE",
      },
      {
        label: "AI Solutions Framework",
        category: "Technology",
        desc: "Automated briefing templates and generative copy pipelines tailored for business needs",
        badge: "AI AUTOMATION",
      },
    ],
  },
  {
    id: "sabo-hub",
    number: "03",
    title: "SABO HUB",
    role: "AI Workflow & Automation Explorer",
    tags: ["AI", "AUTOMATION", "PRODUCT"],
    tagline:
      "Exploring AI-powered workflows and automation for everyday business operations.",
    challenge:
      "Routine business administration—compiling spreadsheets, summarizing client calls, reformatting promotional text, and drafting notices—takes substantial hours away from core growth.",
    approach:
      "Researched and integrated cutting-edge AI engines (ChatGPT, Manus, Kling, Higgsfield) with connected spreadsheets and custom templates to establish human-supervised automation cycles.",
    whatIDid: [
      "Engineered prompt architectures for rapid report summarization and market scans",
      "Tested autonomous agent workflows with Manus AI for automated research tasks",
      "Created dynamic spreadsheet formulas and automated script triggers for internal trackers",
      "Generated experimental short-form visual concepts using neural video tools (Higgsfield, Kling)",
      "Formulated clear AI usage guidelines to ensure human-in-the-loop accuracy",
    ],
    tools: [
      "ChatGPT",
      "Manus AI",
      "Higgsfield",
      "Kling",
      "Google Sheets Scripts",
    ],
    outcome:
      "Drastically accelerated content ideation cycles, minimized manual formatting overhead, and gave non-technical teammates practical AI tools they can use daily.",
    gallery: [
      {
        label: "Workflow Concepts",
        category: "System Design",
        desc: "Visual schematics demonstrating input ingestion, AI synthesis, and human approval gates",
        badge: "WORKFLOW MAP",
      },
      {
        label: "AI Interface & Prompts",
        category: "Prompt System",
        desc: "Modular prompt libraries calibrated for executive summaries, financial tables, and social copy",
        badge: "PROMPT LIBRARY",
      },
      {
        label: "Automation Diagrams",
        category: "Architecture",
        desc: "Connected nodes mapping data exchange between cloud sheets, Slack notifications, and deliverables",
        badge: "AUTOMATION ARCH",
      },
      {
        label: "Product UI Prototype",
        category: "Interface",
        desc: "Intuitive desktop portal where team members trigger pre-configured AI workflows",
        badge: "PORTAL UI",
      },
    ],
  },
  {
    id: "sabo-design",
    number: "04",
    title: "SABO DESIGN",
    role: "Lead Creative Designer",
    tags: ["BRANDING", "VISUAL DESIGN", "CREATIVE"],
    tagline:
      "Creating visual identities, promotional materials and digital content for SABO projects.",
    challenge:
      "Developing a distinct, cohesive aesthetic that stands out in commercial sports and media spaces, while adhering strictly to rigorous print and digital manufacturing standards.",
    approach:
      "Devised a signature visual tone combining deep midnight blues, glossy chrome typography, crisp geometric grids, and high-visibility contrast across all media formats.",
    whatIDid: [
      "Designed full-scale event posters, stage backdrops, and promotional banners (300 DPI)",
      "Crafted corporate brandmarks, commemorative badges, and tournament certificates",
      "Created social media carousels, video cover graphics, and interactive story assets",
      "Supervised print proofs with printing vendors to verify CMYK color fidelity",
      "Structured an accessible cloud asset repository for marketing and partner teams",
    ],
    tools: [
      "Canva Pro",
      "Photoshop",
      "Illustrator",
      "CapCut",
      "CMYK Pre-Press Specs",
    ],
    outcome:
      "Delivered dozens of zero-defect print materials, established strong visual recall for SABO events, and elevated promotional content to a premium editorial standard.",
    gallery: [
      {
        label: "Tournament Posters",
        category: "Editorial Print",
        desc: "Signature sports event posters featuring metallic 3D typography and vibrant lighting",
        badge: "LARGE FORMAT",
      },
      {
        label: "Logos & Badges",
        category: "Brand Identity",
        desc: "Geometric crests, club monograms, and minimalist digital symbols",
        badge: "VECTOR ASSETS",
      },
      {
        label: "Certificates & Awards",
        category: "Accreditation",
        desc: "Prestige championship certificates with security border guilloche and foil accents",
        badge: "PRINT EMBOSS",
      },
      {
        label: "Social Media Designs",
        category: "Digital Feeds",
        desc: "Grid-aligned multi-post carousel layouts engineered for high viewer engagement",
        badge: "INSTAGRAM / FB",
      },
      {
        label: "Campaign Visuals",
        category: "Marketing",
        desc: "Comprehensive promotional kits for club launches, seasonal tournaments, and partnerships",
        badge: "KEY VISUALS",
      },
    ],
  },
];

// -------------------------------------------------------------
// 4. DIGITAL DESK — 6 FUTURISTIC FOLDERS
// -------------------------------------------------------------
export const DIGITAL_DESK_FOLDERS: DeskFolder[] = [
  {
    id: "sabo",
    slug: "/ SABO",
    name: "SABO Ecosystem",
    badge: "CORE_CORP",
    tagline: "Corporate frameworks & ecosystem documentation",
    description:
      "Operational blueprints, venue standards, and cross-entity organizational maps connecting club entertainment with media technology.",
    files: [
      {
        name: "SABO_Arena_SOP_v2.pdf",
        size: "2.4 MB",
        type: "Operations SOP",
        desc: "Tournament execution protocols, table scheduling, and referee conduct rules.",
        status: "ACTIVE",
        tags: ["Operations", "SOP", "Arena"],
      },
      {
        name: "Tournament_Master_Schedule.xlsx",
        size: "840 KB",
        type: "Financial & Logistics Sheet",
        desc: "Annual tournament roadmap, participant tiers, and prize pool breakdowns.",
        status: "LOCKED",
        tags: ["Finance", "Logistics"],
      },
      {
        name: "Venue_Daily_Checklist.md",
        size: "18 KB",
        type: "Markdown Standard",
        desc: "Step-by-step opening, table audit, bar inventory, and closing verification.",
        status: "VERIFIED",
        tags: ["Floor SOP"],
      },
    ],
  },
  {
    id: "projects",
    slug: "/ PROJECTS",
    name: "Active Deliverables",
    badge: "ACTIVE_SPRINT",
    tagline: "Cross-functional execution pipelines & client rollouts",
    description:
      "Live task tracking, milestone matrices, and quality assurance logs across digital and operational initiatives.",
    files: [
      {
        name: "Quarterly_Milestone_Roadmap.gantt",
        size: "1.1 MB",
        type: "Sprint Plan",
        desc: "Resource allocation and timeline across design, tech, and club events.",
        status: "IN_PROGRESS",
        tags: ["Planning", "Milestones"],
      },
      {
        name: "Client_Delivery_Matrix.pdf",
        size: "3.2 MB",
        type: "Review & Signoff",
        desc: "Quality checklist and SLA metrics for delivered digital platforms.",
        status: "COMPLETED",
        tags: ["QA", "Signoff"],
      },
      {
        name: "Feature_Backlog_Tracker.json",
        size: "95 KB",
        type: "Data Config",
        desc: "User feedback categorization and prioritized app enhancements.",
        status: "SYNCED",
        tags: ["Product", "App"],
      },
    ],
  },
  {
    id: "content",
    slug: "/ CONTENT",
    name: "Media & Editorial",
    badge: "MEDIA_PROD",
    tagline: "Viral short-form frameworks & multi-channel publishing",
    description:
      "Engaging scripts, video pacing breakdowns, and publishing calendars calibrated for modern social algorithms.",
    files: [
      {
        name: "Shorts_3Sec_Hook_Framework.doc",
        size: "480 KB",
        type: "Creative Brief",
        desc: "Retention psychology guidelines for TikTok, Reels, and YouTube Shorts.",
        status: "REVISED",
        tags: ["Video AI", "Hooks"],
      },
      {
        name: "Monthly_Editorial_Calendar.sheet",
        size: "1.8 MB",
        type: "Content Pipeline",
        desc: "Content themes, visual assignments, and publishing checkpoints.",
        status: "LIVE",
        tags: ["Editorial", "Schedule"],
      },
      {
        name: "Audience_Sentiment_Review.pdf",
        size: "4.5 MB",
        type: "Qualitative Report",
        desc: "Community feedback analysis and recommendations for next cycle.",
        status: "ARCHIVED",
        tags: ["Community", "Growth"],
      },
    ],
  },
  {
    id: "ai-workflow",
    slug: "/ AI WORKFLOW",
    name: "AI & Automation Lab",
    badge: "NEURAL_ENGINE",
    tagline: "Structured prompt libraries & generative pipeline tests",
    description:
      "Synthesizing cognitive tools to handle administrative drudgery and explore next-generation media production.",
    files: [
      {
        name: "Operations_Prompt_System_v4.prompt",
        size: "128 KB",
        type: "Prompt Pack",
        desc: "Battle-tested prompt chains for business reporting, contract reviews, and summaries.",
        status: "STABLE",
        tags: ["LLM", "Operations"],
      },
      {
        name: "Manus_Agent_Execution_Log.json",
        size: "64 KB",
        type: "Agent Trace",
        desc: "Autonomous workflow run: competitor scan, price benchmarking, and executive brief.",
        status: "PARSED",
        tags: ["Agents", "Automation"],
      },
      {
        name: "Kling_Higgsfield_Motion_Guide.md",
        size: "32 KB",
        type: "Research Note",
        desc: "Comparative test notes on motion stability, camera speed, and artifacting.",
        status: "UPDATED",
        tags: ["Generative Video"],
      },
    ],
  },
  {
    id: "design",
    slug: "/ DESIGN",
    name: "Design Vault",
    badge: "GRAPHIC_ASSETS",
    tagline: "Print-ready posters, vector suites & brand identities",
    description:
      "CMYK production files, typography tokens, trophy certifications, and high-impact sports marketing collateral.",
    files: [
      {
        name: "Championship_Poster_Master.cmyk",
        size: "52.4 MB",
        type: "Print Master (300 DPI)",
        desc: "Layered key visual with metallic foil spot plates and trim cut lines.",
        status: "APPROVED_FOR_PRINT",
        tags: ["Print", "KeyVisual"],
      },
      {
        name: "SABO_Identity_Kit_2026.vector",
        size: "14.2 MB",
        type: "Vector Suite",
        desc: "SVG, AI, and EPS files for primary wordmarks, icons, and monochrome seals.",
        status: "CANONICAL",
        tags: ["Identity", "Vectors"],
      },
      {
        name: "Tournament_Honor_Certificate.ai",
        size: "8.6 MB",
        type: "Certificate Template",
        desc: "Prestige framed achievement document with guilloche patterns.",
        status: "PRINT_READY",
        tags: ["Certificates"],
      },
    ],
  },
  {
    id: "digital-stack",
    slug: "/ DIGITAL",
    name: "Web & Runtime Tech",
    badge: "DEV_STACK",
    tagline: "Responsive web architectures & app deployment checks",
    description:
      "Modern component libraries, mobile Flutter applications, and integrated database check-in systems.",
    files: [
      {
        name: "SABO_Arena_Mobile_Build.apk",
        size: "38.6 MB",
        type: "Android Application",
        desc: "Flutter client build powering live match brackets and member check-in.",
        status: "STABLE",
        tags: ["Flutter", "Mobile"],
      },
      {
        name: "Spatial_Portfolio_Theme.tsx",
        size: "42 KB",
        type: "Next.js Component",
        desc: "Responsive cyber-editorial layout with glassmorphic cards and WebGL canvas.",
        status: "DEPLOYED",
        tags: ["Next.js", "React"],
      },
      {
        name: "QR_Checkin_Automation.flow",
        size: "16 KB",
        type: "Integration Flow",
        desc: "Scanned QR validation hook updating member attendance in real time.",
        status: "ACTIVE",
        tags: ["QR", "Automation"],
      },
    ],
  },
];

// -------------------------------------------------------------
// 5. TOOLBOX — TOOLS I WORK WITH
// -------------------------------------------------------------
export const TOOLBOX_CATEGORIES: ToolCategory[] = [
  {
    id: "ai",
    title: "AI",
    tagline: "Cognitive synthesis & generative media",
    items: [
      {
        name: "ChatGPT",
        role: "Cognitive Synthesizer",
        desc: "Advanced logic reasoning, operational prompt chains, and automated draft synthesis.",
        badge: "REASONING",
      },
      {
        name: "Manus",
        role: "Autonomous Agent",
        desc: "Multi-step research pipelines, data aggregation, and end-to-end task automation.",
        badge: "AGENTIC",
      },
      {
        name: "Higgsfield",
        role: "Generative Motion",
        desc: "High-coherence cinematic video creation for social campaigns and brand storytelling.",
        badge: "NEURAL VIDEO",
      },
      {
        name: "Kling",
        role: "Physics Motion Engine",
        desc: "Realistic motion dynamics and experimental visual storytelling for short-form clips.",
        badge: "MOTION AI",
      },
    ],
  },
  {
    id: "creative",
    title: "CREATIVE",
    tagline: "Visual communication & motion cutting",
    items: [
      {
        name: "Canva",
        role: "Agile Layout & Systems",
        desc: "Fast brand collateral, tournament posters, social carousels, and client decks.",
        badge: "LAYOUT",
      },
      {
        name: "CapCut",
        role: "Kinetic Video Editing",
        desc: "Rhythmic cut sequences, subtitle typography, sound design, and viral short-form delivery.",
        badge: "EDITING",
      },
    ],
  },
  {
    id: "business",
    title: "BUSINESS",
    tagline: "Corporate structure, finance & operations",
    items: [
      {
        name: "Google Workspace",
        role: "Team Operations",
        desc: "Collaborative doc hubs, centralized drive systems, and team operational standards.",
        badge: "COLLAB",
      },
      {
        name: "Excel",
        role: "Financial Analysis",
        desc: "Rigorous financial calculations, cost tracking, audit reconciliation, and data modeling.",
        badge: "FINANCE",
      },
      {
        name: "Google Sheets",
        role: "Cloud Data Hubs",
        desc: "Dynamic project trackers, live tournament tables, and automated team spreadsheets.",
        badge: "DATA HUB",
      },
    ],
  },
  {
    id: "digital",
    title: "DIGITAL",
    tagline: "Modern web, applications & pipelines",
    items: [
      {
        name: "Website",
        role: "Responsive Architectures",
        desc: "High-performance editorial websites built with semantic HTML and clean styling.",
        badge: "WEB",
      },
      {
        name: "Web App",
        role: "Interactive Interfaces",
        desc: "Component-driven user interfaces designed for intuitive everyday operation.",
        badge: "APPS",
      },
      {
        name: "SaaS",
        role: "Business Platforms",
        desc: "SaaS operational portals, user onboarding flows, and customer management tools.",
        badge: "PLATFORMS",
      },
      {
        name: "Automation",
        role: "Workflow Triggers",
        desc: "Connecting inputs, sheets, notifications, and customer touchpoints effortlessly.",
        badge: "INTEGRATION",
      },
    ],
  },
];

// -------------------------------------------------------------
// 6. HOW I WORK — FROM IDEA → EXECUTION
// -------------------------------------------------------------
export const HOW_I_WORK_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "UNDERSTAND",
    subtitle: "Identify real constraints",
    desc: "Deconstruct the core business objective, interview stakeholders, and isolate operational friction before rushing into execution.",
    deliverable: "Objective brief & friction breakdown",
  },
  {
    step: "02",
    title: "PLAN",
    subtitle: "Architect clear pathways",
    desc: "Map timelines, resource dependencies, and standardized milestones. Every party understands their role and checkpoint dates.",
    deliverable: "Action roadmap & SOP framework",
  },
  {
    step: "03",
    title: "BUILD",
    subtitle: "Execute with precision",
    desc: "Craft the deliverables—whether designing high-resolution print visuals, setting up venue logistics, or configuring digital platforms.",
    deliverable: "High-fidelity deliverables & tested workflows",
  },
  {
    step: "04",
    title: "AUTOMATE",
    subtitle: "Eliminate repetitive drag",
    desc: "Identify recurring steps, integrate AI prompt templates, link spreadsheets, and create reusable components so the system runs smoothly.",
    deliverable: "Self-sustaining routines & AI helpers",
  },
  {
    step: "05",
    title: "IMPROVE",
    subtitle: "Iterate from reality",
    desc: "Gather authentic qualitative feedback, audit real-world usage, and polish the workflow to make subsequent executions faster and cleaner.",
    deliverable: "Version iteration & qualitative report",
  },
];

export const HOW_I_WORK_COPY =
  "“I don’t just focus on completing a task. I look for ways to make the process clearer, faster and easier to repeat.”";

// -------------------------------------------------------------
// 7. EXPERIENCE TIMELINE — EXACT AUTHENTIC DATES & ROLES
// -------------------------------------------------------------
export const EXPERIENCE_TIMELINE: TimelineEntry[] = [
  {
    period: "2024",
    company: "VIB",
    role: "Internship",
    field: "Finance / Banking / Customer-related experience",
    summary:
      "Gained foundational exposure to commercial banking operations, customer advisory workflows, compliance documentation, and financial credit discipline.",
    highlights: [
      "Customer verification and institutional banking documentation",
      "Analysis of customer financial profiles and service requests",
      "Rigorous adherence to institutional banking protocols",
    ],
    current: false,
  },
  {
    period: "2025",
    company: "DIGITAL & BUSINESS PROJECTS",
    role: "Independent Operations & Creative Specialist",
    field: "Content / Design / AI / Digital",
    summary:
      "Executed diverse engagements spanning digital content strategy, brand visual design, social campaign execution, and practical AI workflow prototyping.",
    highlights: [
      "Produced viral short-form video content and designed event poster campaigns",
      "Created visual identities, merchandise, and promotional print assets",
      "Piloted generative AI workflows to streamline everyday client communications",
    ],
    current: false,
  },
  {
    period: "2026 — NOW",
    company: "SABO MEDIA & TECHNOLOGY",
    role: "Operations Specialist",
    field: "Operations / HR / Administration / Finance / Digital",
    summary:
      "Driving multi-disciplinary operations across the SABO ecosystem: venue management, personnel coordination, internal financial records, and digital product rollouts.",
    highlights: [
      "Overseeing daily business and tournament operations for sports venues",
      "Managing internal HR documentation, staff scheduling, and payroll support",
      "Supporting digital product rollouts, client documentation, and AI automation adoption",
    ],
    current: true,
  },
];
