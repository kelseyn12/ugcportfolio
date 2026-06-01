"use client";
/* eslint-disable @next/next/no-img-element -- next/image failed for this mixed-format photo grid */
import { useEffect, useRef } from "react";

export default function About() {
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

  const photos = [
    { src: "/images/outside-surf.JPG",  alt: "Kelsey surfing" },
    { src: "/images/outside-climb.JPG", alt: "Kelsey climbing" },
    { src: "/images/outside-bike.jpeg", alt: "Kelsey biking" },
    { src: "/images/outside-music.jpg", alt: "Kelsey playing music" },
    { src: "/images/Diego.png",         alt: "Diego the dog" },
  ];

  return (
    <section ref={ref} id="about" className="max-w-5xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">

        {/* Photo grid */}
        <div className="scroll-reveal order-2 md:order-1">
          <div className="grid grid-cols-2 gap-3">
            {/* Top row — 2 equal squares */}
            <div className="rounded-2xl overflow-hidden" style={{ aspectRatio: "1/1", border: "1px solid rgba(26,46,56,0.08)", boxShadow: "0 8px 24px rgba(26,46,56,0.08)" }}>
              <img src={photos[0].src} alt={photos[0].alt} className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden" style={{ aspectRatio: "1/1", border: "1px solid rgba(26,46,56,0.08)", boxShadow: "0 8px 24px rgba(26,46,56,0.08)" }}>
              <img src={photos[1].src} alt={photos[1].alt} className="w-full h-full object-cover" />
            </div>
            {/* Middle row — 2 equal squares */}
            <div className="rounded-2xl overflow-hidden" style={{ aspectRatio: "1/1", border: "1px solid rgba(26,46,56,0.08)", boxShadow: "0 8px 24px rgba(26,46,56,0.08)" }}>
              <img src={photos[2].src} alt={photos[2].alt} className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden" style={{ aspectRatio: "1/1", border: "1px solid rgba(26,46,56,0.08)", boxShadow: "0 8px 24px rgba(26,46,56,0.08)" }}>
              <img src={photos[3].src} alt={photos[3].alt} className="w-full h-full object-cover" />
            </div>
            {/* Bottom — Diego full width */}
            <div className="col-span-2 rounded-2xl overflow-hidden" style={{ aspectRatio: "16/7", border: "1px solid rgba(26,46,56,0.08)", boxShadow: "0 8px 24px rgba(26,46,56,0.08)" }}>
              <img src={photos[4].src} alt={photos[4].alt} className="w-full h-full object-cover" style={{ objectPosition: "center 40%" }} />
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="order-1 md:order-2 flex flex-col justify-center">
          <p className="scroll-reveal text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: "#b85c38" }}>
            About
          </p>
          <h2 className="scroll-reveal scroll-reveal-stagger-1 text-4xl font-bold mb-6" style={{ color: "#1a2e38" }}>
            Hi, I&apos;m Kelsey.
          </h2>
          <div className="scroll-reveal scroll-reveal-stagger-2 space-y-4 text-base md:text-lg leading-loose" style={{ color: "#3f4d56" }}>
            <p>
              I make UGC for outdoor, travel, adventure, lifestyle, and tech brands. My background in music and software development means I understand both what feels good and what performs.
            </p>
            <ul className="space-y-2">
              {[
                "My dog Diego comes to every shoot",
                "Former musician, still playing — music trained my eye for timing",
                "Software developer who understands what the platform rewards",
                "I travel to climb, bike, surf, and run — I live in the niches I create for",
                "Once I'm locked in on a project, good luck pulling me away",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2.5 shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: "#b85c38" }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-xl md:text-2xl font-bold pt-2" style={{ color: "#1a2e38" }}>
              Technically creative.<br />Creatively technical.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}