'use client';

import { useEffect, useRef } from 'react';

const cases = [
  {
    brand: 'Brand Name · Outdoor Gear',
    title: 'Product Launch Campaign',
    stats: [
      { num: '200%', label: 'Engagement ↑' },
      { num: '10K',  label: 'Organic Views' },
    ],
    desc: 'Replace with your real story. Describe what the brief was, what you created, and the measurable result after it went live.',
  },
  {
    brand: 'Brand Name · Skincare',
    title: 'Organic Content Series',
    stats: [
      { num: '4.2%', label: 'Conversion Rate' },
      { num: '3×',   label: 'Avg. Watch Time' },
    ],
    desc: 'No case studies yet? Use your best personal content numbers here, or remove this section and add it as you build experience.',
  },
];

export default function CaseStudies() {
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="cases"
      className="max-w-5xl mx-auto px-6"
    >
      <div className="scroll-reveal mb-12">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: '#b85c38' }}>
          Case Studies
        </p>
        <h2 className="text-4xl font-bold" style={{ color: '#1a2e38' }}>
          Results That Matter
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cases.map((c, i) => (
          <div
            key={c.title}
            className={`scroll-reveal scroll-reveal-stagger-${(i + 1) as 1 | 2} breezy-hover rounded-2xl p-8`}
            style={{
              background: 'rgba(255,255,255,0.65)',
              border: '1px solid rgba(26,46,56,0.08)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-wider mb-2"
              style={{ color: '#b85c38' }}
            >
              {c.brand}
            </p>
            <h3 className="text-xl font-bold mb-6" style={{ color: '#1a2e38' }}>
              {c.title}
            </h3>

            <div className="flex gap-8 mb-6">
              {c.stats.map(s => (
                <div key={s.label}>
                  <p className="text-3xl font-bold" style={{ color: '#1a2e38' }}>
                    {s.num}
                  </p>
                  <p
                    className="text-xs font-semibold uppercase tracking-wider mt-1"
                    style={{ color: '#4a6b73' }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-sm leading-loose" style={{ color: '#3f4d56' }}>
              {c.desc}
            </p>
          </div>
        ))}
      </div>

      <div
        className="scroll-reveal mt-10 rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 floating-surface"
      >
        <p className="text-sm" style={{ color: '#3f4d56' }}>
          Want results like these for your brand?
        </p>
        <a
          href="mailto:kelseynocekugc@gmail.com"
          className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold uppercase tracking-widest transition-all duration-200"
          style={{
            border: '1.5px solid #1a2e38',
            color: '#1a2e38',
            background: 'transparent',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = '#1a2e38';
            e.currentTarget.style.color = '#e8dcc8';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = '#1a2e38';
          }}
        >
          Let&apos;s Talk ↗
        </a>
      </div>
    </section>
  );
}
