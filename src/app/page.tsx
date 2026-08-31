import { ArrowRight, ArrowUpRight, Download, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PortfolioFooter } from "@/components/portfolio-footer";
import { SiteHeader } from "@/components/site-header";
import { coachScreens, professionalExperience, profile, skillGroups } from "@/data/portfolio";
import { pageMetadata } from "@/lib/metadata";

const headlineResults = [
  { value: "+10%", label: "Hotel-page-to-booking", context: "PRISM" },
  { value: "+15%", label: "Trial-to-paid", context: "SplashLearn" },
  { value: "+15%", label: "Homepage conversion", context: "Honasa" },
];

function experienceHref(company: string) {
  if (company.startsWith("PRISM")) return "/experience#prism";
  if (company.startsWith("SplashLearn")) return "/experience#splashlearn";
  return "/experience#honasa";
}

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
  "Madhur Jain combines customer insight, commercial judgment, data fluency, and hands-on AI depth across growth, pricing, subscriptions, and ecommerce products.",
  "/",
);

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#content">Skip to content</a>
      <SiteHeader />
      <main id="content" className="bg-background text-foreground">
        <section className="relative overflow-hidden bg-foreground text-on-dark">
          <div className="portfolio-grid absolute inset-0" aria-hidden="true" />
          <div className="hero-orbit absolute inset-0" aria-hidden="true" />
          <div className="relative mx-auto flex min-h-[32rem] max-w-[90rem] flex-col justify-center px-5 py-8 md:min-h-[30rem] md:px-10 md:py-6 xl:px-16">
            <div className="max-w-6xl">
              <h1 className="max-w-[19ch] text-5xl font-semibold leading-[1.01] text-balance sm:text-6xl md:text-6xl lg:text-7xl">
                I turn ambiguity into product decisions <span className="text-white/50">teams can build and businesses can measure.</span>
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-7 text-white/75 md:mt-7 md:text-lg md:leading-8">{profile.summary}</p>
              <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row">
                <Link href="/experience" className="on-light inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-surface px-6 text-sm font-semibold transition-colors hover:bg-surface-muted">See decisions and outcomes <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
                <a href={`mailto:${profile.email}?subject=Product%20conversation`} className="hidden min-h-12 items-center justify-center gap-3 rounded-full border border-white/35 px-6 text-sm font-semibold transition-colors hover:bg-white/10 sm:inline-flex">Discuss a role <Mail className="h-4 w-4" aria-hidden="true" /></a>
                <a href={profile.resumePath} download="Madhur-Jain-Resume.pdf" className="hidden min-h-12 items-center justify-center gap-3 px-4 text-sm font-semibold text-white/75 transition-colors hover:text-white md:inline-flex"><Download className="h-4 w-4" aria-hidden="true" />Download resume</a>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2 text-xs font-semibold text-white/75 sm:hidden">
                <a href={`mailto:${profile.email}`} className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/25 px-4 transition-colors active:bg-white/10">Email</a>
                <a href={profile.resumePath} download="Madhur-Jain-Resume.pdf" className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/25 px-4 transition-colors active:bg-white/10">Resume</a>
              </div>
            </div>
          </div>
          <dl className="relative mx-auto grid max-w-[90rem] grid-cols-3 border-t border-white/15 bg-white/[0.05] px-5 md:px-10 xl:px-16">
            {headlineResults.map((result, index) => (
              <div key={result.label} className={`py-5 md:py-8 ${index > 0 ? "border-l border-white/15 pl-4 md:pl-8" : "pr-4"}`}>
                <dt className="font-mono text-xs uppercase text-white/55">{result.context}</dt>
                <dd className="mt-2 text-xl font-semibold md:text-3xl">{result.value}</dd>
                <dd className="mt-1 text-[0.68rem] leading-4 text-white/65 md:text-sm">{result.label}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mx-auto max-w-[90rem] px-5 py-16 md:px-10 md:py-28 xl:px-16" data-reveal>
          <div className="grid gap-8 border-b border-line pb-10 md:grid-cols-[minmax(0,0.8fr)_minmax(20rem,0.55fr)] md:items-end">
            <h2 className="max-w-3xl text-4xl font-medium leading-tight text-balance md:text-6xl">From D2C growth to subscriptions, pricing, and AI.</h2>
            <p className="max-w-xl text-base leading-7 text-muted">My scope has grown from ecommerce operations at Honasa to Android subscriptions at SplashLearn and pricing, conversion, and AI product work at PRISM.</p>
          </div>
          <div className="divide-y divide-line">
            {professionalExperience.map((experience) => (
              <Link key={experience.company} href={experienceHref(experience.company)} className="group grid gap-5 py-8 transition-colors hover:bg-surface-muted md:grid-cols-[minmax(13rem,0.45fr)_minmax(0,1fr)_auto] md:items-center md:px-4">
                <div><p className="font-mono text-[0.68rem] uppercase text-muted">{experience.timeframe}</p><h3 className="mt-2 text-xl font-semibold">{experience.company}</h3></div>
                <p className="max-w-3xl text-sm leading-6 text-muted">{experience.overview}</p>
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            ))}
          </div>
          <Link href="/experience" className="mt-8 inline-flex min-h-11 items-center gap-2 border-b border-foreground text-sm font-semibold">View full professional timeline <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
        </section>

        <section className="bg-foreground text-on-dark">
          <div className="mx-auto grid max-w-[90rem] gap-12 px-5 py-16 md:px-10 md:py-24 lg:grid-cols-[minmax(0,0.75fr)_minmax(22rem,0.55fr)] lg:items-center xl:px-16" data-reveal>
            <div>
              <h2 className="max-w-3xl text-4xl font-medium leading-tight text-balance md:text-6xl">Coach is my hands-on product build.</h2>
              <p className="mt-6 max-w-2xl text-base leading-7 text-white/70">A personal fitness product built from scratch across web, iOS, and Android. I own the product model, platform choices, interaction decisions, and implementation.</p>
              <dl className="mt-9 grid grid-cols-3 border-y border-white/15 py-5 text-sm">
                {[["Web", "Next.js"], ["iOS", "SwiftUI"], ["Android", "Compose"]].map(([platform, stack]) => <div key={platform}><dt className="font-semibold">{platform}</dt><dd className="mt-1 text-white/55">{stack}</dd></div>)}
              </dl>
              <Link href="/coach" className="on-light mt-8 inline-flex min-h-12 items-center gap-3 rounded-full bg-surface px-6 text-sm font-semibold">Explore Coach <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
            </div>
            <figure className="mx-auto w-full max-w-sm border border-white/20 bg-[#0c0d0d] p-4 md:p-6">
              <Image src={coachScreens[0].src} alt={coachScreens[0].alt} width={1206} height={2622} quality={90} sizes="(min-width: 1024px) 25rem, 80vw" className="h-auto w-full" />
              <figcaption className="border-t border-white/15 pt-4 text-sm text-white/65">Current iOS home experience / real product capture</figcaption>
            </figure>
          </div>
        </section>

        <section className="mx-auto max-w-[90rem] px-5 py-16 md:px-10 md:py-28 xl:px-16" data-reveal>
          <div className="grid gap-8 md:grid-cols-[minmax(0,0.75fr)_minmax(20rem,0.5fr)] md:items-end">
            <h2 className="text-4xl font-medium leading-tight md:text-6xl">Capabilities, with the evidence behind them.</h2>
            <p className="text-base leading-7 text-muted">Each capability connects to evidence from PRISM, SplashLearn, Honasa, or Coach.</p>
          </div>
          <div className="mt-12 grid border-l border-t border-line md:grid-cols-2">
            {skillGroups.map((group) => <article key={group.title} className="border-b border-r border-line p-6 md:p-9"><h3 className="text-2xl font-medium">{group.title}</h3><p className="mt-5 text-sm leading-6 text-muted">{group.outcome}</p><p className="mt-6 border-t border-line pt-5 text-sm leading-6">{group.evidence}</p></article>)}
          </div>
          <Link href="/skills" className="mt-8 inline-flex min-h-11 items-center gap-2 border-b border-foreground text-sm font-semibold">See skills and evidence <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
        </section>
      </main>
      <PortfolioFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageData) }} />
    </>
  );
}
