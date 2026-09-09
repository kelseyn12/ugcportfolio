"use client";

import { testimonials } from "@/data/portfolio";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import SectionHeading from "@/components/SectionHeading";

export default function Testimonials() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} id="testimonials" className="section-wrap border-y border-[var(--line)] py-16 md:py-20">
      <SectionHeading eyebrow="Brand proof" title="What brands say" />

      <div className="max-w-4xl">
        {testimonials.map((item, index) => (
          <figure
            key={item.brand}
            className={`scroll-reveal scroll-reveal-stagger-${Math.min(index + 1, 5) as 1 | 2 | 3 | 4 | 5} testimonial-item`}
          >
            <blockquote className="testimonial-quote">
              &ldquo;{item.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-5">
              <p className="text-sm font-semibold text-[var(--charcoal)]">
                {item.author}
                {item.role ? ` · ${item.role}` : ""}
              </p>
              <p className="mt-1 text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-[var(--sage)]">
                {item.brand}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
