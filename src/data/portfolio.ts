import {
  Apple,
  BadgeCheck,
  ChartNoAxesCombined,
  CreditCard,
  Dumbbell,
  Globe,
  HeartPulse,
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
  location: string;
  relocation: string;
  email: string;
  phone: string;
  portrait: string;
  portraitAlt: string;
  linkedinUrl: string;
  githubUrl: string;
  resumePath: string;
  headlineLead: string;
  headlineTrail: string;
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
  liveUrl?: string;
  liveLabel?: string;
  tags: string[];
  metrics: CaseMetric[];
  sections: CaseSection[];
  platforms?: PlatformProof[];
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

export type ToolGroup = {
  title: string;
  tools: string[];
};

export type CoachScreen = {
  src: string;
  alt: string;
  label: string;
  detail: string;
};

export const profile: Profile = {
  name: "Madhur Jain",
  location: "Gurugram, India",
  relocation: "Open to relocation",
  email: "madhur.jain02@gmail.com",
  phone: "+91 95301 74692",
  portrait: "/images/madhur-jain-portrait.jpg",
  portraitAlt: "Madhur Jain drinking coffee at an outdoor table under a tree",
  linkedinUrl: "https://www.linkedin.com/in/madhurj021199/",
  githubUrl: "https://github.com/madhur0299",
  resumePath: "/resume.pdf",
  headlineLead: "I ship AI products and define how they get judged.",
  headlineTrail: "Five years in growth taught me which ones matter.",
  summary:
    "I started in D2C ecommerce operations and ended up building agents. The through-line is a computer science degree I never stopped using: I can specify a system, decide how it gets evaluated, and stay with it through release.",
  availability:
    "Open to senior product roles in growth, monetization, or AI and data products.",
};

export const toolStack: ToolGroup[] = [
  {
    title: "AI and data",
    tools: ["LangChain", "LangGraph", "RAG", "Vector databases", "SQL", "Python", "Golden-dataset evaluation"],
  },
  {
    title: "Analytics and BI",
    tools: ["GA4", "Mixpanel", "CleverTap", "MoEngage", "Looker", "Power BI", "Metabase"],
  },
  {
    title: "Build and design",
    tools: ["Figma", "JIRA", "Cursor", "Claude", "Codex", "Lovable", "Xcode", "Android Studio"],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "AI products and workflow automation",
    outcome: "Turn business questions and repetitive operating work into evaluated AI workflows.",
    evidence:
      "At PRISM I shipped a two-agent natural-language-to-SQL workflow that reaches 85% accuracy on a golden dataset of business queries, now used by six teams. I am building a general-manager operations agent across five functions, in pilot at 40 UK and Europe properties, against efficiency and accuracy criteria I defined.",
    skills: [
      "Agentic workflows",
      "LLM evaluation and benchmarking",
      "Golden-dataset evaluation",
      "Text-to-SQL",
      "RAG",
      "Prompt design",
      "Release validation",
    ],
  },
  {
    title: "Growth, monetization, and conversion",
    outcome: "Find leverage in customer journeys and turn it into conversion, subscribers, and revenue.",
    evidence:
      "Pricing transparency and a dynamic fee module at PRISM, Android subscriber growth and web-to-app migration at SplashLearn, and homepage, search, and referral funnels at Honasa. The levers differ; the method of finding them does not.",
    skills: [
      "Pricing and fees",
      "Subscription growth",
      "Funnel analytics",
      "Experimentation",
      "Referral and acquisition systems",
      "Retention and activation",
      "D2C ecommerce",
    ],
  },
  {
    title: "Product strategy and delivery",
    outcome: "Move ambiguous opportunities from a decision to a launch with teams aligned around the customer and business.",
    evidence:
      "Across US consumer pricing and conversion, Android subscriber growth, and multi-brand ecommerce systems, I have set roadmap, tradeoffs, launch conditions, and stakeholder alignment, and owned deployment and release validation for the AI systems I ship.",
    skills: [
      "Roadmapping",
      "GTM and launch",
      "PRDs and specs",
      "Release ownership",
      "Regulatory delivery",
      "Stakeholder alignment",
    ],
  },
  {
    title: "Data fluency and technical collaboration",
    outcome: "Work fluently with the systems, instrumentation, and analysis that make product decisions defensible.",
    evidence:
      "A computer science degree, SQL and Python in daily use, and API and event architecture designed with engineering to support one million transactions a day at Honasa. In Coach I write the product myself across three platforms.",
    skills: [
      "SQL",
      "Python",
      "Product analytics",
      "Data pipelines",
      "APIs and event architecture",
      "Instrumentation",
    ],
  },
];

export const professionalExperience: ProfessionalExperience[] = [
  {
    company: "PRISM (Parent Company of OYO)",
    timeframe: "November 2025 - Present",
    overview:
      "Pricing and conversion for the OYO and Motel 6 US portfolio, around 10,000 bookings a day, plus the AI systems behind its analysis and daily property operations.",
    storyHref: "/work/ai-analytics-nl-to-sql",
    storyLabel: "Open the AI workflow case study",
    stages: [
      {
        role: "Product Manager III",
        timeframe: "November 2025 - Present",
        summary:
          "US consumer platform, call centre, and G6 platform. Pricing and conversion ownership alongside AI product work for analysis and property operations.",
        achievements: [
          "Shipped a natural-language-to-SQL analytics agent at 85% accuracy against a golden dataset of business queries, using a two-agent architecture that generates SQL, executes queries, and visualizes outputs.",
          "Rolled the agent out across six teams, moving day-to-day analysis ownership from analysts to product and business owners.",
          "Building a general-manager operations agent for daily property operations, in pilot across 40 UK and Europe properties and five functions: finance, ground operations, vendor, compliance, and revenue, against efficiency and accuracy criteria I defined.",
          "Own deployment and release validation for both systems, and automated internal PM workflows for research, benchmarking, Teams reporting, and PRDs.",
          "Built a data-backed dynamic fee module across the OYO and G6 brands, adding $2M in annual margin.",
          "Led FTC pricing-transparency compliance without losing conversion: simplified the prepaid funnel to cut page views 28%, improved Google Hotel Ads Center price accuracy 10%, and lifted hotel-detail-page-to-booking conversion 10%.",
        ],
      },
    ],
    outcomes: [
      {
        metric: "Booking conversion",
        value: "+10%",
        context: "Hotel-detail-page-to-booking on a US portfolio running ~10,000 bookings a day.",
      },
      {
        metric: "Annual margin",
        value: "+$2M",
        context: "From the dynamic fee module built across the OYO and G6 brands.",
      },
      {
        metric: "AI adoption",
        value: "6 teams",
        context: "Running their own analysis through the NL-to-SQL agent instead of routing through analysts.",
      },
    ],
  },
  {
    company: "SplashLearn",
    timeframe: "May 2024 - November 2025",
    overview:
      "Led subscriber growth and retention for the Android app at an elementary-learning platform, covering launch quality, activation, web-to-app migration, and content operations.",
    storyHref: "/work/android-subscriber-growth",
    storyLabel: "Open the mobile growth case study",
    stages: [
      {
        role: "Product Manager",
        timeframe: "May 2024 - November 2025",
        summary: "Subscriber growth and retention for the Android app.",
        achievements: [
          "Launched the Android app and grew it to 1,000 monthly subscribers within six months.",
          "Diagnosed engagement drop-off and shipped fixes that raised the Play Store rating from 2.3 to 4.0, Day-0 engagement 25%, and playable starts 30%.",
          "Traced a Day-0 gap between iPhone and iPad users to dashboard layout and redesigned it for 10% higher early engagement.",
          "Launched web-to-app migration, converting 70% of mobile-web users and lifting trial-to-paid 15%, adding 800 incremental subscribers a month.",
          "Built a first-time game-download algorithm that cut Day-1 cancellations 15% and raised trial-to-paid 8%, at $55 LTV per subscriber.",
          "Designed a GPT-4o mini transcript workflow that reduced the content cycle from six weeks to two.",
        ],
      },
    ],
    outcomes: [
      {
        metric: "Trial-to-paid",
        value: "+15%",
        context: "Lift from the web-to-app migration flow, plus 800 incremental subscribers a month.",
      },
      {
        metric: "Subscribers",
        value: "1,000 monthly",
        context: "Android subscribers within six months of launch.",
      },
      {
        metric: "Subscriber LTV",
        value: "$55",
        context: "Lifetime value per subscriber on the plans this work grew.",
      },
    ],
  },
  {
    company: "Honasa Consumer Limited (Mamaearth)",
    timeframe: "March 2021 - May 2024",
    overview:
      "Intern to Product Manager across Mamaearth, Aqualogica, BBlunt, and Yotobox, owning the Aqualogica website, referral systems, and shared ecommerce infrastructure.",
    storyHref: "/work/d2c-referral-conversion",
    storyLabel: "Open the D2C conversion case study",
    stages: [
      {
        role: "Product Manager",
        timeframe: "April 2023 - May 2024",
        summary: "Aqualogica, the referral system, and house-of-brands product work.",
        achievements: [
          "Sole product owner of aqualogica.in, the D2C website behind Aqualogica's INR 175 Cr (~$21M) annual revenue run rate; led GTM launch, strategy, roadmap, UX, analytics, QA, copy, and operations.",
          "Rebuilt the homepage and search funnels off conversion analysis, improving homepage conversion 15% and search conversion 17%.",
          "Owned the referral system across web, Android, iOS, and Yotobox; its MamaCash wallet-credit incentive drove 40% conversion for referral signups versus 20% for organic, and cohort-targeted visibility grew daily referral signups to 8% of organic daily acquisition.",
          "Reduced first-order discounts for Yotobox-acquired users 25% across Honasa brands.",
        ],
      },
      {
        role: "Associate Product Manager",
        timeframe: "September 2021 - March 2023",
        summary: "Acquisition systems, new brand launches, and scalable platform foundations.",
        achievements: [
          "Scaled Aqualogica to Honasa's fastest 0-to-100 Cr annual run rate.",
          "Shipped the referral system on the Mamaearth website and app, cutting acquisition cost per new order from Rs. 620 to Rs. 580.",
          "Launched the BBlunt devices site on Shopify at Rs. 2,500+ AOV, and the Aqualogica platform in under 50 days.",
          "Partnered with engineering on scalable API contracts and event architecture supporting one million transactions per day.",
        ],
      },
      {
        role: "Product Management Intern",
        timeframe: "March 2021 - September 2021",
        summary: "Fraud and post-purchase operations for the Mamaearth customer journey.",
        achievements: [
          "Automated fraud detection and order cancellation, eliminating manual review effort.",
          "Streamlined the post-purchase flow across Magento, Unicommerce, and Shiprocket, cutting non-serviceable orders to near-zero.",
        ],
      },
    ],
    outcomes: [
      {
        metric: "Brand run rate",
        value: "INR 175 Cr",
        context: "Roughly $21M annual revenue on Aqualogica's D2C website, which I owned end to end.",
      },
      {
        metric: "Conversion",
        value: "+15% / +17%",
        context: "Homepage and search conversion, rebuilt off funnel analysis.",
      },
      {
        metric: "Platform scale",
        value: "1M/day",
        context: "Transactions supported by the API contracts and event architecture built with engineering.",
      },
    ],
  },
];

export const coachScreens: CoachScreen[] = [
  {
    src: "/images/coach/ios/health-insights.png",
    alt: "Coach iOS app showing Health insights with 8,462 steps, 486 active kcal, 7.6 hours of sleep, resting heart rate, HRV, weight, and recent workouts",
    label: "Health insights",
    detail: "Apple Health context",
  },
  {
    src: "/images/coach/ios/home-dashboard.png",
    alt: "Coach iOS home dashboard showing a Tuesday Back workout, steps, streak, weekly progress, and five primary navigation areas",
    label: "Home dashboard",
    detail: "Daily training plan",
  },
  {
    src: "/images/coach/ios/personal-training.png",
    alt: "Coach iOS app showing the personal training experience with live sessions, private chat, and approved plans",
    label: "Personal training",
    detail: "Trainer workflows",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "ai-analytics-nl-to-sql",
    eyebrow: "AI analytics product",
    title: "An evaluated NL-to-SQL workflow for business teams",
    company: "PRISM (Parent Company of OYO)",
    timeframe: "November 2025 - Present",
    role: "Product Manager III",
    mandate:
      "Make operational and product data easier for business teams to query without waiting on analyst translation.",
    keyDecision:
      "Separated SQL generation from execution and visualization so answer quality could be measured, debugged, and trusted.",
    evidence:
      "Evaluated at 85% accuracy against a golden dataset of business queries, and now used by six teams. The query set, the underlying tables, and internal usage data are confidential.",
    summary:
      "Built a two-agent natural-language-to-SQL workflow that helps product and operations teams query business data, execute SQL, and inspect visual outputs without analyst translation.",
    tags: ["AI PM", "Data Products", "SQL", "Evaluation", "Automation"],
    metrics: [
      {
        label: "Evaluation result",
        value: "85%",
        context: "Accuracy against a golden dataset of business queries",
      },
      {
        label: "Teams using it",
        value: "6",
        context: "Running their own analysis instead of routing through analysts",
      },
      {
        label: "Workflow design",
        value: "Two agents",
        context: "SQL generation separated from execution and visualization",
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
          "Discovery centered on repeated business queries, common SQL patterns, data-table ambiguity, and the moments where teams waited for analyst support. I built a golden dataset of those queries with known-good answers, and made accuracy against it the release gate rather than a review step afterwards.",
      },
      {
        title: "What shipped",
        body:
          "A two-agent architecture generates SQL, executes queries, and returns visual outputs, with quality measured against the golden dataset. I own deployment and release validation. In parallel, I automated PM workflows for research, marketing benchmarks, daily Teams reporting, and PRD creation.",
      },
      {
        title: "What changed",
        body:
          "The workflow reached 85% accuracy on the golden dataset and rolled out across six teams, moving day-to-day analysis ownership from analysts to the product and business owners who ask the questions.",
      },
      {
        title: "What I would carry forward",
        body:
          "For AI products, a useful answer is not enough. The evaluation loop, the known-good comparisons, and a legible path to inspect output are part of the product itself.",
      },
    ],
  },
  {
    slug: "gm-operations-agent",
    eyebrow: "Agentic operations product",
    title: "An operations agent for property general managers",
    company: "PRISM (Parent Company of OYO)",
    timeframe: "In pilot",
    role: "Product Manager III",
    mandate:
      "Give property general managers one daily operating assistant across finance, ground operations, vendor management, compliance, and revenue, instead of five separate workflows.",
    keyDecision:
      "Scope the agent by operating function, and define the efficiency and accuracy criteria it has to meet before it scales past the pilot.",
    evidence:
      "In pilot across 40 UK and Europe properties. Pilot results, the acceptance criteria themselves, and property-level data are confidential.",
    summary:
      "Building a general-manager operations agent for daily property operations, scoped across five operating functions and piloting at 40 UK and Europe properties against efficiency and accuracy criteria I defined.",
    tags: ["AI PM", "Agentic Workflows", "Operations", "Evaluation"],
    metrics: [
      {
        label: "Pilot footprint",
        value: "40",
        context: "UK and Europe properties running the agent",
      },
      {
        label: "Operating functions",
        value: "5",
        context: "Finance, ground operations, vendor, compliance, and revenue",
      },
      {
        label: "Status",
        value: "In pilot",
        context: "Measured against efficiency and accuracy criteria I defined",
      },
    ],
    sections: [
      {
        title: "The business situation",
        body:
          "A property general manager's day spans finance, ground operations, vendor management, compliance, and revenue. Each has its own systems, reporting, and escalation path, and the work of holding them together lands on one person.",
      },
      {
        title: "The decision I owned",
        body:
          "Rather than one general assistant, I scoped the agent by operating function. Each function can then be specified, evaluated, and released on its own timeline, and a weak function does not hold back the rest.",
      },
      {
        title: "How I made it measurable",
        body:
          "I defined the efficiency and accuracy criteria the agent is held to before the pilot started. It is the same principle as the NL-to-SQL workflow: the evaluation is part of the product, not a review after it.",
      },
      {
        title: "Where it is now",
        body:
          "The agent is in pilot across 40 properties in the UK and Europe, covering all five functions. I own deployment and release validation for it alongside the analytics agent.",
      },
      {
        title: "What the pilot is testing",
        body:
          "Whether function-scoped agents hold their accuracy in daily operating use, and where a general manager still needs to be in the loop rather than reviewing after the fact.",
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
      "Every number here is one I owned and measured. Cohort detail, experiment dashboards, and product screens are confidential.",
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
        context: "From web-to-app migration, plus 800 incremental subscribers a month",
      },
      {
        label: "Content cycle",
        value: "6w to 2w",
        context: "Using a GPT-4o mini transcript workflow",
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
          "The app reached 1,000 monthly subscribers within six months. The work lifted the Play Store rating from 2.3 to 4.0, Day-0 engagement 25%, playable starts 30%, and web-to-app trial-to-paid 15%, added 800 incremental subscribers a month, and cut Day-1 cancellations 15%, at $55 LTV per subscriber.",
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
      "Every number here is one I owned and measured. Brand dashboards, referral cohorts, and launch documentation are confidential.",
    summary:
      "Progressed from product operations into sole ownership of Aqualogica's D2C website, alongside Mamaearth acquisition, brand launches, referral systems, and scalable ecommerce infrastructure.",
    tags: ["Ecommerce", "Referral", "Conversion", "Funnels", "API Events"],
    metrics: [
      {
        label: "Aqualogica run rate",
        value: "INR 175 Cr",
        context: "Roughly $21M a year on the D2C website I owned end to end",
      },
      {
        label: "Homepage and search conversion",
        value: "+15% / +17%",
        context: "Rebuilt off funnel and conversion analysis",
      },
      {
        label: "Platform scale",
        value: "1M/day",
        context: "Transactions supported by API contracts and event architecture",
      },
    ],
    sections: [
      {
        title: "How my scope grew",
        body:
          "I joined Honasa as a Product Management Intern, moved to Associate Product Manager, and then Product Manager. The scope grew from fraud and post-purchase operations into acquisition systems, launches, sole ownership of Aqualogica's website, and shared ecommerce infrastructure.",
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
          "The strategy was to treat acquisition and conversion as a connected system: improve visibility for targeted cohorts, measure funnel contribution, reduce inefficient discounting, and strengthen scalable instrumentation.",
      },
      {
        title: "What I shipped",
        body:
          "End-to-end ownership of aqualogica.in, referral systems across web, Android, iOS, and Yotobox with a MamaCash wallet-credit incentive, the Mamaearth referral launch, the Aqualogica and BBlunt launches, the Shopify rollout, and API and event architecture built with engineering.",
      },
      {
        title: "What changed",
        body:
          "Aqualogica reached an INR 175 Cr (~$21M) annual run rate and was Honasa's fastest brand to 100 Cr. Homepage and search conversion improved 15% and 17%. Referral signups reached 8% of organic daily acquisition and converted at 40% against 20% for organic, acquisition cost per new order fell from Rs. 620 to Rs. 580, Yotobox-acquired users needed 25% lower first-order discounts, and the event architecture supported one million daily transactions.",
      },
      {
        title: "What I would carry forward",
        body:
          "The most durable lesson was to treat acquisition, conversion, launch quality, and platform reliability as connected customer journeys rather than separate website initiatives.",
      },
    ],
  },
  {
    slug: "coach-cross-platform",
    eyebrow: "Independent product build",
    title: "Coach: one fitness product across web, iOS, and Android",
    company: "Personal product build",
    timeframe: "Ongoing, in invite-only beta",
    role: "Product Manager and Builder",
    mandate:
      "Create a real workout product that can plan routines, guide active sessions, track progress, connect health data, and support trainer workflows across web, iOS, and Android.",
    keyDecision:
      "Designed Coach as one product system with platform-native surfaces instead of a single prototype: Next.js web for hosted workflows, SwiftUI for Apple-native training, and Kotlin/Compose for Android.",
    evidence:
      "Coach is live at coachfitness.co.in in invite-only beta with internal users. Built solo through an AI-native workflow. The screenshots on this page are real captures from the current build; there is no market traction to claim yet.",
    summary:
      "Built Coach from scratch: a cross-platform fitness product for planning workouts, logging sessions, tracking progress, connecting health data, and supporting personal training workflows.",
    liveUrl: "https://www.coachfitness.co.in",
    liveLabel: "coachfitness.co.in",
    tags: ["Cross-platform", "Next.js", "SwiftUI", "Kotlin", "Supabase", "Health data"],
    metrics: [
      {
        label: "Platforms shipped",
        value: "3",
        context: "Web, iOS, and Android, each with platform-native surfaces",
      },
      {
        label: "Health integrations",
        value: "2",
        context: "Apple HealthKit and Android Health Connect, feeding one data model",
      },
      {
        label: "Stage",
        value: "Invite-only beta",
        context: "Live at coachfitness.co.in with internal users",
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
        title: "Where the product judgment lives",
        body:
          "The part I would put in front of a hiring team is not the app, it is the criteria: I defined how program-allocation accuracy is evaluated for personalized plans, the same way I define acceptance criteria for the AI systems I ship at work.",
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
          "Coach is where I test product decisions end to end: from the user workflow and platform choice to implementation details and the experience in someone's hand. It is also why I can hold a technical conversation about the systems I spec at work.",
      },
    ],
  },
];

export const operatingSystem = [
  {
    title: "Frame the problem",
    description:
      "Map the user journey, business lever, constraints, and available evidence before choosing a feature.",
    icon: Route,
  },
  {
    title: "Choose the lever",
    description:
      "Turn the goal into a decision: the metric to move, the mechanism, the tradeoffs, and the smallest useful test.",
    icon: Workflow,
  },
  {
    title: "Ship the whole change",
    description:
      "Stay with the work through UX, instrumentation, QA, launch readiness, and the operating changes around it.",
    icon: Rocket,
  },
  {
    title: "Review the evidence",
    description:
      "Agree on success and guardrails before launch, then use outcomes and failure modes to decide whether to scale, revise, or stop.",
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
    title: "Progress tracking",
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
    title: "Product architecture",
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
    title: "Write down the decision",
    description:
      "Make the customer behavior, business lever, constraint, tradeoff, and measure of success explicit.",
    icon: Sparkles,
  },
  {
    title: "Work at implementation depth",
    description:
      "Use prototypes, platform-native surfaces, logs, and data to keep product judgment honest.",
    icon: TabletSmartphone,
  },
  {
    title: "Separate signal from attribution",
    description:
      "Use the evidence to distinguish what changed, what the product likely influenced, and what should not be claimed.",
    icon: ServerCog,
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}
