"use client";

import { useMemo, useState } from "react";
import {
  moreVideos,
  moreWorkCategories,
  type VideoEntry,
} from "@/data/portfolio";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import VideoCard from "@/components/VideoCard";

export default function MoreWork() {
  const ref = useScrollReveal();
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [expanded, setExpanded] = useState(false);

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
    <section ref={ref} className="mx-auto max-w-6xl px-5 md:px-8">
      <SectionHeading
        eyebrow="Beyond the first six"
        title="More Work"
        description="Additional examples across pet, lifestyle, tech, organic social, and product UGC."
      />

      <div className="text-center">
        <button type="button" className="btn-secondary" onClick={handleToggle}>
          {expanded ? "Show Less ↑" : "See More Work ↓"}
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
        <div className="mt-8 mb-6 flex gap-2 overflow-x-auto pb-1">
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
