'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
   const pathname = usePathname();

   return (
      <nav className="flex gap-4 md:gap-6 py-6 md:py-8 font-sora overflow-x-auto">
         <Link
            href="/"
            className={`px-3 py-1.5 rounded-md hover:opacity-90 text-xs md:text-sm whitespace-nowrap ${pathname === '/' ? 'bg-[#1a1a1a] text-white' : 'text-gray-500 hover:text-gray-200'
               }`}
         >
            About
         </Link>
         <Link
            href="/projects"
            className={`px-3 py-1.5 rounded-md hover:opacity-90 text-xs md:text-sm whitespace-nowrap ${pathname === '/projects' ? 'bg-[#1a1a1a] text-white' : 'text-gray-500 hover:text-gray-200'
               }`}
         >
            Projects
         </Link>
         <Link
            href="/contact"
            className={`px-3 py-1.5 rounded-md hover:opacity-90 text-xs md:text-sm whitespace-nowrap ${pathname === '/contact' ? 'bg-[#1a1a1a] text-white' : 'text-gray-500 hover:text-gray-200'
               }`}
         >
            Contact
         </Link>
      </nav>
   );
} 