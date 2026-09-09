"use client";

import { useEffect, useRef } from "react";

export function useScrollReveal(threshold = 0.08) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll(".scroll-reveal")
              .forEach((el) => el.classList.add("scroll-reveal-visible"));
          }
        });
      },
      { threshold },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
