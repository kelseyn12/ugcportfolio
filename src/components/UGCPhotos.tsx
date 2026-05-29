"use client";
import { useEffect, useRef } from "react";

const photos = [
  { src: "/images/altra1.jpg",        brand: "Altra",         alt: "Altra running shoes lifestyle" },
  { src: "/images/RadFabJeans2.JPG",  brand: "Rad Fab Jeans", alt: "Rad Fab Jeans lifestyle" },
  { src: "/images/Rompbag1.jpg",      brand: "Romp Bags",     alt: "Romp bag lifestyle" },
  { src: "/images/RadFabJeans3.JPG",  brand: "Rad Fab Jeans", alt: "Rad Fab Jeans lifestyle" },
  { src: "/images/RompBike.jpg",      brand: "Romp Bags",     alt: "Romp bike lifestyle" },
  { src: "/images/altra2.jpg",        brand: "Altra",         alt: "Altra running shoes" },
  { src: "/images/Rompbag2.jpg",      brand: "Romp Bags",     alt: "Romp bag detail" },
  { src: "/images/RadFabJeans4.JPG",  brand: "Rad Fab Jeans", alt: "Rad Fab Jeans detail" },
];

// Desktop: 3 columns. Mobile: 2 columns (col3 hidden)
const col1 = [photos[0], photos[3], photos[6]];
const col2 = [photos[1], photos[4], photos[7]];
const col3 = [photos[2], photos[5]];

function Photo({ p, delay }: { p: typeof photos[0]; delay: string }) {
  return (
    <div
      className={`scroll-reveal ${delay} group relative overflow-hidden rounded-2xl breezy-hover`}
      style={{ border: "1px solid rgba(26,46,56,0.06)" }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={p.src}
        alt={p.alt}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        style={{ display: "block" }}
      />
      <div
        className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: "linear-gradient(to top, rgba(26,46,56,0.7) 0%, transparent 60%)" }}
      >
        <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#e8dcc8" }}>
          {p.brand}
        </span>
      </div>
    </div>
  );
}

export default function UGCPhotos() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const o = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.querySelectorAll(".scroll-reveal").forEach(el => el.classList.add("scroll-reveal-visible"));
      });
    }, { threshold: 0.05 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);

  return (
    <section ref={ref} id="photos" className="max-w-5xl mx-auto px-6">
      <div className="scroll-reveal mb-12">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: "#b85c38" }}>
          Photography
        </p>
        <h2 className="text-4xl font-bold mb-2" style={{ color: "#1a2e38" }}>
          Stills
        </h2>
        <p className="text-sm" style={{ color: "#4a6b73" }}>
          Lifestyle-first. Brand-ready.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 items-start">
        {/* Column 1 — always visible */}
        <div className="flex flex-col gap-4">
          {col1.map((p, i) => (
            <Photo key={p.src} p={p} delay={`scroll-reveal-stagger-${(i + 1) as 1|2|3}`} />
          ))}
        </div>

        {/* Column 2 — always visible, offset on desktop */}
        <div className="flex flex-col gap-4 md:mt-8">
          {col2.map((p, i) => (
            <Photo key={p.src} p={p} delay={`scroll-reveal-stagger-${(i + 1) as 1|2|3}`} />
          ))}
        </div>

        {/* Column 3 — desktop only */}
        <div className="hidden md:flex flex-col gap-4 md:mt-4">
          {col3.map((p, i) => (
            <Photo key={p.src} p={p} delay={`scroll-reveal-stagger-${(i + 1) as 1|2}`} />
          ))}
        </div>
      </div>

      <div
        className="scroll-reveal mt-10 rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 floating-surface"
      >
        <p className="text-sm" style={{ color: "#3f4d56" }}>
          Need stills for your brand? Let's shoot.
        </p>
        <a
          href="mailto:kelseynocekugc@gmail.com"
          className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold uppercase tracking-widest transition-all duration-200"
          style={{ background: "#1a2e38", color: "#e8dcc8" }}
          onMouseEnter={e => (e.currentTarget.style.background = "#b85c38")}
          onMouseLeave={e => (e.currentTarget.style.background = "#1a2e38")}
        >
          Get in Touch ↗
        </a>
      </div>
    </section>
  );
}