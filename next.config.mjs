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
      const isDev = process.env.NODE_ENV === 'development';

      return [
         {
            source: '/:path*',
            headers: [
               {
                  key: 'Content-Security-Policy',
                  value: [
                     "default-src 'self'",
                     // Allow eval and inline scripts for Next.js
                     `script-src 'self' 'unsafe-eval' 'unsafe-inline' ${isDev ? 'http://localhost:* https://localhost:*' : ''}`,
                     // Allow inline styles and Google Fonts
                     "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
                     // Allow images from various sources
                     "img-src 'self' data: blob: https://*.githubusercontent.com",
                     // Allow Google Fonts
                     "font-src 'self' https://fonts.gstatic.com",
                     // Allow connections for development
                     `connect-src 'self' ${isDev ? 'ws://localhost:* http://localhost:* https://localhost:*' : ''}`,
                     // Prevent iframe embedding
                     "frame-ancestors 'none'",
                     // Base URI restriction
                     "base-uri 'self'",
                     // Form submissions
                     "form-action 'self'",
                     // Force HTTPS except in development
                     ...(isDev ? [] : ["upgrade-insecure-requests"]),
                     // Worker scripts
                     "worker-src 'self' blob:",
                     // Manifest
                     "manifest-src 'self'"
                  ].filter(Boolean).join('; ')
               },
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
