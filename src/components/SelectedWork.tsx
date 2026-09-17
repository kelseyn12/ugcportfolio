"use client";

import { useMemo, useState } from "react";
import {
  featuredVideos,
  moreVideos,
  moreWorkCategories,
  type VideoEntry,
} from "@/data/portfolio";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import VideoCard from "@/components/VideoCard";

export default function SelectedWork() {
  const ref = useScrollReveal();
  const [expanded, setExpanded] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    if (activeCategory === "All") return moreVideos;
    return moreVideos.filter((video) =>
      video.categories.includes(activeCategory),
    );
  }, [activeCategory]);

  const handleToggle = () => {
    if (expanded) {
      document.querySelectorAll("video").forEach((v) => v.pause());
    }
    setExpanded(!expanded);
  };

  return (
    <section ref={ref} id="work" className="section-wrap">
      <SectionHeading
        eyebrow="Portfolio"
        title="Selected Work"
        description="Different brands. Different formats. Same goal: make something worth watching."
        tight
      />

      <div className="work-grid">
        {featuredVideos.map((video, index) => (
          <VideoCard key={video.file} video={video} index={index} />
        ))}
      </div>

      <div className="mt-12 text-center md:mt-16">
        <button
          type="button"
          className="btn-secondary text-[0.625rem]"
          onClick={handleToggle}
          aria-expanded={expanded}
        >
          {expanded ? "Show less ↑" : "View more work ↓"}
        </button>
      </div>

      <div
        className="work-more"
        data-open={expanded ? "true" : "false"}
        aria-hidden={!expanded}
        {...(!expanded ? { inert: true } : {})}
      >
        <div className="work-more-inner">
          <div className="work-filter-row mt-8 mb-6 flex gap-2 overflow-x-auto pb-1">
            {moreWorkCategories.map((category) => (
              <button
                key={category}
                type="button"
                className="filter-pill"
                data-active={activeCategory === category}
                aria-pressed={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="work-grid">
            {filtered.map((video: VideoEntry, index) => (
              <VideoCard key={video.file} video={video} index={index} variant="compact" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
