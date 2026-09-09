"use client";
/* eslint-disable @next/next/no-img-element */

import { aboutPhotos } from "@/data/portfolio";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const collageLayout = [
  { index: 1, piece: "about-piece about-piece-a" },
  { index: 0, piece: "about-piece about-piece-b" },
  { index: 2, piece: "about-piece about-piece-c" },
  { index: 3, piece: "about-piece about-piece-e" },
];

const diegoPhoto = aboutPhotos[4];

export default function MeetKelsey() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} id="about" className="section-wrap">
      <div className="about-section-grid">
        <div className="scroll-reveal about-collage-wrap">
          <div className="about-editorial-collage">
            {collageLayout.map(({ index, piece }, i) => {
              const photo = aboutPhotos[index];
              return (
                <figure
                  key={photo.src}
                  className={`${piece} scroll-reveal scroll-reveal-stagger-${Math.min(i + 1, 5) as 1 | 2 | 3 | 4 | 5}`}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    style={{ objectPosition: photo.objectPosition ?? "center center" }}
                  />
                </figure>
              );
            })}

            <div className="about-diego-cluster scroll-reveal scroll-reveal-stagger-5">
              <figure className="about-piece about-piece-d">
                <img
                  src={diegoPhoto.src}
                  alt={diegoPhoto.alt}
                  loading="lazy"
                  style={{
                    objectPosition: diegoPhoto.objectPosition ?? "center center",
                  }}
                />
              </figure>
              <p className="about-diego-note">Diego → unofficial creative director</p>
            </div>
          </div>
        </div>

        <div className="about-copy-wrap">
          <p className="scroll-reveal eyebrow mb-3">Meet Kelsey</p>
          <h2 className="scroll-reveal scroll-reveal-stagger-1 section-title mb-6">
            Hi, I&apos;m Kelsey.
          </h2>

          <div className="scroll-reveal scroll-reveal-stagger-2 space-y-5 text-base leading-relaxed text-[var(--ink-body)] md:text-[1.05rem]">
            <p>
              I&apos;m Kelsey, a UGC video creator based in the Midwest. I make
              short-form video and photo content for outdoor, gear, travel, and
              lifestyle brands — content that reflects what I spend my days doing:
              seeking out new experiences, surfing, bikepacking, hiking, and
              camping with my dog Diego.
            </p>
            <p>
              I create around outdoor, adventure, travel, gear, pet, and lifestyle
              because it&apos;s what I actually live — not just what I film. Diego
              comes on most adventures and is very much part of the work.
            </p>
            <p>
              I enjoy figuring out the story as much as filming it — the concept,
              the hook, why someone would stop, and what makes them share it. My
              background as a musician and software developer gives me creative
              instinct and analytical thinking in the same brain.
            </p>
          </div>

          <p className="scroll-reveal scroll-reveal-stagger-3 mt-8 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-[var(--sage)]">
            Outdoor · Adventure · Travel · Gear · Pet · Lifestyle
          </p>
        </div>
      </div>
    </section>
  );
}
