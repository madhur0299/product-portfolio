import { ArrowRight, Code2, Download, ExternalLink, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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
              <p className="text-base font-semibold text-accent">Madhur Jain, Product Manager III</p>
              <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.06] text-balance sm:text-5xl lg:text-6xl">
                Product Manager III with 5+ years across consumer growth, monetization, ecommerce, and data-led products.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
                I turn ambiguous product problems into launches and measurable commercial outcomes. My recent work includes AI analytics and LLM automation at PRISM, after leading mobile growth at SplashLearn and D2C product work at Honasa.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href={profile.resumePath} className="on-dark inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-accent px-5 text-sm font-semibold transition-colors hover:bg-accent-strong">
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
              <h2 className="text-xl font-semibold leading-8">Now: Product Manager III at PRISM, formerly OYO.</h2>
              <p className="mt-3 text-sm leading-6 text-muted">Building AI and data workflows alongside pricing and conversion products for consumer and operational teams.</p>
              <dl className="mt-8 space-y-5 border-t border-line pt-6 text-sm">
                <div><dt className="text-muted">Based in</dt><dd className="mt-1 font-medium">{profile.location}</dd></div>
                <div><dt className="text-muted">Open to</dt><dd className="mt-1 font-medium">Senior PM, PM3, AI/Data PM, and Growth PM roles</dd></div>
              </dl>
              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium">
                <a href={profile.linkedinUrl} className="inline-flex min-h-11 items-center gap-2 transition-colors hover:text-accent"><ExternalLink className="h-4 w-4" aria-hidden="true" />LinkedIn</a>
                <a href={profile.githubUrl} className="inline-flex min-h-11 items-center gap-2 transition-colors hover:text-accent"><Code2 className="h-4 w-4" aria-hidden="true" />GitHub</a>
              </div>
            </aside>
          </div>
        </section>

        <section id="experience" className="scroll-mt-28 border-y border-line bg-surface-muted py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(20rem,0.6fr)] lg:items-end">
              <div>
                <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-balance sm:text-4xl">How my product scope has grown.</h2>
                <p className="mt-5 max-w-3xl text-base leading-7 text-muted">I started by fixing the operational details that shape an ecommerce customer journey. At Honasa, that became acquisition, conversion, launches, and platform scale. At SplashLearn, I owned mobile subscription growth. At PRISM, I now apply the same product discipline to AI, pricing, and decision-making systems.</p>
              </div>
              <p className="max-w-xl text-base leading-7 text-muted">This is the professional work behind the portfolio. Each story names the product context, the decision I owned, and the change it created.</p>
            </div>

            <div className="mt-12 space-y-14">
              {professionalExperience.map((experience, index) => (
                <article key={experience.company} className="grid gap-7 border-t border-line pt-7 lg:grid-cols-[minmax(14rem,0.5fr)_minmax(0,1fr)_minmax(16rem,0.5fr)] lg:gap-10">
                  <div>
                    <p className="font-mono text-xs font-semibold text-accent">{String(index + 1).padStart(2, "0")}</p>
                    <h3 className="mt-3 text-xl font-semibold">{experience.company}</h3>
                    <p className="mt-1 text-sm text-muted">{experience.timeframe}</p>
                    <p className="mt-5 text-sm leading-6 text-muted">{experience.overview}</p>
                  </div>
                  <div className="space-y-8">
                    {experience.stages.map((stage) => (
                      <section key={stage.role}>
                        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1"><h4 className="text-base font-semibold">{stage.role}</h4><p className="text-xs text-muted">{stage.timeframe}</p></div>
                        <p className="mt-2 text-sm leading-6 text-muted">{stage.summary}</p>
                        <ul className="mt-4 space-y-2.5 text-sm leading-6 text-foreground">
                          {stage.achievements.map((achievement) => <li key={achievement} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />{achievement}</li>)}
                        </ul>
                      </section>
                    ))}
                  </div>
                  <div className="flex flex-col gap-5 lg:pt-1">
                    <ul className="space-y-3 text-sm font-medium">{experience.outcomes.map((outcome) => <li key={outcome} className="border-l border-accent pl-3 leading-6">{outcome}</li>)}</ul>
                    <Link href={experience.storyHref} className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-foreground underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent">{experience.storyLabel}<ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="highlights" className="scroll-mt-28 bg-surface py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(20rem,0.55fr)] lg:items-end"><h2 className="max-w-3xl text-3xl font-semibold leading-tight text-balance sm:text-4xl">A few measurable changes I have helped drive.</h2><p className="max-w-xl text-base leading-7 text-muted">Every number is attributed to the product and business context where it was measured.</p></div>
            <div className="mt-10 grid gap-x-10 border-t border-line md:grid-cols-2">
              {impactHighlights.map((item) => (
                <article key={item.company} className="grid grid-cols-[minmax(7.5rem,0.42fr)_minmax(0,1fr)] gap-5 border-b border-line py-6 sm:gap-7"><div><p className="font-mono text-2xl font-semibold sm:text-3xl">{item.value}</p><p className="mt-2 text-xs font-semibold text-accent">{item.company}</p></div><p className="self-center text-sm leading-6 text-muted">{item.label}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="scroll-mt-28 bg-background py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid gap-6 border-b border-line pb-9 lg:grid-cols-[minmax(0,0.9fr)_minmax(20rem,0.6fr)] lg:items-end"><h2 className="max-w-2xl text-3xl font-semibold leading-tight text-balance sm:text-4xl">How I work, with proof in shipped products.</h2><p className="max-w-xl text-base leading-7 text-muted">These are skills I have used in LLM evaluation at PRISM, subscription and funnel growth at SplashLearn, and multi-brand ecommerce systems at Honasa.</p></div>
            <div className="grid md:grid-cols-3">
              {skillGroups.map((group) => (
                <article key={group.title} className="border-b border-line py-7 md:border-b-0 md:px-7 md:first:pl-0 md:not-last:border-r md:last:pr-0"><h3 className="text-xl font-semibold">{group.title}</h3><p className="mt-3 text-sm leading-6 text-muted">{group.description}</p><ul className="mt-6 space-y-2 text-sm font-medium">{group.skills.map((skill) => <li key={skill} className="flex items-center gap-2"><span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />{skill}</li>)}</ul></article>
              ))}
            </div>
          </div>
        </section>

        <section id="personal-projects" className="scroll-mt-28 bg-surface py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid gap-6 border-b border-line pb-9 lg:grid-cols-[minmax(0,0.9fr)_minmax(20rem,0.6fr)] lg:items-end"><h2 className="max-w-3xl text-3xl font-semibold leading-tight text-balance sm:text-4xl">Coach, a cross-platform fitness product I am building from scratch.</h2><p className="max-w-xl text-base leading-7 text-muted">A personal build where I own the product thinking and implementation across web, iOS, and Android. It is builder proof, not a claim of market traction.</p></div>
            <div className="mt-8 grid gap-5 lg:grid-cols-12">
              <Link href="/work/coach-cross-platform" className="group overflow-hidden rounded-lg border border-line bg-foreground lg:col-span-7"><div className="relative aspect-[16/10]"><Image src={coachScreens[0].src} alt={coachScreens[0].alt} fill priority sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover transition duration-300 group-hover:scale-[1.01]" /></div><div className="on-dark dark-divider border-t p-5 sm:p-6"><p className="accent-soft text-sm font-semibold">Web · Training dashboard</p><div className="mt-3 flex items-end justify-between gap-4"><p className="text-xl font-semibold sm:text-2xl">Planning, logging, progress, and health context in one fitness product.</p><ArrowRight className="h-5 w-5 shrink-0" aria-hidden="true" /></div></div></Link>
              <div className="grid gap-5 sm:grid-cols-3 lg:col-span-5 lg:grid-cols-1">
                {coachScreens.slice(1).map((screen) => (
                  <Link key={screen.src} href="/work/coach-cross-platform" className="group overflow-hidden rounded-lg border border-line bg-surface-muted sm:grid sm:grid-rows-[1fr_auto] lg:grid-cols-[8.5rem_minmax(0,1fr)] lg:grid-rows-1"><div className="relative aspect-[4/5] overflow-hidden bg-foreground lg:aspect-auto"><Image src={screen.src} alt={screen.alt} fill sizes="(min-width: 1024px) 150px, 33vw" className="object-cover object-top transition duration-300 group-hover:scale-[1.03]" /></div><div className="p-4 lg:flex lg:items-center"><p className="text-sm font-semibold">Mobile · {screen.label}</p></div></Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="on-dark scroll-mt-28 bg-foreground py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.8fr)] lg:items-end lg:px-10">
            <div><h2 className="max-w-3xl text-3xl font-semibold leading-tight text-balance sm:text-5xl">Let&apos;s talk about the work.</h2></div>
            <div className="lg:justify-self-end"><p className="on-dark-muted max-w-lg text-base leading-7">I&apos;m open to conversations about AI and data products, consumer growth, product strategy, and senior product roles.</p><div className="mt-7 flex flex-col gap-3 sm:flex-row"><a href={`mailto:${profile.email}`} className="on-light inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-surface px-5 text-sm font-semibold transition-colors hover:bg-accent-surface"><Mail className="h-4 w-4" aria-hidden="true" />{profile.email}</a><a href={profile.linkedinUrl} className="dark-outline inline-flex min-h-12 items-center justify-center gap-2 rounded-md border px-5 text-sm font-semibold transition-colors"><ExternalLink className="h-4 w-4" aria-hidden="true" />LinkedIn</a></div><p className="on-dark-muted mt-4 text-sm">{profile.phone}</p></div>
          </div>
        </section>
      </main>
    </>
  );
}
