import { ArrowUpRight, Download, ExternalLink, Mail } from "lucide-react";
import Image from "next/image";
import { PortfolioFooter } from "@/components/portfolio-footer";
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
      <main id="resume-document" className="bg-background text-foreground">
        <section className="bg-surface py-10 sm:py-16">
          <div className="mx-auto max-w-[90rem] px-5 md:px-10 xl:px-16">
            <p className="text-sm font-semibold text-foreground">Resume</p>
            <div className="mt-3">
              <h1 className="text-2xl font-semibold leading-tight text-balance sm:text-5xl">
                Madhur Jain&apos;s resume
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
                Product management across US consumer products, AI product initiatives, mobile subscriber growth, and D2C conversion systems.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={profile.resumePath}
                download="Madhur-Jain-Resume.pdf"
                className="on-dark inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-foreground px-5 text-sm font-semibold transition-colors hover:bg-muted"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download PDF
              </a>
              <a
                href={profile.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-foreground bg-surface px-5 text-sm font-semibold transition-colors hover:bg-surface-muted"
              >
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                Open in browser
              </a>
              <a
                href={`mailto:${profile.email}?subject=Product%20conversation`}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-line bg-surface px-5 text-sm font-semibold transition-colors hover:border-foreground"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Email Madhur
              </a>
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-line bg-surface px-5 text-sm font-semibold transition-colors hover:border-foreground"
              >
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                LinkedIn
              </a>
            </div>

            {/* Below sm the full page is too small to read, so the preview becomes a
                document card and the PDF viewer does the zooming. */}
            <a
              href={profile.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 flex items-center gap-4 border border-line bg-surface p-4 transition-colors hover:border-foreground sm:mt-12 sm:flex-col sm:items-stretch sm:gap-0 sm:p-0"
            >
              <Image
                src="/images/resume-preview.png"
                alt="Preview of Madhur Jain's resume"
                width={1489}
                height={2105}
                priority
                sizes="(min-width: 640px) 76rem, 6rem"
                className="h-auto w-24 shrink-0 border border-line sm:w-full sm:border-0"
              />
              <span className="flex flex-1 items-center justify-between gap-4 sm:border-t sm:border-line sm:p-4">
                <span>
                  <span className="block text-sm font-semibold">Open the full PDF</span>
                  <span className="mt-1 block text-sm leading-6 text-muted">One page, opens in a new tab</span>
                </span>
                <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </span>
            </a>

            <section className="mt-10 border-t border-line pt-8 sm:pt-10">
              <p className="text-sm font-semibold text-foreground">Contact</p>
              <h2 className="mt-3 text-2xl font-semibold leading-tight sm:text-3xl">
                Let&apos;s talk about the work.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-muted">
                I&apos;m open to conversations about AI and data products, consumer growth, product strategy, and senior product roles.
              </p>
              <p className="mt-4 text-sm leading-6">
                <a href={`mailto:${profile.email}?subject=Product%20conversation`} className="inline-flex min-h-11 items-center border-b border-foreground font-semibold">
                  {profile.email}
                </a>
              </p>
            </section>
          </div>
        </section>
      </main>
      <PortfolioFooter />
    </>
  );
}
