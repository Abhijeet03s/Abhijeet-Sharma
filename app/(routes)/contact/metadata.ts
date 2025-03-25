import { Metadata } from 'next';

export const metadata: Metadata = {
   title: 'Contact & Connect',
   description: 'Get in touch with me for collaboration opportunities, project inquiries, or just to say hello.',
   openGraph: {
      images: [
         {
            url: '/images/og/Abhijeet-Sharma-Contact-ogImage.png',
            width: 1200,
            height: 630,
            alt: 'Abhijeet Sharma - Contact',
         },
      ],
   },
   twitter: {
      images: ['/images/og/Abhijeet-Sharma-Contact-ogImage.png'],
   },
   alternates: {
      canonical: 'https://abhijeetsh.com/contact',
   },
};