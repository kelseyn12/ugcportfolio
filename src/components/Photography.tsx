"use client";
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import {
  additionalPhotos,
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
      <div className="photos-heading">
        <SectionHeading
          eyebrow="Photography"
          title="Stills from the field"
          description="A few frames I've picked up along the way."
        />
      </div>

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
            </figure>
          ))}
        </div>
      )}

      {additionalPhotos.length > 0 && (
        <div className="mt-6 text-center">
          <button
            type="button"
            className="btn-secondary text-[0.625rem]"
            onClick={() => setShowAll((open) => !open)}
            aria-expanded={showAll}
          >
            {showAll ? "Show less ↑" : "View more photography ↓"}
          </button>
        </div>
      )}
    </section>
  );
}
