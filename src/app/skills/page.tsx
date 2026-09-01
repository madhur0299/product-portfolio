import { PortfolioFooter } from "@/components/portfolio-footer";
import { SiteHeader } from "@/components/site-header";
import { skillGroups } from "@/data/portfolio";
import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata = pageMetadata(
  "Product Management Skills: AI, Growth and Data",
  "Evidence of Madhur Jain's product skills in AI evaluation, growth and monetization, strategy, experimentation, SQL, and cross-platform delivery.",
  "/skills",
);
const outcomes = [
  { value: "85%", label: "NL-to-SQL accuracy", detail: "Gold-standard business query evaluation at PRISM" },
  { value: "+15%", label: "Trial-to-paid", detail: "Web-to-app subscription migration at SplashLearn" },
  { value: "3", label: "Coach platforms", detail: "Web, iOS, and Android built as one product system" },
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
        <section className="mx-auto max-w-[90rem] px-5 pb-12 pt-14 md:px-10 md:pb-20 md:pt-24 xl:px-16"><h1 className="max-w-4xl text-5xl font-medium leading-[1.02] text-balance md:text-7xl">Product capabilities, with evidence.</h1><p className="mt-6 max-w-3xl text-base leading-7 text-muted md:text-lg md:leading-8">My strongest range is growth and monetization, evaluated AI workflows, product strategy, and data-informed delivery. Each area is tied to professional outcomes or clearly labelled personal build proof.</p></section>
        <section className="mx-auto max-w-[90rem] px-5 pb-20 md:px-10 md:pb-28 xl:px-16"><div className="grid border-l border-t border-line md:grid-cols-2">{skillGroups.map((group, index) => <article key={group.title} className="border-b border-r border-line p-6 md:p-10" data-reveal data-reveal-delay={index % 2 === 0 ? undefined : "1"}><h2 className="text-2xl font-medium md:text-3xl">{group.title}</h2><p className="mt-5 max-w-xl text-sm leading-6 text-muted md:text-base md:leading-7">{group.outcome}</p><div className="mt-7 border-t border-line pt-6"><p className="font-mono text-[0.65rem] uppercase text-muted">Evidence</p><p className="mt-3 text-sm leading-6">{group.evidence}</p><Link href={proofLinks[index].href} className="mt-4 inline-flex min-h-11 items-center border-b border-foreground text-sm font-semibold">{proofLinks[index].label}</Link></div><ul className="mt-7 flex flex-wrap gap-x-5 gap-y-3" aria-label={`${group.title} skills`}>{group.skills.map((skill) => <li key={skill} className="border-b border-line pb-1 text-sm text-muted">{skill}</li>)}</ul></article>)}</div></section>
        <section className="bg-foreground py-16 text-on-dark md:py-24"><div className="mx-auto max-w-[90rem] px-5 md:px-10 xl:px-16"><h2 className="text-4xl font-medium md:text-5xl">Evidence across contexts.</h2><dl className="mt-10 grid border-l border-t border-white/20 md:grid-cols-3">{outcomes.map((outcome) => <div key={outcome.label} className="border-b border-r border-white/20 p-6 md:p-8"><dt className="text-4xl font-semibold md:text-5xl">{outcome.value}</dt><dd className="mt-4 text-sm font-semibold">{outcome.label}</dd><dd className="mt-3 text-sm leading-6 text-white/65">{outcome.detail}</dd></div>)}</dl></div></section>
      </main><PortfolioFooter /></>
  );
}
