import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CoachDemoVideo } from "@/components/coach-demo-video";
import { PortfolioFooter } from "@/components/portfolio-footer";
import { SiteHeader } from "@/components/site-header";
import { coachCapabilities, coachScreens, getCaseStudy } from "@/data/portfolio";
import { pageMetadata } from "@/lib/metadata";

const siteUrl = "https://www.madhurjain.in";

export const metadata = pageMetadata(
  "Coach: Cross-Platform Fitness Product Build",
  "Coach is Madhur Jain's independent product build across Next.js, SwiftUI, and Kotlin, covering workout logging, health data, progress, and trainer workflows.",
  "/coach",
);

const platforms = [
  {
    name: "Coach on the web",
    stack: "Next.js / Supabase",
    detail: "Planning, templates, calendars, progress review, trainer flows, and administration.",
  },
  {
    name: "Coach for iOS",
    stack: "SwiftUI / HealthKit",
    detail: "Native workout logging, health insights, widgets, Live Activities, and personal training.",
  },
  {
    name: "Coach for Android",
    stack: "Kotlin / Compose",
    detail: "Material 3 flows, local persistence, background work, secure storage, and Health Connect.",
  },
];

const coachCase = getCaseStudy("coach-cross-platform");

export default function CoachPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": `${siteUrl}/coach/#product`,
        name: "Coach",
        applicationCategory: "HealthApplication",
        operatingSystem: "Web, iOS, Android",
        description:
          "An independent cross-platform fitness product build covering workout planning, active logging, progress, health data, and trainer workflows.",
        author: { "@id": `${siteUrl}/#person` },
        url: `${siteUrl}/coach`,
      },
      {
        "@type": "VideoObject",
        "@id": `${siteUrl}/coach/#walkthrough`,
        name: "Coach active workout walkthrough",
        description: "A walkthrough of the current Coach active-workout flow, including set logging, rest, and progress.",
        thumbnailUrl: `${siteUrl}/images/coach/ios/home-dashboard.png`,
        contentUrl: `${siteUrl}/videos/coach-product-demo.mp4`,
        uploadDate: "2026-08-21",
        duration: "PT12S",
      },
    ],
  };

  return (
    <>
      <a className="skip-link" href="#coach-content">Skip to Coach</a>
      <SiteHeader />
      <main id="coach-content" className="bg-background text-foreground">
        <section className="mx-auto max-w-[90rem] px-5 pb-8 pt-10 md:px-10 md:pb-16 md:pt-20 xl:px-16">
          <p className="font-mono text-[0.7rem] uppercase text-muted">Independent product build</p>
          <h1 className="mt-4 max-w-5xl text-[1.9rem] font-medium leading-[1.12] text-balance md:text-6xl">Coach: a cross-platform fitness product.</h1>
          <p className="mt-6 max-w-3xl text-[0.95rem] leading-6 text-muted md:text-lg md:leading-8">Coach is a personal fitness product I am building across web, iOS, and Android. It connects workout planning, active logging, progress, health data, and trainer workflows.</p>
          <p className="mt-5 max-w-3xl text-sm leading-6">I built it solo, through an AI-native workflow, and it is live in invite-only beta with internal users. I define the product model, the interaction decisions, the platform approach, the data model, the implementation, and the criteria the personalized programs are evaluated against. The evidence here is the working build.</p>
          {coachCase?.liveUrl ? (
            <a href={coachCase.liveUrl} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex min-h-12 items-center gap-2 border-b border-foreground text-sm font-semibold">Open {coachCase.liveLabel} <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>
          ) : null}
        </section>

        <section className="mx-auto grid max-w-[90rem] gap-12 px-5 pb-20 md:px-10 md:pb-28 lg:grid-cols-[minmax(18rem,0.58fr)_minmax(0,1fr)] lg:items-start xl:px-16" data-reveal>
          <figure className="mx-auto w-full max-w-[11rem] border border-line bg-surface p-3 sm:max-w-[14rem] md:max-w-sm md:p-6 lg:sticky lg:top-28">
            <Image src={coachScreens[0].src} alt={coachScreens[0].alt} width={1206} height={2622} priority quality={90} sizes="(min-width: 1024px) 23rem, (min-width: 768px) 22rem, 11rem" className="h-auto w-full" />
            <figcaption className="border-t border-line pt-4 text-sm text-muted">{coachScreens[0].label} in the current iOS build</figcaption>
          </figure>
          <div className="divide-y divide-line border-y border-line">
            {platforms.map((platform) => (
              <article key={platform.name} className="grid gap-4 py-8 md:grid-cols-[11rem_minmax(0,1fr)] md:py-10">
                <div>
                  <h2 className="text-2xl font-medium">{platform.name}</h2>
                  <p className="mt-2 font-mono text-[0.7rem] uppercase text-muted">{platform.stack}</p>
                </div>
                <p className="max-w-2xl text-base leading-7 text-muted">{platform.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-foreground py-16 text-on-dark md:py-24">
          <div className="mx-auto max-w-[90rem] px-5 md:px-10 xl:px-16" data-reveal>
            <div className="grid gap-5 border-b border-white/20 pb-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(20rem,0.5fr)] lg:items-end">
              <h2 className="max-w-3xl text-[1.75rem] font-medium leading-[1.15] text-balance md:text-6xl">A working workout flow.</h2>
              <p className="max-w-xl text-base leading-7 text-white/70">The walkthrough shows active set logging, rest, and progress. The adjacent screens show how health context and trainer workflows extend the same product.</p>
            </div>
            <div
              className="-mx-5 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 md:-mx-10 md:px-10 lg:mx-0 lg:mt-10 lg:grid lg:grid-cols-3 lg:gap-5 lg:overflow-visible lg:px-0 lg:pb-0"
              data-reveal-group
              tabIndex={0}
              role="group"
              aria-label="Coach screens, scrollable"
            >
              <figure className="flex w-[72vw] min-w-0 shrink-0 snap-start flex-col border border-white/20 bg-[#0c0d0d] sm:w-[46vw] lg:w-auto lg:shrink">
                <div className="aspect-[9/16] min-h-0 bg-black"><CoachDemoVideo className="h-full w-full" /></div>
                <figcaption className="border-t border-white/15 p-4">
                  <span className="block text-sm font-semibold">Active workout</span>
                  <span className="mt-1 block text-sm leading-6 text-white/65">Set logging, rest, and in-session progress.</span>
                </figcaption>
              </figure>
              {coachScreens.slice(1).map((screen) => (
                <figure key={screen.src} className="flex w-[72vw] min-w-0 shrink-0 snap-start flex-col border border-white/20 bg-[#0c0d0d] sm:w-[46vw] lg:w-auto lg:shrink">
                  <div className="relative aspect-[9/16] min-h-0 bg-black">
                    <Image src={screen.src} alt={screen.alt} fill quality={90} sizes="(min-width: 1024px) 30vw, (min-width: 640px) 46vw, 72vw" className="object-contain" />
                  </div>
                  <figcaption className="border-t border-white/15 p-4">
                    <span className="block text-sm font-semibold">{screen.label}</span>
                    <span className="mt-1 block text-sm leading-6 text-white/65">{screen.detail}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[90rem] px-5 py-12 md:px-10 md:py-24 xl:px-16" data-reveal>
          <h2 className="max-w-3xl text-[1.75rem] font-medium leading-[1.15] md:text-6xl">What Coach currently covers.</h2>
          <div className="mt-10 grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3" data-reveal-group>
            {coachCapabilities.map((capability) => {
              const Icon = capability.icon;
              return (
                <article key={capability.title} data-reveal className="border-b border-r border-line p-4 md:p-8">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                  <h3 className="mt-7 text-xl font-semibold">{capability.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-muted">{capability.description}</p>
                </article>
              );
            })}
          </div>
          <Link href="/work/coach-cross-platform" className="on-dark mt-10 inline-flex min-h-12 items-center gap-3 rounded-full bg-foreground px-6 text-sm font-semibold">Read the build case study <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
        </section>
      </main>
      <PortfolioFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
}
