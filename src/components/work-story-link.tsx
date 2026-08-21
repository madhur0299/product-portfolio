"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { type MouseEvent, type ReactNode, useEffect, useRef, useState } from "react";

type WorkStoryLinkProps = {
  href: string;
  title: string;
  children: ReactNode;
  className?: string;
  tabIndex?: number;
};

export function WorkStoryLink({ href, title, children, className, tabIndex }: WorkStoryLinkProps) {
  const router = useRouter();
  const [isOpening, setIsOpening] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, []);

  function openStory(event: MouseEvent<HTMLAnchorElement>) {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      isOpening
    ) return;

    event.preventDefault();
    setIsOpening(true);

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    timeoutRef.current = setTimeout(() => router.push(href), reducedMotion ? 0 : 220);
  }

  return (
    <>
      <Link href={href} onClick={openStory} aria-busy={isOpening || undefined} className={className} tabIndex={tabIndex}>
        {children}
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
      {isOpening ? (
        <div className="case-opening-overlay" role="status" aria-live="polite">
          <div className="case-opening-panel">
            <p className="font-mono text-xs font-semibold uppercase text-accent">Opening case study</p>
            <p className="mt-2 text-lg font-semibold leading-tight text-foreground">{title}</p>
          </div>
        </div>
      ) : null}
    </>
  );
}
