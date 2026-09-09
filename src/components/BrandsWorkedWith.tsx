"use client";
/* eslint-disable @next/next/no-img-element */

import { brandsWorkedWith } from "@/data/portfolio";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function BrandsWorkedWith() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="section-wrap border-t border-[var(--line)] pt-12 pb-4">
      <p className="scroll-reveal eyebrow mb-6">Select brands I&apos;ve created for.</p>
      <div className="brands-row py-2">
        {brandsWorkedWith.map((brand, index) => (
          <div
            key={brand.name}
            className={`scroll-reveal scroll-reveal-stagger-${Math.min(index + 1, 5) as 1 | 2 | 3 | 4 | 5} brand-item`}
          >
            {brand.logo ? (
              <img
                src={brand.logo}
                alt={brand.name}
                className="brand-logo"
                data-brand={brand.key}
              />
            ) : (
              <span className="brand-name" data-brand={brand.key}>
                {brand.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
