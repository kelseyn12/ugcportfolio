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
import { diegoStorySlides, prefetchDiegoStoryMedia } from "@/data/diegoStory";

const LAST_INDEX = diegoStorySlides.length - 1;
const SWIPE_THRESHOLD = 48;

type DiegoStoryModalProps = {
  onClose: () => void;
};

function subscribe() {
  return () => {};
}

function subscribeReducedMotion(onChange: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
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
  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  );
  const [index, setIndex] = useState(0);
  const [playingSrc, setPlayingSrc] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const touchStartX = useRef<number | null>(null);
  const titleId = useId();
  const slide = diegoStorySlides[index];
  const videoReady = slide?.type === "video" && playingSrc === slide.src;

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
    prefetchDiegoStoryMedia();
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

  const bindVideo = (element: HTMLVideoElement | null) => {
    videoRef.current = element;
    if (!element) return;
    element.muted = true;
    element.defaultMuted = true;
    element.playsInline = true;
    element.setAttribute("playsinline", "true");
    element.setAttribute("webkit-playsinline", "true");
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (prefersReducedMotion) {
      video.pause();
      return;
    }

    const tryPlay = () => {
      if (video.readyState < HTMLMediaElement.HAVE_CURRENT_DATA) return;
      video.muted = true;
      void video.play().catch(() => {});
    };

    tryPlay();
    video.addEventListener("loadeddata", tryPlay);
    video.addEventListener("canplay", tryPlay);
    return () => {
      video.removeEventListener("loadeddata", tryPlay);
      video.removeEventListener("canplay", tryPlay);
      video.pause();
    };
  }, [index, prefersReducedMotion]);

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
            <div className={`diego-story-frame${videoReady ? " is-ready" : ""}`}>
              <img
                src={slide.poster}
                alt=""
                className="diego-story-media diego-story-frame-poster"
              />
              <video
                key={slide.src}
                ref={bindVideo}
                src={slide.src}
                poster={slide.poster}
                className="diego-story-frame-video"
                muted
                playsInline
                loop={slide.loop}
                preload="auto"
                aria-label={slide.label}
                onPlaying={() => setPlayingSrc(slide.src)}
                onClick={() => {
                  const video = videoRef.current;
                  if (!video || prefersReducedMotion || !video.paused) return;
                  void video.play().catch(() => {});
                }}
              />
            </div>
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
