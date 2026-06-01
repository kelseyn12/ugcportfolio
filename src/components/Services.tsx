"use client";
import { useEffect, useRef } from "react";

const services = [
  {
    icon: "🎬",
    title: "UGC Video",
    desc: "Short-form vertical video built to stop the scroll — hooks, demos, testimonials, day-in-the-life.",
  },
  {
    icon: "🎞️",
    title: "B-Roll Packages",
    desc: "Cinematic lifestyle footage your team can cut, remix, and run as paid ads or organic content.",
  },
  {
    icon: "📸",
    title: "UGC Photos",
    desc: "Lifestyle product stills that feel real — not staged. Built for feeds, PDPs, and email.",
  },
  {
    icon: "✍️",
    title: "Script & Strategy",
    desc: "Hook-first scripts and content strategy so every video has a job to do before the camera rolls.",
  },
];

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const o = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.querySelectorAll(".scroll-reveal").forEach(el => el.classList.add("scroll-reveal-visible"));
      });
    }, { threshold: 0.1 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);

  return (
    <section ref={ref} className="max-w-5xl mx-auto px-6">
      <div className="scroll-reveal mb-12">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: "#b85c38" }}>
          What I Make
        </p>
        <h2 className="text-4xl font-bold" style={{ color: "#1a2e38" }}>
          Services
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {services.map((s, i) => (
          <div
            key={s.title}
            className={`scroll-reveal scroll-reveal-stagger-${(i+1) as 1|2|3|4} breezy-hover rounded-2xl p-7 flex gap-5`}
            style={{
              background: "rgba(255,255,255,0.55)",
              border: "1px solid rgba(26,46,56,0.07)",
              backdropFilter: "blur(8px)",
            }}
          >
            <span className="text-3xl shrink-0 mt-0.5">{s.icon}</span>
            <div>
              <h3 className="text-base font-bold mb-2" style={{ color: "#1a2e38" }}>
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#3f4d56" }}>
                {s.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div
        className="scroll-reveal mt-8 rounded-2xl px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4"
        style={{
          background: "#1a2e38",
          border: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <p className="text-sm" style={{ color: "rgba(232,220,200,0.7)" }}>
          Not sure what you need? Let&apos;s figure it out together.
        </p>
        <a
          href="mailto:kelseynocekugc@gmail.com"
          className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold uppercase tracking-widest transition-all duration-200"
          style={{ background: "#b85c38", color: "#e8dcc8" }}
          onMouseEnter={e => (e.currentTarget.style.background = "#c96a45")}
          onMouseLeave={e => (e.currentTarget.style.background = "#b85c38")}
        >
          Get in Touch ↗
        </a>
      </div>
    </section>
  );
}
