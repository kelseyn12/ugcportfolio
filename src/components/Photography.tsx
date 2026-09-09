"use client";
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import {
  additionalPhotos,
  EMAIL,
  featuredPhotos,
} from "@/data/portfolio";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import SectionHeading from "@/components/SectionHeading";

const masonryLayout = [
  "photo-cell-a",
  "photo-cell-b",
  "photo-cell-c",
  "photo-cell-d",
  "photo-cell-e",
  "photo-cell-f",
];

export default function Photography() {
  const ref = useScrollReveal();
  const [showAll, setShowAll] = useState(false);

  return (
    <section ref={ref} id="photos" className="section-wrap">
      <SectionHeading
        eyebrow="Photography"
        title="Stills from the field"
        description="Lifestyle-first photography for outdoor, gear, travel, and pet brands — curated from recent work."
      />

      <div className="photo-masonry">
        {featuredPhotos.map((photo, index) => (
          <figure
            key={photo.src}
            className={`scroll-reveal scroll-reveal-stagger-${Math.min(index + 1, 5) as 1 | 2 | 3 | 4 | 5} photo-cell ${masonryLayout[index]}`}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              style={{ objectPosition: photo.objectPosition ?? "center center" }}
            />
            <figcaption className="photo-caption">{photo.caption ?? photo.brand}</figcaption>
          </figure>
        ))}
      </div>

      {showAll && additionalPhotos.length > 0 && (
        <div className="mt-3 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {additionalPhotos.map((photo) => (
            <figure key={photo.src} className="photo-cell aspect-[4/5]">
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                style={{ objectPosition: photo.objectPosition ?? "center center" }}
              />
              <figcaption className="photo-caption">{photo.caption ?? photo.brand}</figcaption>
            </figure>
          ))}
        </div>
      )}

      {!showAll && additionalPhotos.length > 0 && (
        <div className="scroll-reveal mt-6 text-center">
          <button type="button" className="btn-secondary text-[0.625rem]" onClick={() => setShowAll(true)}>
            View more photography ↓
          </button>
        </div>
      )}

      <div className="scroll-reveal mt-8 flex flex-col items-start justify-between gap-4 border border-[var(--line)] bg-[var(--white)] p-6 sm:flex-row sm:items-center">
        <p className="text-sm text-[var(--ink-body)]">
          Need stills for your brand? Let&apos;s shoot something that feels lived-in.
        </p>
        <a href={`mailto:${EMAIL}`} className="editorial-link shrink-0">
          Get in Touch ↗
        </a>
      </div>
    </section>
  );
}
