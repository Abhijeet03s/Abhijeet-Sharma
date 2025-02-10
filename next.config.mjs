/** @type {import('next').NextConfig} */
const nextConfig = {
   async redirects() {
      return [
         {
            source: '/resume',
            destination: 'https://drive.google.com/file/d/19Q3NLTqAVZJvp3nlcx8n26DmTkOEQj2d/view',
            permanent: true,
         },
      ];
   },
};

export default nextConfig;
