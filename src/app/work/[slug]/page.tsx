import { ArrowLeft, ArrowRight, Download, Mail } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
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
  return caseStudy
    ? { title: `${caseStudy.title} | ${profile.name}`, description: caseStudy.summary }
    : { title: "Work detail not found" };
}

export default async function WorkDetailPage({ params }: CasePageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) notFound();

  const isCoach = caseStudy.slug === "coach-cross-platform";
  const currentIndex = caseStudies.findIndex((item) => item.slug === slug);
  const nextCase = caseStudies[(currentIndex + 1) % caseStudies.length];
  const backHref = isCoach ? "/#personal-projects" : "/#experience";
  const backLabel = isCoach ? "Back to personal builds" : "Back to professional experience";

  return (
    <>
      <a className="skip-link" href="#work-content">Skip to work story</a>
      <SiteHeader />
      <main id="work-content" className="min-h-screen bg-background text-foreground">

      <section className="border-b border-line bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14 lg:px-10 lg:py-20">
          <Link href={backHref} className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            {backLabel}
          </Link>

          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.18fr)_minmax(18rem,0.52fr)] lg:items-end lg:gap-16">
            <div>
              <h1 className="max-w-4xl text-4xl font-semibold leading-[1.06] text-balance sm:text-5xl lg:text-6xl">{caseStudy.title}</h1>
              <p className="mt-5 text-base font-semibold text-accent">{caseStudy.company}</p>
              <p className="mt-6 max-w-3xl text-base leading-8 text-muted sm:text-lg">{caseStudy.summary}</p>
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

      <section className="border-b border-line bg-surface-muted py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 border-b border-line pb-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(18rem,0.6fr)] lg:items-end">
            <div>
              <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-balance sm:text-4xl">The business situation.</h2>
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
          <p className="mt-7 max-w-3xl border-l border-accent pl-4 text-sm leading-6 text-muted">{caseStudy.evidence}</p>
        </div>
      </section>

      {isCoach ? (
        <section className="border-b border-line bg-surface py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-line bg-foreground sm:aspect-[16/9] lg:aspect-[16/7]">
              <Image src={coachScreens[0].src} alt={coachScreens[0].alt} fill priority sizes="(min-width: 1280px) 1216px, 100vw" className="object-cover" />
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[minmax(14rem,0.42fr)_minmax(0,1fr)] lg:gap-20 lg:px-10">
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
        <section className="border-y border-line bg-surface-muted py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid gap-6 border-b border-line pb-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(18rem,0.55fr)] lg:items-end">
              <div>
                <h2 className="text-3xl font-semibold leading-tight text-balance sm:text-4xl">Designed for the strengths of each platform.</h2>
              </div>
              <p className="text-base leading-7 text-muted">Coach is one product with platform-specific experiences across web, iOS, and Android.</p>
            </div>
            <div className="grid border-t border-line md:grid-cols-3">
              {caseStudy.platforms.map((platform) => {
                const Icon = platform.icon;
                return <article key={platform.platform} className="border-b border-line py-7 md:border-b-0 md:px-6 md:first:pl-0 md:not-last:border-r md:last:pr-0">
                  <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                  <p className="mt-6 text-sm font-semibold text-accent">{platform.platform}</p>
                  <h3 className="mt-3 text-xl font-semibold leading-tight">{platform.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{platform.description}</p>
                </article>;
              })}
            </div>
          </div>
        </section>
      ) : null}

      {isCoach ? (
        <section className="bg-surface py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">The product in use.</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {coachScreens.slice(1).map((screen) => (
                <figure key={screen.src} className="overflow-hidden rounded-lg border border-line bg-foreground">
                  <div className="relative aspect-[4/5]">
                    <Image src={screen.src} alt={screen.alt} fill sizes="(min-width: 640px) 30vw, 100vw" className="object-cover object-top" />
                  </div>
                  <figcaption className="on-dark dark-divider border-t px-4 py-3 text-sm font-semibold">{screen.label}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="on-dark bg-foreground py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:px-10">
          <div>
            <p className="accent-soft text-sm font-semibold">Next work story</p>
            <Link href={`/work/${nextCase.slug}`} className="mt-3 inline-flex items-center gap-3 text-2xl font-semibold leading-tight transition-opacity hover:opacity-80 sm:text-3xl">
              {nextCase.title}
              <ArrowRight className="h-5 w-5 shrink-0" aria-hidden="true" />
            </Link>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href={`mailto:${profile.email}`} className="on-light inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-surface px-4 text-sm font-semibold transition-colors hover:bg-accent-surface">
              <Mail className="h-4 w-4" aria-hidden="true" />
              Contact
            </a>
            <a href={profile.resumePath} className="dark-outline inline-flex min-h-11 items-center justify-center gap-2 rounded-md border px-4 text-sm font-semibold transition-colors">
              <Download className="h-4 w-4" aria-hidden="true" />
              Resume
            </a>
          </div>
        </div>
      </section>
      </main>
    </>
  );
}
