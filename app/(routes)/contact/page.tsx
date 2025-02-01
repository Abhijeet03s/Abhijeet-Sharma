"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
   return (
      <motion.div
         className="space-y-6 md:space-y-8"
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5 }}
      >
         <div className="space-y-3 md:space-y-4">
            <h1 className="text-lg md:text-xl font-bold font-sora tracking-wide">Let&apos;s Create Something Awesome Together! 🚀</h1>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
               Got something cool to build or talk about? Slide into my <a href="https://x.com/iabhi43" className="text-blue-500">Twitter DM</a> or drop an <a href="mailto:abhiijeetsharma476@gmail.com" className="text-blue-500">email</a> — it&apos;s where the magic happens! ✨📩
            </p>
         </div>
      </motion.div>
   );
}