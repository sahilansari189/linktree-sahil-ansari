import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sahil Ansari - Blockchain Developer',
  description: 'Full Stack Blockchain Developer specializing in smart contracts, DeFi protocols, and decentralized applications. Connect with me across all platforms.',
  keywords: ['blockchain', 'web3', 'smart contracts', 'defi', 'ethereum', 'solidity', 'developer'],
  authors: [{ name: 'Sahil Ansari' }],
  creator: 'Sahil Ansari',
  openGraph: {
    title: 'Sahil Ansari - Blockchain Developer',
    description: 'Full Stack Blockchain Developer specializing in smart contracts, DeFi protocols, and decentralized applications.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sahil Ansari - Blockchain Developer',
    description: 'Full Stack Blockchain Developer specializing in smart contracts, DeFi protocols, and decentralized applications.',
    creator: '@blockchain_dev',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}