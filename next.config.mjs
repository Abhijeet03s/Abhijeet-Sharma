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
   async headers() {
      return [
         {
            source: '/:path*',
            headers: [
               {
                  key: 'Strict-Transport-Security',
                  value: 'max-age=31536000; includeSubDomains; preload'
               },
               {
                  key: 'X-Content-Type-Options',
                  value: 'nosniff'
               },
               {
                  key: 'X-Frame-Options',
                  value: 'DENY'
               },
               {
                  key: 'X-XSS-Protection',
                  value: '1; mode=block'
               },
               {
                  key: 'Referrer-Policy',
                  value: 'strict-origin-when-cross-origin'
               },
               {
                  key: 'Permissions-Policy',
                  value: 'camera=(), microphone=(), geolocation=()'
               },
               {
                  key: 'Content-Security-Policy',
                  value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' vercel.live; style-src 'self' 'unsafe-inline' fonts.googleapis.com; img-src 'self' data: blob: *.githubusercontent.com; font-src 'self' fonts.gstatic.com; connect-src 'self' vitals.vercel-insights.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self'; upgrade-insecure-requests;"
               }
            ]
         },
         {
            source: '/_next/static/chunks/:path*',
            headers: [
               {
                  key: 'Content-Type',
                  value: 'application/javascript; charset=utf-8'
               },
               {
                  key: 'X-Content-Type-Options',
                  value: 'nosniff'
               }
            ]
         },
         {
            source: '/_next/static/css/:path*',
            headers: [
               {
                  key: 'Content-Type',
                  value: 'text/css; charset=utf-8'
               },
               {
                  key: 'X-Content-Type-Options',
                  value: 'nosniff'
               }
            ]
         },
         {
            source: '/_next/static/media/:path*',
            headers: [
               {
                  key: 'Content-Type',
                  value: 'image/:ext'
               },
               {
                  key: 'X-Content-Type-Options',
                  value: 'nosniff'
               }
            ]
         },
         {
            source: '/images/:path*',
            headers: [
               {
                  key: 'Content-Type',
                  value: 'image/:ext'
               },
               {
                  key: 'X-Content-Type-Options',
                  value: 'nosniff'
               },
               {
                  key: 'Cache-Control',
                  value: 'public, max-age=31536000, immutable'
               }
            ]
         }
      ];
   }
};

export default nextConfig;
