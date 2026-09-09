/* eslint-disable @next/next/no-img-element */

import { brandsWorkedWith } from "@/data/portfolio";

export default function BrandsWorkedWith() {
  return (
    <section className="section-wrap brands-strip border-t border-[var(--line)]">
      <p className="eyebrow brands-strip-eyebrow">Select brands I&apos;ve created for.</p>
      <div className="brands-row">
        {brandsWorkedWith.map((brand) => (
          <div key={brand.name} className="brand-item">
            <img
              src={brand.logo}
              alt={brand.name}
              className="brand-logo"
              data-brand={brand.key}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
