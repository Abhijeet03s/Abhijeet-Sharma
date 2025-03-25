import { Metadata } from 'next';

export const metadata: Metadata = {
   title: 'Projects & Work | Frontend Development Portfolio',
   description: 'Explore my portfolio of frontend development projects including web applications, responsive designs, and interactive user interfaces.',
   openGraph: {
      images: [
         {
            url: '/images/og/Abhijeet-Sharma-Projects-ogImage.png',
            width: 1200,
            height: 630,
            alt: 'Abhijeet Sharma - Frontend Projects',
         },
      ],
   },
   twitter: {
      images: ['/images/og/Abhijeet-Sharma-Projects-ogImage.png'],
   },
   alternates: {
      canonical: 'https://abhijeetsh.com/projects',
   },
};