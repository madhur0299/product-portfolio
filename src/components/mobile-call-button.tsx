import { Phone } from "lucide-react";
import { profile } from "@/data/portfolio";

export function MobileCallButton() {
  return (
    <a
      href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}
      aria-label={`Call Madhur Jain on ${profile.phone}`}
      title={profile.phone}
      className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-line bg-surface text-foreground transition-colors hover:border-foreground lg:hidden"
    >
      <Phone className="h-4 w-4" aria-hidden="true" />
    </a>
  );
}
