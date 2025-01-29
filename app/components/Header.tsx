import Image from "next/image";
import Link from "next/link";
import ProfilePic from "@/app/assets/profile-pic.png";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Header() {
   return (
      <header className="flex justify-between items-center w-full py-8 border-b border-gray-50/5 mt-6 font-noto-mongolian">
         <div className="flex items-center gap-6">
            <Image
               src={ProfilePic}
               alt="Profile"
               width={80}
               height={80}
               className="rounded-full"
            />
            <div className="space-y-2">
               <h1 className="text-2xl font-bold font-sora text-foreground tracking-wide">Abhijeet Sharma</h1>
               <p className="font-medium text-gray-500">Frontend Engineer & Designer</p>
            </div>
         </div>

         <div className="flex items-center gap-4">
            <Link href="https://github.com/Abhijeet03s" target="_blank" className="hover:opacity-70 text-xl">
               <FaGithub />
            </Link>
            <Link href="https://x.com/iabhi43" target="_blank" className="hover:opacity-70 text-xl">
               <FaXTwitter />
            </Link>
            <Link href="https://www.linkedin.com/in/abhijeet-sharma03" target="_blank" className="hover:opacity-70 text-xl">
               <FaLinkedinIn />
            </Link>
         </div>
      </header>
   );
} 