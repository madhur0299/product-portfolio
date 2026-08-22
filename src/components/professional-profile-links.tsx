import { ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const profiles = [
  {
    label: "LinkedIn",
    detail: "Public profile",
    href: "https://in.linkedin.com/in/madhurj021199",
    icon: FaLinkedin,
    iconClassName: "text-[#0a66c2]",
  },
  {
    label: "GitHub",
    detail: "Personal builds",
    href: "https://github.com/madhur0299",
    icon: FaGithub,
    iconClassName: "text-white",
  },
] as const;

export function ProfessionalProfileLinks() {
  return (
    <div className="w-full max-w-[21rem] border-y border-white/15">
      {profiles.map(({ label, detail, href, icon: Icon, iconClassName }, index) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open Madhur Jain's ${label} profile`}
          className={`group flex min-h-20 items-center gap-4 py-4 text-on-dark transition-colors hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white ${index > 0 ? "border-t border-white/15" : ""}`}
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-white/15 bg-white/[0.06]" aria-hidden="true">
            <Icon className={`h-5 w-5 ${iconClassName}`} />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-base font-semibold">{label}</span>
            <span className="mt-1 block text-sm text-white/65">{detail}</span>
          </span>
          <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}
