'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
   const pathname = usePathname();

   return (
      <nav className="flex gap-6 py-8 font-mono">
         <Link
            href="/"
            className={`px-3 py-1.5 rounded-lg hover:opacity-90 text-sm ${pathname === '/' ? 'bg-[#1a1a1a] text-white' : 'text-gray-500 hover:text-gray-200'
               }`}
         >
            About
         </Link>
         <Link
            href="/blogs"
            className={`px-3 py-1.5 rounded-lg hover:opacity-90 text-sm ${pathname === '/blogs' ? 'bg-[#1a1a1a] text-white' : 'text-gray-500 hover:text-gray-200'
               }`}
         >
            Blogs
         </Link>
         <Link
            href="/contact"
            className={`px-3 py-1.5 rounded-lg hover:opacity-90 text-sm ${pathname === '/contact' ? 'bg-[#1a1a1a] text-white' : 'text-gray-500 hover:text-gray-200'
               }`}
         >
            Contact
         </Link>
      </nav>
   );
} 