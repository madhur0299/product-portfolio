import { ChevronDown } from "lucide-react";
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

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <div className="relative border-l border-line md:ml-6">
      {experiences.map((experience) => (
        <details key={experience.company} className="experience-entry group relative border-b border-line py-8 pl-6 md:py-12 md:pl-12">
          <span className="absolute -left-[0.32rem] top-11 h-2.5 w-2.5 rounded-full border border-foreground bg-background transition-colors group-open:bg-foreground md:top-16" aria-hidden="true" />
          <summary className="timeline-trigger grid list-none gap-6 text-left md:grid-cols-[minmax(12rem,0.45fr)_minmax(0,1fr)_3rem] md:items-start">
            <div>
              <p className="font-mono text-[0.7rem] uppercase text-muted">{shortTimeframe(experience.timeframe)}</p>
              <h2 className="mt-3 text-2xl font-medium leading-tight md:text-3xl">{experience.company}</h2>
              <p className="mt-2 text-sm font-semibold">{experience.stages[0].role}</p>
            </div>
            <div>
              <p className="max-w-3xl text-base leading-7 text-muted">{experience.overview}</p>
              <dl className="mt-6 grid gap-4 sm:grid-cols-3">
                {experience.outcomes.slice(0, 3).map((outcome) => (
                  <div key={outcome.metric} className="border-t border-line pt-3">
                    <dt className="font-mono text-[0.65rem] uppercase text-muted">{outcome.metric}</dt>
                    <dd className="mt-2 text-xl font-semibold">{outcome.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <span className="timeline-chevron hidden h-11 w-11 items-center justify-center rounded-full border border-line md:flex">
              <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180" aria-hidden="true" />
            </span>
            <span className="mt-2 inline-flex min-h-11 items-center gap-2 text-sm font-semibold md:hidden">View details <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" aria-hidden="true" /></span>
          </summary>
          <div className="experience-entry-content grid gap-8 pt-8 md:ml-[calc(45%+1rem)]">
            {experience.stages.map((stage) => (
              <section key={`${experience.company}-${stage.role}-${stage.timeframe}`} className="border-t border-line pt-6">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-lg font-semibold">{stage.role}</h3>
                  <p className="font-mono text-[0.68rem] uppercase text-muted">{shortTimeframe(stage.timeframe)}</p>
                </div>
                <p className="mt-3 text-sm leading-6 text-muted">{stage.summary}</p>
                <ul className="mt-5 space-y-3 text-sm leading-6">
                  {stage.achievements.map((achievement) => <li key={achievement} className="grid grid-cols-[0.75rem_minmax(0,1fr)] gap-3"><span aria-hidden="true">-</span><span>{achievement}</span></li>)}
                </ul>
              </section>
            ))}
            <WorkStoryLink href={experience.storyHref} title={`${experience.company} case study`} className="inline-flex min-h-11 w-fit items-center border-b border-foreground text-sm font-semibold">{experience.storyLabel}</WorkStoryLink>
          </div>
        </details>
      ))}
    </div>
  );
}
