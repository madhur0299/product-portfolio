"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const STAGGER_MS = 45;
const MAX_STAGGER_STEPS = 4;
/** Reveal slightly before an element reaches the fold, so a fast scroll never lands on blank space. */
const LOOKAHEAD = 1.2;

export function MotionProvider() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let pending = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    root.dataset.revealReady = "true";

    if (reducedMotion) {
      pending.forEach((element) => {
        element.dataset.revealVisible = "true";
      });
      return;
    }

    // Items inside a group come in one after another rather than all at once.
    document.querySelectorAll<HTMLElement>("[data-reveal-group]").forEach((group) => {
      Array.from(group.querySelectorAll<HTMLElement>("[data-reveal]")).forEach((element, index) => {
        element.style.setProperty("--reveal-delay", `${Math.min(index, MAX_STAGGER_STEPS) * STAGGER_MS}ms`);
      });
    });

    const layers = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    let frame = 0;

    function update() {
      frame = 0;

      // A position check rather than an IntersectionObserver: jumping past an element
      // (hash link, restored scroll, hard fling) must still reveal it, not strand it at zero.
      if (pending.length > 0) {
        const limit = window.innerHeight * LOOKAHEAD;
        pending = pending.filter((element) => {
          if (element.getBoundingClientRect().top > limit) return true;
          element.dataset.revealVisible = "true";
          return false;
        });
      }

      const offset = window.scrollY;
      layers.forEach((layer) => {
        const rate = Number(layer.dataset.parallax) || 0.1;
        layer.style.transform = `translate3d(0, ${(offset * rate).toFixed(2)}px, 0)`;
      });
    }

    function schedule() {
      if (frame) return;
      frame = requestAnimationFrame(update);
    }

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) cancelAnimationFrame(frame);
      layers.forEach((layer) => {
        layer.style.transform = "";
      });
    };
  }, [pathname]);

  return null;
}
