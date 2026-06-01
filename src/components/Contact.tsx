'use client';

import { useEffect, useRef } from 'react';

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.scroll-reveal').forEach(el =>
              el.classList.add('scroll-reveal-visible')
            );
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1a2e38 0%, #3f4d56 100%)',
      }}
    >
      <div className="max-w-5xl mx-auto px-6 py-28 text-center">
        <p
          className="scroll-reveal text-xs font-semibold uppercase tracking-[0.2em] mb-5"
          style={{ color: '#b85c38' }}
        >
          Get in Touch
        </p>
        <h2
          className="scroll-reveal scroll-reveal-stagger-1 text-4xl md:text-5xl font-bold mb-5"
          style={{ color: '#e8dcc8' }}
        >
          Let&apos;s work together.
        </h2>
        <p
          className="scroll-reveal scroll-reveal-stagger-2 text-base max-w-md mx-auto mb-10"
          style={{ color: 'rgba(232,220,200,0.65)' }}
        >
          A developer&apos;s eye for what performs. A musician&apos;s instinct for what lands.
        </p>

        <a
          href="mailto:kelseynocekugc@gmail.com"
          className="scroll-reveal scroll-reveal-stagger-2 block text-sm mb-6 transition-colors duration-200"
          style={{ color: 'rgba(232,220,200,0.55)' }}
          onMouseEnter={e => (e.currentTarget.style.color = '#e8dcc8')}
          onMouseLeave={e => (e.currentTarget.style.color = 'rgba(232,220,200,0.55)')}
        >
          kelseynocekugc@gmail.com
        </a>

        {/* Media kit download */}
        <div className="scroll-reveal scroll-reveal-stagger-2 mb-10">
          <a
            href="/Kelsey_Media_Kit.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold uppercase tracking-widest transition-all duration-200"
            style={{ border: '1px solid rgba(232,220,200,0.25)', color: 'rgba(232,220,200,0.75)', background: 'transparent' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#b85c38'; e.currentTarget.style.color = '#e8dcc8'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(232,220,200,0.25)'; e.currentTarget.style.color = 'rgba(232,220,200,0.75)'; }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7,10 12,15 17,10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download Media Kit
          </a>
        </div>

        <div className="scroll-reveal scroll-reveal-stagger-3 flex justify-center gap-5 mb-10">
          {/* TikTok */}
          <a href="https://tiktok.com/@kelseynocekugc" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center rounded-2xl transition-all duration-200"
            style={{ width: 60, height: 60, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", color: "#e8dcc8" }}
            onMouseEnter={e => { e.currentTarget.style.background = "#b85c38"; e.currentTarget.style.borderColor = "#b85c38"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; }}
            aria-label="TikTok"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
            </svg>
          </a>
          {/* Instagram */}
          <a href="https://instagram.com/kelseynocek.ugc" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center rounded-2xl transition-all duration-200"
            style={{ width: 60, height: 60, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", color: "#e8dcc8" }}
            onMouseEnter={e => { e.currentTarget.style.background = "#b85c38"; e.currentTarget.style.borderColor = "#b85c38"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; }}
            aria-label="Instagram"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
            </svg>
          </a>
          {/* X */}
          <a href="https://x.com/kelseynocekugc" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center rounded-2xl transition-all duration-200"
            style={{ width: 60, height: 60, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", color: "#e8dcc8" }}
            onMouseEnter={e => { e.currentTarget.style.background = "#b85c38"; e.currentTarget.style.borderColor = "#b85c38"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; }}
            aria-label="X"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          {/* Email */}
          <a href="mailto:kelseynocekugc@gmail.com"
            className="flex items-center justify-center rounded-2xl transition-all duration-200"
            style={{ width: 60, height: 60, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", color: "#e8dcc8" }}
            onMouseEnter={e => { e.currentTarget.style.background = "#b85c38"; e.currentTarget.style.borderColor = "#b85c38"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; }}
            aria-label="Email"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,12 2,6"/>
            </svg>
          </a>
        </div>
      </div>

      <div
        className="text-center py-5 text-xs uppercase tracking-widest"
        style={{
          color: 'rgba(232,220,200,0.2)',
          borderTop: '1px solid rgba(232,220,200,0.06)',
        }}
      >
        © 2026 Kelsey Nocek · UGC Creator
      </div>
    </section>
  );
}