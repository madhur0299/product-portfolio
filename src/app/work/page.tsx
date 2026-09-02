import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { PortfolioFooter } from "@/components/portfolio-footer";
import { SiteHeader } from "@/components/site-header";
import { caseStudies, type CaseStudy } from "@/data/portfolio";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Product Management Case Studies",
  "Case studies from Madhur Jain's product work: an evaluated NL-to-SQL workflow at PRISM, Android subscriber growth at SplashLearn, D2C conversion at Honasa, and the Coach cross-platform build.",
  "/work",
);

const personalSlugs = new Set(["coach-cross-platform"]);

function CaseList({ items }: { items: CaseStudy[] }) {
  return (
    <div className="divide-y divide-line border-y border-line" data-reveal-group>
      {items.map((caseStudy) => (
        <Link
          key={caseStudy.slug}
          href={`/work/${caseStudy.slug}`}
          data-reveal
          className="group grid gap-5 py-8 transition-colors hover:bg-surface-muted md:grid-cols-[minmax(13rem,0.4fr)_minmax(0,1fr)_auto] md:items-start md:gap-10 md:px-4 md:py-9"
        >
          <div>
            <p className="font-mono text-[0.7rem] uppercase text-muted">{caseStudy.timeframe}</p>
            <p className="mt-2 text-sm font-semibold">{caseStudy.company}</p>
          </div>
          <div>
            <h3 className="max-w-2xl text-xl font-medium leading-snug md:text-2xl">{caseStudy.title}</h3>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">{caseStudy.summary}</p>
          </div>
          <ArrowUpRight
            className="h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 md:mt-1"
            aria-hidden="true"
          />
        </Link>
      ))}
    </div>
  );
}

export default function WorkIndexPage() {
  const professional = caseStudies.filter((caseStudy) => !personalSlugs.has(caseStudy.slug));
  const personal = caseStudies.filter((caseStudy) => personalSlugs.has(caseStudy.slug));

  return (
    <>
      <a className="skip-link" href="#work-index-content">Skip to work stories</a>
      <SiteHeader />
      <main id="work-index-content" className="bg-background text-foreground">
        <section className="mx-auto max-w-[90rem] px-5 pb-8 pt-10 md:px-10 md:pb-14 md:pt-20 xl:px-16">
          <h1 className="max-w-4xl text-[1.9rem] font-medium leading-[1.12] text-balance md:text-6xl">Selected work, in detail.</h1>
          <p className="mt-6 max-w-3xl text-[0.95rem] leading-6 text-muted md:text-lg md:leading-8">
            Each story covers the mandate, the product decision I owned, the tradeoffs behind it, and what changed. Professional work first, then the product I build myself.
          </p>
        </section>

        <section className="mx-auto max-w-[90rem] px-5 pb-12 md:px-10 md:pb-24 xl:px-16" data-reveal>
          <div className="flex flex-col gap-4 border-b border-line pb-6 md:flex-row md:items-end md:justify-between">
            <h2 className="text-2xl font-medium md:text-3xl">Professional work.</h2>
            <p className="max-w-lg text-sm leading-6 text-muted">Product ownership at PRISM, SplashLearn, and Honasa.</p>
          </div>
          <div className="mt-2">
            <CaseList items={professional} />
          </div>
        </section>

        {personal.length > 0 ? (
          <section className="mx-auto max-w-[90rem] px-5 pb-14 md:px-10 md:pb-28 xl:px-16" data-reveal>
            <div className="flex flex-col gap-4 border-b border-line pb-6 md:flex-row md:items-end md:justify-between">
              <h2 className="text-2xl font-medium md:text-3xl">Independent build.</h2>
              <p className="max-w-lg text-sm leading-6 text-muted">A personal product, kept separate from professional work.</p>
            </div>
            <div className="mt-2">
              <CaseList items={personal} />
            </div>
          </section>
        ) : null}
      </main>
      <PortfolioFooter />
    </>
  );
}
