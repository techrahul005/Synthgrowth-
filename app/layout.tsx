import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ovvela | Business Growth Agency',
  description: 'Ovvela helps businesses grow, build and scale through modern digital solutions.',
  keywords: ['Ovvela', 'Business Growth Agency', 'Professional Website Development', 'AI Automation', 'Social Media Management'],
  authors: [{ name: 'Ovvela' }],
  openGraph: {
    title: 'Ovvela | Business Growth Agency',
    description: 'Ovvela helps businesses grow, build and scale through modern digital solutions.',
    url: 'https://wa.me/918107425083',
    siteName: 'Ovvela',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ovvela | Business Growth Agency',
    description: 'Ovvela helps businesses grow, build and scale through modern digital solutions.',
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
