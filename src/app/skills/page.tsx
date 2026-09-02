import Link from "next/link";
import { PortfolioFooter } from "@/components/portfolio-footer";
import { SiteHeader } from "@/components/site-header";
import { skillGroups, toolStack } from "@/data/portfolio";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Product Management Skills: AI, Growth and Data",
  "Evidence of Madhur Jain's product skills in AI evaluation, growth and monetization, strategy, experimentation, SQL, and cross-platform delivery, with the tools behind them.",
  "/skills",
);

const outcomes = [
  { value: "85%", label: "NL-to-SQL accuracy", detail: "Golden-dataset evaluation at PRISM" },
  { value: "6 teams", label: "Running their own analysis", detail: "Adoption of the analytics agent at PRISM" },
  { value: "+15%", label: "Trial-to-paid", detail: "Web-to-app subscription migration at SplashLearn" },
  { value: "INR 175 Cr", label: "Aqualogica run rate", detail: "Roughly $21M a year on a site I owned at Honasa" },
];

const proofLinks = [
  { href: "/work/ai-analytics-nl-to-sql", label: "Read the evaluated AI workflow case" },
  { href: "/work/android-subscriber-growth", label: "Read the mobile growth case" },
  { href: "/experience", label: "Review product ownership by role" },
  { href: "/work/coach-cross-platform", label: "See technical delivery in Coach" },
];

export default function SkillsPage() {
  return (
    <><a className="skip-link" href="#skills-content">Skip to skills</a><SiteHeader />
      <main id="skills-content" className="bg-background text-foreground">
        <section className="mx-auto max-w-[90rem] px-5 pb-8 pt-10 md:px-10 md:pb-16 md:pt-20 xl:px-16"><h1 className="max-w-4xl text-[1.9rem] font-medium leading-[1.12] text-balance md:text-6xl">Product capabilities, with evidence.</h1><p className="mt-6 max-w-3xl text-[0.95rem] leading-6 text-muted md:text-lg md:leading-8">My strongest range is growth and monetization, evaluated AI workflows, product strategy, and data-informed delivery. Each area is tied to professional outcomes or clearly labelled personal build proof.</p></section>

        <section className="bg-foreground py-14 text-on-dark md:py-20"><div className="mx-auto max-w-[90rem] px-5 md:px-10 xl:px-16"><h2 className="text-2xl font-medium md:text-4xl">Evidence across contexts.</h2><dl className="mt-9 grid border-l border-t border-white/20 sm:grid-cols-2 lg:grid-cols-4" data-reveal-group>{outcomes.map((outcome) => <div key={outcome.label} data-reveal className="border-b border-r border-white/20 p-5 md:p-7"><dt className="text-3xl font-semibold md:text-4xl">{outcome.value}</dt><dd className="mt-4 text-sm font-semibold">{outcome.label}</dd><dd className="mt-3 text-sm leading-6 text-white/65">{outcome.detail}</dd></div>)}</dl></div></section>

        <section className="mx-auto max-w-[90rem] px-5 py-12 md:px-10 md:py-24 xl:px-16"><div className="grid border-l border-t border-line md:grid-cols-2" data-reveal-group>{skillGroups.map((group, index) => <article key={group.title} className="border-b border-r border-line p-5 md:p-10" data-reveal><h2 className="text-2xl font-medium md:text-3xl">{group.title}</h2><p className="mt-5 max-w-xl text-sm leading-6 text-muted md:text-base md:leading-7">{group.outcome}</p><div className="mt-7 border-t border-line pt-6"><p className="font-mono text-[0.7rem] uppercase text-muted">Evidence</p><p className="mt-3 text-sm leading-6">{group.evidence}</p><Link href={proofLinks[index].href} className="mt-4 inline-flex min-h-11 items-center border-b border-foreground text-sm font-semibold">{proofLinks[index].label}</Link></div><ul className="mt-7 flex flex-wrap gap-x-5 gap-y-3" aria-label={`${group.title} skills`}>{group.skills.map((skill) => <li key={skill} className="border-b border-line pb-1 text-sm text-muted">{skill}</li>)}</ul></article>)}</div></section>

        <section className="border-t border-line bg-surface py-12 md:py-16" data-reveal><div className="mx-auto max-w-[90rem] px-5 md:px-10 xl:px-16">
          <h2 className="text-2xl font-medium md:text-3xl">Tools I work in.</h2>
          <dl className="mt-7 divide-y divide-line border-y border-line">
            {toolStack.map((group) => (
              <div key={group.title} className="grid gap-2 py-4 md:grid-cols-[10rem_minmax(0,1fr)] md:gap-6">
                <dt className="font-mono text-[0.7rem] uppercase text-muted md:pt-1">{group.title}</dt>
                <dd className="text-sm leading-6">{group.tools.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </div></section>
      </main><PortfolioFooter /></>
  );
}
