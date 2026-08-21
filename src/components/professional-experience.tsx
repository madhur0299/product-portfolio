"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import type { ProfessionalExperience as ProfessionalExperienceItem } from "@/data/portfolio";
import { WorkStoryLink } from "@/components/work-story-link";

type ProfessionalExperienceProps = {
  experiences: ProfessionalExperienceItem[];
};

const abbreviatedMonths: Record<string, string> = {
  January: "Jan",
  February: "Feb",
  March: "Mar",
  April: "Apr",
  May: "May",
  June: "Jun",
  July: "Jul",
  August: "Aug",
  September: "Sep",
  October: "Oct",
  November: "Nov",
  December: "Dec",
};

function compactTimeframe(timeframe: string) {
  return Object.entries(abbreviatedMonths).reduce(
    (formatted, [fullMonth, shortMonth]) => formatted.replaceAll(fullMonth, shortMonth),
    timeframe,
  );
}

export function ProfessionalExperience({
  experiences,
}: ProfessionalExperienceProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="experience"
      className="border-y border-line bg-surface-muted py-12 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(20rem,0.6fr)] lg:items-end">
          <div>
            <p className="font-mono text-xs font-semibold uppercase text-accent">
              Professional experience
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight text-balance sm:text-4xl">
              How my product scope has grown.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-muted sm:text-base sm:leading-7">
            From ecommerce operations to consumer growth and now US consumer
            products with AI PM initiatives. Open a role to see the context,
            decisions, and outcomes, then open its focused case study.
          </p>
        </div>

        <div className="relative mt-8 border-l border-line pl-6 sm:mt-12 sm:pl-9">
          {experiences.map((experience, index) => {
            const isOpen = openIndex === index;
            const panelId = `experience-detail-${index}`;

            return (
              <article
                key={experience.company}
                className="timeline-item relative border-b border-line last:border-b-0"
              >
                <span
                  className={`absolute -left-[1.95rem] top-8 h-3 w-3 rounded-full border-2 border-surface-muted sm:-left-[2.7rem] ${
                    isOpen ? "bg-accent" : "bg-foreground"
                  }`}
                  aria-hidden="true"
                />
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="timeline-trigger flex w-full items-start justify-between gap-4 rounded-lg px-3 py-5 text-left -mx-3 sm:min-h-28 sm:gap-5 sm:px-4 sm:py-7 sm:-mx-4"
                >
                  <span className="min-w-0">
                    <span className="font-mono text-xs font-semibold text-accent">
                      {compactTimeframe(experience.timeframe)}
                    </span>
                    <span className="mt-3 block text-xl font-semibold leading-7 sm:text-2xl">
                      {experience.company}
                    </span>
                    <span className="mt-2 block max-w-3xl text-sm leading-6 text-muted sm:text-base sm:leading-7">
                      {experience.overview}
                    </span>
                  </span>
                  <span className="mt-1 flex shrink-0 items-center gap-2 text-xs font-semibold text-muted">
                    <span>{isOpen ? "Hide" : "View"}</span>
                    <span
                      className={`timeline-chevron flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-foreground ${
                        isOpen ? "rotate-180 border-foreground" : ""
                      }`}
                      aria-hidden="true"
                    >
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </span>
                </button>

                <div
                  id={panelId}
                  className="timeline-detail"
                  data-open={isOpen}
                  aria-hidden={!isOpen}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="pb-8 sm:pb-10">
                      <div className="grid gap-7 border-t border-line pt-6 lg:grid-cols-[minmax(0,1fr)_minmax(16rem,0.72fr)] lg:gap-14">
                        <div>
                          <p className="text-xs font-semibold uppercase text-muted">
                            Role progression
                          </p>
                          <div className="mt-5 space-y-7">
                            {experience.stages.map((stage) => (
                              <section
                                key={`${stage.role}-${stage.timeframe}`}
                                className="border-l-2 border-accent pl-4"
                              >
                                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                                  <h3 className="text-base font-semibold">
                                    {stage.role}
                                  </h3>
                                  <p className="font-mono text-xs font-semibold text-accent">
                                    {compactTimeframe(stage.timeframe)}
                                  </p>
                                </div>
                                <p className="mt-2 text-sm leading-6 text-muted">
                                  {stage.summary}
                                </p>
                                <ul className="mt-4 grid gap-3 text-sm leading-6 text-foreground lg:grid-cols-2">
                                  {stage.achievements.map((achievement) => (
                                    <li key={achievement} className="flex gap-2">
                                      <span
                                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                                        aria-hidden="true"
                                      />
                                      {achievement}
                                    </li>
                                  ))}
                                </ul>
                              </section>
                            ))}
                          </div>
                        </div>

                        <div className="lg:border-l lg:border-line lg:pl-8">
                          <p className="text-xs font-semibold uppercase text-muted">
                            Metrics owned
                          </p>
                          <dl className="mt-4 space-y-4">
                            {experience.outcomes.map((outcome) => (
                              <div
                                key={outcome.metric}
                                className="border-l-2 border-accent pl-3"
                              >
                                <dt className="text-xs font-semibold uppercase text-muted">
                                  {outcome.metric}
                                </dt>
                                <dd className="mt-1 text-sm font-semibold leading-6">
                                  {outcome.value}
                                </dd>
                                <dd className="mt-1 text-sm leading-6 text-muted">
                                  {outcome.context}
                                </dd>
                              </div>
                            ))}
                          </dl>
                          <WorkStoryLink
                            href={experience.storyHref}
                            title={`${experience.company} case study`}
                            tabIndex={isOpen ? 0 : -1}
                            className="mt-7 inline-flex min-h-11 items-center gap-2 text-sm font-semibold underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent"
                          >
                            {experience.storyLabel}
                          </WorkStoryLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
