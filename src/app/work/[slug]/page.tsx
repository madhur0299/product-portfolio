import { ArrowLeft, ArrowRight, ArrowUpRight, Download, Mail } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CoachDemoVideo } from "@/components/coach-demo-video";
import { PortfolioFooter } from "@/components/portfolio-footer";
import { SiteHeader } from "@/components/site-header";
import { caseStudies, coachScreens, getCaseStudy, profile } from "@/data/portfolio";

type CasePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({ slug: caseStudy.slug }));
}

export async function generateMetadata({ params }: CasePageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) return { title: "Work detail not found" };

  const title = caseStudy.title;
  const path = `/work/${caseStudy.slug}`;

  return {
    title,
    description: caseStudy.summary,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      url: `https://www.madhurjain.in${path}`,
      title,
      description: caseStudy.summary,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${caseStudy.title} case study by ${profile.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: caseStudy.summary,
      images: ["/opengraph-image"],
    },
  };
}

export default async function WorkDetailPage({ params }: CasePageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) notFound();

  const isCoach = caseStudy.slug === "coach-cross-platform";
  const currentIndex = caseStudies.findIndex((item) => item.slug === slug);
  const nextCase = caseStudies[(currentIndex + 1) % caseStudies.length];
  const backHref = isCoach ? "/coach" : "/experience";
  const backLabel = isCoach ? "Back to Coach" : "Back to professional experience";

  return (
    <>
      <a className="skip-link" href="#work-content">Skip to work story</a>
      <SiteHeader />
      <main id="work-content" className="min-h-screen bg-background text-foreground">

      <section className="border-b border-line bg-surface">
        <div className="mx-auto max-w-[90rem] px-5 py-10 md:px-10 md:py-14 xl:px-16 xl:py-20">
          <Link href={backHref} className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-foreground">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            {backLabel}
          </Link>

          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.18fr)_minmax(18rem,0.52fr)] lg:items-end lg:gap-16">
            <div>
              <h1 className="max-w-4xl text-[1.9rem] font-semibold leading-[1.12] text-balance sm:text-5xl lg:text-6xl">{caseStudy.title}</h1>
              <p className="mt-5 text-base font-semibold text-foreground">{caseStudy.company}</p>
              <p className="mt-6 max-w-3xl text-base leading-8 text-muted sm:text-lg">{caseStudy.summary}</p>
              {caseStudy.liveUrl ? (
                <a href={caseStudy.liveUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex min-h-11 items-center gap-2 border-b border-foreground text-sm font-semibold">Open {caseStudy.liveLabel} <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>
              ) : null}
            </div>
            <dl className="border-t border-line text-sm">
              <div className="border-b border-line py-4">
                <dt className="text-muted">Role</dt>
                <dd className="mt-1 font-semibold">{caseStudy.role}</dd>
              </div>
              <div className="border-b border-line py-4">
                <dt className="text-muted">When</dt>
                <dd className="mt-1 font-semibold">{caseStudy.timeframe}</dd>
              </div>
              <div className="border-b border-line py-4">
                <dt className="text-muted">Product area</dt>
                <dd className="mt-1 font-semibold">{caseStudy.tags.slice(0, 3).join(", ")}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-surface-muted py-10 sm:py-16">
        <div className="mx-auto max-w-[90rem] px-5 md:px-10 xl:px-16">
          <div className="grid gap-6 border-b border-line pb-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(18rem,0.6fr)] lg:items-end">
            <div>
              <h2 className="max-w-3xl text-2xl font-semibold leading-tight text-balance sm:text-4xl">The business situation.</h2>
            </div>
            <p className="text-base leading-7 text-muted">{caseStudy.mandate}</p>
          </div>
          <div className="mt-8 grid border-t border-line sm:grid-cols-3">
            {caseStudy.metrics.map((metric) => (
              <div key={metric.label} className="border-b border-line py-6 sm:border-b-0 sm:px-6 sm:first:pl-0 sm:not-last:border-r sm:last:pr-0">
                <h3 className="text-sm font-semibold">{metric.label}</h3>
                <p className="mt-3 font-mono text-3xl font-semibold">{metric.value}</p>
                <p className="mt-3 text-sm leading-6 text-muted">{metric.context}</p>
              </div>
            ))}
          </div>
          <p className="mt-7 max-w-3xl border-l border-foreground pl-4 text-sm leading-6 text-muted">{caseStudy.evidence}</p>
        </div>
      </section>

      {isCoach ? (
        <section className="border-b border-line bg-surface py-10 sm:py-16">
          <div className="mx-auto max-w-[90rem] px-5 md:px-10 xl:px-16" data-reveal>
            <div className="grid gap-8 border-t-2 border-foreground pt-5 lg:grid-cols-[minmax(16rem,0.7fr)_minmax(18rem,0.5fr)] lg:items-start lg:gap-16">
              <div>
              <h2 className="max-w-xl text-2xl font-semibold leading-tight text-balance sm:text-4xl">A training product designed around the next useful action.</h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-muted">Start with the active workout, log the set in the moment, then move into health context, progress, and coaching. This walkthrough puts the interaction model ahead of static concept screens.</p>
              </div>
              <ol className="mt-8 max-w-xl divide-y divide-line border-y border-line text-sm">
                <li className="grid gap-2 py-4 sm:grid-cols-[6rem_minmax(0,1fr)] sm:gap-5">
                  <span className="font-semibold text-foreground">Plan</span>
                  <p className="leading-6 text-muted">Bring today&apos;s workout and the next meaningful action into a single starting point.</p>
                </li>
                <li className="grid gap-2 py-4 sm:grid-cols-[6rem_minmax(0,1fr)] sm:gap-5">
                  <span className="font-semibold text-foreground">Train</span>
                  <p className="leading-6 text-muted">Log weight, reps, effort, and sets without losing focus on the exercise in front of you.</p>
                </li>
                <li className="grid gap-2 py-4 sm:grid-cols-[6rem_minmax(0,1fr)] sm:gap-5">
                  <span className="font-semibold text-foreground">Review</span>
                  <p className="leading-6 text-muted">Connect workout history with health, progress, and trainer context once the session is complete.</p>
                </li>
              </ol>
            </div>
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              <figure className="flex min-w-0 flex-col border border-line bg-foreground">
                <div className="aspect-[9/16] bg-black"><CoachDemoVideo className="h-full w-full" /></div>
                <figcaption className="on-dark dark-divider border-t p-4 text-sm font-semibold">Active workout<span className="on-dark-muted mt-1 block font-normal">Set logging, rest, and in-session progress.</span></figcaption>
              </figure>
              {coachScreens.slice(1).map((screen) => (
                <figure key={screen.src} className="flex min-w-0 flex-col border border-line bg-foreground">
                  <div className="relative aspect-[9/16] bg-black">
                    <Image src={screen.src} alt={screen.alt} fill quality={90} sizes="(min-width: 1024px) 30vw, 90vw" className="object-contain" />
                  </div>
                  <figcaption className="on-dark dark-divider border-t p-4 text-sm font-semibold">{screen.label}<span className="on-dark-muted mt-1 block font-normal">{screen.detail}</span></figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-background py-12 sm:py-24">
        <div className="mx-auto grid max-w-[90rem] gap-10 px-5 md:px-10 lg:grid-cols-[minmax(14rem,0.42fr)_minmax(0,1fr)] lg:gap-20 xl:px-16">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <h2 className="text-2xl font-semibold leading-tight">The product decision I owned.</h2>
            <p className="mt-5 text-sm leading-6 text-muted">{caseStudy.keyDecision}</p>
            <div className="mt-7 flex flex-wrap gap-2">
              {caseStudy.tags.map((tag) => <span key={tag} className="rounded-md border border-line bg-surface px-2.5 py-1.5 text-xs font-medium text-muted">{tag}</span>)}
            </div>
          </aside>
          <div className="max-w-3xl border-t border-line">
            {caseStudy.sections.map((section) => (
              <article key={section.title} className="border-b border-line py-8 sm:py-10">
                <h2 className="text-2xl font-semibold">{section.title}</h2>
                <p className="mt-4 text-base leading-8 text-muted">{section.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {caseStudy.platforms ? (
        <section className="border-y border-line bg-surface-muted py-12 sm:py-24">
          <div className="mx-auto max-w-[90rem] px-5 md:px-10 xl:px-16">
            <div className="grid gap-6 border-b border-line pb-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(18rem,0.55fr)] lg:items-end">
              <div>
                <h2 className="text-2xl font-semibold leading-tight text-balance sm:text-4xl">Designed for the strengths of each platform.</h2>
              </div>
              <p className="text-base leading-7 text-muted">Coach is one product with platform-specific experiences across web, iOS, and Android.</p>
            </div>
            <div className="grid border-t border-line md:grid-cols-3">
              {caseStudy.platforms.map((platform) => {
                const Icon = platform.icon;
                return <article key={platform.platform} className="border-b border-line py-7 md:border-b-0 md:px-6 md:first:pl-0 md:not-last:border-r md:last:pr-0">
                  <Icon className="h-5 w-5 text-foreground" aria-hidden="true" />
                  <p className="mt-6 text-sm font-semibold text-foreground">{platform.platform}</p>
                  <h3 className="mt-3 text-xl font-semibold leading-tight">{platform.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{platform.description}</p>
                </article>;
              })}
            </div>
          </div>
        </section>
      ) : null}

      <section className="on-dark bg-foreground py-10 sm:py-16">
        <div className="mx-auto grid max-w-[90rem] gap-8 px-5 md:px-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end xl:px-16">
          <div>
            <p className="accent-soft text-sm font-semibold">Next work story</p>
            <Link href={`/work/${nextCase.slug}`} className="mt-3 inline-flex items-center gap-3 text-2xl font-semibold leading-tight transition-opacity hover:opacity-80 sm:text-3xl">
              {nextCase.title}
              <ArrowRight className="h-5 w-5 shrink-0" aria-hidden="true" />
            </Link>
            <div className="mt-5">
              <Link href="/work" className="inline-flex min-h-11 items-center border-b border-white/40 text-sm font-semibold transition-colors hover:border-white">
                All work stories
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href={`mailto:${profile.email}`} className="on-light inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-surface px-4 text-sm font-semibold transition-colors hover:bg-accent-surface">
              <Mail className="h-4 w-4" aria-hidden="true" />
              Contact
            </a>
            <Link href="/resume" className="dark-outline inline-flex min-h-11 items-center justify-center gap-2 rounded-md border px-4 text-sm font-semibold transition-colors">
              <Download className="h-4 w-4" aria-hidden="true" />
              Resume
            </Link>
          </div>
        </div>
      </section>
      </main>
      <PortfolioFooter />
    </>
  );
}
