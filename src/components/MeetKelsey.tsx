"use client";
/* eslint-disable @next/next/no-img-element */

import { useCallback, useRef, useState } from "react";
import { aboutPhotos } from "@/data/portfolio";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import DiegoStoryModal from "@/components/DiegoStoryModal";
import { prefetchDiegoStoryMedia } from "@/data/diegoStory";

const [mtbPhoto, bikepackingPhoto, vanPhoto, diegoPhoto] = aboutPhotos;
const DIEGO_TRIGGER_LABEL = "Meet Diego, unofficial creative director";

const collageLayout = [
  { photo: mtbPhoto, piece: "about-piece about-piece-mtb" },
  { photo: bikepackingPhoto, piece: "about-piece about-piece-bikepacking" },
  { photo: vanPhoto, piece: "about-piece about-piece-van" },
];

export default function MeetKelsey() {
  const ref = useScrollReveal();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [storyOpen, setStoryOpen] = useState(false);

  const openStory = () => setStoryOpen(true);
  const closeStory = useCallback(() => {
    setStoryOpen(false);
    requestAnimationFrame(() => triggerRef.current?.focus());
  }, []);

  return (
    <section ref={ref} id="about" className="section-wrap">
      <div className="about-section-grid">
        <div className="scroll-reveal about-collage-wrap">
          <div className="about-editorial-collage">
            {collageLayout.map(({ photo, piece }, i) => (
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
            ))}

            <div className="about-diego-cluster scroll-reveal scroll-reveal-stagger-5">
              <figure className="about-piece about-piece-d">
                <img
                  src={diegoPhoto.src}
                  alt=""
                  loading="lazy"
                  style={{
                    objectPosition: diegoPhoto.objectPosition ?? "center center",
                  }}
                />
                <button
                  ref={triggerRef}
                  type="button"
                  className="about-diego-hit"
                  onClick={openStory}
                  onPointerEnter={prefetchDiegoStoryMedia}
                  onFocus={prefetchDiegoStoryMedia}
                  aria-haspopup="dialog"
                  aria-expanded={storyOpen}
                  aria-label={DIEGO_TRIGGER_LABEL}
                />
              </figure>
              <p className="about-diego-note">Diego → unofficial creative director</p>
              <button
                type="button"
                className="about-diego-invite"
                onClick={openStory}
                onPointerEnter={prefetchDiegoStoryMedia}
                onFocus={prefetchDiegoStoryMedia}
                aria-haspopup="dialog"
                aria-expanded={storyOpen}
                aria-label={DIEGO_TRIGGER_LABEL}
              >
                meet him →
              </button>
            </div>
          </div>
        </div>

        <div className="about-copy-wrap">
          <p className="scroll-reveal eyebrow mb-3">Meet Me</p>
          <h2 className="scroll-reveal scroll-reveal-stagger-1 section-title mb-6">
            Hi, I&apos;m Kelsey.
          </h2>

          <div className="scroll-reveal scroll-reveal-stagger-2 space-y-5 text-base leading-relaxed text-[var(--ink-body)] md:text-[1.05rem]">
            <p>
              I&apos;m a Midwest-based creator making short-form video and photo
              content for outdoor, adventure, travel, tech, pet, and lifestyle
              brands. A lot of what I shoot comes from things I&apos;m already
              doing — bikepacking, hiking, camping, surfing, trying something new,
              or bringing Diego along for the ride.
            </p>
            <p>
              I like figuring out the story as much as filming it — the concept,
              the hook, what to show first, and what keeps someone watching.
            </p>
            <p>
              My background is a slightly weird mix of music and web
              development, so I tend to approach creative work from both sides:
              make something interesting, then figure out why it works.
            </p>
          </div>

          <p className="scroll-reveal scroll-reveal-stagger-3 mt-8 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-[var(--sage)]">
            Outdoor · Adventure · Travel · Tech · Pet · Lifestyle
          </p>
        </div>
      </div>

      {storyOpen ? <DiegoStoryModal onClose={closeStory} /> : null}
    </section>
  );
}
