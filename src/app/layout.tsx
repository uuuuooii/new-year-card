import Footer from '@components/components/design/footer';
import EmotionProvider from '@components/lib/provider/emotion';
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  manifest: '/manifest.json',
  title: `Create AI New Year's Cards`,
  description: `Make Your Own Personalized New Year's Cards`,
  openGraph: {
    title: `Create AI New Year's Cards`,
    description: `Make Your Own Personalized New Year's Cards`,
    images: {
      url: 'https://new-year-card-silk.vercel.app/_next/image?url=%2Fmain.png&w=1920&q=75',
    },
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <EmotionProvider>
          {children}
          <Analytics />
          <Footer />
        </EmotionProvider>
      </body>
    </html>
  );
}
