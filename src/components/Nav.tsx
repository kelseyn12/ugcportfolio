'use client';
import { useState } from 'react';

export default function Nav() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  const links = [
    { label: 'Work',    id: 'videos'  },
    { label: 'Stills',  id: 'photos'  },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: 'rgba(232,220,200,0.88)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(26,46,56,0.08)',
        }}
      >
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="text-sm font-bold tracking-wide" style={{ color: '#1a2e38' }}>
            Kelsey Nocek
          </span>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {links.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-xs font-semibold uppercase tracking-widest transition-colors duration-200"
                style={{ color: '#4a6b73' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#1a2e38')}
                onMouseLeave={e => (e.currentTarget.style.color = '#4a6b73')}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <span className="block w-5 h-0.5 transition-all duration-200" style={{ background: '#1a2e38', transform: open ? 'rotate(45deg) translate(4px, 4px)' : 'none' }} />
            <span className="block w-5 h-0.5 transition-all duration-200" style={{ background: '#1a2e38', opacity: open ? 0 : 1 }} />
            <span className="block w-5 h-0.5 transition-all duration-200" style={{ background: '#1a2e38', transform: open ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }} />
          </button>
        </div>
      </nav>

      {/* Mobile menu dropdown */}
      {open && (
        <div
          className="fixed top-14 left-0 right-0 z-40 flex flex-col"
          style={{
            background: 'rgba(232,220,200,0.97)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid rgba(26,46,56,0.08)',
          }}
        >
          {links.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-sm font-semibold uppercase tracking-widest py-4 px-6 text-left border-b transition-colors duration-200"
              style={{ color: '#1a2e38', borderColor: 'rgba(26,46,56,0.06)' }}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}