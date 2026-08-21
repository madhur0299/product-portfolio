import { Download } from "lucide-react";
import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";
import { MobileCallButton } from "@/components/mobile-call-button";
import { profile } from "@/data/portfolio";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface/95 backdrop-blur">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
        <Link href="/" className="flex min-w-0 items-center gap-3 py-3">
          <BrandMark className="h-9 w-9 shrink-0 text-foreground" />
          <span className="min-w-0">
            <span className="block truncate text-sm font-semibold text-foreground">{profile.name}</span>
            <span className="block truncate text-xs text-muted">{profile.role}</span>
          </span>
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-6 text-sm font-medium text-muted md:flex">
          <Link href="/#skills" className="transition-colors hover:text-foreground">Skills</Link>
          <Link href="/#experience" className="transition-colors hover:text-foreground">Experience</Link>
          <Link href="/#personal-projects" className="transition-colors hover:text-foreground">Personal builds</Link>
          <Link href="/#contact" className="transition-colors hover:text-foreground">Contact</Link>
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <MobileCallButton />
          <Link href="/resume" className="on-dark inline-flex min-h-11 items-center gap-2 rounded-md bg-foreground px-3 text-sm font-semibold transition-colors hover:bg-accent sm:px-4">
            <Download className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">Resume</span>
          </Link>
        </div>
      </div>
      <nav aria-label="Mobile navigation" className="mx-auto flex max-w-7xl border-t border-line px-5 text-xs font-semibold text-muted md:hidden sm:px-8">
        <Link href="/#experience" className="flex min-h-11 flex-1 items-center justify-center transition-colors hover:text-foreground">Work</Link>
        <Link href="/#highlights" className="flex min-h-11 flex-1 items-center justify-center transition-colors hover:text-foreground">Results</Link>
        <Link href="/#skills" className="flex min-h-11 flex-1 items-center justify-center transition-colors hover:text-foreground">Skills</Link>
        <Link href="/#contact" className="flex min-h-11 flex-1 items-center justify-center transition-colors hover:text-foreground">Contact</Link>
      </nav>
    </header>
  );
}
