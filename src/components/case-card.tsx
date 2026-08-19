import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/data/portfolio";
import { cn } from "@/lib/utils";

type CaseCardProps = {
  caseStudy: CaseStudy;
  variant?: "featured" | "compact";
};

export function CaseCard({ caseStudy, variant = "compact" }: CaseCardProps) {
  const featured = variant === "featured";

  return (
    <Link
      href={`/work/${caseStudy.slug}`}
      className={cn(
        "group grid min-w-0 overflow-hidden rounded-lg border border-line bg-surface transition duration-200 hover:-translate-y-0.5 hover:border-foreground/40 hover:shadow-card focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent",
        featured
          ? "lg:col-span-7 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]"
          : "lg:col-span-5"
      )}
    >
      <div className={cn("relative overflow-hidden bg-surface-muted", featured ? "aspect-[16/10] lg:aspect-auto" : "aspect-[16/10]")}>
        <Image
          src={caseStudy.image}
          alt={`${caseStudy.title} case study visual`}
          fill
          sizes={featured ? "(min-width: 1024px) 36vw, 100vw" : "(min-width: 1024px) 42vw, 100vw"}
          className="object-cover transition duration-300 group-hover:scale-[1.015]"
        />
      </div>
      <div className="flex min-w-0 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">{caseStudy.eyebrow}</p>
          <ArrowUpRight className="h-5 w-5 shrink-0 text-muted transition-colors group-hover:text-accent" aria-hidden="true" />
        </div>
        <h3 className={cn("mt-4 font-semibold leading-tight text-balance", featured ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl")}>
          {caseStudy.title}
        </h3>
        <p className="mt-4 text-sm leading-6 text-muted">{caseStudy.summary}</p>
        <div className={cn("mt-auto grid gap-4 border-t border-line pt-5", featured ? "sm:grid-cols-2" : "grid-cols-2")}>
          {caseStudy.metrics.slice(0, 2).map((metric) => (
            <div key={metric.label}>
              <p className="font-mono text-xl font-semibold">{metric.value}</p>
              <p className="mt-1 text-xs leading-5 text-muted">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}
