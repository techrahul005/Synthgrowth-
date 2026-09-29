import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SynthGrowth | Business Growth Agency',
  description: 'SynthGrowth helps growing businesses with professional websites, AI automation and social media management.',
  keywords: ['Business Growth Agency', 'Professional Website Development', 'AI Automation', 'Social Media Management', 'SynthGrowth'],
  authors: [{ name: 'SynthGrowth' }],
  openGraph: {
    title: 'SynthGrowth | Business Growth Agency',
    description: 'SynthGrowth helps growing businesses with professional websites, AI automation and social media management.',
    url: 'https://wa.me/918107425083',
    siteName: 'SynthGrowth',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SynthGrowth | Business Growth Agency',
    description: 'SynthGrowth helps growing businesses with professional websites, AI automation and social media management.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='50' fill='%2307545A'/><path d='M30 65 L50 35 L70 65' stroke='%23FF9D00' stroke-width='10' fill='none' stroke-linecap='round'/></svg>" />
      </head>
      <body className="min-h-screen bg-[#FFFDF9] text-[#18383A] antialiased selection:bg-[#FF9D00] selection:text-[#053C40]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
