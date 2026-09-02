"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

function hashTarget() {
  const { hash } = window.location;
  if (hash.length < 2) return null;

  const id = hash.slice(1);
  try {
    return document.getElementById(decodeURIComponent(id));
  } catch {
    return document.getElementById(id);
  }
}

export function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    let cancelled = false;
    let appliedY: number | null = null;

    function scrollToHash(behavior: ScrollBehavior) {
      if (cancelled) return;

      const target = hashTarget();
      if (!target) return;

      // "auto" would defer to the page's `scroll-behavior: smooth`, which turns a
      // load-time jump into a long animated scroll from the top of the document.
      target.scrollIntoView({ behavior, block: "start" });
      if (behavior === "instant") appliedY = window.scrollY;
    }

    // App Router restores scroll position on navigation, which lands after the
    // browser's own hash jump. Re-apply it once the new route has painted.
    const frame = requestAnimationFrame(() => scrollToHash("instant"));

    // Swapped webfonts change the height of everything above the target, so the
    // first jump can end up short. Correct it unless the visitor has since moved.
    if (typeof document.fonts !== "undefined") {
      void document.fonts.ready.then(() => {
        if (appliedY !== null && Math.abs(window.scrollY - appliedY) > 4) return;
        scrollToHash("instant");
      });
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function onHashChange() {
      scrollToHash(reducedMotion ? "instant" : "smooth");
    }

    window.addEventListener("hashchange", onHashChange);

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, [pathname]);

  return null;
}
