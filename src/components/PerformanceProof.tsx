"use client";

import { performanceResults } from "@/data/portfolio";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import SectionHeading from "@/components/SectionHeading";

export default function PerformanceProof() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} id="results" className="results-section border-y border-[var(--line)]">
      <div className="section-wrap py-16 md:py-24">
        <SectionHeading
          eyebrow="Storytelling proof"
          title="Made to be watched."
          description="Pretty footage is only part of the job. I think about the hook, the build, the payoff, and the small decisions that keep someone watching."
          dark
        />

        <div className="grid grid-cols-1 gap-0 md:grid-cols-3 md:gap-8">
          {performanceResults.map((result, index) => (
            <article
              key={result.title}
              className={`scroll-reveal scroll-reveal-stagger-${Math.min(index + 1, 5) as 1 | 2 | 3 | 4 | 5} stat-block`}
              data-dark="true"
            >
              <p className="stat-views" data-dark="true">
                {result.views}
              </p>
              <p className="mt-2 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-[rgba(255,255,255,0.58)]">
                Views
              </p>
              <h3 className="mt-4 text-lg font-semibold text-[var(--white)]">
                {result.title}
              </h3>
              <p className="mt-2 text-sm text-[rgba(255,255,255,0.72)]">{result.subtitle}</p>
              {result.independent && (
                <p className="mt-2 text-xs italic text-[rgba(255,255,255,0.55)]">
                  Independently created — not commissioned brand work
                </p>
              )}
              {result.stats && (
                <p className="mt-4 text-xs uppercase tracking-[0.1em] text-[rgba(255,255,255,0.5)]">
                  {result.stats.join(" · ")}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
