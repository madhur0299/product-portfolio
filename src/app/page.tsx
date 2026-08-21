import { ArrowRight, Code2, Download, ExternalLink, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ProfessionalExperience } from "@/components/professional-experience";
import { SiteHeader } from "@/components/site-header";
import {
  coachScreens,
  impactHighlights,
  professionalExperience,
  profile,
  skillGroups,
} from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#content">Skip to content</a>
      <SiteHeader />
      <main id="content" className="min-h-screen bg-background text-foreground">
        <section className="bg-surface">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[minmax(0,1.3fr)_minmax(18rem,0.58fr)] lg:gap-20 lg:px-10 lg:py-28">
            <div className="min-w-0">
              <p className="text-base font-semibold text-accent">Madhur Jain</p>
              <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.06] text-balance sm:text-5xl lg:text-6xl">
                {profile.headline}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
                {profile.summary}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href={profile.resumePath} download className="on-dark inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-accent px-5 text-sm font-semibold transition-colors hover:bg-accent-strong">
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Download resume
                </a>
                <a href={`mailto:${profile.email}`} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-line bg-surface px-5 text-sm font-semibold text-foreground transition-colors hover:border-foreground">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  Start a conversation
                </a>
              </div>
            </div>

            <aside className="border-t-2 border-foreground pt-5 lg:self-end">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">Current focus</p>
              <h2 className="mt-3 text-xl font-semibold leading-8">US consumer products and AI product management at PRISM, Parent Company of OYO.</h2>
              <p className="mt-3 text-sm leading-6 text-muted">I own pricing and conversion work for consumer-facing products, while leading AI PM initiatives that improve team efficiency, run autonomous operational workflows, and improve conversion.</p>
              <dl className="mt-8 space-y-5 border-t border-line pt-6 text-sm">
                <div><dt className="text-muted">Experience across</dt><dd className="mt-1 font-medium">US consumer products · AI product management · Mobile growth · D2C conversion</dd></div>
                <div><dt className="text-muted">Based in</dt><dd className="mt-1 font-medium">{profile.location}</dd></div>
              </dl>
              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium">
                <a href={profile.linkedinUrl} className="inline-flex min-h-11 items-center gap-2 transition-colors hover:text-accent"><ExternalLink className="h-4 w-4" aria-hidden="true" />LinkedIn</a>
                <a href={profile.githubUrl} className="inline-flex min-h-11 items-center gap-2 transition-colors hover:text-accent"><Code2 className="h-4 w-4" aria-hidden="true" />GitHub</a>
              </div>
            </aside>
          </div>
        </section>

        <ProfessionalExperience experiences={professionalExperience} />

        <section id="highlights" className="bg-surface py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(20rem,0.55fr)] lg:items-end"><h2 className="max-w-3xl text-3xl font-semibold leading-tight text-balance sm:text-4xl">Metrics I have owned across each product context.</h2><p className="max-w-xl text-base leading-7 text-muted">The metric mix changes with the product: conversion, revenue, cost margin, subscriber growth, and AOV where they were the right measures of progress.</p></div>
            <div className="mt-10 divide-y divide-line border-t border-line">
              {impactHighlights.map((item) => (
                <article key={item.company} className="py-8 sm:py-10"><div className="grid gap-4 lg:grid-cols-[minmax(13rem,0.34fr)_minmax(0,1fr)] lg:gap-10"><div><p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">{item.company}</p><p className="mt-3 max-w-xs text-sm leading-6 text-muted">{item.description}</p></div><dl className="grid gap-x-8 gap-y-5 sm:grid-cols-2 xl:grid-cols-3">{item.metrics.map((metric) => <div key={metric.metric} className="border-l-2 border-accent pl-3"><dt className="text-xs font-semibold uppercase text-muted">{metric.metric}</dt><dd className="mt-1 font-mono text-xl font-semibold">{metric.value}</dd><dd className="mt-2 text-sm leading-6 text-muted">{metric.context}</dd></div>)}</dl></div></article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="bg-background py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid gap-6 border-b border-line pb-9 lg:grid-cols-[minmax(0,0.9fr)_minmax(20rem,0.6fr)] lg:items-end"><h2 className="max-w-2xl text-3xl font-semibold leading-tight text-balance sm:text-4xl">How I work, with proof in shipped products.</h2><p className="max-w-xl text-base leading-7 text-muted">These are skills I have used in US consumer products and AI PM initiatives at PRISM, subscription and funnel growth at SplashLearn, and multi-brand ecommerce systems at Honasa.</p></div>
            <div className="grid md:grid-cols-3">
              {skillGroups.map((group) => (
                <article key={group.title} className="border-b border-line py-7 md:border-b-0 md:px-7 md:first:pl-0 md:not-last:border-r md:last:pr-0"><h3 className="text-xl font-semibold">{group.title}</h3><p className="mt-3 text-sm leading-6 text-muted">{group.description}</p><ul className="mt-6 space-y-2 text-sm font-medium">{group.skills.map((skill) => <li key={skill} className="flex items-center gap-2"><span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />{skill}</li>)}</ul></article>
              ))}
            </div>
          </div>
        </section>

        <section id="personal-projects" className="bg-surface py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid gap-6 border-b border-line pb-9 lg:grid-cols-[minmax(0,0.9fr)_minmax(20rem,0.6fr)] lg:items-end"><h2 className="max-w-3xl text-3xl font-semibold leading-tight text-balance sm:text-4xl">Coach, a cross-platform fitness product I am building from scratch.</h2><p className="max-w-xl text-base leading-7 text-muted">A personal build where I own the product thinking and implementation across web, iOS, and Android. It is builder proof, not a claim of market traction.</p></div>
            <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(15rem,0.55fr)_minmax(0,1.45fr)] lg:gap-14">
              <div className="border-t-2 border-foreground pt-5">
                <p className="text-sm font-semibold text-accent">Product evidence</p>
                <h3 className="mt-4 max-w-sm text-2xl font-semibold leading-tight">A home screen that brings the next workout and health context together.</h3>
                <p className="mt-4 max-w-md text-sm leading-6 text-muted">The product moves from a daily training plan to health context and personal coaching. These are native-resolution simulator captures of the current iOS build, not concept screens.</p>
                <dl className="mt-8 border-y border-line text-sm">
                  <div className="grid grid-cols-[5.5rem_minmax(0,1fr)] gap-3 border-b border-line py-4"><dt className="font-semibold">Web</dt><dd className="text-muted">Planning, calendars, training templates, and progress review.</dd></div>
                  <div className="grid grid-cols-[5.5rem_minmax(0,1fr)] gap-3 border-b border-line py-4"><dt className="font-semibold">iOS</dt><dd className="text-muted">Native workout logging, HealthKit, widgets, and Live Activities.</dd></div>
                  <div className="grid grid-cols-[5.5rem_minmax(0,1fr)] gap-3 py-4"><dt className="font-semibold">Android</dt><dd className="text-muted">Kotlin and Compose flows with local persistence and Health Connect.</dd></div>
                </dl>
                <Link href="/work/coach-cross-platform" className="mt-7 inline-flex min-h-11 items-center gap-2 text-sm font-semibold underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent">Read the Coach build story<ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:gap-5 xl:grid-cols-3">
                {coachScreens.map((screen) => (
                  <figure key={screen.src} className="last:col-span-2 overflow-hidden rounded-lg border border-line bg-foreground shadow-card sm:last:col-span-1">
                    <Image src={screen.src} alt={screen.alt} width={1206} height={2622} quality={90} sizes="(min-width: 1280px) 20vw, (min-width: 640px) 36vw, 100vw" className="h-auto w-full transition duration-300 hover:scale-[1.015]" />
                    <figcaption className="on-dark dark-divider border-t px-3 py-3"><p className="text-xs font-semibold">{screen.label}</p><p className="on-dark-muted mt-1 text-xs">{screen.detail}</p></figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="on-dark bg-foreground py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.8fr)] lg:items-end lg:px-10">
            <div><h2 className="max-w-3xl text-3xl font-semibold leading-tight text-balance sm:text-5xl">Let&apos;s talk about the work.</h2></div>
            <div className="lg:justify-self-end"><p className="on-dark-muted max-w-lg text-base leading-7">I&apos;m open to conversations about AI and data products, consumer growth, product strategy, and senior product roles.</p><div className="mt-7 flex flex-col gap-3 sm:flex-row"><a href={`mailto:${profile.email}`} className="on-light inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-surface px-5 text-sm font-semibold transition-colors hover:bg-accent-surface"><Mail className="h-4 w-4" aria-hidden="true" />{profile.email}</a><a href={profile.linkedinUrl} className="dark-outline inline-flex min-h-12 items-center justify-center gap-2 rounded-md border px-5 text-sm font-semibold transition-colors"><ExternalLink className="h-4 w-4" aria-hidden="true" />LinkedIn</a></div></div>
          </div>
        </section>
      </main>
    </>
  );
}
