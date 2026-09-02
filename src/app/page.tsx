import { ArrowRight, ArrowUpRight, Download, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PortfolioFooter } from "@/components/portfolio-footer";
import { SiteHeader } from "@/components/site-header";
import { type CaseStudy, coachScreens, getCaseStudy, professionalExperience, profile, skillGroups } from "@/data/portfolio";
import { pageMetadata } from "@/lib/metadata";

const headlineResults = [
  { value: "+10%", label: "Booking conversion, ~10K a day", context: "US hotels" },
  { value: "+15%", label: "Trial-to-paid, +800 subs a month", context: "Learning app" },
  { value: "~$21M", label: "Run rate on a site I owned", context: "D2C beauty" },
];

function experienceHref(company: string) {
  if (company.startsWith("PRISM")) return "/experience#prism";
  if (company.startsWith("SplashLearn")) return "/experience#splashlearn";
  return "/experience#honasa";
}

const featuredCases = ["ai-analytics-nl-to-sql", "gm-operations-agent", "android-subscriber-growth"]
  .map((slug) => getCaseStudy(slug))
  .filter((caseStudy): caseStudy is CaseStudy => caseStudy !== undefined);

const coach = getCaseStudy("coach-cross-platform");

const profilePageData = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": "https://www.madhurjain.in/#profile-page",
  url: "https://www.madhurjain.in",
  name: "Madhur Jain product portfolio",
  mainEntity: { "@id": "https://www.madhurjain.in/#person" },
  isPartOf: { "@id": "https://www.madhurjain.in/#website" },
};

export const metadata = pageMetadata(
  "Product Manager for Growth, Pricing and AI",
  "Madhur Jain is a product manager with a computer science background, leading pricing and conversion for the OYO and Motel 6 US portfolio and building evaluated AI systems for analysis and operations.",
  "/",
);

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#content">Skip to content</a>
      <SiteHeader />
      <main id="content" className="bg-background text-foreground">
        <section className="relative overflow-hidden bg-foreground text-on-dark">
          <div className="portfolio-grid absolute inset-0" aria-hidden="true" data-parallax="0.05" />
          <div className="hero-orbit absolute inset-0" aria-hidden="true" data-parallax="0.13" />
          <div className="relative mx-auto grid max-w-[90rem] items-center gap-8 px-5 py-10 md:gap-10 md:px-10 md:py-16 lg:grid-cols-[minmax(0,1fr)_minmax(17rem,0.46fr)] lg:gap-16 xl:px-16">
            <div>
              <h1 className="max-w-[22ch] text-3xl font-semibold leading-[1.1] text-balance sm:text-5xl sm:leading-[1.05] lg:text-6xl">
                <span className="block">{profile.headlineLead}</span>
                <span className="mt-2 block text-white/50">{profile.headlineTrail}</span>
              </h1>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <Link href="/experience" className="on-light inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-surface px-6 text-sm font-semibold transition-transform duration-200 hover:-translate-y-0.5 hover:bg-surface-muted">See decisions and outcomes <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
                <div className="flex gap-3">
                  <a href={`mailto:${profile.email}?subject=Product%20conversation`} className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full border border-white/35 px-5 text-sm font-semibold transition-colors hover:bg-white/10 sm:flex-none">Discuss a role <Mail className="h-4 w-4" aria-hidden="true" /></a>
                  <a href={profile.resumePath} download="Madhur-Jain-Resume.pdf" className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full border border-white/20 px-5 text-sm font-semibold text-white/75 transition-colors hover:text-white sm:flex-none sm:border-0 sm:px-3">Resume <Download className="h-4 w-4" aria-hidden="true" /></a>
                </div>
              </div>
            </div>
            <figure className="relative hidden w-full md:block lg:max-w-none" data-parallax="-0.03">
              <div className="relative aspect-square overflow-hidden border border-white/20 lg:aspect-[4/5]">
                <Image
                  src={profile.portrait}
                  alt={profile.portraitAlt}
                  fill
                  quality={85}
                  sizes="(min-width: 1024px) 24rem, 22rem"
                  className="object-cover object-top"
                />
              </div>
            </figure>
          </div>
          <dl className="relative mx-auto grid max-w-[90rem] grid-cols-1 divide-y divide-white/15 border-t border-white/15 bg-white/[0.05] px-5 sm:grid-cols-3 sm:divide-y-0 md:px-10 xl:px-16" data-reveal-group>
            {headlineResults.map((result, index) => (
              <div key={result.label} data-reveal className={`flex flex-wrap items-baseline gap-x-4 gap-y-1 py-4 sm:block sm:py-6 md:py-7 ${index > 0 ? "sm:border-l sm:border-white/15 sm:pl-4 md:pl-8" : "sm:pr-4"}`}>
                <dt className="w-full font-mono text-[0.7rem] uppercase text-white/55 sm:w-auto">{result.context}</dt>
                <dd className="text-2xl font-semibold sm:mt-2 md:text-3xl">{result.value}</dd>
                <dd className="flex-1 text-sm leading-5 text-white/70 sm:mt-1 sm:text-xs md:text-sm">{result.label}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mx-auto max-w-[90rem] px-5 py-12 md:px-10 md:py-28 xl:px-16">
          <div data-reveal className="grid gap-8 border-b border-line pb-10 md:grid-cols-[minmax(0,0.8fr)_minmax(20rem,0.55fr)] md:items-end">
            <h2 className="max-w-3xl text-[1.75rem] font-medium leading-[1.15] text-balance md:text-6xl">From D2C growth to subscriptions, pricing, and AI.</h2>
            <p className="max-w-xl text-base leading-7 text-muted">{profile.summary}</p>
          </div>
          <div className="divide-y divide-line" data-reveal-group>
            {professionalExperience.map((experience) => (
              <Link key={experience.company} href={experienceHref(experience.company)} data-reveal className="group grid gap-3 py-6 transition-colors hover:bg-surface-muted md:grid-cols-[minmax(13rem,0.45fr)_minmax(0,1fr)_auto] md:items-center md:gap-5 md:px-4 md:py-8">
                <div className="flex items-start justify-between gap-4 md:block">
                  <div>
                    <p className="font-mono text-[0.7rem] uppercase text-muted">{experience.timeframe}</p>
                    <h3 className="mt-1.5 text-lg font-semibold md:mt-2 md:text-xl">{experience.company}</h3>
                  </div>
                  <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-muted md:hidden" aria-hidden="true" />
                </div>
                <p className="max-w-3xl text-sm leading-6 text-muted">{experience.overview}</p>
                <ArrowUpRight className="hidden h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 md:block" aria-hidden="true" />
              </Link>
            ))}
          </div>
          <Link href="/experience" data-reveal className="mt-8 inline-flex min-h-11 items-center gap-2 border-b border-foreground text-sm font-semibold">View full professional timeline <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
        </section>

        <section className="border-y border-line bg-surface">
          <div className="mx-auto max-w-[90rem] px-5 py-12 md:px-10 md:py-16 xl:px-16">
            <h2 data-reveal className="max-w-2xl text-2xl font-medium leading-tight text-balance md:text-3xl">Read the decisions behind them.</h2>
            <div className="mt-7 divide-y divide-line border-y border-line" data-reveal-group>
              {featuredCases.map((caseStudy) => (
                <Link key={caseStudy.slug} href={`/work/${caseStudy.slug}`} data-reveal className="group flex items-center justify-between gap-6 py-4 transition-colors hover:bg-surface-muted md:px-4">
                  <span className="max-w-2xl text-base font-semibold leading-snug md:text-lg">{caseStudy.title}</span>
                  <ArrowUpRight className="h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                </Link>
              ))}
            </div>
            <Link href="/work" className="mt-7 inline-flex min-h-11 items-center gap-2 border-b border-foreground text-sm font-semibold">All work stories <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
          </div>
        </section>

        <section className="bg-foreground text-on-dark">
          <div className="mx-auto grid max-w-[90rem] gap-12 px-5 py-16 md:px-10 md:py-24 lg:grid-cols-[minmax(0,0.75fr)_minmax(22rem,0.55fr)] lg:items-center xl:px-16" data-reveal-group>
            <div data-reveal>
              <h2 className="max-w-3xl text-[1.75rem] font-medium leading-[1.15] text-balance md:text-6xl">Coach is my hands-on product build.</h2>
              <p className="mt-6 max-w-2xl text-base leading-7 text-white/70">A personal fitness product built solo across web, iOS, and Android, live in invite-only beta. I own the product model, the platform choices, the interaction decisions, the implementation, and the criteria the personalization is evaluated against.</p>
              <dl className="mt-9 grid grid-cols-3 border-y border-white/15 py-5 text-sm">
                {[["Web", "Next.js"], ["iOS", "SwiftUI"], ["Android", "Compose"]].map(([platform, stack]) => <div key={platform}><dt className="font-semibold">{platform}</dt><dd className="mt-1 text-white/55">{stack}</dd></div>)}
              </dl>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link href="/coach" className="on-light inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-surface px-6 text-sm font-semibold">Explore Coach <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
                {coach?.liveUrl ? (
                  <a href={coach.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 border-b border-white/40 px-1 text-sm font-semibold transition-colors hover:border-white">{coach.liveLabel} <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>
                ) : null}
              </div>
            </div>
            <figure data-reveal className="mx-auto w-full max-w-[15rem] border border-white/20 bg-[#0c0d0d] p-3 sm:max-w-xs sm:p-4 lg:max-w-sm lg:p-6">
              <Image src={coachScreens[0].src} alt={coachScreens[0].alt} width={1206} height={2622} quality={90} sizes="(min-width: 1024px) 25rem, (min-width: 640px) 20rem, 15rem" className="h-auto w-full" />
              <figcaption className="border-t border-white/15 pt-4 text-sm text-white/65">Apple Health context in the current iOS build / real capture</figcaption>
            </figure>
          </div>
        </section>

        <section className="mx-auto max-w-[90rem] px-5 py-12 md:px-10 md:py-24 xl:px-16">
          <div data-reveal className="grid gap-8 md:grid-cols-[minmax(0,0.75fr)_minmax(20rem,0.5fr)] md:items-end">
            <h2 className="text-[1.75rem] font-medium leading-[1.15] md:text-6xl">Capabilities, with the evidence behind them.</h2>
            <p className="text-base leading-7 text-muted">Each capability connects to evidence from PRISM, SplashLearn, Honasa, or Coach.</p>
          </div>
          <div className="mt-10 grid border-l border-t border-line md:grid-cols-2" data-reveal-group>
            {skillGroups.map((group) => <article key={group.title} data-reveal className="border-b border-r border-line p-5 md:p-8"><h3 className="text-xl font-medium md:text-2xl">{group.title}</h3><p className="mt-4 text-sm leading-6 text-muted">{group.outcome}</p></article>)}
          </div>
          <Link href="/skills" className="mt-8 inline-flex min-h-11 items-center gap-2 border-b border-foreground text-sm font-semibold">See skills, tools, and evidence <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
        </section>
      </main>
      <PortfolioFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageData) }} />
    </>
  );
}
