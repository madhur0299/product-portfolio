"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const navigationItems = [
  { href: "/#experience", label: "Experience" },
  { href: "/#highlights", label: "Results" },
  { href: "/#skills", label: "Capabilities" },
  { href: "/#personal-projects", label: "Personal builds" },
  { href: "/#contact", label: "Contact" },
];

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        onClick={() => setIsOpen((current) => !current)}
        className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-line bg-surface text-foreground transition-colors hover:border-foreground"
      >
        {isOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
      </button>
      {isOpen ? (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="absolute inset-x-0 top-full border-b border-line bg-surface px-5 py-3 shadow-card"
        >
          <div className="mx-auto grid max-w-7xl gap-1">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex min-h-11 items-center border-b border-line px-1 text-sm font-semibold text-foreground last:border-b-0"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </div>
  );
}
