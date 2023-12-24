import EmotionProvider from '@components/lib/provider/emotion';
import type { Metadata } from 'next';
import Head from 'next/head';

export const metadata: Metadata = {
  title: '신년카드',
  description: '나만의 신년카드 만들기',
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
        </EmotionProvider>
      </body>
    </html>
  );
}
