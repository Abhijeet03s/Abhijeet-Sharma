"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navLinks = [
   { label: "About", href: "/" },
   { label: "Projects", href: "/projects" },
   { label: "Contact", href: "/contact" },
];

export default function Navigation() {
   const pathname = usePathname();

   return (
      <motion.nav
         className="relative flex gap-4 md:gap-6 py-6 md:py-8 font-sora overflow-x-auto"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.5, delay: 0.2 }}
      >
         {navLinks.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
               <Link key={href} href={href}>
                  <div className="relative">
                     {isActive && (
                        <motion.div
                           layoutId="activeIndicator"
                           className="absolute inset-0 bg-[#1a1a1a] rounded-md"
                           transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                     )}
                     <span
                        className={`relative px-3 py-1.5 text-xs md:text-sm whitespace-nowrap rounded-md hover:opacity-90 text-gray-300 hover:text-white ${isActive ? "text-white" : "text-gray-300 hover:text-white"
                           }`}
                     >
                        {label}
                     </span>
                  </div>
               </Link>
            );
         })}
      </motion.nav>
   );
}