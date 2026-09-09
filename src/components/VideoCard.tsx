"use client";

import { useRef, useState } from "react";
import type { VideoEntry } from "@/data/portfolio";

type VideoCardProps = {
  video: VideoEntry;
  index?: number;
  variant?: "featured" | "compact";
};

export default function VideoCard({
  video,
  index = 0,
  variant = "featured",
}: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = async () => {
    const el = videoRef.current;
    if (!el) return;
    if (!el.paused) {
      el.pause();
      return;
    }
    document.querySelectorAll("video").forEach((vid) => {
      if (vid !== el) vid.pause();
    });
    try {
      await el.play();
    } catch {
      setPlaying(false);
    }
  };

  const stagger = Math.min(index + 1, 5) as 1 | 2 | 3 | 4 | 5;

  return (
    <article
      className={`scroll-reveal scroll-reveal-stagger-${stagger} video-card group`}
      data-variant={variant}
    >
      <div className="video-card-screen">
        <video
          ref={videoRef}
          src={`/video/${video.file}`}
          poster={`/thumbs/${video.file.replace(".mp4", "-thumb.jpg")}`}
          loop
          playsInline
          preload="none"
          className="video-card-media"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        />

        <button
          type="button"
          className="video-card-hit"
          onClick={toggle}
          aria-label={playing ? "Pause video" : "Play video"}
        >
          {!playing && (
            <span className="video-card-play" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                <polygon points="6,4 18,10 6,16" />
              </svg>
            </span>
          )}
        </button>
      </div>

      <div className="video-card-meta">
        <p className="video-card-brand">{video.brand}</p>
        <p className="video-card-label">{video.label}</p>
      </div>
    </article>
  );
}
