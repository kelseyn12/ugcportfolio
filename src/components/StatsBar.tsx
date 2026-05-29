"use client";
import { useEffect, useRef } from "react";

const stats = [
  { num: "8+",    label: "Years Creating" },
  { num: "3",     label: "Brand Collabs" },
  { num: "100%",  label: "Client Satisfaction" },
  { num: "∞",     label: "Good Vibes Only" },
];

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const o = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.querySelectorAll(".scroll-reveal").forEach(el => el.classList.add("scroll-reveal-visible"));
      });
    }, { threshold: 0.2 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);

  return (
    <div ref={ref} className="max-w-5xl mx-auto px-6">
      <div
        className="rounded-2xl grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0"
        style={{
          background: "#1a2e38",
          border: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`scroll-reveal scroll-reveal-stagger-${(i+1) as 1|2|3|4} flex flex-col items-center justify-center py-8 px-4 text-center`}
            style={{ borderColor: "rgba(255,255,255,0.08)" }}
          >
            <span
              className="text-4xl font-bold mb-2"
              style={{ color: "#e8dcc8" }}
            >
              {s.num}
            </span>
            <span
              className="text-xs font-semibold uppercase tracking-[0.16em]"
              style={{ color: "rgba(232,220,200,0.45)" }}
            >
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}