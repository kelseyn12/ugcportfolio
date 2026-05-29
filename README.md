# ugc-portfolio

UGC creator portfolio for Kelsey Nocek — same design system as kelseynocek.com.

## Setup

```bash
npx create-next-app@latest ugc-portfolio --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd ugc-portfolio
```

Then replace the generated files with everything in this folder.

## Run

```bash
npm run dev
# → http://localhost:3000
```

## Things to swap before launch

### 1. Your photo (Hero.tsx)
Replace the placeholder div with:
```tsx
import Image from 'next/image';
// ...
<Image src="/your-photo.jpg" alt="Kelsey Nocek" fill className="object-cover" />
```
Drop your photo in `/public/your-photo.jpg`

### 2. Social handles (Hero.tsx + Contact.tsx)
Search for `YOUR_HANDLE` and replace with your real TikTok/Instagram.

### 3. Videos (VideoShowcase.tsx)
Replace each emoji placeholder div with a real `<video>` or Vimeo/TikTok embed:
```tsx
<video
  src="/videos/your-video.mp4"
  poster="/thumbs/your-thumb.jpg"
  controls
  playsInline
  preload="none"   // ← important: prevents autoplay
  className="w-full h-full object-cover"
/>
```
Or use a Vimeo iframe with `?autoplay=0`.

### 4. Case study stats (CaseStudies.tsx)
Update the `cases` array with your real brand names, stats, and descriptions.

### 5. UGC Photos (UGCPhotos.tsx)
Replace each emoji placeholder with:
```tsx
<Image src="/ugc/photo-1.jpg" alt="Outdoor gear UGC" fill className="object-cover rounded-2xl" />
```

### 6. Email
Already set to `kelseynocekugc@gmail.com` — update if needed.

## Deploy
Push to GitHub → connect to Vercel → done.
