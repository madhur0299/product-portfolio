import { ArrowUpRight, Download, Mail } from "lucide-react";
import Link from "next/link";
import { profile } from "@/data/portfolio";

export function PortfolioFooter() {
  return (
    <footer id="contact" className="border-t border-line bg-surface-muted pb-[calc(5rem+env(safe-area-inset-bottom))] pt-14 lg:pb-10 lg:pt-16">
      <div className="mx-auto max-w-[90rem] px-5 md:px-10 xl:px-16">
        <div className="grid gap-10 border-b border-line pb-12 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div>
            <h2 className="max-w-2xl text-3xl font-medium leading-tight text-balance md:text-5xl">Let&apos;s talk about the work.</h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-muted">Open to senior product roles and conversations about consumer growth, pricing, AI product systems, and product strategy.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href={`mailto:${profile.email}?subject=Product%20conversation`} className="on-dark inline-flex min-h-12 items-center justify-center gap-2 bg-foreground px-5 text-sm font-semibold transition-colors hover:bg-muted">
              <Mail className="h-4 w-4" aria-hidden="true" />
              Email Madhur
            </a>
            <Link href="/resume" className="inline-flex min-h-12 items-center justify-center gap-2 border border-foreground px-5 text-sm font-semibold transition-colors hover:bg-foreground hover:text-on-dark">
              <Download className="h-4 w-4" aria-hidden="true" />
              Resume
            </Link>
          </div>
        </div>
        <div className="grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-[minmax(0,1fr)_auto_auto] lg:gap-16">
          <div>
            <p className="text-lg font-semibold uppercase">{profile.name}</p>
            <p className="mt-2 max-w-md text-sm leading-6 text-muted">Product management across consumer growth, monetization, AI systems, and cross-platform product building.</p>
          </div>
          <div>
            <p className="font-mono text-[0.68rem] uppercase text-muted">Connect</p>
            <div className="mt-4 flex flex-col gap-3 text-sm">
              <a href={profile.linkedinUrl} className="inline-flex items-center gap-2 hover:underline">LinkedIn <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" /></a>
              <a href={profile.githubUrl} className="inline-flex items-center gap-2 hover:underline">GitHub <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" /></a>
            </div>
          </div>
          <div>
            <p className="font-mono text-[0.68rem] uppercase text-muted">Navigate</p>
            <div className="mt-4 flex flex-col gap-3 text-sm">
              <Link href="/experience" className="hover:underline">Experience</Link>
              <Link href="/coach" className="hover:underline">Coach</Link>
              <Link href="/how-i-work" className="hover:underline">How I work</Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 border-t border-line pt-6 font-mono text-[0.65rem] uppercase text-muted sm:flex-row sm:justify-between">
          <span>Copyright 2026 Madhur Jain</span>
          <span>Product / Growth / AI</span>
        </div>
      </div>
    </footer>
  );
}
