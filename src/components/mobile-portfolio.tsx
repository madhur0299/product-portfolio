"use client";

import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Download,
  Mail,
  Sparkles,
  UserRound,
  Wrench,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { CoachDemoVideo } from "@/components/coach-demo-video";
import { MobileCallButton } from "@/components/mobile-call-button";
import {
  professionalExperience,
  profile,
  skillGroups,
} from "@/data/portfolio";

type MobileSection = "mobile-work" | "mobile-approach" | "mobile-build" | "mobile-contact";

const navigation = [
  { id: "mobile-work", label: "Work", icon: BriefcaseBusiness },
  { id: "mobile-build", label: "Build", icon: Wrench },
  { id: "mobile-approach", label: "How I work", icon: Sparkles },
  { id: "mobile-contact", label: "Contact", icon: UserRound },
] as const;

const workDecisions = [
  "Paired transparent pricing with a dynamic-fee system across OYO and G6 to protect customer clarity and margin.",
  "Turned mobile-web intent into an app subscription journey instead of treating web and Android as separate funnels.",
  "Used funnel and cohort signals to prioritize conversion and referral work across a house of brands.",
];

const proofRail = [
  { company: "PRISM", detail: "+10% booking conversion · up to $2M margin upside" },
  { company: "SplashLearn", detail: "+15% trial-to-paid · 1,000 monthly subscribers" },
  { company: "Honasa", detail: "+15% homepage conversion · Rs 175 Cr run rate" },
];

const operatingRhythm = [
  {
    title: "Find the constraint",
    description: "Get close to the behavior, economics, and operational friction before turning a symptom into a roadmap item.",
    evidence: "At Honasa, funnel and cohort analysis showed where homepage, search, and referral journeys were leaking customer value.",
  },
  {
    title: "Choose the bet",
    description: "Make the product choice explicit: the customer tradeoff, business lever, and measure of success all have to agree.",
    evidence: "At PRISM, the bet was transparent pricing paired with dynamic fees, balancing booking confidence with margin upside.",
  },
  {
    title: "Ship the system",
    description: "Carry the work through interaction design, instrumentation, delivery, and the operating workflow around the product.",
    evidence: "At SplashLearn, web-to-app migration became a measurable subscription system, lifting trial-to-paid by 15%.",
  },
];

function shortTimeframe(timeframe: string) {
  return timeframe
    .replaceAll("January", "Jan")
    .replaceAll("February", "Feb")
    .replaceAll("March", "Mar")
    .replaceAll("April", "Apr")
    .replaceAll("June", "Jun")
    .replaceAll("July", "Jul")
    .replaceAll("August", "Aug")
    .replaceAll("September", "Sep")
    .replaceAll("October", "Oct")
    .replaceAll("November", "Nov")
    .replaceAll("December", "Dec");
}

export function MobilePortfolio() {
  const [activeExperience, setActiveExperience] = useState(0);
  const [activeSection, setActiveSection] = useState<MobileSection>("mobile-work");
  const isProgrammaticNavigation = useRef(false);
  const navigationTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const selectedExperience = professionalExperience[activeExperience];

  useEffect(() => {
    const observers = navigation.map(({ id }) => {
      const target = document.getElementById(id);
      if (!target) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry?.isIntersecting && !isProgrammaticNavigation.current) setActiveSection(id);
        },
        { rootMargin: "-38% 0px -48% 0px", threshold: 0 },
      );

      observer.observe(target);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
      if (navigationTimeout.current) clearTimeout(navigationTimeout.current);
    };
  }, []);

  function navigateTo(id: MobileSection) {
    setActiveSection(id);
    isProgrammaticNavigation.current = true;
    if (navigationTimeout.current) clearTimeout(navigationTimeout.current);

    const section = document.getElementById(id);
    const target = id === "mobile-contact"
      ? section?.querySelector<HTMLElement>("[data-contact-action]") ?? section
      : section;
    if (!target) return;

    window.scrollTo({
      top: Math.max(0, target.getBoundingClientRect().top + window.scrollY - 64),
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });

    navigationTimeout.current = setTimeout(() => {
      isProgrammaticNavigation.current = false;
    }, 900);
  }

  return (
    <>
      <a className="skip-link md:hidden" href="#mobile-content">Skip to content</a>
      <header className="sticky top-0 z-40 border-b border-line bg-surface/95 px-5 py-3 backdrop-blur">
        <div className="mx-auto flex max-w-md items-center justify-between">
          <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" })} className="text-left text-base font-semibold tracking-[-0.02em]">Madhur Jain</button>
          <div className="flex items-center gap-2">
            <MobileCallButton />
            <a href={`mailto:${profile.email}`} className="inline-flex min-h-11 items-center gap-2 rounded-md border border-line px-3 text-sm font-semibold transition-colors active:scale-[0.98]">
              <Mail className="h-4 w-4" aria-hidden="true" />
              Email
            </a>
            <a href={profile.resumePath} download="Madhur-Jain-Resume.pdf" aria-label="Download Madhur Jain's resume" className="on-dark inline-flex min-h-11 min-w-11 items-center justify-center rounded-md bg-foreground transition-transform active:scale-[0.98]">
              <Download className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </header>

      <main id="mobile-content" tabIndex={-1} className="mobile-portfolio min-h-screen bg-surface pb-24 text-foreground">
      <section className="border-b border-line px-5 pb-10 pt-10">
        <div className="mx-auto max-w-md">
          <h1 className="max-w-[11ch] text-[2.6rem] font-semibold leading-[0.98] tracking-[-0.045em] text-pretty">
            I make consumer products move.
          </h1>
          <p className="mt-6 max-w-[34rem] text-[1.05rem] leading-7 text-muted">
            At PRISM, I lead pricing and conversion for US consumer products and build AI workflows that reduce operational drag. Before that, I grew mobile subscriptions at SplashLearn and D2C journeys at Honasa.
          </p>
          <div className="mt-8 grid gap-3">
            <button type="button" onClick={() => navigateTo("mobile-work")} className="inline-flex min-h-14 items-center justify-between rounded-md bg-accent px-5 text-left text-base font-semibold text-on-dark transition-transform active:scale-[0.985]">
              Explore selected work
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </button>
            <a href={profile.resumePath} download="Madhur-Jain-Resume.pdf" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-line px-5 text-sm font-semibold transition-colors active:scale-[0.985]">
              <Download className="h-4 w-4" aria-hidden="true" />
              Download resume
            </a>
          </div>
          <div className="mt-10 divide-y divide-line border-y border-line">
            {proofRail.map((proof, index) => (
            <button key={proof.company} type="button" onClick={() => { setActiveExperience(index); navigateTo("mobile-work"); }} className="flex min-h-16 w-full items-center justify-between gap-4 py-4 text-left">
              <span><span className="block text-sm font-semibold">{proof.company}</span><span className="mt-1 block text-sm leading-5 text-muted">{proof.detail}</span></span>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
            </button>
            ))}
          </div>
        </div>
      </section>

      <section id="mobile-work" className="px-5 py-12">
        <div className="mx-auto max-w-md">
          <h2 className="max-w-[14ch] text-3xl font-semibold leading-[1.04] tracking-[-0.035em]">Selected work, with the business context attached.</h2>
          <div aria-label="Choose a company story" className="mt-7 grid grid-cols-3 gap-2">
            {professionalExperience.map((experience, index) => (
              <button key={experience.company} type="button" aria-pressed={activeExperience === index} onClick={() => setActiveExperience(index)} className={`min-h-11 min-w-0 rounded-full border px-2 py-2.5 text-sm font-semibold transition-colors ${activeExperience === index ? "border-foreground bg-foreground text-on-dark" : "border-line bg-surface text-muted"}`}>
                <span className="block truncate">{index === 2 ? "Honasa" : experience.company.split(" (")[0]}</span>
              </button>
            ))}
          </div>
          <article className="mobile-story-panel mt-6 border-y border-line py-6" key={selectedExperience.company}>
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="text-sm font-semibold text-accent">{shortTimeframe(selectedExperience.timeframe)}</p>
                <h3 className="mt-2 text-2xl font-semibold leading-tight tracking-[-0.025em]">{selectedExperience.company}</h3>
              </div>
              <span className="mt-1 shrink-0 rounded-full bg-accent-surface px-3 py-1.5 text-xs font-semibold text-accent">{selectedExperience.stages[0].role}</span>
            </div>
            <p className="mt-5 text-base leading-7 text-muted">{selectedExperience.overview}</p>
            <p className="mt-5 border-t border-line pt-5 text-base leading-7 text-foreground"><span className="font-semibold">The decision: </span>{workDecisions[activeExperience]}</p>
            <div className="mt-7 space-y-5">
              {selectedExperience.outcomes.map((outcome) => (
                <div key={outcome.metric}>
                  <p className="font-mono text-2xl font-semibold tracking-[-0.04em]">{outcome.value}</p>
                  <p className="mt-1 text-sm font-semibold">{outcome.metric}</p>
                  <p className="mt-1 text-sm leading-6 text-muted">{outcome.context}</p>
                </div>
              ))}
            </div>
            <div className="mt-7 border-t border-line pt-5">
              <p className="text-sm font-semibold">What I owned</p>
              <ul className="mt-3 space-y-3 text-sm leading-6 text-muted">
                {selectedExperience.stages.flatMap((stage) => stage.achievements).slice(0, 3).map((achievement) => <li key={achievement} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />{achievement}</li>)}
              </ul>
            </div>
            <Link href={selectedExperience.storyHref} className="mt-7 inline-flex min-h-11 items-center gap-2 text-sm font-semibold underline decoration-accent decoration-2 underline-offset-4">
              {activeExperience === 0 ? "Explore the focused AI workflow case" : selectedExperience.storyLabel}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </article>
        </div>
      </section>

      <section id="mobile-build" className="px-5 py-12">
        <div className="mx-auto max-w-md">
          <h2 className="max-w-[13ch] text-3xl font-semibold leading-[1.04] tracking-[-0.035em]">I build to keep my product judgment honest.</h2>
          <p className="mt-5 text-base leading-7 text-muted">Coach is my cross-platform fitness product. I own the product model and the build across web, iOS, and Android.</p>
          <figure className="mt-8 overflow-hidden rounded-xl bg-foreground shadow-card">
            <CoachDemoVideo />
            <figcaption className="on-dark border-t border-white/15 px-4 py-4"><p className="text-sm font-semibold">Coach product walkthrough</p><p className="on-dark-muted mt-1 text-sm leading-6">The active workout experience, from planning through logged progress.</p></figcaption>
          </figure>
          <div className="mt-6 divide-y divide-line border-y border-line">
            <div className="grid grid-cols-[5rem_minmax(0,1fr)] gap-4 py-4"><p className="font-semibold">Web</p><p className="text-sm leading-6 text-muted">Planning, calendars, templates, and progress review.</p></div>
            <div className="grid grid-cols-[5rem_minmax(0,1fr)] gap-4 py-4"><p className="font-semibold">iOS</p><p className="text-sm leading-6 text-muted">Workout logging, HealthKit, widgets, and Live Activities.</p></div>
            <div className="grid grid-cols-[5rem_minmax(0,1fr)] gap-4 py-4"><p className="font-semibold">Android</p><p className="text-sm leading-6 text-muted">Compose flows, local persistence, and Health Connect.</p></div>
          </div>
          <Link href="/work/coach-cross-platform" className="mt-7 inline-flex min-h-11 items-center gap-2 text-sm font-semibold underline decoration-accent decoration-2 underline-offset-4">Read the Coach build story<ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
        </div>
      </section>

      <section id="mobile-approach" className="border-y border-line bg-surface-muted px-5 py-12">
        <div className="mx-auto max-w-md">
          <h2 className="max-w-[14ch] text-3xl font-semibold leading-[1.04] tracking-[-0.035em]">How I work when the problem is still unclear.</h2>
          <div className="mt-8 divide-y divide-line border-y border-line">
            {operatingRhythm.map((step, index) => (
              <article key={step.title} className="grid grid-cols-[2rem_minmax(0,1fr)] gap-3 py-7">
                <p className="font-mono text-sm font-semibold text-accent">0{index + 1}</p>
                <div>
                  <h3 className="text-xl font-semibold leading-tight tracking-[-0.02em]">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{step.description}</p>
                  <p className="mt-4 text-sm leading-6 text-foreground">{step.evidence}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10">
            <h3 className="text-xl font-semibold tracking-[-0.02em]">Tools behind the work.</h3>
            <p className="mt-3 text-sm leading-6 text-muted">The methods and technical fluency I bring into discovery, delivery, and iteration.</p>
            <div className="mt-6 divide-y divide-line border-y border-line">
              {skillGroups.map((group) => (
                <article key={group.title} className="py-5">
                  <h4 className="text-sm font-semibold">{group.title}</h4>
                  <ul aria-label={`${group.title} skills`} className="mt-4 flex flex-wrap gap-2">
                    {group.skills.map((skill) => <li key={skill} className="rounded-full border border-line bg-surface px-3 py-1.5 text-xs font-semibold text-muted">{skill}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="mobile-contact" className="bg-foreground px-5 py-12 text-on-dark">
        <div className="mx-auto max-w-md">
          <h2 className="max-w-[13ch] text-3xl font-semibold leading-[1.04] tracking-[-0.035em]">Have a product problem worth solving?</h2>
          <p className="mt-5 max-w-sm text-base leading-7 text-white/70">Bring me a conversion, pricing, AI workflow, or product-delivery constraint.</p>
          <div className="mt-8 grid gap-3">
            <a data-contact-action href={`mailto:${profile.email}?subject=Product%20conversation`} className="on-light inline-flex min-h-14 items-center justify-between rounded-md bg-surface px-5 text-base font-semibold transition-transform active:scale-[0.985]">Email Madhur<Mail className="h-5 w-5" aria-hidden="true" /></a>
            <div className="grid grid-cols-2 gap-3">
              <a href={profile.linkedinUrl} className="profile-linkedin on-dark inline-flex min-h-12 items-center justify-center rounded-md px-4 text-sm font-semibold transition-transform active:scale-[0.985]">LinkedIn</a>
              <a href={profile.githubUrl} className="profile-github on-dark inline-flex min-h-12 items-center justify-center rounded-md px-4 text-sm font-semibold transition-transform active:scale-[0.985]">GitHub</a>
            </div>
          </div>
        </div>
      </section>
      </main>

      <nav aria-label="Portfolio sections" className="mobile-dock fixed inset-x-0 bottom-0 z-50 border-t border-line bg-surface/95 px-3 pb-[max(0.55rem,env(safe-area-inset-bottom))] pt-2 backdrop-blur">
        <div className="mx-auto grid max-w-md grid-cols-4 gap-1">
          {navigation.map(({ id, label, icon: Icon }) => (
            <button key={id} type="button" onClick={() => navigateTo(id)} className={`flex min-h-12 flex-col items-center justify-center gap-1 rounded-md text-[0.6875rem] font-semibold transition-colors ${activeSection === id ? "bg-accent-surface text-accent" : "text-muted"}`}>
              <Icon className="h-4 w-4" aria-hidden="true" />
              {label}
            </button>
          ))}
        </div>
      </nav>
    </>
  );
}
