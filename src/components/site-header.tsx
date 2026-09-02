"use client";

import { FileText, Home, Layers3, Sparkles, UserRound, Wrench } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileCallButton } from "@/components/mobile-call-button";
import { profile } from "@/data/portfolio";

const navigation = [
  { href: "/", label: "Home", icon: Home },
  // Work stories live under Experience, so /work keeps that item current.
  { href: "/experience", label: "Experience", icon: Layers3, owns: ["/work"] },
  { href: "/coach", label: "Coach", icon: Wrench },
  { href: "/skills", label: "Skills", icon: Sparkles },
  { href: "/how-i-work", label: "How I Work", icon: UserRound },
];

function isActive(pathname: string, href: string, owns?: string[]) {
  if (href === "/") return pathname === "/";
  if (pathname.startsWith(href)) return true;
  return (owns ?? []).some((prefix) => pathname.startsWith(prefix));
}

export function SiteHeader() {
  const pathname = usePathname();
  const onResume = pathname.startsWith("/resume");

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-line bg-surface">
        <div className="mx-auto flex h-16 max-w-[90rem] md:h-20 items-center justify-between gap-4 px-5 md:px-10 xl:px-16">
          <Link href="/" className="group min-w-0 py-3" aria-label="Madhur Jain portfolio home">
            <span className="block text-base font-semibold uppercase leading-none md:text-lg">{profile.name}</span>
            <span className="mt-1.5 hidden font-mono text-[0.7rem] uppercase text-muted sm:block">Product / Growth / AI</span>
          </Link>
          <nav aria-label="Primary navigation" className="hidden h-full items-center gap-7 lg:flex">
            {navigation.map((item) => {
              const active = isActive(pathname, item.href, item.owns);
              return (
                <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined} className={`flex h-full items-center border-b-2 px-1 text-xs font-semibold uppercase transition-colors ${active ? "border-foreground text-foreground" : "border-transparent text-muted hover:text-foreground"}`}>
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="flex shrink-0 items-center gap-2">
            <MobileCallButton />
            <Link
              href="/resume"
              aria-current={onResume ? "page" : undefined}
              className={`inline-flex min-h-11 min-w-11 items-center justify-center border border-foreground px-3 text-sm font-semibold transition-colors md:px-4 ${onResume ? "on-light bg-surface hover:bg-surface-muted" : "on-dark bg-foreground hover:bg-surface hover:text-foreground"}`}
              aria-label="View Madhur Jain's resume"
            >
              <FileText className="h-4 w-4" aria-hidden="true" />
              <span className="ml-2 hidden md:inline">Resume</span>
            </Link>
          </div>
        </div>
      </header>

      <nav aria-label="Mobile navigation" className="mobile-dock fixed inset-x-0 bottom-0 z-50 border-t border-line bg-surface pb-[env(safe-area-inset-bottom)] lg:hidden">
        <div className="mx-auto grid max-w-lg grid-cols-5">
          {navigation.map((item) => {
            const active = isActive(pathname, item.href, item.owns);
            const Icon = item.icon;
            return (
              <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined} className={`flex min-h-[3.9rem] flex-col items-center justify-center gap-1 px-1 text-center text-[0.67rem] font-semibold leading-tight ${active ? "on-dark bg-foreground" : "text-muted"}`}>
                <Icon className="h-5 w-5" strokeWidth={1.7} aria-hidden="true" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
