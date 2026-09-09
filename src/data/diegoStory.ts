export type DiegoStorySlide =
  | {
      type: "image";
      src: string;
      alt: string;
    }
  | {
      type: "video";
      src: string;
      poster: string;
      label: string;
      loop: boolean;
    };

export const diegoStorySlides: DiegoStorySlide[] = [
  {
    type: "image",
    src: "/images/diego-story/01-meet-diego.png",
    alt: "Close-up of Diego sniffing the camera, snow on his muzzle. Text: Let's get to know Diego.",
  },
  {
    type: "image",
    src: "/images/diego-story/02-beginning.png",
    alt: "Diego as a tiny puppy asleep on a lap in the car. Text: To do that, we have to go back to the beginning.",
  },
  {
    type: "video",
    src: "/video/diego-story/03-shenanigans.mp4",
    poster: "/images/diego-story/03-shenanigans-poster.jpg",
    label:
      "Video of puppy Diego and littermates around a food bowl. Text: Shenanigans started immediately.",
    loop: true,
  },
  {
    type: "image",
    src: "/images/diego-story/04-adventure-buddy.png",
    alt: "Puppy Diego sitting in a bicycle basket lined with a pink towel. Text: Immediate adventure buddy.",
  },
  {
    type: "video",
    src: "/video/diego-story/05-digger.mp4",
    poster: "/images/diego-story/05-digger-poster.jpg",
    label:
      "Video of puppy Diego digging in the sand. Text: A digger from the beginning. Still convinced he's going somewhere.",
    loop: false,
  },
  {
    type: "image",
    src: "/images/diego-story/06-crag-dog.png",
    alt: "Puppy Diego sitting in a climbing gear bag at the crag. Text: Best crag dog from day one.",
  },
  {
    type: "image",
    src: "/images/diego-story/07-camping.png",
    alt: "Diego in a life vest on a cooler in a canoe. Text: Camping, canoeing, outside smells, into it.",
  },
  {
    type: "image",
    src: "/images/diego-story/08-bike-basket.png",
    alt: "Grown Diego sitting in a bike trailer. Text: Eventually outgrew the bike basket. Emotionally, he has not accepted this.",
  },
  {
    type: "image",
    src: "/images/diego-story/09-surf.png",
    alt: "Diego lying in a parked surf van with boards on the roof. Text: He loves meeting everyone on surf trips. And now he's decided surfing is also for him.",
  },
  {
    type: "image",
    src: "/images/diego-story/10-mountain-bike.png",
    alt: "Kelsey and Diego in a daisy field after mountain biking. Text: Mountain biking might be his favorite thing. Especially finding shortcuts.",
  },
  {
    type: "image",
    src: "/images/diego-story/11-hot-tub.png",
    alt: "Diego sitting with Kelsey in a hot tub at night. Text: Also apparently a hot tub guy.",
  },
];

export const diegoStoryVideos = diegoStorySlides.filter(
  (slide): slide is Extract<DiegoStorySlide, { type: "video" }> => slide.type === "video",
);

let diegoStoryPrefetchStarted = false;

export function prefetchDiegoStoryMedia() {
  if (diegoStoryPrefetchStarted || typeof document === "undefined") return;
  diegoStoryPrefetchStarted = true;

  diegoStoryVideos.forEach((slide) => {
    const poster = new Image();
    poster.src = slide.poster;

    const video = document.createElement("video");
    video.muted = true;
    video.defaultMuted = true;
    video.preload = "auto";
    video.playsInline = true;
    video.setAttribute("playsinline", "true");
    video.setAttribute("webkit-playsinline", "true");
    video.setAttribute("aria-hidden", "true");
    video.tabIndex = -1;
    video.style.cssText =
      "position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);pointer-events:none;opacity:0";
    video.src = slide.src;
    document.body.appendChild(video);
    video.load();
  });
}
