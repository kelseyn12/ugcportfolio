"use client";
/* eslint-disable @next/next/no-img-element */

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { createPortal } from "react-dom";
import { diegoStorySlides } from "@/data/diegoStory";

const LAST_INDEX = diegoStorySlides.length - 1;
const SWIPE_THRESHOLD = 48;

type DiegoStoryModalProps = {
  onClose: () => void;
};

function subscribe() {
  return () => {};
}

function getFocusable(root: HTMLElement) {
  return [
    ...root.querySelectorAll<HTMLElement>(
      'button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])',
    ),
  ].filter((el) => el.tabIndex !== -1 && !el.hasAttribute("hidden"));
}

export default function DiegoStoryModal({ onClose }: DiegoStoryModalProps) {
  const isClient = useSyncExternalStore(subscribe, () => true, () => false);
  const [index, setIndex] = useState(0);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const touchStartX = useRef<number | null>(null);
  const titleId = useId();
  const slide = diegoStorySlides[index];

  const goTo = useCallback((next: number) => {
    setIndex(Math.max(0, Math.min(LAST_INDEX, next)));
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = html.style.overflow;
    document.body.style.overflow = "hidden";
    html.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previousBodyOverflow;
      html.style.overflow = previousHtmlOverflow;
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        setIndex((current) => Math.min(LAST_INDEX, current + 1));
        return;
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setIndex((current) => Math.max(0, current - 1));
        return;
      }
      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = getFocusable(dialogRef.current);
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  useEffect(() => {
    if (!dialogRef.current?.contains(document.activeElement)) {
      closeRef.current?.focus();
    }
  }, [index]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let cancelled = false;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const start = () => {
      if (cancelled || reducedMotion) return;
      video.currentTime = 0;
      void video.play();
    };

    video.pause();
    video.currentTime = 0;

    if (reducedMotion) {
      return () => {
        cancelled = true;
        video.pause();
      };
    }

    if (video.readyState >= 2) {
      start();
    } else {
      video.addEventListener("loadeddata", start, { once: true });
    }

    return () => {
      cancelled = true;
      video.pause();
      video.currentTime = 0;
      video.removeEventListener("loadeddata", start);
    };
  }, [index]);

  const onTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.changedTouches[0]?.clientX ?? null;
  };

  const onTouchEnd = (event: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    const delta = (event.changedTouches[0]?.clientX ?? 0) - touchStartX.current;
    touchStartX.current = null;
    if (delta <= -SWIPE_THRESHOLD) goTo(index + 1);
    if (delta >= SWIPE_THRESHOLD) goTo(index - 1);
  };

  if (!isClient || !slide) return null;

  return createPortal(
    <div className="diego-story-root">
      <div className="diego-story-scrim" onClick={onClose} />
      <div
        ref={dialogRef}
        className="diego-story-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <h2 id={titleId} className="diego-story-title">
          Diego story, slide {index + 1} of {diegoStorySlides.length}
        </h2>

        <button
          ref={closeRef}
          type="button"
          className="diego-story-close"
          onClick={onClose}
          aria-label="Close Diego story"
        >
          ×
        </button>

        <div className="diego-story-stage">
          <button
            type="button"
            className="diego-story-nav diego-story-nav-prev"
            onClick={() => goTo(index - 1)}
            aria-label="Previous slide"
            hidden={index === 0}
            disabled={index === 0}
          >
            ‹
          </button>

          {slide.type === "image" ? (
            <img
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              className="diego-story-media"
            />
          ) : (
            <video
              key={slide.src}
              ref={videoRef}
              src={slide.src}
              className="diego-story-media"
              muted
              playsInline
              loop={slide.loop}
              preload="metadata"
              aria-label={slide.label}
            />
          )}

          <button
            type="button"
            className="diego-story-nav diego-story-nav-next"
            onClick={() => goTo(index + 1)}
            aria-label="Next slide"
            hidden={index === LAST_INDEX}
            disabled={index === LAST_INDEX}
          >
            ›
          </button>
        </div>

        <p className="diego-story-progress" aria-live="polite">
          {index + 1} / {diegoStorySlides.length}
        </p>
      </div>
    </div>,
    document.body,
  );
}
