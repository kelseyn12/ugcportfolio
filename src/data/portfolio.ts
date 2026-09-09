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
    file: "Under Armor Gear-web.mp4",
    brand: "Urban Armor Gear",
    title: "Gear",
    label: "UGC · Product",
    categories: ["Product UGC", "Lifestyle"],
  },
  {
    file: "Maxwell Mansion-web.mp4",
    brand: "Maxwell Mansion",
    title: "Stay Story",
    label: "Hospitality · Organic",
    categories: ["Travel + Experience", "Organic Social", "Storytelling"],
  },
  {
    file: "BWCA-web.mp4",
    brand: "Ely Outfitting Co.",
    title: "Canoe Trip",
    label: "Outdoor · Experience",
    categories: ["Outdoor + Gear", "Travel + Experience"],
  },
  {
    file: "Challenger Backpack-web.mp4",
    brand: "La Sportiva",
    title: "Challenger 28 Backpack",
    label: "Spec · Concept",
    categories: ["Outdoor + Gear"],
    independent: true,
  },
  {
    file: "Lost Ranger-web.mp4",
    brand: "Lost Ranger",
    title: "3-in-1 Sleeping Bag",
    label: "UGC · Outdoor",
    categories: ["Outdoor + Gear", "Product UGC"],
  },
  {
    file: "Romp-v2-web.mp4",
    brand: "Romp Bags",
    title: "Origin Story",
    label: "Brand Storytelling",
    categories: ["Storytelling", "Outdoor + Gear"],
  },
];

export const moreVideos: VideoEntry[] = [
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
    file: "Wilderdog-web.mp4",
    brand: "Wilderdog",
    title: "Testimonial",
    label: "Testimonial · Pet",
    categories: ["Pet", "Product UGC"],
  },
  {
    file: "CubCadet-web.mp4",
    brand: "Cub Cadet",
    title: "Product Demo",
    label: "Product UGC · Outdoor",
    categories: ["Outdoor + Gear", "Product UGC"],
  },
  {
    file: "Keen-web.mp4",
    brand: "Keen",
    title: "Testimonial",
    label: "Testimonial · Outdoor",
    categories: ["Outdoor + Gear", "Product UGC"],
  },
  {
    file: "Ifilmplaces-web.mp4",
    brand: "I Film Places",
    title: "Story",
    label: "Story · Travel",
    categories: ["Travel + Experience", "Storytelling"],
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
  views: string;
  title: string;
  subtitle: string;
  stats?: string[];
  independent?: boolean;
};

export const performanceResults: PerformanceResult[] = [
  {
    views: "112K",
    title: "Maxwell Mansion Hotel",
    subtitle: "Hospitality · organic travel storytelling",
    stats: ["1,548 likes", "856 saves", "433 shares", "53 comments"],
  },
  {
    views: "53K",
    title: "Ely Outfitting Co.",
    subtitle: "Outdoor · Boundary Waters experience",
    stats: ["63 likes", "4 shares", "3 saves", "2 reposts"],
  },
  {
    views: "30K",
    title: "Goldbug Hot Springs",
    subtitle: "Independent organic travel storytelling",
    stats: ["810 likes", "673 shares", "590 saves", "22 comments"],
    independent: true,
  },
];

export const brandsWorkedWith = [
  { name: "Raycon Global", logo: null, key: "raycon" },
  { name: "ROMP Bags", logo: "/logos/romp-bags.png", key: "romp-bags" },
  { name: "Urban Armor Gear", logo: null, key: "urban-armor-gear" },
  { name: "Ely Outfitting Company", logo: "/logos/ely-outfitting.png", key: "ely-outfitting" },
  { name: "Stay Wyld Organics", logo: "/logos/stay-wyld.png", key: "stay-wyld" },
  { name: "Woolx", logo: null, key: "woolx" },
  { name: "K9 Sport Sack", logo: null, key: "k9-sport-sack" },
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
    objectPosition: "42% 45%",
  },
  {
    src: "/images/altra1.jpg",
    brand: "Altra",
    alt: "Altra running shoes lifestyle",
    objectPosition: "50% 78%",
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
    objectPosition: "50% 36%",
  },
  {
    src: "/images/RadFabJeans2.JPG",
    brand: "Rad Fab Jeans",
    alt: "Rad Fab Jeans lifestyle",
    objectPosition: "68% 24%",
  },
  {
    src: "/images/Rompbag1.jpg",
    brand: "Romp Bags",
    alt: "Romp bag lifestyle",
    objectPosition: "50% 44%",
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
    src: "/images/kelsey-surfing.png",
    alt: "Kelsey surfing on a calm lake",
    objectPosition: "50% 42%",
  },
  {
    src: "/images/outside-climb.JPG",
    alt: "Kelsey climbing",
    objectPosition: "48% 20%",
  },
  {
    src: "/images/outside-bike.jpeg",
    alt: "Kelsey biking",
    objectPosition: "50% 28%",
  },
  {
    src: "/images/outside-music.jpg",
    alt: "Kelsey playing music",
    objectPosition: "50% 30%",
  },
  {
    src: "/images/Diego.png",
    alt: "Diego the dog",
    caption: "Diego — unofficial creative director →",
    objectPosition: "50% 32%",
  },
];

export const contactServices = [
  "UGC",
  "Organic Social",
  "Paid Ads",
  "Photography",
  "Travel + Experience",
  "Raw Footage",
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
