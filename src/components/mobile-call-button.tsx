"use client";

import { Phone } from "lucide-react";
import { useEffect, useState } from "react";

type ContactResponse = {
  phone: string;
};

export function MobileCallButton() {
  const [phone, setPhone] = useState<string | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 639px)");
    const controller = new AbortController();

    async function loadPhoneNumber() {
      if (!mediaQuery.matches || phone) return;

      const response = await fetch("/api/contact", {
        cache: "no-store",
        signal: controller.signal,
      });

      if (!response.ok) return;

      const contact = (await response.json()) as ContactResponse;
      setPhone(contact.phone);
    }

    void loadPhoneNumber();
    mediaQuery.addEventListener("change", loadPhoneNumber);

    return () => {
      controller.abort();
      mediaQuery.removeEventListener("change", loadPhoneNumber);
    };
  }, [phone]);

  if (!phone) {
    return <span aria-hidden="true" className="inline-flex min-h-11 min-w-11 sm:hidden" />;
  }

  return (
    <a
      href={`tel:${phone.replace(/[^+\d]/g, "")}`}
      aria-label="Call Madhur Jain"
      title="Call Madhur Jain"
      className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-line bg-surface text-foreground transition-colors hover:border-foreground sm:hidden"
    >
      <Phone className="h-4 w-4" aria-hidden="true" />
    </a>
  );
}
