'use client';

import { useRef, useState } from 'react';
import { EMAIL, socialLinks } from '@/data/portfolio';
import MediaKitStrip from '@/components/MediaKitStrip';

/** Set to false to revert hero to phone-only layout. */
const ENABLE_HERO_CUTOUT_EXPERIMENT = true;

const HERO_CLIMB_CUTOUT = '/images/kelsey-climb-cutout.png';

function SocialIcon({ icon }: { icon: string }) {
  if (icon === 'tiktok') {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
      </svg>
    );
  }
  if (icon === 'instagram') {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    );
  }
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.730-8.835L1.254 2.25H8.08l4.259 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggleIntro = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
    } else {
      document.querySelectorAll('video').forEach((vid) => {
        if (vid !== videoRef.current) vid.pause();
      });
      void videoRef.current.play();
    }
    setPlaying(!playing);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const phone = (
    <div
      className="hero-phone relative"
      style={{ width: 'min(258px, 66vw)', height: 'min(516px, 137vw)' }}
    >
      <div
        className="pointer-events-none absolute inset-0 z-10 rounded-[2.75rem]"
        style={{
          border: '7px solid #0f0e0d',
          boxShadow: '0 20px 48px rgba(15, 14, 13, 0.18)',
        }}
      />

      <div
        className="absolute left-1/2 top-0 z-20 -translate-x-1/2"
        style={{
          width: 90,
          height: 24,
          background: '#0f0e0d',
          borderRadius: '0 0 0.85rem 0.85rem',
        }}
      />

      <button
        type="button"
        className="absolute cursor-pointer overflow-hidden"
        style={{ inset: 4, borderRadius: '2.4rem', background: '#0f0e0d' }}
        onClick={toggleIntro}
        aria-label={playing ? 'Pause intro reel' : 'Play intro reel'}
      >
        <video
          ref={videoRef}
          src="/intro-web.mp4"
          loop
          playsInline
          preload="metadata"
          className="h-full w-full object-cover"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        />

        {!playing && (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center gap-3"
            style={{ background: 'rgba(15,14,13,0.4)' }}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-white/15">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="white">
                <polygon points="6,4 18,10 6,16" />
              </svg>
            </div>
            <span className="text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-white">
              Hit Play
            </span>
          </div>
        )}
      </button>
    </div>
  );

  return (
    <>
      <section className="hero-section section-wrap flex items-center pb-12 pt-28 md:pb-16 md:pt-32">
        <div className="hero-grid w-full">
          <div className="hero-copy">
            <p className="eyebrow animate-fade-in-up mb-4">
              UGC Creator · Storyteller
            </p>

            <h1 className="hero-title animate-fade-in-up delay-200 mb-5">
              Kelsey
              <br />
              Nocek
            </h1>

            <p className="hero-tagline animate-fade-in-up delay-400 mb-5">
              Technically creative. Creatively technical.
            </p>

            <p className="animate-fade-in-up delay-400 mb-5 max-w-lg text-base leading-relaxed text-[var(--ink-body)] md:text-[1.05rem]">
              Midwest-based creator making short-form video and photo content for
              outdoor, gear, travel, and lifestyle brands — work that reflects what
              I actually spend my days doing.
            </p>

            <p className="animate-fade-in-up delay-400 mb-8 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-[var(--sage)]">
              Outdoor · Adventure · Travel · Gear · Pet · Lifestyle
            </p>

            <div className="animate-fade-in-up delay-600 mb-8 flex flex-wrap gap-3">
              <button type="button" className="btn-primary" onClick={() => scrollTo('work')}>
                View Work
              </button>
              <a href={`mailto:${EMAIL}`} className="btn-secondary">
                Tell Me About Your Project
              </a>
            </div>

            <div className="animate-fade-in-up delay-600 flex flex-wrap items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="social-icon-btn"
                >
                  <SocialIcon icon={link.icon} />
                </a>
              ))}
              <span className="text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-[var(--ink-muted)]">
                Midwest-based
              </span>
            </div>
          </div>

          <div className="hero-phone-col animate-fade-in-up delay-400">
            {ENABLE_HERO_CUTOUT_EXPERIMENT ? (
              <div className="hero-visual-composition">
                <img
                  src={HERO_CLIMB_CUTOUT}
                  alt="Kelsey climbing"
                  className="hero-climb-cutout"
                  loading="eager"
                />
                {phone}
              </div>
            ) : (
              phone
            )}
          </div>
        </div>
      </section>

      <MediaKitStrip />
    </>
  );
}
