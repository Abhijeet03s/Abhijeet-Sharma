"use client";

import Image from "next/image";
import Link from "next/link";
import ProfilePic from "@/app/assets/profile.png";
import { FaXTwitter, FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";
import { SiPeerlist } from "react-icons/si";
import { HiLink } from "react-icons/hi";

export default function Header() {
   return (
      <motion.header
         className="flex flex-col md:flex-row justify-between items-center w-full py-6 md:py-8 border-b border-gray-50/5 mt-4 md:mt-6 gap-6 md:gap-0"
         initial={{ opacity: 0, y: -10 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5 }}
      >
         <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 text-center md:text-left">
            <Image
               src={ProfilePic}
               alt="Profile"
               width={80}
               height={80}
               className="rounded-full"
            />
            <div className="space-y-1 md:space-y-2">
               <h1 className="text-xl md:text-2xl font-bold font-sora text-foreground tracking-wide">Abhijeet Sharma</h1>
               <p className="text-sm md:text-base font-medium text-gray-300">Frontend Engineer</p>
            </div>
         </div>

         <div className="flex items-center gap-6 md:gap-4">
            <Link
               href="https://github.com/Abhijeet03s"
               target="_blank"
               className="hover:opacity-70 text-lg md:text-xl"
               aria-label="Visit my GitHub profile"
               title="Visit my GitHub profile"
            >
               <FaGithub aria-hidden="true" />
               <span className="sr-only">GitHub</span>
            </Link>
            <Link
               href="https://peerlist.io/abhijeetsharma"
               target="_blank"
               className="hover:opacity-70 text-lg md:text-"
               aria-label="Check out my profile on Peerlist"
               title="Check out my profile on Peerlist"
            >
               <SiPeerlist aria-hidden="true" />
               <span className="sr-only">Peerlist</span>
            </Link>
            <Link
               href="https://x.com/iabhi43"
               target="_blank"
               className="hover:opacity-70 text-lg md:text-xl"
               aria-label="X Profile (formerly Twitter)"
               title="X Profile (formerly Twitter)"
            >
               <FaXTwitter aria-hidden="true" />
               <span className="sr-only">X (Twitter)</span>
            </Link>
            <Link
               href="https://abhijeetsh.com/resume"
               target="_blank"
               className="hover:opacity-70 text-lg md:text-"
               aria-label="View my resume"
               title="View my resume"
            >
               <HiLink aria-hidden="true" />
               <span className="sr-only">Resume</span>
            </Link>
         </div>
      </motion.header>
   );
} 