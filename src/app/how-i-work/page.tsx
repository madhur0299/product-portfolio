import type { Metadata } from "next";
import { PortfolioFooter } from "@/components/portfolio-footer";
import { SiteHeader } from "@/components/site-header";
import { operatingSystem, workingPrinciples } from "@/data/portfolio";

export const metadata: Metadata = { title: "How I Work", description: "How Madhur Jain frames, ships, and measures product decisions." };
const evidence = [
  "Mapped conversion, customer clarity, and margin as one pricing system for OYO US and G6.",
  "Used migration and funnel evidence to define the highest-leverage subscription bet at SplashLearn.",
  "Carried D2C improvements through UX, analytics, QA, launch readiness, and operating setup at Honasa.",
  "Built evaluation into the NL-to-SQL product so answer quality could be measured against known-good queries.",
];

export default function HowIWorkPage() {
  return (
    <><a className="skip-link" href="#method-content">Skip to how I work</a><SiteHeader />
      <main id="method-content" className="bg-background text-foreground">
        <section className="mx-auto max-w-[90rem] px-5 pb-12 pt-14 md:px-10 md:pb-20 md:pt-24 xl:px-16"><h1 className="max-w-4xl text-5xl font-medium leading-[1.02] text-balance md:text-7xl">How I move from ambiguity to evidence.</h1><p className="mt-6 max-w-3xl text-base leading-7 text-muted md:text-lg md:leading-8">A product problem becomes useful when the customer behavior, business lever, system constraint, and measure of success point in the same direction.</p></section>
        <section className="mx-auto max-w-[90rem] px-5 pb-20 md:px-10 md:pb-28 xl:px-16"><div className="relative border-l border-line">{operatingSystem.map((step, index) => { const Icon = step.icon; return <article key={step.title} className="relative grid gap-6 border-b border-line py-9 pl-7 md:grid-cols-[minmax(12rem,0.42fr)_minmax(0,1fr)] md:gap-12 md:py-14 md:pl-12"><span className="absolute -left-5 top-9 flex h-10 w-10 items-center justify-center rounded-full border border-line bg-background md:top-14"><Icon className="h-4 w-4" aria-hidden="true" /></span><div><p className="font-mono text-[0.68rem] uppercase text-muted">Phase {index + 1}</p><h2 className="mt-3 text-3xl font-medium">{step.title}</h2></div><div><p className="max-w-2xl text-base leading-7 text-muted">{step.description}</p><p className="mt-6 max-w-3xl border-t border-line pt-5 text-sm leading-6"><span className="font-semibold">In practice: </span>{evidence[index]}</p></div></article>; })}</div></section>
        <section className="border-y border-line bg-surface py-16 md:py-24"><div className="mx-auto max-w-[90rem] px-5 md:px-10 xl:px-16"><h2 className="text-4xl font-medium md:text-5xl">Principles that keep the work honest.</h2><div className="mt-10 grid border-l border-t border-line md:grid-cols-3">{workingPrinciples.map((principle) => { const Icon = principle.icon; return <article key={principle.title} className="border-b border-r border-line p-6 md:p-8"><Icon className="h-5 w-5" aria-hidden="true" /><h3 className="mt-8 text-xl font-semibold">{principle.title}</h3><p className="mt-4 text-sm leading-6 text-muted">{principle.description}</p></article>; })}</div></div></section>
      </main><PortfolioFooter /></>
  );
}
