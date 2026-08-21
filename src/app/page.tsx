import { Code2, Download, ExternalLink, Mail } from "lucide-react";
import Image from "next/image";
import { CoachDemoVideo } from "@/components/coach-demo-video";
import { MobilePortfolio } from "@/components/mobile-portfolio";
import { ProfessionalExperience } from "@/components/professional-experience";
import { SiteHeader } from "@/components/site-header";
import { WorkStoryLink } from "@/components/work-story-link";
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
      <a className="skip-link hidden md:block" href="#content">Skip to content</a>
      <div className="md:hidden"><MobilePortfolio /></div>
      <div className="hidden md:block">
      <SiteHeader />
      <main id="content" className="min-h-screen bg-background text-foreground">
        <section className="bg-surface">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-8 sm:py-20 lg:grid-cols-[minmax(0,1.3fr)_minmax(18rem,0.58fr)] lg:gap-20 lg:px-10 lg:py-28">
            <div className="min-w-0">
              <h1 className="max-w-4xl text-3xl font-semibold leading-[1.1] text-balance sm:text-5xl lg:text-6xl">
                {profile.headline}
              </h1>
              <p className="mt-4 max-w-xl text-base leading-7 text-muted sm:hidden">
                Product Manager at PRISM, leading pricing and conversion for OYO US and G6. I also build AI systems that reduce operating effort and improve decisions.
              </p>
              <p className="mt-6 hidden max-w-2xl text-base leading-8 text-muted sm:block sm:text-lg">
                {profile.summary}
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row">
                <a href={`mailto:${profile.email}`} className="on-dark inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-accent px-5 text-sm font-semibold transition-colors hover:bg-accent-strong">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  Start a conversation
                </a>
                <a href={profile.resumePath} download="Madhur-Jain-Resume.pdf" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-line bg-surface px-5 text-sm font-semibold text-foreground transition-colors hover:border-foreground">
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Download resume
                </a>
              </div>
              <div className="mt-5 flex items-center gap-2 sm:hidden">
                <a href={profile.linkedinUrl} aria-label="Madhur Jain on LinkedIn" className="social-link social-linkedin"><ExternalLink className="h-4 w-4" aria-hidden="true" /></a>
                <a href={profile.githubUrl} aria-label="Madhur Jain on GitHub" className="social-link social-linkgithub"><Code2 className="h-4 w-4" aria-hidden="true" /></a>
              </div>
            </div>

            <aside className="hidden border-t-2 border-foreground pt-5 lg:block lg:self-end">
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

        <section id="highlights" className="bg-surface py-12 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(20rem,0.55fr)] lg:items-end"><h2 className="max-w-3xl text-2xl font-semibold leading-tight text-balance sm:text-4xl">Metrics I have owned across each product context.</h2><p className="max-w-xl text-base leading-7 text-muted">The metric mix changes with the product: conversion, revenue, cost margin, subscriber growth, and AOV where they were the right measures of progress.</p></div>
            <div className="mt-10 divide-y divide-line border-t border-line">
              {impactHighlights.map((item) => (
                <article key={item.company} className="py-8 sm:py-10"><div className="grid gap-4 lg:grid-cols-[minmax(13rem,0.34fr)_minmax(0,1fr)] lg:gap-10"><div><p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">{item.company}</p><p className="mt-3 max-w-xs text-sm leading-6 text-muted">{item.description}</p></div><dl className="grid gap-x-8 gap-y-5 sm:grid-cols-2 xl:grid-cols-3">{item.metrics.map((metric) => <div key={metric.metric} className="border-l-2 border-accent pl-3"><dt className="text-xs font-semibold uppercase text-muted">{metric.metric}</dt><dd className="mt-1 font-mono text-xl font-semibold">{metric.value}</dd><dd className="mt-2 text-sm leading-6 text-muted">{metric.context}</dd></div>)}</dl></div></article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="bg-background py-12 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid gap-6 border-b border-line pb-9 lg:grid-cols-[minmax(0,0.9fr)_minmax(20rem,0.6fr)] lg:items-end">
              <h2 className="max-w-2xl text-2xl font-semibold leading-tight text-balance sm:text-4xl">Capabilities I use to make products move.</h2>
              <p className="max-w-xl text-base leading-7 text-muted">AI product systems and growth outcomes are the throughline. The methods below are grounded in US consumer products at PRISM, subscriber growth at SplashLearn, D2C work at Honasa, and my own cross-platform build.</p>
            </div>
            <div className="mt-3 border-t border-line">
              {skillGroups.map((group) => (
                <article key={group.title} className="grid gap-4 border-b border-line py-6 sm:py-10 lg:grid-cols-[minmax(14rem,0.62fr)_minmax(0,1.38fr)] lg:gap-16">
                  <div>
                    <h3 className="max-w-sm text-xl font-semibold leading-tight sm:text-2xl">{group.title}</h3>
                    <p className="mt-3 max-w-md text-sm leading-6 text-muted sm:mt-4 sm:text-base sm:leading-7">{group.outcome}</p>
                  </div>
                  <div className="grid gap-4 sm:gap-6 xl:grid-cols-[minmax(15rem,0.86fr)_minmax(0,1fr)] xl:gap-10">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">In practice</p>
                      <p className="mt-2 max-w-xl text-sm leading-6 text-muted sm:mt-3">{group.evidence}</p>
                    </div>
                    <ul aria-label={`${group.title} skills`} className="flex flex-wrap content-start gap-2">
                      {group.skills.map((skill) => (
                        <li key={skill} className="rounded-md border border-line bg-surface px-3 py-2 text-sm font-medium text-foreground">{skill}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="personal-projects" className="bg-surface py-12 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid gap-6 border-b border-line pb-9 lg:grid-cols-[minmax(0,0.9fr)_minmax(20rem,0.6fr)] lg:items-end"><h2 className="max-w-3xl text-2xl font-semibold leading-tight text-balance sm:text-4xl">Coach, a cross-platform fitness product I am building from scratch.</h2><p className="max-w-xl text-base leading-7 text-muted">A personal build where I own the product thinking and implementation across web, iOS, and Android. It is builder proof, not a claim of market traction.</p></div>
            <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(15rem,0.55fr)_minmax(0,1.45fr)] lg:gap-14">
              <div className="border-t-2 border-foreground pt-5">
                <h3 className="max-w-sm text-2xl font-semibold leading-tight">Coach in motion: from the next set to a logged workout.</h3>
                <p className="mt-4 max-w-md text-sm leading-6 text-muted">The walkthrough shows the active logging experience, while the supporting captures show health context and trainer collaboration from the current iOS build.</p>
                <dl className="mt-8 border-y border-line text-sm">
                  <div className="grid grid-cols-[5.5rem_minmax(0,1fr)] gap-3 border-b border-line py-4"><dt className="font-semibold">Web</dt><dd className="text-muted">Planning, calendars, training templates, and progress review.</dd></div>
                  <div className="grid grid-cols-[5.5rem_minmax(0,1fr)] gap-3 border-b border-line py-4"><dt className="font-semibold">iOS</dt><dd className="text-muted">Native workout logging, HealthKit, widgets, and Live Activities.</dd></div>
                  <div className="grid grid-cols-[5.5rem_minmax(0,1fr)] gap-3 py-4"><dt className="font-semibold">Android</dt><dd className="text-muted">Kotlin and Compose flows with local persistence and Health Connect.</dd></div>
                </dl>
                <WorkStoryLink href="/work/coach-cross-platform" title="Coach cross-platform build case study" className="mt-7 inline-flex min-h-11 items-center gap-2 text-sm font-semibold underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent">Open the Coach build case study</WorkStoryLink>
              </div>
              <div className="grid gap-5 xl:grid-cols-[minmax(14rem,0.7fr)_minmax(0,1fr)]">
                <figure className="mx-auto w-full max-w-sm self-start overflow-hidden rounded-lg border border-line bg-foreground shadow-card xl:max-w-none">
                  <CoachDemoVideo />
                  <figcaption className="on-dark dark-divider border-t px-3 py-3"><p className="text-xs font-semibold">Coach product walkthrough</p><p className="on-dark-muted mt-1 text-xs">Active workout logging in the current product experience.</p></figcaption>
                </figure>
                <div className="grid grid-cols-2 gap-3 sm:gap-5">
                  {coachScreens.slice(1).map((screen) => (
                    <figure key={screen.src} className="self-start overflow-hidden rounded-lg border border-line bg-foreground shadow-card">
                      <Image src={screen.src} alt={screen.alt} width={1206} height={2622} quality={90} sizes="(min-width: 1280px) 16vw, (min-width: 640px) 25vw, 48vw" className="h-auto w-full transition duration-300 hover:scale-[1.015]" />
                      <figcaption className="on-dark dark-divider border-t px-3 py-3"><p className="text-xs font-semibold">{screen.label}</p><p className="on-dark-muted mt-1 text-xs">{screen.detail}</p></figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="on-dark bg-foreground py-12 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.8fr)] lg:items-end lg:px-10">
            <div><h2 className="max-w-3xl text-3xl font-semibold leading-tight text-balance sm:text-5xl">Let&apos;s talk about the work.</h2></div>
            <div className="lg:justify-self-end"><p className="on-dark-muted max-w-lg text-base leading-7">I&apos;m open to conversations about AI and data products, consumer growth, product strategy, and senior product roles.</p><div className="mt-7 flex flex-col gap-3 sm:flex-row"><a href={`mailto:${profile.email}`} className="on-light inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-surface px-5 text-sm font-semibold transition-colors hover:bg-accent-surface"><Mail className="h-4 w-4" aria-hidden="true" />{profile.email}</a><a href={profile.linkedinUrl} className="dark-outline inline-flex min-h-12 items-center justify-center gap-2 rounded-md border px-5 text-sm font-semibold transition-colors"><ExternalLink className="h-4 w-4" aria-hidden="true" />LinkedIn</a></div></div>
          </div>
        </section>
      </main>
      </div>
    </>
  );
}
