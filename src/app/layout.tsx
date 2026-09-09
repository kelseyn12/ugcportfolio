import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://ugc.kelseynocek.com'),
  title: 'Kelsey Nocek | UGC Creator — Outdoor, Adventure, Travel, Tech & Lifestyle',
  description:
    'Midwest-based UGC creator making short-form video and photography for outdoor, adventure, travel, tech, pet, and lifestyle brands.',
  keywords: [
    'UGC creator',
    'outdoor UGC',
    'travel content creator',
    'adventure UGC',
    'Midwest content creator',
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
    title: 'Kelsey Nocek | UGC Creator',
    description:
      'Midwest-based UGC creator making short-form video and photography for outdoor, adventure, travel, tech, pet, and lifestyle brands.',
    url: 'https://ugc.kelseynocek.com',
    siteName: 'Kelsey Nocek',
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
      'Midwest-based UGC creator making short-form video and photography for outdoor, adventure, travel, tech, pet, and lifestyle brands.',
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
      <body className="font-sans antialiased">
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
