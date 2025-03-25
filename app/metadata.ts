import { Metadata } from 'next';

export const metadata: Metadata = {
   title: 'About Me | Frontend Engineer',
   description: 'Frontend Engineer passionate about creating beautiful and functional web experiences. Learn about my journey, skills, and experience.',
   openGraph: {
      images: [
         {
            url: '/images/og/Abhijeet-Sharma-ogImage.png',
            width: 1200,
            height: 630,
            alt: 'Abhijeet Sharma - Frontend Engineer',
         },
      ],
   },
   twitter: {
      images: ['/images/og/Abhijeet-Sharma-ogImage.png'],
   },
   alternates: {
      canonical: 'https://abhijeetsh.com',
   },
}; 