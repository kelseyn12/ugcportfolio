import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://ugc.kelseynocek.com'),
  title: 'Kelsey Nocek | UGC Creator & Storyteller — Outdoor, Travel & Lifestyle',
  description:
    'Midwest-based UGC creator and storyteller for outdoor, adventure, travel, gear, pet, and lifestyle brands. Concept-driven short-form content with creative and technical instincts.',
  keywords: [
    'UGC creator',
    'storyteller',
    'outdoor UGC',
    'travel content creator',
    'adventure UGC',
    'Wisconsin content creator',
    'short-form video',
  ],
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    google: 'aA1bR1WYZoCIOzBH6MH-yzgcR37G_MsL5h-nzk7-48o',
  },
  openGraph: {
    title: 'Kelsey Nocek | UGC Creator & Storyteller',
    description:
      'Concept-driven short-form video and photography for outdoor, travel, adventure, gear, pet, and lifestyle brands.',
    url: 'https://ugc.kelseynocek.com',
    siteName: 'Kelsey Nocek',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kelsey Nocek — UGC Creator & Storyteller',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kelsey Nocek | UGC Creator & Storyteller',
    description:
      'Concept-driven short-form video and photography for outdoor, travel, adventure, gear, pet, and lifestyle brands.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
