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
        description="Six projects chosen to show range — product, travel, outdoor, concept, traditional UGC, and brand storytelling."
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {featuredVideos.map((video, index) => (
          <VideoCard key={video.file} video={video} index={index} />
        ))}
      </div>

      <div className="mt-6 text-center">
        <button type="button" className="btn-secondary text-[0.625rem]" onClick={handleToggle}>
          {expanded ? "Show less ↑" : "View more work ↓"}
        </button>
      </div>

      <div
        className="overflow-hidden transition-all duration-500"
        style={{
          maxHeight: expanded ? 8000 : 0,
          opacity: expanded ? 1 : 0,
        }}
        aria-hidden={!expanded}
      >
        <div className="mt-5 mb-4 flex gap-2 overflow-x-auto pb-1">
          {moreWorkCategories.map((category) => (
            <button
              key={category}
              type="button"
              className="filter-pill"
              data-active={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {filtered.map((video: VideoEntry, index) => (
            <VideoCard key={video.file} video={video} index={index} variant="compact" />
          ))}
        </div>
      </div>
    </section>
  );
}
