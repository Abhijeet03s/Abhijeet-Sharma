import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

export default function ContactPage() {
   return (
      <div className="space-y-8">
         <div className="space-y-4">
            <h1 className="text-xl font-bold">Let&apos;s Create Something Awesome Together! 🚀</h1>
            <p className="text-gray-300 text-base leading-relaxed">
               Got something cool to share? Slide into my <a href="https://x.com/iabhi43" className="text-blue-500">Twitter</a> or drop an <a href="mailto:abhiijeetsharma476@gmail.com" className="text-blue-500">email</a>—it’s where the magic happens! ✨📩
            </p>
         </div>
      </div>
   )
}