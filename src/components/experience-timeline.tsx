"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { WorkStoryLink } from "@/components/work-story-link";
import type { ProfessionalExperience as ProfessionalExperienceType } from "@/data/portfolio";

type ExperienceTimelineProps = {
  experiences: ProfessionalExperienceType[];
};

function shortTimeframe(timeframe: string) {
  return timeframe
    .replaceAll("January", "Jan")
    .replaceAll("February", "Feb")
    .replaceAll("March", "Mar")
    .replaceAll("April", "Apr")
    .replaceAll("June", "Jun")
    .replaceAll("July", "Jul")
    .replaceAll("August", "Aug")
    .replaceAll("September", "Sep")
    .replaceAll("October", "Oct")
    .replaceAll("November", "Nov")
    .replaceAll("December", "Dec");
}

function experienceId(company: string) {
  if (company.startsWith("PRISM")) return "prism";
  if (company.startsWith("SplashLearn")) return "splashlearn";
  return "honasa";
}

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="relative border-l border-line md:ml-6">
      {experiences.map((experience, index) => {
        const open = openIndex === index;
        const triggerId = `experience-trigger-${index}`;
        const panelId = `experience-panel-${index}`;

        return (
          <article
            key={experience.company}
            id={experienceId(experience.company)}
            className="experience-accordion-item group relative border-b border-line py-8 pl-6 md:py-12 md:pl-12"
            data-open={open}
            data-reveal
          >
            <span
              className={`absolute -left-[0.32rem] top-11 h-2.5 w-2.5 rounded-full border border-foreground transition-colors duration-300 md:top-16 ${open ? "bg-foreground" : "bg-background"}`}
              aria-hidden="true"
            />
            <button
              id={triggerId}
              type="button"
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpenIndex(open ? null : index)}
              className="experience-accordion-trigger -mx-3 grid w-[calc(100%+1.5rem)] gap-6 px-3 py-3 text-left md:grid-cols-[minmax(12rem,0.45fr)_minmax(0,1fr)_3rem] md:items-start"
            >
              <span>
                <span className="block font-mono text-xs uppercase text-muted">{shortTimeframe(experience.timeframe)}</span>
                <span className="mt-3 block text-2xl font-medium leading-tight md:text-3xl">{experience.company}</span>
                <span className="mt-2 block text-sm font-semibold">{experience.stages[0].role}</span>
              </span>
              <span>
                <span className="block max-w-3xl text-base leading-7 text-muted">{experience.overview}</span>
                <span className="mt-6 grid gap-4 sm:grid-cols-3">
                  {experience.outcomes.slice(0, 3).map((outcome) => (
                    <span key={outcome.metric} className="block border-t border-line pt-3">
                      <span className="block font-mono text-[0.65rem] uppercase text-muted">{outcome.metric}</span>
                      <span className="mt-2 block text-xl font-semibold">{outcome.value}</span>
                      <span className="mt-2 block text-xs leading-5 text-muted">{outcome.context}</span>
                    </span>
                  ))}
                </span>
              </span>
              <span className="experience-accordion-icon hidden h-11 w-11 items-center justify-center rounded-full border border-line md:flex">
                <ChevronDown className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="mt-2 inline-flex min-h-11 items-center gap-2 text-sm font-semibold md:hidden">
                {open ? "Hide details" : "View details"}
                <span className="experience-accordion-icon inline-flex h-8 w-8 items-center justify-center rounded-full border border-line">
                  <ChevronDown className="h-4 w-4" aria-hidden="true" />
                </span>
              </span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              aria-hidden={!open}
              inert={!open}
              className="experience-accordion-panel"
              data-open={open}
            >
              <div>
                <div className="grid gap-8 pt-8 md:ml-[calc(45%+1rem)]">
                  {experience.stages.map((stage) => (
                    <section key={`${experience.company}-${stage.role}-${stage.timeframe}`} className="border-t border-line pt-6">
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                        <h3 className="text-lg font-semibold">{stage.role}</h3>
                        <p className="font-mono text-[0.68rem] uppercase text-muted">{shortTimeframe(stage.timeframe)}</p>
                      </div>
                      <p className="mt-3 text-sm leading-6 text-muted">{stage.summary}</p>
                      <ul className="mt-5 space-y-3 text-sm leading-6">
                        {stage.achievements.map((achievement) => (
                          <li key={achievement} className="grid grid-cols-[0.75rem_minmax(0,1fr)] gap-3">
                            <span aria-hidden="true">-</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </section>
                  ))}
                  <WorkStoryLink
                    href={experience.storyHref}
                    title={`${experience.company} case study`}
                    className="inline-flex min-h-11 w-fit items-center border-b border-foreground text-sm font-semibold"
                  >
                    {experience.storyLabel}
                  </WorkStoryLink>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
