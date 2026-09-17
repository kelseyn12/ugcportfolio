export type VideoEntry = {
  file: string;
  brand: string;
  title: string;
  label: string;
  categories: string[];
  independent?: boolean;
};

export const featuredVideos: VideoEntry[] = [
  {
    file: "BWCA-web.mp4",
    brand: "Ely Outfitting Co.",
    title: "Canoe Trip",
    label: "Outdoor · Experience",
    categories: ["Outdoor + Gear", "Travel + Experience"],
  },
  {
    file: "Under Armor Gear-web.mp4",
    brand: "Urban Armor Gear",
    title: "Gear",
    label: "UGC · Product",
    categories: ["Product UGC", "Lifestyle"],
  },
  {
    file: "Challenger Backpack-web.mp4",
    brand: "Challenger 28",
    title: "La Sportiva Backpack",
    label: "Spec · Concept",
    categories: ["Outdoor + Gear"],
    independent: true,
  },
  {
    file: "Maxwell Mansion-web.mp4",
    brand: "Maxwell Mansion",
    title: "Stay Story",
    label: "Hospitality · Organic",
    categories: ["Travel + Experience", "Organic Social", "Storytelling"],
  },
  {
    file: "Lost Ranger-web.mp4",
    brand: "Lost Ranger",
    title: "3-in-1 Sleeping Bag",
    label: "UGC · Outdoor",
    categories: ["Outdoor + Gear", "Product UGC"],
  },
  {
    file: "SiteScout-web.mp4",
    brand: "SiteScout",
    title: "Canvas Ad",
    label: "Canvas · Tech",
    categories: ["Tech", "Product UGC"],
  },
];

export const moreVideos: VideoEntry[] = [
  {
    file: "Romp-v2-web.mp4",
    brand: "Romp Bags",
    title: "Origin Story",
    label: "Brand Storytelling",
    categories: ["Storytelling", "Outdoor + Gear"],
  },
  {
    file: "Goldbug Hot Springs-web.mp4",
    brand: "Goldbug Hot Springs",
    title: "Hot Waterfall",
    label: "Organic · Travel",
    categories: ["Travel + Experience", "Organic Social", "Storytelling"],
    independent: true,
  },
  {
    file: "Splitwise-web.mp4",
    brand: "Splitwise",
    title: "Green Screen Ad",
    label: "Green Screen · Tech",
    categories: ["Tech", "Product UGC"],
  },
  {
    file: "chomchom-web.mp4",
    brand: "Chom Chom",
    title: "Product Demo",
    label: "Product UGC · Pet",
    categories: ["Pet", "Product UGC"],
  },
  {
    file: "Uber Eats-web.mp4",
    brand: "Uber Eats",
    title: "Delivery Day",
    label: "UGC · Lifestyle",
    categories: ["Lifestyle", "Product UGC"],
  },
  {
    file: "COROS Apex 4-web.mp4",
    brand: "COROS",
    title: "Apex 4 Watch",
    label: "Product UGC · Tech",
    categories: ["Tech", "Outdoor + Gear", "Product UGC"],
  },
  {
    file: "Big Agnes Larkspur Vest-web.mp4",
    brand: "Big Agnes",
    title: "Larkspur Vest",
    label: "Testimonial · Outdoor",
    categories: ["Outdoor + Gear", "Product UGC"],
  },
  {
    file: "Toms-web.mp4",
    brand: "Toms",
    title: "Testimonial",
    label: "Testimonial · Lifestyle",
    categories: ["Lifestyle", "Product UGC"],
  },
  {
    file: "DJI Mic Mini-web.mp4",
    brand: "DJI",
    title: "Mic Mini Review",
    label: "Product Review · Tech",
    categories: ["Tech", "Product UGC"],
  },
  {
    file: "CubCadet-web.mp4",
    brand: "Cub Cadet",
    title: "Product Demo",
    label: "Product UGC · Outdoor",
    categories: ["Outdoor + Gear", "Product UGC"],
  },
];

export const moreWorkCategories = [
  "All",
  "Outdoor + Gear",
  "Travel + Experience",
  "Pet",
  "Lifestyle",
  "Organic Social",
  "Product UGC",
  "Storytelling",
  "Tech",
] as const;

export type PerformanceResult = {
  metric: string;
  metricLabel: string;
  title: string;
  subtitle: string;
  stats?: string[];
};

export const performanceResults: PerformanceResult[] = [
  {
    metric: "113K+",
    metricLabel: "Views",
    title: "Maxwell Mansion Hotel",
    subtitle: "TikTok Go · Hospitality",
    stats: ["1.5K+ likes", "860+ saves", "430+ shares"],
  },
  {
    metric: "53K+",
    metricLabel: "Views",
    title: "Ely Outfitting Co.",
    subtitle: "Commissioned brand content · Outdoor",
  },
  {
    metric: "1.2K+",
    metricLabel: "Saves + Shares",
    title: "Goldbug Hot Springs",
    subtitle: "Independent concept · Travel",
    stats: ["30K+ views", "830+ likes"],
  },
];

export const brandsWorkedWith = [
  { name: "Raycon Global", logo: "/logos/raycon.png", key: "raycon" },
  { name: "ROMP Bags", logo: "/logos/romp-bags.png", key: "romp-bags" },
  { name: "Urban Armor Gear", logo: "/logos/urban-armor-gear.png", key: "urban-armor-gear" },
  { name: "Ely Outfitting Co.", logo: "/logos/ely-outfitting.png", key: "ely-outfitting" },
  { name: "Stay Wyld", logo: "/logos/stay-wyld.png", key: "stay-wyld" },
  { name: "Woolx", logo: "/logos/woolx.png", key: "woolx" },
  { name: "K9 Sport Sack", logo: "/logos/k9-sport-sack.png", key: "k9-sport-sack" },
];

export const testimonials = [
  {
    quote:
      "Love, love, love the videos! They are really an exceptional capture of the important stuff. The photos are good, too.",
    author: "Jason Zabokrtsky",
    role: "Founder & Manager",
    brand: "Ely Outfitting Company",
  },
  {
    quote: "Just went through everything and it looks great, really nice work.",
    author: "Team Stay Wyld",
    role: "",
    brand: "Stay Wyld",
  },
  {
    quote: "I see it on insta now. I love it :)",
    author: "Zach",
    role: "Founder",
    brand: "Romp Bags",
  },
];

export type PhotoEntry = {
  src: string;
  brand: string;
  alt: string;
  caption?: string;
  objectPosition?: string;
};

export const featuredPhotos: PhotoEntry[] = [
  {
    src: "/images/RompBike.jpg",
    brand: "Romp Bags",
    alt: "Romp bike lifestyle",
    objectPosition: "42% 50%",
  },
  {
    src: "/images/altra1.jpg",
    brand: "Altra",
    alt: "Altra running shoes lifestyle",
    objectPosition: "50% 64%",
  },
  {
    src: "/images/chair.jpg",
    brand: "Ely Outfitting Co.",
    alt: "Ely Outfitting chair",
    objectPosition: "50% 48%",
  },
  {
    src: "/images/PawzitivePets.jpg",
    brand: "Pawzitive Pets",
    alt: "Diego with Pawzitive Pets flea and tick prevention",
    caption: "Diego — unofficial creative director →",
    objectPosition: "50% 12%",
  },
  {
    src: "/images/RadFabJeans2.JPG",
    brand: "Rad Fab Jeans",
    alt: "Rad Fab Jeans lifestyle",
    objectPosition: "60% 24%",
  },
  {
    src: "/images/Rompbag1.jpg",
    brand: "Romp Bags",
    alt: "Romp bag lifestyle",
    objectPosition: "50% 46%",
  },
];

export const additionalPhotos: PhotoEntry[] = [
  {
    src: "/images/RadFabJeans3.JPG",
    brand: "Rad Fab Jeans",
    alt: "Rad Fab Jeans lifestyle",
  },
  {
    src: "/images/altra2.jpg",
    brand: "Altra",
    alt: "Altra running shoes",
  },
  {
    src: "/images/Rompbag2.jpg",
    brand: "Romp Bags",
    alt: "Romp bag detail",
  },
  {
    src: "/images/RadFabJeans4.JPG",
    brand: "Rad Fab Jeans",
    alt: "Rad Fab Jeans detail",
  },
];

export const aboutPhotos = [
  {
    src: "/images/outside-mtb-diego.jpg",
    alt: "Kelsey and Diego resting in a field of daisies during a mountain bike ride",
    objectPosition: "50% 50%",
  },
  {
    src: "/images/outside-bike.jpeg",
    alt: "Kelsey biking",
    objectPosition: "50% 45%",
  },
  {
    src: "/images/outside-music.jpg",
    alt: "Kelsey playing music",
    objectPosition: "50% 50%",
  },
  {
    src: "/images/Diego.png",
    alt: "Diego the dog",
    caption: "Diego — unofficial creative director →",
    objectPosition: "50% 45%",
  },
];

export const contactServices = [
  "UGC",
  "Organic Social",
  "Paid Ads",
  "Photography",
  "Travel + Experience",
  "Creative Concepting",
];

export const socialLinks = [
  {
    label: "TikTok",
    href: "https://tiktok.com/@kelseynocekugc",
    icon: "tiktok",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/kelseynocek.ugc",
    icon: "instagram",
  },
  { label: "X", href: "https://x.com/kelseynocekugc", icon: "x" },
];

export const EMAIL = "kelseynocekugc@gmail.com";
