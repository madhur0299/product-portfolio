import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CoachDemoVideo } from "@/components/coach-demo-video";
import { PortfolioFooter } from "@/components/portfolio-footer";
import { SiteHeader } from "@/components/site-header";
import { coachCapabilities, coachScreens } from "@/data/portfolio";

export const metadata: Metadata = { title: "Coach | Personal Product Build", description: "Coach is Madhur Jain's cross-platform fitness product built across web, iOS, and Android." };
const platforms = [
  { name: "Web", stack: "Next.js / Supabase", detail: "Planning, templates, calendars, progress review, trainer flows, and administration." },
  { name: "iOS", stack: "SwiftUI / HealthKit", detail: "Native workout logging, health insights, widgets, Live Activities, and personal training." },
  { name: "Android", stack: "Kotlin / Compose", detail: "Material 3 flows, local persistence, background work, secure storage, and Health Connect." },
];

export default function CoachPage() {
  return (
    <><a className="skip-link" href="#coach-content">Skip to Coach</a><SiteHeader />
      <main id="coach-content" className="bg-background text-foreground">
        <section className="mx-auto max-w-[90rem] px-5 pb-12 pt-14 md:px-10 md:pb-20 md:pt-24 xl:px-16"><h1 className="text-6xl font-medium leading-none md:text-8xl">Coach.</h1><p className="mt-6 max-w-3xl text-base leading-7 text-muted md:text-lg md:leading-8">A cross-platform fitness product I am building from scratch across web, iOS, and Android. It connects workout planning, active logging, progress, health context, and trainer workflows.</p><p className="mt-5 max-w-3xl text-sm leading-6">I own the product definition, interaction decisions, platform architecture, data model, and implementation. This is builder proof, not a claim of market traction.</p></section>
        <section className="mx-auto grid max-w-[90rem] gap-12 px-5 pb-20 md:px-10 md:pb-28 lg:grid-cols-[minmax(18rem,0.58fr)_minmax(0,1fr)] lg:items-start xl:px-16">
          <figure className="mx-auto w-full max-w-sm border border-line bg-surface p-4 md:p-6 lg:sticky lg:top-28"><Image src={coachScreens[0].src} alt={coachScreens[0].alt} width={1206} height={2622} priority quality={90} sizes="(min-width: 1024px) 23rem, 85vw" className="h-auto w-full" /><figcaption className="border-t border-line pt-4 text-sm text-muted">Main iOS home screen / current product build</figcaption></figure>
          <div className="divide-y divide-line border-y border-line">{platforms.map((platform) => <article key={platform.name} className="grid gap-4 py-8 md:grid-cols-[8rem_minmax(0,1fr)] md:py-10"><div><h2 className="text-2xl font-medium">{platform.name}</h2><p className="mt-2 font-mono text-[0.65rem] uppercase text-muted">{platform.stack}</p></div><p className="max-w-2xl text-base leading-7 text-muted">{platform.detail}</p></article>)}</div>
        </section>
        <section className="bg-foreground py-16 text-on-dark md:py-24"><div className="mx-auto grid max-w-[90rem] gap-12 px-5 md:px-10 lg:grid-cols-[minmax(0,0.65fr)_minmax(18rem,0.35fr)] xl:px-16"><div><h2 className="text-4xl font-medium md:text-6xl">The product in motion.</h2><p className="mt-5 max-w-2xl text-base leading-7 text-white/65">The walkthrough shows the current active workout experience rather than a static concept.</p><div className="mt-10 border border-white/20 bg-black p-3 md:p-5"><CoachDemoVideo /></div></div><div className="grid grid-cols-2 gap-4 self-start">{coachScreens.slice(1).map((screen) => <figure key={screen.src} className="border border-white/20 bg-[#0c0d0d] p-2"><Image src={screen.src} alt={screen.alt} width={1206} height={2622} quality={90} sizes="(min-width: 1024px) 12rem, 45vw" className="h-auto w-full" /><figcaption className="border-t border-white/15 px-1 pt-3 text-xs text-white/65">{screen.label}</figcaption></figure>)}</div></div></section>
        <section className="mx-auto max-w-[90rem] px-5 py-16 md:px-10 md:py-24 xl:px-16"><h2 className="max-w-3xl text-4xl font-medium leading-tight md:text-6xl">What the product system covers.</h2><div className="mt-10 grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3">{coachCapabilities.map((capability) => { const Icon = capability.icon; return <article key={capability.title} className="border-b border-r border-line p-6 md:p-8"><Icon className="h-5 w-5" aria-hidden="true" /><h3 className="mt-7 text-xl font-semibold">{capability.title}</h3><p className="mt-4 text-sm leading-6 text-muted">{capability.description}</p></article>; })}</div><Link href="/work/coach-cross-platform" className="on-dark mt-10 inline-flex min-h-12 items-center gap-3 rounded-full bg-foreground px-6 text-sm font-semibold">Read the complete build case study <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link></section>
      </main><PortfolioFooter /></>
  );
}
