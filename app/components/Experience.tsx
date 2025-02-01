"use client";

import { motion } from "framer-motion";

interface ExperienceItem {
   title: string;
   company: string;
   duration?: string;
}

const experiences: ExperienceItem[] = [
   {
      title: "Frontend Engineer",
      company: "Teknikoz",
      duration: "Jan 2025 - Present",
   },
   {
      title: "Web Developer Intern",
      company: "Sustaincred",
      duration: "July 2024 - Dec 2024"
   },
   {
      title: "Full Stack Developer Intern",
      company: "Latracal Solutions",
      duration: "Apr 2023 - Jun 2023"
   }
];

export default function Experience() {
   return (
      <motion.section
         className="space-y-6 md:space-y-8"
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5 }}
      >
         <h2 className="text-lg md:text-xl font-bold text-white font-sora tracking-wide">Experience</h2>

         <div className="space-y-6 md:space-y-8 relative">
            <div className="absolute left-[3px] top-[24px] w-[2px] h-[calc(100%-24px)] bg-gray-900" />

            {experiences.map((exp, index) => (
               <div key={index} className="group relative pl-6 flex flex-col md:flex-row md:justify-between gap-1 md:gap-0">
                  <div
                     className={`absolute left-0 top-[12px] w-2 h-2 rounded-full z-10 ${index === 0
                        ? 'bg-blue-500 ring-4 ring-blue-500/20 animate-pulse'
                        : 'bg-gray-600'
                        }`}
                  />

                  <div className="space-y-1 flex-grow">
                     <div className="flex items-center gap-3">
                        <p className="text-sm md:text-base text-white font-medium">
                           {exp.title}
                        </p>
                     </div>
                     <p className="text-gray-300 text-xs md:text-sm font-medium">
                        {exp.company}
                     </p>
                  </div>
                  {exp.duration && (
                     <span className="text-gray-300 text-xs md:text-sm">
                        {exp.duration}
                     </span>
                  )}
               </div>
            ))}
         </div>
      </motion.section>
   );
} 