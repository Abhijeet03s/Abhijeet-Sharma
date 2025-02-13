import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import { Raleway, Sora } from 'next/font/google';

// Initialize the fonts
const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
});

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://abhijeetsh.com'),
  title: {
    default: 'Abhijeet Sharma | Frontend Engineer',
    template: '%s | Abhijeet Sharma'
  },
  description: "Frontend Engineer specializing in building exceptional digital experiences with modern web technologies",
  keywords: ['Frontend Engineer', 'Web Developer', 'React Developer', 'Next.js Developer'],
  authors: [{ name: 'Abhijeet Sharma' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://abhijeetsh.com',
    title: 'Abhijeet Sharma | Frontend Engineer',
    description: 'Frontend Engineer specializing in building exceptional digital experiences',
    siteName: 'Abhijeet Sharma'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abhijeet Sharma | Frontend Engineer',
    description: 'Frontend Engineer specializing in building exceptional digital experiences',
    creator: '@iabhi43'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-background ${raleway.variable} ${sora.variable} font-raleway`}>
        <div className="flex flex-col min-h-screen max-w-5xl mx-auto px-4 md:px-6">
          <Header />
          <Navigation />
          <main className="flex-grow pb-6 md:pb-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
