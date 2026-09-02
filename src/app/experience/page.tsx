import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { PortfolioFooter } from "@/components/portfolio-footer";
import { SiteHeader } from "@/components/site-header";
import { professionalExperience } from "@/data/portfolio";
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
        <section className="mx-auto max-w-[90rem] px-5 pb-8 pt-10 md:px-10 md:pb-14 md:pt-20 xl:px-16">
          <h1 className="max-w-4xl text-[1.9rem] font-medium leading-[1.12] text-balance md:text-6xl">Experience across growth, conversion, monetization, and AI products.</h1>
          <p className="mt-6 max-w-3xl text-[0.95rem] leading-6 text-muted md:text-lg md:leading-8">I progressed from D2C product management and growth at Honasa, to Android subscriptions at SplashLearn, to pricing, conversion, and AI product ownership for OYO US and G6 Hospitality (Motel 6 and Studio 6).</p>
        </section>
        <section className="mx-auto max-w-[90rem] px-5 pb-10 md:px-10 md:pb-20 xl:px-16"><ExperienceTimeline experiences={professionalExperience} /></section>
        <section className="mx-auto max-w-[90rem] px-5 py-12 md:px-10 md:py-20 xl:px-16" data-reveal>
          <h2 className="max-w-2xl text-2xl font-medium leading-tight text-balance md:text-3xl">The decisions behind these outcomes.</h2>
          <Link href="/work" className="mt-6 inline-flex min-h-11 items-center gap-2 border-b border-foreground text-sm font-semibold">Read the work stories <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
        </section>
      </main><PortfolioFooter /></>
  );
}
