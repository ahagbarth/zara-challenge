import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import { StoreProvider } from '@/lib/StoreContext/StoreProvider';

export const metadata: Metadata = {
  title: 'MBST',
  description: 'Zara challenge',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <Header />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
