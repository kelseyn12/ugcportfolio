"use client";
import { useEffect, useRef, useState } from "react";

const featured = [
  {
    file: "Challenger Backpack-web.mp4",
    brand: "La Sportiva",
    title: "Challenger 28 Backpack",
    type: "Skit",
    niche: "Outdoor",
  },
  {
    file: "Lost Ranger-web.mp4",
    brand: "Lost Ranger",
    title: "3-in-1 Sleeping Bag",
    type: "B-Roll + VO",
    niche: "Outdoor",
  },
  {
    file: "Romp-v2-web.mp4",
    brand: "Romp Bags",
    title: "Origin Story",
    type: "Story",
    niche: "Gear",
  },
  {
    file: "Splitwise-web.mp4",
    brand: "Splitwise",
    title: "Green Screen Ad",
    type: "Green Screen",
    niche: "Tech",
  },
  {
    file: "chomchom-web.mp4",
    brand: "Chom Chom",
    title: "Product Demo",
    type: "Product Demo",
    niche: "Pet",
  },
  {
    file: "Big Agnes Larkspur Vest-web.mp4",
    brand: "Big Agnes",
    title: "Larkspur Vest",
    type: "Testimonial",
    niche: "Outdoor",
  },
];

const more = [
  {
    file: "Toms-web.mp4",
    brand: "Toms",
    title: "Testimonial",
    type: "Testimonial",
    niche: "Lifestyle",
  },
  {
    file: "DJI Mic Mini-web.mp4",
    brand: "DJI",
    title: "Mic Mini Review",
    type: "Product Review",
    niche: "Tech",
  },
  {
    file: "Wilderdog-web.mp4",
    brand: "Wilderdog",
    title: "Testimonial",
    type: "Testimonial",
    niche: "Pet",
  },
  {
    file: "CubCadet-web.mp4",
    brand: "Cub Cadet",
    title: "Product Demo",
    type: "Product Demo",
    niche: "Outdoor",
  },
  {
    file: "Keen-web.mp4",
    brand: "Keen",
    title: "Testimonial",
    type: "Testimonial",
    niche: "Outdoor",
  },
  {
    file: "Ifilmplaces-web.mp4",
    brand: "I Film Places",
    title: "Story",
    type: "Story",
    niche: "Travel",
  },
];

const typeColors: Record<string, { bg: string; text: string }> = {
  "Skit":          { bg: "rgba(184,92,56,0.12)",  text: "#b85c38" },
  "B-Roll + VO":   { bg: "rgba(74,107,115,0.12)", text: "#4a6b73" },
  "Story":         { bg: "rgba(26,46,56,0.10)",   text: "#1a2e38" },
  "Green Screen":  { bg: "rgba(100,80,140,0.12)", text: "#6450a0" },
  "Product Demo":  { bg: "rgba(184,92,56,0.12)",  text: "#b85c38" },
  "Testimonial":   { bg: "rgba(74,107,115,0.12)", text: "#4a6b73" },
  "Product Review":{ bg: "rgba(26,46,56,0.10)",   text: "#1a2e38" },
};

function VideoCard({ v, index }: { v: typeof featured[0]; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
    } else {
      // pause all other videos first
      document.querySelectorAll("video").forEach(vid => {
        if (vid !== videoRef.current) vid.pause();
      });
      videoRef.current.play();
    }
    setPlaying(!playing);
  };

  const colors = typeColors[v.type] ?? { bg: "rgba(26,46,56,0.10)", text: "#1a2e38" };

  return (
    <div
      className={`scroll-reveal scroll-reveal-stagger-${Math.min(index + 1, 5) as 1|2|3|4|5} video-card-hover rounded-3xl overflow-hidden`}
      style={{
        background: "rgba(255,255,255,0.6)",
        border: "1px solid rgba(26,46,56,0.08)",
        backdropFilter: "blur(8px)",
        boxShadow: "0 8px 32px rgba(26,46,56,0.1), 0 2px 8px rgba(26,46,56,0.06)",
      }}
    >
      {/* Video area */}
      <div
        className="relative cursor-pointer"
        style={{ aspectRatio: "9/16", background: "#0f0e0d" }}
        onClick={toggle}
      >
        <video
          ref={videoRef}
          src={`/video/${v.file}`}
          loop
          playsInline
          className="w-full h-full object-cover"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        />

        {/* Play overlay */}
        {!playing && (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center gap-3 transition-opacity duration-200"
            style={{ background: "rgba(15,14,13,0.35)" }}
          >
            <div
              className="flex items-center justify-center rounded-full"
              style={{ width: 52, height: 52, border: "2px solid white", background: "rgba(255,255,255,0.15)" }}
            >
              <svg width="18" height="18" viewBox="0 0 20 20" fill="white">
                <polygon points="6,4 18,10 6,16" />
              </svg>
            </div>
          </div>
        )}

        {/* Type tag */}
        <div className="absolute top-3 left-3">
          <span
            className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full"
            style={{ background: colors.bg, color: colors.text, backdropFilter: "blur(8px)" }}
          >
            {v.type}
          </span>
        </div>


      </div>

      {/* Info */}
      <div className="px-5 py-4" style={{ borderTop: "1px solid rgba(26,46,56,0.06)" }}>
        <p className="text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color: "#b85c38" }}>
          {v.brand} · {v.niche}
        </p>
        <p className="text-sm font-bold" style={{ color: "#1a2e38" }}>
          {v.title}
        </p>
      </div>
    </div>
  );
}

export default function VideoShowcase() {
  const ref = useRef<HTMLElement>(null);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const o = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.querySelectorAll(".scroll-reveal").forEach(el => el.classList.add("scroll-reveal-visible"));
      });
    }, { threshold: 0.05 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);

  // pause all videos when collapsing
  const handleToggle = () => {
    if (showMore) {
      document.querySelectorAll("video").forEach(v => v.pause());
    }
    setShowMore(!showMore);
  };

  return (
    <section ref={ref} id="videos" className="max-w-5xl mx-auto px-6">
      <div className="scroll-reveal mb-12">
        <h2 className="text-4xl font-bold mb-2" style={{ color: "#1a2e38" }}>
          UGC
        </h2>
        <p className="text-sm" style={{ color: "#4a6b73" }}>
          Skit · B-Roll · Story · Green Screen · Product Demo · Testimonial
        </p>
      </div>

      {/* Featured 6 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {featured.map((v, i) => (
          <VideoCard key={v.file} v={v} index={i} />
        ))}
      </div>

      {/* See More toggle */}
      <div className="mt-8 text-center">
        <button
          onClick={handleToggle}
          className="inline-flex items-center gap-2 px-8 py-3 rounded-xl text-xs font-semibold uppercase tracking-widest transition-all duration-300"
          style={{
            border: "1.5px solid #1a2e38",
            color: "#1a2e38",
            background: "transparent",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = "#1a2e38";
            e.currentTarget.style.color = "#e8dcc8";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "#1a2e38";
          }}
        >
          {showMore ? "Show Less ↑" : "See More Work ↓"}
        </button>
      </div>

      {/* More videos — animated expand */}
      <div
        className="overflow-hidden transition-all duration-500"
        style={{ maxHeight: showMore ? 2000 : 0, opacity: showMore ? 1 : 0 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-5">
          {more.map((v, i) => (
            <VideoCard key={v.file} v={v} index={i} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div
        className="scroll-reveal mt-10 rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 floating-surface"
      >
        <p className="text-sm" style={{ color: "#3f4d56" }}>
          Like what you see? Let's make something for your brand.
        </p>
        <a
          href="mailto:kelseynocekugc@gmail.com"
          className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold uppercase tracking-widest transition-all duration-200"
          style={{ background: "#1a2e38", color: "#e8dcc8" }}
          onMouseEnter={e => (e.currentTarget.style.background = "#b85c38")}
          onMouseLeave={e => (e.currentTarget.style.background = "#1a2e38")}
        >
          Work With Me ↗
        </a>
      </div>
    </section>
  );
}