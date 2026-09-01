import { ExperienceTimeline } from "@/components/experience-timeline";
import { PortfolioFooter } from "@/components/portfolio-footer";
import { SiteHeader } from "@/components/site-header";
import { impactHighlights, professionalExperience } from "@/data/portfolio";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Product Management Experience",
  "Madhur Jain's product experience across PRISM, SplashLearn, and Honasa, with evidence from pricing, conversion, subscriptions, AI, and ecommerce.",
  "/experience",
);

export default function ExperiencePage() {
  return (
    <><a className="skip-link" href="#experience-content">Skip to experience</a><SiteHeader />
      <main id="experience-content" className="bg-background text-foreground">
        <section className="mx-auto max-w-[90rem] px-5 pb-12 pt-14 md:px-10 md:pb-20 md:pt-24 xl:px-16"><h1 className="max-w-4xl text-5xl font-medium leading-[1.02] text-balance md:text-7xl">Experience across growth, monetization, and AI products.</h1><p className="mt-6 max-w-3xl text-base leading-7 text-muted md:text-lg md:leading-8">I progressed from D2C product operations and growth at Honasa, to Android subscriptions at SplashLearn, to pricing, conversion, and AI product ownership for OYO US and G6.</p></section>
        <section className="mx-auto max-w-[90rem] px-5 pb-20 md:px-10 md:pb-28 xl:px-16"><ExperienceTimeline experiences={professionalExperience} /></section>
        <section className="border-y border-line bg-surface py-16 md:py-24" data-reveal><div className="mx-auto max-w-[90rem] px-5 md:px-10 xl:px-16">
          <div className="flex flex-col gap-5 border-b border-line pb-8 md:flex-row md:items-end md:justify-between"><h2 className="text-4xl font-medium md:text-5xl">Selected outcomes, with context.</h2><p className="max-w-lg text-sm leading-6 text-muted">Resume-backed results, paired with the product and metric they refer to.</p></div>
          <div className="divide-y divide-line">{impactHighlights.map((item) => <article key={item.company} className="grid gap-7 py-9 lg:grid-cols-[minmax(13rem,0.4fr)_minmax(0,1fr)]"><div><h3 className="text-xl font-semibold">{item.company}</h3><p className="mt-2 text-sm leading-6 text-muted">{item.description}</p></div><dl className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">{item.metrics.map((metric) => <div key={metric.metric} className="border-t border-line pt-4"><dt className="font-mono text-[0.65rem] uppercase text-muted">{metric.metric}</dt><dd className="mt-2 text-3xl font-semibold">{metric.value}</dd><dd className="mt-3 text-sm leading-6 text-muted">{metric.context}</dd></div>)}</dl></article>)}</div>
        </div></section>
      </main><PortfolioFooter /></>
  );
}
