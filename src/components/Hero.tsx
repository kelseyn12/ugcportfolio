"use client";
import { useRef, useState } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <>
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #e8dcc8 0%, #d4c4a8 40%, #c8b89a 100%)",
        }}
      >
        {/* Animated background drift */}
        <div
          className="absolute inset-0 animate-hero-gradient-drift pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 60% 40%, rgba(74,107,115,0.15) 0%, transparent 60%)",
          }}
        />

        <div className="relative max-w-5xl mx-auto px-6 pt-24 pb-12 w-full">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-12 items-center">

            {/* Left: Text */}
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-[0.2em] mb-5 animate-fade-in-up"
                style={{ color: "#b85c38" }}
              >
                UGC Creator
              </p>

              <h1
                className="text-6xl md:text-9xl font-bold leading-[0.95] mb-4 animate-fade-in-up delay-400"
                style={{ color: "#1a2e38" }}
              >
                Kelsey
                <br />
                Nocek
              </h1>

              <p
                className="text-xl md:text-3xl font-normal mb-2 animate-fade-in-up delay-600"
                style={{ color: "#3f4d56" }}
              >
                Technically creative.{" "}
                <span style={{ color: "#b85c38" }}>Creatively technical.</span>
              </p>

              <p
                className="text-lg leading-loose max-w-md mb-8 animate-fade-in-up delay-800"
                style={{ color: "#3f4d56" }}
              >
                10+ years of creative experience across music, tech, and
                content. Specializing in authentic, high-performing UGC for
                outdoor, travel, adventure, lifestyle, and tech brands.
              </p>

              <div className="flex items-center gap-4 mb-6 animate-fade-in-up delay-1000">
                {/* TikTok */}
                <a
                  href="https://tiktok.com/@kelseynocekugc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="floating-surface flex items-center justify-center rounded-2xl transition-all duration-200"
                  style={{ width: 52, height: 52, color: "#1a2e38" }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-2px)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}
                  aria-label="TikTok"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/kelseynocek.ugc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="floating-surface flex items-center justify-center rounded-2xl transition-all duration-200"
                  style={{ width: 52, height: 52, color: "#1a2e38" }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-2px)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}
                  aria-label="Instagram"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                  </svg>
                </a>

                {/* Email */}
                <a
                  href="mailto:kelseynocekugc@gmail.com"
                  className="floating-surface flex items-center justify-center rounded-2xl transition-all duration-200"
                  style={{ width: 52, height: 52, color: "#1a2e38" }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-2px)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}
                  aria-label="Email"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,12 2,6"/>
                  </svg>
                </a>
              </div>

              <p
                className="text-xs uppercase tracking-widest animate-fade-in-up delay-1000"
                style={{ color: "#4a6b73" }}
              >
                📍 Midwest, USA
              </p>
            </div>

            {/* Right: Phone mockup with video */}
            <div className="animate-fade-in-scale delay-600 flex justify-center md:justify-end">
              <div className="relative" style={{ width: "min(260px, 70vw)", height: "min(520px, 140vw)" }}>

                {/* Phone outer shell */}
                <div
                  className="absolute inset-0 rounded-[3rem] z-10 pointer-events-none"
                  style={{
                    border: "8px solid #1a2e38",
                    boxShadow: "0 32px 64px rgba(26,46,56,0.25), 0 8px 24px rgba(26,46,56,0.15), inset 0 0 0 1px rgba(255,255,255,0.1)",
                  }}
                />

                {/* Notch */}
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 z-20"
                  style={{ width: 90, height: 24, background: "#1a2e38", borderRadius: "0 0 1rem 1rem" }}
                />

                {/* Side buttons */}
                <div className="absolute z-0" style={{ right: -10, top: 100, width: 4, height: 50, background: "#1a2e38", borderRadius: 2 }} />
                <div className="absolute z-0" style={{ left: -10, top: 90, width: 4, height: 35, background: "#1a2e38", borderRadius: 2 }} />
                <div className="absolute z-0" style={{ left: -10, top: 135, width: 4, height: 35, background: "#1a2e38", borderRadius: 2 }} />

                {/* Screen */}
                <div
                  className="absolute overflow-hidden cursor-pointer"
                  style={{ inset: 4, borderRadius: "2.6rem", background: "#0f0e0d" }}
                  onClick={togglePlay}
                >
                  <video
                    ref={videoRef}
                    src="/intro-web.mp4"
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />

                  {/* Play/pause overlay — only shows when paused */}
                  {!playing && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3"
                      style={{ background: "rgba(15,14,13,0.45)" }}
                    >
                      <div
                        className="flex items-center justify-center rounded-full"
                        style={{ width: 56, height: 56, border: "2px solid white", background: "rgba(255,255,255,0.15)" }}
                      >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
                          <polygon points="6,4 18,10 6,16" />
                        </svg>
                      </div>
                      <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "white", textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}>
                        Hit Play
                      </span>
                    </div>
                  )}

                  {/* Pause indicator — shows briefly on pause */}
                  {playing && (
                    <div className="absolute bottom-6 right-5 opacity-60">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
                        <rect x="4" y="3" width="4" height="14" rx="1" />
                        <rect x="12" y="3" width="4" height="14" rx="1" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Scroll cue — anchored to bottom of section */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <p className="text-xs uppercase tracking-[0.2em]" style={{ color: "#4a6b73" }}>Scroll</p>
          <div className="w-px h-8" style={{ background: "linear-gradient(to bottom, #4a6b73, transparent)" }} />
        </div>
      </section>

      {/* Marquee strip — right below hero, no gap */}
      <div
        className="overflow-hidden py-3"
        style={{
          background: "#1a2e38",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          marginTop: "-1px",
        }}
      >
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="flex items-center">
              {["Outdoor", "Travel", "Adventure", "Lifestyle", "Tech", "UGC Video", "B-Roll", "Scripting", "Hook-First", "Brand Storytelling"].map((word) => (
                <span key={word} className="flex items-center">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] px-6" style={{ color: "#e8dcc8" }}>
                    {word}
                  </span>
                  <span style={{ color: "#b85c38", fontSize: 6 }}>●</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}