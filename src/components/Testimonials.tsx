"use client";
import { useEffect, useRef } from "react";

const testimonials = [
  {
    quote: "Love, love, love the videos! They are really an exceptional capture of the important stuff. The photos are good, too.",
    author: "Jason Zabokrtsky",
    role: "Founder & Manager",
    brand: "Ely Outfitting Company",
  },
  {
    quote: "Just went through everything and it looks great, really nice work.",
    author: "Team Stay Wyld",
    role: "",
    brand: "Stay Wyld",
  },
  {
    quote: "I see it on insta now. I love it :)",
    author: "Zach",
    role: "Founder",
    brand: "Romp Bags",
  },
];

export default function Testimonials() {
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
    <section
      ref={ref}
      id="testimonials"
      className="relative overflow-hidden py-24"
      style={{ background: "#1a2e38" }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="scroll-reveal mb-14 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: "#b85c38" }}>
            Kind Words
          </p>
          <h2 className="text-4xl font-bold" style={{ color: "#e8dcc8" }}>
            What brands say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={t.brand}
              className={`scroll-reveal scroll-reveal-stagger-${(i+1) as 1|2|3} breezy-hover rounded-2xl p-6 md:p-8 flex flex-col justify-between`}
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {/* Quote mark */}
              <div>
                <p
                  className="text-5xl font-serif leading-none mb-4"
                  style={{ color: "#b85c38", fontFamily: "Georgia, serif" }}
                >
                  "
                </p>
                <p
                  className="text-base leading-relaxed mb-6 italic"
                  style={{ color: "rgba(232,220,200,0.85)" }}
                >
                  {t.quote}
                </p>
              </div>

              {/* Author */}
              <div
                className="pt-5"
                style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
              >
                <p className="text-sm font-bold" style={{ color: "#e8dcc8" }}>
                  {t.author}
                </p>
                {t.role && (
                  <p className="text-xs mt-0.5" style={{ color: "rgba(232,220,200,0.4)" }}>
                    {t.role}
                  </p>
                )}
                <p
                  className="text-xs font-semibold uppercase tracking-wider mt-1"
                  style={{ color: "#b85c38" }}
                >
                  {t.brand}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
