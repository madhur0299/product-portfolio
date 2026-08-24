import {
  Apple,
  BadgeCheck,
  BarChart3,
  Bot,
  BrainCircuit,
  Braces,
  ChartNoAxesCombined,
  Code2,
  Compass,
  CreditCard,
  Database,
  Dumbbell,
  FileSpreadsheet,
  FlaskConical,
  Globe,
  HeartPulse,
  Layers,
  LineChart,
  MonitorSmartphone,
  Rocket,
  Route,
  ServerCog,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TabletSmartphone,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export type Profile = {
  name: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  linkedinUrl: string;
  githubUrl: string;
  resumePath: string;
  headline: string;
  summary: string;
  availability: string;
};

export type CaseMetric = {
  label: string;
  value: string;
  context: string;
};

export type OutcomeMetric = {
  metric: string;
  value: string;
  context: string;
};

export type Artifact = {
  title: string;
  type:
    | "PRD"
    | "Dashboard"
    | "Research"
    | "Prototype"
    | "Experiment"
    | "Launch Doc"
    | "Architecture"
    | "Build";
  status: "Resume-backed" | "Needs redaction" | "Draftable from resume" | "Local proof";
  description: string;
};

export type CaseSection = {
  title: string;
  body: string;
};

export type PlatformProof = {
  platform: "Web" | "iOS" | "Android";
  title: string;
  description: string;
  stack: string[];
  icon: LucideIcon;
};

export type CaseStudy = {
  slug: string;
  eyebrow: string;
  title: string;
  company: string;
  timeframe: string;
  role: string;
  mandate: string;
  keyDecision: string;
  evidence: string;
  summary: string;
  image: string;
  featured?: boolean;
  tags: string[];
  metrics: CaseMetric[];
  artifacts: Artifact[];
  sections: CaseSection[];
  platforms?: PlatformProof[];
};

export type ProofItem = {
  title: string;
  description: string;
  type: Artifact["type"];
  icon: LucideIcon;
  status: Artifact["status"];
};

export type ProfileSignal = {
  label: string;
  title: string;
  description: string;
};

export type ProjectBuild = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  impact: string;
  stack: string[];
  platforms: string[];
  source: "Resume-backed" | "Local build" | "GitHub profile" | "Internal build";
  status: string;
  href?: string;
  featured?: boolean;
  icon: LucideIcon;
};

export type ProfessionalExperience = {
  company: string;
  timeframe: string;
  overview: string;
  storyHref: string;
  storyLabel: string;
  stages: Array<{
    role: string;
    timeframe: string;
    summary: string;
    achievements: string[];
  }>;
  outcomes: OutcomeMetric[];
};

export type SkillGroup = {
  title: string;
  outcome: string;
  evidence: string;
  skills: string[];
};

export type CoachScreen = {
  src: string;
  alt: string;
  label: string;
  detail: string;
};

export type ImpactHighlight = {
  company: string;
  description: string;
  metrics: OutcomeMetric[];
};

export const profile: Profile = {
  name: "Madhur Jain",
  role: "AI, data & growth products",
  location: "Gurugram, India",
  email: "madhur.jain02@gmail.com",
  phone: "+91 95301 74692",
  linkedinUrl: "https://www.linkedin.com/in/madhurj021199/",
  githubUrl: "https://github.com/madhur0299",
  resumePath: "/resume.pdf",
  headline:
    "I turn consumer growth problems into measurable outcomes.",
  summary:
    "Product Manager at PRISM, leading pricing and conversion for OYO US and G6. I also build AI systems that reduce operating effort and improve decisions. Previously, I grew mobile subscriptions at SplashLearn and D2C journeys at Honasa.",
  availability:
    "Open to Senior Product Manager, PM3, AI/Data PM, Growth PM, and product-builder roles.",
};

export const resumeSkills = [
  "AI Product Management",
  "AI Workflow Automation",
  "SQL and Data Analytics",
  "SQL Validation",
  "LLM Evaluation",
  "Evaluation Criteria",
  "Prompt Evaluation",
  "LangChain",
  "LangGraph",
  "Retrieval-Augmented Generation (RAG)",
  "Vector Databases",
  "Agentic Workflows",
  "Python",
  "Data Visualization",
  "Funnel Analytics",
  "APIs and Events",
  "Experimentation",
  "Product Roadmapping",
];

export const skillGroups: SkillGroup[] = [
  {
    title: "AI product systems",
    outcome: "Turn fragmented business data and operating work into trusted AI product systems.",
    evidence:
      "PRISM: built a two-agent natural-language-to-SQL workflow with 85% accuracy on gold-standard business queries, while leading AI workflow automation for research, reporting, and PRD work.",
    skills: [
      "AI Product Management",
      "AI Workflow Automation",
      "LangChain",
      "LangGraph",
      "RAG",
      "Vector Databases",
      "Agentic Workflows",
      "LLM Evaluation",
      "Evaluation Criteria",
      "Prompt Evaluation",
    ],
  },
  {
    title: "Growth, monetization, and conversion",
    outcome: "Find leverage in customer journeys and turn it into conversion, subscribers, and revenue.",
    evidence:
      "PRISM, SplashLearn, and Honasa: owned FTC pricing transparency, web-to-app migration, and D2C funnel work that lifted HDP-to-booking success, trial-to-paid, and homepage and search conversion.",
    skills: ["Funnel Analytics", "Experimentation"],
  },
  {
    title: "Product strategy and delivery",
    outcome: "Move ambiguous opportunities from a decision to a launch with teams aligned around the customer and business.",
    evidence:
      "Across US consumer pricing and conversion, Android subscriber growth, and multi-brand ecommerce systems, I have set roadmap, tradeoffs, launch conditions, and stakeholder alignment.",
    skills: ["Product Roadmapping", "Product Judgment", "Stakeholder Leadership"],
  },
  {
    title: "Data fluency and technical collaboration",
    outcome: "Work fluently with the systems, instrumentation, and analysis that make product decisions defensible.",
    evidence:
      "PRISM analytics, growth funnels, and Coach: combine data quality, product telemetry, APIs, and hands-on build collaboration to move from insight to a working experience.",
    skills: ["SQL and Data Analytics", "SQL Validation", "Python", "Data Visualization", "APIs and Events"],
  },
];

export const professionalExperience: ProfessionalExperience[] = [
  {
    company: "PRISM (Parent Company of OYO)",
    timeframe: "November 2025 - Present",
    overview: "Own consumer-facing products for OYO US and G6 across pricing and conversion. I also lead AI initiatives that reduce operating effort and improve how teams make decisions.",
    storyHref: "/work/ai-analytics-nl-to-sql",
    storyLabel: "Open the AI workflow case study",
    stages: [
      {
        role: "Product Manager III",
        timeframe: "November 2025 - Present",
        summary: "Lead pricing and conversion initiatives for OYO US and G6, alongside AI product work that improves team efficiency and operational decision-making.",
        achievements: [
          "Built a dynamic fee module for OYO and G6 brands, increasing cost margin by up to $2M annually.",
          "Led FTC pricing-transparency implementation with a 28% reduction in prepaid-page views, 10% better Google HAC price accuracy, and 10% higher HDP-to-booking success.",
          "Lead AI PM initiatives that automate research, marketing benchmarks, daily Teams reporting, and PRD workflows with Cowork to reduce manual synthesis.",
          "Built a two-agent natural-language-to-SQL workflow with 85% accuracy on gold-standard business queries.",
          "Made product and operational data easier for business teams to query without analyst translation.",
        ],
      },
    ],
    outcomes: [
      {
        metric: "Conversion",
        value: "+10%",
        context: "HDP-to-booking success after FTC pricing-transparency work.",
      },
      {
        metric: "Revenue",
        value: "Confidential",
        context: "Owned pricing and fee levers for OYO and G6; the direct revenue figure is not public.",
      },
      {
        metric: "Cost margin",
        value: "Up to $2M",
        context: "Annualized cost-margin upside modelled from the dynamic fee module.",
      },
    ],
  },
  {
    company: "SplashLearn",
    timeframe: "May 2024 - November 2025",
    overview: "Owned subscriber growth and retention work for the Android app and app-to-web journeys at an elementary-learning platform.",
    storyHref: "/work/android-subscriber-growth",
    storyLabel: "Open the mobile growth case study",
    stages: [
      {
        role: "Product Manager",
        timeframe: "May 2024 - November 2025",
        summary: "Led Android launch, activation, migration, retention, and content-operations initiatives.",
        achievements: [
          "Launched the Android app to 1,000 monthly subscribers within six months and $5K in recurring revenue growth.",
          "Improved Play Store rating from 2.3 to 4.0, Day-0 engagement by 25%, and playable-start rate by 30%.",
          "Diagnosed a Day-0 engagement gap between iPhone and iPad users and led a dashboard redesign that improved early engagement by 10%.",
          "Launched web-to-app migration that converted 70% of mobile-web users, lifted trial-to-paid by 15%, and added 800 incremental subscribers each month.",
          "Developed a first-time-user game-download algorithm that reduced Day-1 cancellations by 15%, improved trial-to-paid by 8%, and added 800 subscribers each month at $55 LTV.",
          "Designed a GPT-4o mini transcript workflow that reduced the content cycle from six weeks to two.",
        ],
      },
    ],
    outcomes: [
      {
        metric: "Trial-to-paid",
        value: "+15%",
        context: "Lift from the web-to-app migration flow.",
      },
      {
        metric: "Subscribers",
        value: "1,000 monthly",
        context: "Paying Android subscribers within six months of launch.",
      },
      {
        metric: "Revenue",
        value: "+$5K recurring",
        context: "Recurring revenue growth associated with the Android app launch.",
      },
    ],
  },
  {
    company: "Honasa Consumer Limited (Mamaearth)",
    timeframe: "March 2021 - May 2024",
    overview: "Progressed from Product Management Intern to Product Manager across Mamaearth, Aqualogica, BBlunt, Yotobox, referral systems, and house-of-brands product infrastructure.",
    storyHref: "/work/d2c-referral-conversion",
    storyLabel: "Open the D2C conversion case study",
    stages: [
      {
        role: "Product Manager",
        timeframe: "April 2023 - May 2024",
        summary: "Led Aqualogica growth and website analytics, the end-to-end website lifecycle, and referral and acquisition work across Honasa brands.",
        achievements: [
          "Spearheaded Aqualogica product initiatives contributing to a Rs 175 Cr revenue run rate.",
          "Led strategy, roadmap, UX, data analysis, QA, copywriting, and operational setup across the website lifecycle.",
          "Improved homepage conversion by 15% and search conversion by 17% through funnel analysis and iteration.",
          "Owned referrals across web, Android, iOS, and Yotobox; targeted cohort visibility lifted referral signups to 8% of organic daily acquisition and referral users converted at 40% versus 20% for signup users.",
          "Reduced first-order discount percentage for Yotobox-acquired users by 25% across Honasa brands.",
        ],
      },
      {
        role: "Associate Product Manager",
        timeframe: "September 2021 - March 2023",
        summary: "Built acquisition systems, supported new brand launches, and partnered on scalable platform foundations.",
        achievements: [
          "Benchmarked Aqualogica as the fastest Honasa brand to reach a Rs 100 Cr annual run rate.",
          "Implemented referral systems on the Mamaearth website and app to reduce new-user CPC.",
          "Launched the Aqualogica platform in under 50 days and the BBlunt devices site on Shopify with an AOV above Rs 2,500.",
          "Partnered with engineering on API contracts and event architecture supporting one million transactions per day.",
        ],
      },
      {
        role: "Product Management Intern",
        timeframe: "March 2021 - September 2021",
        summary: "Worked on fraud and post-purchase operations for the Mamaearth customer journey.",
        achievements: [
          "Automated fraud detection and cancellation, eliminating manual review effort.",
          "Improved Magento, Unicommerce, and Shiprocket integrations to reduce non-serviceable orders to zero.",
        ],
      },
    ],
    outcomes: [
      {
        metric: "Conversion",
        value: "+15% / +17%",
        context: "Homepage and search conversion improvements through funnel iteration.",
      },
      {
        metric: "Revenue",
        value: "Rs 175 Cr",
        context: "Aqualogica revenue run rate during the growth and website work.",
      },
      {
        metric: "Cost margin",
        value: "-25% discount",
        context: "Lower first-order discount for Yotobox-acquired users, improving unit economics.",
      },
      {
        metric: "AOV",
        value: "> Rs 2,500",
        context: "Average order value on the BBlunt devices Shopify launch.",
      },
    ],
  },
];

export const coachScreens: CoachScreen[] = [
  {
    src: "/images/coach/ios/home-dashboard.png",
    alt: "Coach iOS home dashboard showing a Tuesday Back workout, steps, streak, weekly progress, and five primary navigation areas",
    label: "Home dashboard",
    detail: "Daily training plan",
  },
  {
    src: "/images/coach/ios/health-insights.png",
    alt: "Coach iOS app showing Health insights with steps, active calories, sleep, recovery, and body data",
    label: "Health insights",
    detail: "Health data",
  },
  {
    src: "/images/coach/ios/personal-training.png",
    alt: "Coach iOS app showing the personal training experience with live sessions, private chat, and approved plans",
    label: "Personal training",
    detail: "Trainer workflows",
  },
];

export const strengths = [
  {
    title: "Product Judgment",
    description:
      "Turns ambiguous business goals into clear product bets, decision criteria, tradeoffs, and measurable outcomes.",
    icon: Compass,
  },
  {
    title: "Cross-platform Builder",
    description:
      "Can reason across web, iOS, Android, data, integrations, and user experience instead of stopping at a roadmap.",
    icon: MonitorSmartphone,
  },
  {
    title: "AI and Data Products",
    description:
      "Builds analytics workflows, SQL-backed insights, LLM evaluation loops, automation systems, and PM tools for faster decisions.",
    icon: BrainCircuit,
  },
  {
    title: "Growth and Monetization",
    description:
      "Improves conversion, retention, pricing, acquisition, and subscription economics across consumer app and web surfaces.",
    icon: LineChart,
  },
];

export const profileSignals: ProfileSignal[] = [
  {
    label: "Current lane",
    title: "PM3 with senior PM and AI/Data PM positioning",
    description:
      "The latest resume positions you for Product Manager III, Senior Product Manager, AI Product Manager, Data PM, Growth PM, and product-builder roles.",
  },
  {
    label: "Builder proof",
    title: "Coach spans web, iOS, and Android",
    description:
      "Coach is a self-built fitness product suite across Next.js web, SwiftUI iOS, and Kotlin/Jetpack Compose Android surfaces.",
  },
  {
    label: "Commercial PM range",
    title: "Growth, monetization, ecommerce, subscriptions, and analytics",
    description:
      "Your professional work spans US consumer products and AI PM initiatives at PRISM, OYO pricing and conversion, SplashLearn app subscriptions, and Mamaearth/Aqualogica D2C growth.",
  },
  {
    label: "Operating style",
    title: "Strategy through hands-on execution",
    description:
      "The strongest through-line is funnel analysis, UX decisions, QA, instrumentation, launch readiness, automation, and measurable iteration.",
  },
];

export const projectBuilds: ProjectBuild[] = [
  {
    slug: "coach-cross-platform",
    title: "Coach cross-platform fitness OS",
    eyebrow: "Flagship product build",
    description:
      "A self-built workout planning, logging, progress, health, and trainer product across web, iOS, and Android.",
    impact:
      "Shows product judgment, technical depth, platform thinking, Supabase-backed architecture, HealthKit/Health Connect integrations, and end-to-end execution.",
    stack: ["Next.js", "SwiftUI", "Kotlin", "Supabase", "HealthKit", "Health Connect"],
    platforms: ["Web", "iOS", "Android"],
    source: "Local build",
    status: "Built from scratch",
    href: "/work/coach-cross-platform",
    featured: true,
    icon: Dumbbell,
  },
  {
    slug: "ai-analytics-nl-to-sql",
    title: "Two-agent NL-to-SQL analytics workflow",
    eyebrow: "AI analytics system",
    description:
      "A natural-language analytics workflow that generates SQL, executes queries, and visualizes results for business users.",
    impact:
      "85% SQL accuracy across gold-standard business queries, with evaluation and failure taxonomy ready to redact.",
    stack: ["LLMs", "SQL", "Evaluation", "Dashboards"],
    platforms: ["Internal product"],
    source: "Resume-backed",
    status: "Professional work",
    href: "/work/ai-analytics-nl-to-sql",
    icon: Bot,
  },
  {
    slug: "gpt-content-automation",
    title: "GPT-4o mini transcript automation",
    eyebrow: "Workflow automation",
    description:
      "An LLM-assisted workflow that reduced the content production cycle for learning-game transcripts.",
    impact:
      "Compressed a 6-week workflow into 2 weeks while supporting faster app iteration and content freshness.",
    stack: ["GPT-4o mini", "Workflow design", "QA", "Ops"],
    platforms: ["Internal workflow"],
    source: "Resume-backed",
    status: "Professional work",
    icon: Braces,
  },
  {
    slug: "github-profile",
    title: "GitHub profile",
    eyebrow: "Public builder identity",
    description:
      "Public GitHub profile for open-source and future Coach publishing. Sparse legacy repos are not featured as portfolio proof.",
    impact:
      "Keeps the portfolio honest while still giving technical hiring teams a direct profile link.",
    stack: ["GitHub", "Portfolio proof", "Builder signal"],
    platforms: ["Profile"],
    source: "GitHub profile",
    status: "Profile link",
    href: profile.githubUrl,
    icon: Code2,
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "coach-cross-platform",
    eyebrow: "Flagship product build",
    title: "Coach: a cross-platform fitness product built from scratch",
    company: "Personal product",
    timeframe: "2026",
    role: "Founder, Product Manager, and Builder",
    mandate:
      "Create a real workout product that can plan routines, guide active sessions, track progress, connect health data, and support trainer workflows across web, iOS, and Android.",
    keyDecision:
      "Designed Coach as one product system with platform-native surfaces instead of a single prototype: Next.js web for hosted workflows, SwiftUI for Apple-native training, and Kotlin/Compose for Android.",
    evidence:
      "This is an active personal build. The screenshots on this page show the product in use across its web and mobile surfaces.",
    image: "/images/coach-product-system.png",
    featured: true,
    summary:
      "Built Coach from scratch: a cross-platform fitness product for planning workouts, logging sessions, tracking progress, connecting health data, and supporting personal training workflows.",
    tags: ["Cross-platform", "Next.js", "SwiftUI", "Kotlin", "Supabase", "Health data"],
    metrics: [
      {
        label: "My role",
        value: "End to end",
        context: "Product definition, interaction design, and build execution",
      },
      {
        label: "Platforms",
        value: "3",
        context: "Web, iOS, and Android with platform-specific experiences",
      },
      {
        label: "Product scope",
        value: "Full journey",
        context: "Planning, active logging, progress review, health context, and trainer workflows",
      },
    ],
    platforms: [
      {
        platform: "Web",
        title: "Next.js hosted training product",
        description:
          "Mobile-first web/PWA with invite auth, onboarding, workout logging, templates, library, calendar, progress, friends, profile, admin, and trainer workflows.",
        stack: ["Next.js App Router", "Vercel", "Supabase Auth", "Postgres RLS", "TypeScript"],
        icon: Globe,
      },
      {
        platform: "iOS",
        title: "SwiftUI native Coach app",
        description:
          "Native iOS surface with onboarding, workout logging, HealthKit steps and insights, progress dashboard, widgets, Live Activities, Dynamic Island, and personal training entry points.",
        stack: ["SwiftUI", "Supabase", "HealthKit", "ActivityKit", "WidgetKit"],
        icon: Apple,
      },
      {
        platform: "Android",
        title: "Kotlin/Compose Android app",
        description:
          "Android app configured with Material 3, Room, WorkManager, secure storage, Health Connect/Fitness, Supabase auth/postgrest, and web bridge URL.",
        stack: ["Kotlin", "Jetpack Compose", "Room", "WorkManager", "Health Connect"],
        icon: Smartphone,
      },
    ],
    artifacts: [
      {
        title: "Cross-platform architecture map",
        type: "Architecture",
        status: "Local proof",
        description:
          "Map web, iOS, Android, Supabase, health integrations, trainer flows, and app-specific responsibilities.",
      },
      {
        title: "Coach product teardown",
        type: "PRD",
        status: "Draftable from resume",
        description:
          "Document target users, core jobs, workflows, platform choices, onboarding, workout logging, and trainer expansion.",
      },
      {
        title: "Platform screenshots and demo states",
        type: "Prototype",
        status: "Local proof",
        description:
          "Use redacted/local screenshots for dashboard, workout logger, progress, trainer, Live Activity, and Android surfaces.",
      },
    ],
    sections: [
      {
        title: "The user problem",
        body:
          "Workout products often split planning, active logging, progress review, trainer support, and health context across separate tools. Coach explores what a single cross-platform product system can look like when those jobs are connected.",
      },
      {
        title: "The product decision",
        body:
          "The web app handles hosted workflows such as onboarding, templates, workout sessions, calendar, progress, friends, profile, admin, and trainer flows. Native apps bring the experience closer to the workout with Apple Health, Health Connect, widgets, Live Activities, and device-specific interaction patterns.",
      },
      {
        title: "What I built for web",
        body:
          "The Next.js app uses App Router, Vercel, Supabase Auth, Supabase Postgres with Row Level Security, mobile web/PWA behavior, demo mode, trainer directory, bookings, chat, packages, and owner/admin workflows.",
      },
      {
        title: "What I built for iOS",
        body:
          "The SwiftUI app includes auth/session restore, onboarding, tabbed navigation, workout start/resume, set logging, progress dashboard, Apple Health steps and insights, Live Activities, Dynamic Island surfaces, widgets, and personal training discovery.",
      },
      {
        title: "What I built for Android",
        body:
          "The Android surface uses Kotlin, Jetpack Compose, Material 3, Room, WorkManager, secure crypto storage, Health Connect/Fitness libraries, Supabase auth/postgrest, and a configurable Coach web URL.",
      },
      {
        title: "Why this matters to my product practice",
        body:
          "Coach is where I test product decisions end to end: from the user workflow and platform choice to implementation details and the experience in someone’s hand.",
      },
    ],
  },
  {
    slug: "ai-analytics-nl-to-sql",
    eyebrow: "AI analytics product",
    title: "Natural-language analytics model for business users",
    company: "PRISM (Parent Company of OYO)",
    timeframe: "November 2025 - Present",
    role: "Product Manager III",
    mandate:
      "Make operational and product data easier for business teams to query without waiting on analyst translation.",
    keyDecision:
      "Separated SQL generation from execution and visualization so answer quality could be measured, debugged, and trusted.",
    evidence:
      "Accuracy was evaluated against known-good answers for a gold-standard set of business queries. Query examples, benchmark size, adoption data, and internal dashboards are confidential.",
    image: "/images/ai-analytics-case.png",
    summary:
      "Built a two-agent natural-language-to-SQL workflow that helps product and operations teams query business data, execute SQL, and inspect visual outputs without analyst translation.",
    tags: ["AI PM", "Data Products", "SQL", "Automation", "Dashboards"],
    metrics: [
      {
        label: "Evaluation result",
        value: "85%",
        context: "Accuracy against gold-standard natural-language business queries",
      },
      {
        label: "Workflow design",
        value: "Two-agent system",
        context: "Separated SQL generation from query execution and visualization",
      },
      {
        label: "Primary users",
        value: "Business teams",
        context: "Product and operations teams exploring data through natural language",
      },
    ],
    artifacts: [
      {
        title: "NL-to-SQL evaluation brief",
        type: "Research",
        status: "Needs redaction",
        description:
          "Redacted benchmark queries, accuracy scoring, failure taxonomy, and quality guardrails.",
      },
      {
        title: "Analytics workflow PRD",
        type: "PRD",
        status: "Draftable from resume",
        description:
          "Document user jobs, data access assumptions, query execution rules, and visualization expectations.",
      },
      {
        title: "Usage and quality dashboard",
        type: "Dashboard",
        status: "Needs redaction",
        description:
          "Track query volume, execution success, answer usefulness, retries, and analyst deflection.",
      },
    ],
    sections: [
      {
        title: "The business situation",
        body:
          "Product and operations teams needed faster access to data, but routine questions still depended on analysts to translate business language into SQL and visual summaries.",
      },
      {
        title: "The decision I owned",
        body:
          "I separated SQL generation from execution and visualization, so the product could measure generated-query quality and give users a clearer path to inspect the answer.",
      },
      {
        title: "How I made the workflow trustworthy",
        body:
          "Discovery centered on repeated business queries, common SQL patterns, data-table ambiguity, and the moments where teams waited for analyst support.",
      },
      {
        title: "The delivery tradeoff",
        body:
          "The product bet was to make analytics conversational while still measurable: evaluate generated SQL against known-good answers, separate generation from execution, and make output quality visible.",
      },
      {
        title: "What shipped",
        body:
          "The workflow used a two-agent architecture to generate SQL, execute queries, and return visual outputs, with quality measured against known-good answers. In parallel, I automated PM workflows for research, marketing benchmarks, daily Teams reporting, and PRD creation using Cowork.",
      },
      {
        title: "What changed",
        body:
          "The natural-language-to-SQL workflow reached 85% accuracy against gold-standard business queries and gave business users a route to explore product and operational data with less analyst dependency.",
      },
      {
        title: "What I would carry forward",
        body:
          "For AI products, a useful answer is not enough. The evaluation loop, known-good comparisons, and a legible path to inspect output are part of the product itself.",
      },
    ],
  },
  {
    slug: "android-subscriber-growth",
    eyebrow: "Consumer app growth",
    title: "Android launch and retention systems for a learning product",
    company: "SplashLearn",
    timeframe: "May 2024 - November 2025",
    role: "Product Manager",
    mandate:
      "Scale Android into a stronger subscription surface while improving early engagement, migration, and content operations.",
    keyDecision:
      "Treated growth as a system across app launch quality, engagement instrumentation, web-to-app migration, and LLM-assisted content velocity.",
    evidence:
      "The outcomes are resume-backed. Detailed cohorts, experimentation dashboards, and proprietary product screens are confidential.",
    image: "/images/app-growth-case.png",
    summary:
      "Launched and improved the Android app, pairing engagement analytics, onboarding improvements, web-to-app migration, and content automation to grow subscribers and early retention.",
    tags: ["Mobile Growth", "Retention", "Subscription", "Analytics", "LLM Workflow"],
    metrics: [
      {
        label: "Monthly subscribers",
        value: "1,000",
        context: "Scaled within 6 months of Android launch",
      },
      {
        label: "Trial-to-paid",
        value: "+15%",
        context: "From seamless web-to-app migration",
      },
      {
        label: "Content cycle",
        value: "6w to 2w",
        context: "Using GPT-4o mini transcript workflow",
      },
    ],
    artifacts: [
      {
        title: "App growth dashboard",
        type: "Dashboard",
        status: "Needs redaction",
        description:
          "Add anonymized Day-0 engagement, playable start rate, cancellation, and trial-to-paid views.",
      },
      {
        title: "Migration flow prototype",
        type: "Prototype",
        status: "Draftable from resume",
        description:
          "Show the decision flow from mobile web intent to app install, activation, and payment.",
      },
      {
        title: "Retention experiment log",
        type: "Experiment",
        status: "Needs redaction",
        description:
          "Capture hypotheses, cohorts, release dates, measurement windows, and results.",
      },
    ],
    sections: [
      {
        title: "The business situation",
        body:
          "The app needed to become a stronger subscription surface, while early engagement and migration from mobile web created friction in the first user sessions.",
      },
      {
        title: "The decision I owned",
        body:
          "I treated Android growth as a connected system: product quality, early engagement, web-to-app migration, and content operations had to improve together rather than as isolated acquisition projects.",
      },
      {
        title: "How I found the levers",
        body:
          "Engagement analysis identified an Android quality and early-session opportunity, a Day-0 gap between iPhone and iPad that informed a dashboard redesign, mobile-web migration friction, and content-production latency that slowed release velocity.",
      },
      {
        title: "The delivery tradeoff",
        body:
          "The strategy combined app launch quality, engagement instrumentation, migration flow design, and LLM-assisted content operations instead of treating growth as only acquisition.",
      },
      {
        title: "What shipped",
        body:
          "Launch and iteration work covered Android app scaling, a redesigned early-user dashboard, Play Store rating improvements, a web-to-app migration flow, a first-time-user game-download algorithm, and a GPT-4o mini transcript-generation workflow.",
      },
      {
        title: "What changed",
        body:
          "The app reached 1,000 monthly subscribers within six months and $5K in recurring revenue growth. The work also lifted Day-0 engagement by 25%, playable-start rate by 30%, web-to-app trial-to-paid by 15%, and reduced Day-1 cancellations by 15%. The first-time-user algorithm added 800 subscribers per month at $55 LTV.",
      },
      {
        title: "What I would carry forward",
        body:
          "Subscriber growth became more durable when activation, migration, and content velocity were managed as one product system, not a sequence of acquisition tactics.",
      },
    ],
  },
  {
    slug: "d2c-referral-conversion",
    eyebrow: "Honasa product journey",
    title: "Growing Aqualogica and acquisition systems across Honasa brands",
    company: "Honasa Consumer Limited: Mamaearth, Aqualogica, BBlunt, and Yotobox",
    timeframe: "March 2021 - May 2024",
    role: "Product Management Intern to Product Manager",
    mandate:
      "Progress from product operations into end-to-end product ownership across Aqualogica growth, Mamaearth acquisition, new brand launches, and shared platform systems.",
    keyDecision:
      "Treat brand growth, customer acquisition, launch readiness, and platform scale as connected product systems rather than isolated website changes.",
    evidence:
      "The outcomes are resume-backed. Brand dashboards, referral cohorts, and launch documentation are confidential.",
    image: "/images/ecommerce-growth-case.png",
    summary:
      "Progressed from product operations into product ownership across Aqualogica growth, Mamaearth acquisition, brand launches, referral systems, and scalable ecommerce infrastructure.",
    tags: ["Ecommerce", "Referral", "Conversion", "Funnels", "API Events"],
    metrics: [
      {
        label: "Aqualogica revenue run rate",
        value: "Rs 175 Cr",
        context: "Aqualogica run rate while I owned growth, lifecycle, conversion, and referral initiatives",
      },
      {
        label: "Homepage and search conversion",
        value: "+15% / +17%",
        context: "Improvement through funnel analysis and website iteration",
      },
      {
        label: "Platform scale",
        value: "1M/day",
        context: "Transactions supported by API contracts and event architecture",
      },
    ],
    artifacts: [
      {
        title: "Referral system PRD",
        type: "PRD",
        status: "Needs redaction",
        description:
          "Add goals, cohort rules, visibility changes, incentive logic, abuse checks, and launch criteria.",
      },
      {
        title: "Funnel diagnostics board",
        type: "Dashboard",
        status: "Needs redaction",
        description:
          "Show homepage, search, signup, referral, acquisition, and discount-rate diagnostics.",
      },
      {
        title: "Launch readiness checklist",
        type: "Launch Doc",
        status: "Draftable from resume",
        description:
          "Capture QA, copy, analytics, operational setup, and go-live dependencies.",
      },
    ],
    sections: [
      {
        title: "How my scope grew",
        body:
          "Joined Honasa as a Product Management Intern, moved to Associate Product Manager, and then Product Manager. The scope grew from fraud and post-purchase operations into acquisition systems, launches, Aqualogica growth, and shared ecommerce infrastructure.",
      },
      {
        title: "The business situation",
        body:
          "The work covered Mamaearth, Aqualogica, BBlunt, and Yotobox. I led end-to-end website lifecycle work across strategy, roadmap, UX, data analysis, QA, copywriting, and operational setup, and partnered with engineering on API and event architecture.",
      },
      {
        title: "The decision I owned",
        body:
          "I used homepage, search, and referral-funnel analysis to focus on targeted cohort visibility, referral-user quality, first-order discounting, and launch readiness rather than treating acquisition as a single top-of-funnel metric.",
      },
      {
        title: "How I worked through the tradeoffs",
        body:
          "The strategy was to treat acquisition and conversion as a connected system: improve visibility for targeted cohorts, measure drip-funnel contribution, reduce inefficient discounting, and strengthen scalable instrumentation.",
      },
      {
        title: "What I shipped",
        body:
          "Execution included end-to-end website lifecycle ownership, referral systems across websites and apps, the Mamaearth web-and-app referral launch to reduce new-user CPC, Aqualogica and BBlunt launches, Shopify rollout, and API/event architecture with engineering.",
      },
      {
        title: "What changed",
        body:
          "Aqualogica product initiatives contributed to a Rs 175 Cr revenue run rate, while homepage and search conversion improved by 15% and 17%. Referral signups reached 8% of organic daily acquisition, referral users converted at 40% versus 20% for signup users, Yotobox-acquired users required 25% lower first-order discounts, and API/event architecture supported one million daily transactions.",
      },
      {
        title: "What I would carry forward",
        body:
          "The most durable lesson was to treat acquisition, conversion, launch quality, and platform reliability as connected customer journeys rather than separate website initiatives.",
      },
    ],
  },
];

export const proofItems: ProofItem[] = [
  {
    title: "Coach cross-platform architecture",
    type: "Architecture",
    status: "Local proof",
    description:
      "Next.js web, SwiftUI iOS, Kotlin Android, Supabase, health integrations, widgets, trainer workflows, and platform-specific surfaces.",
    icon: Layers,
  },
  {
    title: "AI analytics PRD",
    type: "PRD",
    status: "Draftable from resume",
    description:
      "A product brief for business-user analytics, query quality, model trust, evaluation, and SQL validation.",
    icon: FileSpreadsheet,
  },
  {
    title: "Funnel diagnostics dashboards",
    type: "Dashboard",
    status: "Needs redaction",
    description:
      "Views for conversion, engagement, retention, trial-to-paid, referral quality, and pricing recovery.",
    icon: BarChart3,
  },
  {
    title: "Experiment register",
    type: "Experiment",
    status: "Needs redaction",
    description:
      "Hypotheses, success metrics, cohorts, guardrails, decision logs, and launch learnings.",
    icon: FlaskConical,
  },
  {
    title: "Launch readiness system",
    type: "Launch Doc",
    status: "Draftable from resume",
    description:
      "QA, analytics, copy, support, operations, and rollout sequencing across product surfaces.",
    icon: Rocket,
  },
  {
    title: "Data and event architecture",
    type: "Prototype",
    status: "Resume-backed",
    description:
      "API contracts and event architecture supporting scaled ecommerce transaction flows.",
    icon: Database,
  },
];

export const impactHighlights: ImpactHighlight[] = [
  {
    company: "PRISM (Parent Company of OYO)",
    description: "US consumer products: conversion, revenue, and cost margin.",
    metrics: [
      {
        metric: "Conversion",
        value: "+10%",
        context: "HDP-to-booking success after FTC pricing-transparency work.",
      },
      {
        metric: "Revenue",
        value: "Confidential",
        context: "Owned pricing and fee levers for OYO and G6; the direct revenue figure is not public.",
      },
      {
        metric: "Cost margin",
        value: "Up to $2M",
        context: "Annualized upside modelled from a dynamic fee module at observed volumes.",
      },
    ],
  },
  {
    company: "SplashLearn",
    description: "Android subscriber growth: trial-to-paid, subscribers, and revenue.",
    metrics: [
      {
        metric: "Trial-to-paid",
        value: "+15%",
        context: "Lift from the web-to-app migration flow.",
      },
      {
        metric: "Subscribers",
        value: "1,000 monthly",
        context: "Paying Android subscribers within six months of launch.",
      },
      {
        metric: "Revenue",
        value: "+$5K recurring",
        context: "Recurring revenue growth associated with the Android app launch.",
      },
    ],
  },
  {
    company: "Honasa / Aqualogica",
    description: "Role-specific metrics across conversion, revenue, cost margin, and AOV.",
    metrics: [
      {
        metric: "Conversion",
        value: "+15% / +17%",
        context: "Homepage and search conversion improvements through funnel iteration.",
      },
      {
        metric: "Revenue",
        value: "Rs 175 Cr",
        context: "Aqualogica revenue run rate during the growth and website work.",
      },
      {
        metric: "Cost margin",
        value: "-25% discount",
        context: "Lower first-order discount for Yotobox-acquired users, improving unit economics.",
      },
      {
        metric: "AOV",
        value: "> Rs 2,500",
        context: "Average order value on the BBlunt devices Shopify launch.",
      },
    ],
  },
];

export const operatingSystem = [
  {
    title: "Discover",
    description:
      "Map jobs, constraints, data signals, and switching costs before choosing the product move.",
    icon: Route,
  },
  {
    title: "Model",
    description:
      "Translate ambiguous goals into metrics, architecture, product loops, experiments, and tradeoffs.",
    icon: Workflow,
  },
  {
    title: "Ship",
    description:
      "Work through UX, QA, launch readiness, instrumentation, and post-launch iteration.",
    icon: Rocket,
  },
  {
    title: "Prove",
    description:
      "Make the evidence inspectable through outcomes, artifacts, architecture, dashboards, and decision logs.",
    icon: BadgeCheck,
  },
];

export const coachCapabilities = [
  {
    title: "Workout logging",
    description: "Active sessions, set logging, RPE, rest timers, notes, resume states, and history.",
    icon: Dumbbell,
  },
  {
    title: "Progress intelligence",
    description: "Volume, best lifts, recent exercise history, PR signals, and progression suggestions.",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Health context",
    description: "Apple Health, HealthKit, Health Connect, steps, workouts, energy, weight, sleep, HR, and HRV.",
    icon: HeartPulse,
  },
  {
    title: "Trainer workflows",
    description: "Trainer directory, packages, bookings, credits, chat, availability, and secure access control.",
    icon: Users,
  },
  {
    title: "Secure product data",
    description: "Supabase Auth, Postgres, RLS, invite-only flows, local demo mode, and platform configuration.",
    icon: ShieldCheck,
  },
  {
    title: "Payments and packages",
    description: "Trainer packages, credits, checkout surfaces, and booking flow foundations.",
    icon: CreditCard,
  },
];

export const workingPrinciples = [
  {
    title: "Start with the system",
    description:
      "Map the user journey, business lever, data signal, and operational dependency before choosing the feature.",
    icon: Sparkles,
  },
  {
    title: "Build close to the user",
    description:
      "Use prototypes, platform-native surfaces, logs, and data to keep product judgment honest.",
    icon: TabletSmartphone,
  },
  {
    title: "Make proof inspectable",
    description:
      "Translate product work into artifacts a hiring team can scan: metrics, decisions, architecture, experiments, and tradeoffs.",
    icon: ServerCog,
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}
