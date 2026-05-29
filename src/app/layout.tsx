import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kelsey Nocek | UGC Creator',
  description:
    'UGC creator specializing in authentic, high-performing video and photo content for outdoor, travel, adventure, lifestyle, and tech brands. Based in the Midwest.',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
