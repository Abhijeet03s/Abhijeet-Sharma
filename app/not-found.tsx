'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function NotFound() {
   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

   useEffect(() => {
      const handleMouseMove = (e: MouseEvent) => {
         setMousePosition({ x: e.clientX, y: e.clientY });
      };

      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
   }, []);

   return (
      <div className="fixed inset-0 z-50 bg-background">
         <div className="h-full w-full relative flex flex-col items-center justify-center overflow-hidden">
            <div
               className="absolute inset-0 opacity-30 blur-3xl transition-transform duration-500"
               style={{
                  background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgb(59 130 246 / 0.8), transparent 25%)`,
               }}
            />

            <div className="space-y-6 text-center z-10">
               <h1 className="text-9xl font-bold font-mono glitch-text">404</h1>
               <p className="text-2xl text-gray-400 font-mono">
                  Oops! Looks like you&apos;ve ventured into the void
               </p>
               <div className="space-y-2">
                  <p className="text-gray-500 font-mono">
                     {`> ERROR: Page_Not_Found`}
                  </p>
                  <p className="text-gray-500 font-mono">
                     {`> SOLUTION: Navigate_Back_To_Safety`}
                  </p>
               </div>
               <Link
                  href="/"
                  className="inline-block px-6 py-3 bg-blue-500 text-white rounded-md font-mono hover:bg-blue-600 transition-colors"
               >
                  Return Home
               </Link>
            </div>
         </div>
      </div>
   );
} 