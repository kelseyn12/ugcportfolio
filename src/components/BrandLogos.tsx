"use client";
import { useEffect, useRef } from "react";

const brands = [
  { name: "Ely Outfitting Co.", descriptor: "Boundary Waters, MN" },
  { name: "Stay Wyld",          descriptor: "Electrolytes"         },
  { name: "Romp Bags",          descriptor: "Gear & Accessories"   },
];

export default function BrandLogos() {
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
      <p
        className="scroll-reveal text-xs font-semibold uppercase tracking-[0.2em] text-center mb-10"
        style={{ color: "#4a6b73" }}
      >
        Trusted by
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-0 sm:gap-0 divide-y sm:divide-y-0 sm:divide-x"
        style={{ divideColor: "rgba(26,46,56,0.12)" }}
      >
        {brands.map((b, i) => (
          <div
            key={b.name}
            className={`scroll-reveal scroll-reveal-stagger-${(i + 1) as 1 | 2 | 3} flex flex-col items-center justify-center px-10 py-6 text-center`}
            style={{ borderColor: "rgba(26,46,56,0.12)" }}
          >
            <p
              className="text-base font-bold tracking-wide mb-1"
              style={{ color: "#1a2e38" }}
            >
              {b.name}
            </p>
            <p
              className="text-xs uppercase tracking-[0.14em]"
              style={{ color: "#4a6b73" }}
            >
              {b.descriptor}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}