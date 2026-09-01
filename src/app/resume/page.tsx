import { Download, ExternalLink, Mail } from "lucide-react";
import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { profile } from "@/data/portfolio";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Product Manager Resume",
  "Resume for Madhur Jain, with product management experience across AI, consumer growth, pricing, subscriptions, and ecommerce.",
  "/resume",
);

export default function ResumePage() {
  return (
    <>
      <a className="skip-link" href="#resume-document">Skip to resume</a>
      <SiteHeader />
      <main id="resume-document" className="min-h-screen bg-background text-foreground">
        <section className="bg-surface py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <p className="text-sm font-semibold text-accent">Resume</p>
            <div className="mt-3">
              <h1 className="text-3xl font-semibold leading-tight text-balance sm:text-5xl">
                Madhur Jain&apos;s resume
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
                Product management across US consumer products, AI product initiatives, mobile subscriber growth, and D2C conversion systems.
              </p>
            </div>
            <div className="mt-8 overflow-hidden rounded-lg border border-line bg-surface shadow-card">
              <Image
                src="/images/resume-preview.png"
                alt="Preview of Madhur Jain's resume"
                width={1489}
                height={2105}
                priority
                sizes="(min-width: 1280px) 76rem, (min-width: 640px) calc(100vw - 4rem), calc(100vw - 2.5rem)"
                className="h-auto w-full"
              />
            </div>
            <section className="mt-8 grid gap-7 border-t border-line pt-8 sm:mt-10 sm:pt-10 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.72fr)] lg:items-end">
              <div>
                <p className="text-sm font-semibold text-accent">Contact</p>
                <h2 className="mt-3 text-2xl font-semibold leading-tight sm:text-3xl">
                  Let&apos;s talk about the work.
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-6 text-muted">
                  I&apos;m open to conversations about AI and data products, consumer growth, product strategy, and senior product roles.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-end">
                <a
                  href={profile.resumePath}
                  download="Madhur-Jain-Resume.pdf"
                  className="on-dark inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-accent px-5 text-sm font-semibold transition-colors hover:bg-accent-strong"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Download PDF
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-line bg-surface px-5 text-sm font-semibold transition-colors hover:border-foreground"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  Email Madhur
                </a>
                <a
                  href={profile.linkedinUrl}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-line bg-surface px-5 text-sm font-semibold transition-colors hover:border-foreground"
                >
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  LinkedIn
                </a>
              </div>
            </section>
          </div>
        </section>
      </main>
    </>
  );
}
