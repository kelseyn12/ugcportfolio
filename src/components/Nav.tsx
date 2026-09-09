'use client';

import { useEffect, useState } from 'react';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  const links = [
    { label: 'Work', id: 'work' },
    { label: 'About', id: 'about' },
    { label: 'Results', id: 'results' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <nav className="site-nav" data-scrolled={scrolled}>
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-serif text-[0.9375rem] font-semibold tracking-[0.04em] text-[var(--charcoal)]"
          >
            Kelsey Nocek
          </button>

          <div className="hidden items-center gap-8 md:flex">
            {links.map(({ label, id }) => (
              <button
                key={id}
                type="button"
                onClick={() => scrollTo(id)}
                className="text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-[var(--ink-muted)] transition-colors hover:text-[var(--forest)]"
              >
                {label}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="flex flex-col gap-1.5 p-1 md:hidden"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Menu"
          >
            <span
              className="block h-px w-5 bg-[var(--charcoal)] transition-transform"
              style={{
                transform: open ? 'rotate(45deg) translate(4px, 4px)' : 'none',
              }}
            />
            <span
              className="block h-px w-5 bg-[var(--charcoal)] transition-opacity"
              style={{ opacity: open ? 0 : 1 }}
            />
            <span
              className="block h-px w-5 bg-[var(--charcoal)] transition-transform"
              style={{
                transform: open ? 'rotate(-45deg) translate(4px, -4px)' : 'none',
              }}
            />
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-x-0 top-16 z-40 border-b border-[var(--line)] bg-[rgba(247,245,240,0.98)] backdrop-blur-md md:hidden">
          {links.map(({ label, id }) => (
            <button
              key={id}
              type="button"
              onClick={() => scrollTo(id)}
              className="block w-full border-b border-[var(--line)] px-5 py-4 text-left text-sm font-semibold uppercase tracking-[0.16em] text-[var(--charcoal)]"
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
