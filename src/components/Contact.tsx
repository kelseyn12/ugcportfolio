'use client';

import { contactServices, EMAIL, socialLinks } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';

function SocialIcon({ icon }: { icon: string }) {
  if (icon === 'tiktok') {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
      </svg>
    );
  }
  if (icon === 'instagram') {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    );
  }
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.730-8.835L1.254 2.25H8.08l4.259 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function Contact() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} id="contact" className="contact-section mt-4 border-t border-[var(--line)]">
      <div className="section-wrap py-20 md:py-24">
        <p className="scroll-reveal eyebrow mb-4" data-dark="true">
          Contact
        </p>
        <h2 className="scroll-reveal scroll-reveal-stagger-1 section-title max-w-2xl" data-dark="true">
          Let&apos;s make something good.
        </h2>
        <p className="scroll-reveal scroll-reveal-stagger-2 mt-5 max-w-xl text-base text-[rgba(247,245,240,0.78)]">
          Have a project in mind? Tell me what you&apos;re working on and I&apos;ll
          send over availability and rates based on scope.
        </p>

        <div className="scroll-reveal scroll-reveal-stagger-3 mt-8 flex flex-wrap gap-2">
          {contactServices.map((service) => (
            <span key={service} className="service-tag contact-tag">
              {service}
            </span>
          ))}
        </div>

        <div className="scroll-reveal scroll-reveal-stagger-4 mt-10 flex flex-wrap gap-3">
          <a
            href={`mailto:${EMAIL}?subject=Project%20Inquiry`}
            className="btn-primary btn-on-dark"
          >
            Tell Me About Your Project
          </a>
          <a href={`mailto:${EMAIL}`} className="btn-secondary btn-on-dark-outline">
            {EMAIL}
          </a>
        </div>

        <div className="scroll-reveal scroll-reveal-stagger-5 mt-10 flex flex-wrap gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="social-icon-btn social-icon-btn-dark"
            >
              <SocialIcon icon={link.icon} />
            </a>
          ))}
        </div>
      </div>

      <footer className="contact-footer py-5 text-center text-[0.6875rem] uppercase tracking-[0.14em]">
        © 2026 Kelsey Nocek · UGC Creator & Storyteller
      </footer>
    </section>
  );
}
