import Image from "next/image";
import Link from "next/link";
import ProfilePic from "@/app/assets/profile.png";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Header() {
   return (
      <header className="flex flex-col md:flex-row justify-between items-center w-full py-6 md:py-8 border-b border-gray-50/5 mt-4 md:mt-6 gap-6 md:gap-0">
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
               <p className="text-sm md:text-base font-medium text-gray-300">Frontend Engineer & Designer</p>
            </div>
         </div>

         <div className="flex items-center gap-6 md:gap-4">
            <Link
               href="https://github.com/Abhijeet03s"
               target="_blank"
               className="hover:opacity-70 text-lg md:text-xl"
               aria-label="Visit my GitHub profile"
            >
               <FaGithub aria-hidden="true" />
               <span className="sr-only">GitHub</span>
            </Link>
            <Link
               href="https://x.com/iabhi43"
               target="_blank"
               className="hover:opacity-70 text-lg md:text-xl"
               aria-label="Follow me on X (formerly Twitter)"
            >
               <FaXTwitter aria-hidden="true" />
               <span className="sr-only">X (Twitter)</span>
            </Link>
         </div>
      </header>
   );
} 