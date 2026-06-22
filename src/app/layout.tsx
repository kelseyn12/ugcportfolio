import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://ugc.kelseynocek.com'),
  title: 'Kelsey Nocek | UGC Creator — Outdoor, Travel & Lifestyle Content',
  description:
    'UGC creator for outdoor, travel, adventure, lifestyle, and tech brands. Authentic, high-performing video and photo content based in Wisconsin.',
  keywords: [
    'UGC creator',
    'outdoor UGC',
    'travel content creator',
    'adventure UGC',
    'Wisconsin content creator',
    'TikTok creator',
    'UGC video',
  ],
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    google: 'aA1bR1WYZoCIOzBH6MH-yzgcR37G_MsL5h-nzk7-48o',
  },
  openGraph: {
    title: 'Kelsey Nocek | UGC Creator',
    description:
      'Authentic UGC video and photo content for outdoor, travel, adventure, lifestyle, and tech brands.',
    url: 'https://ugc.kelseynocek.com',
    siteName: 'Kelsey Nocek | UGC Creator',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kelsey Nocek — UGC Creator',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kelsey Nocek | UGC Creator',
    description:
      'Authentic UGC video and photo content for outdoor, travel, adventure, lifestyle, and tech brands.',
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
      <body>{children}</body>
    </html>
  );
}
