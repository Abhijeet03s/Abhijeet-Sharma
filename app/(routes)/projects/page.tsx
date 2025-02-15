"use client";

import { FaGithub, FaLink } from "react-icons/fa";
import { motion } from "framer-motion";

interface Project {
   title: string;
   description: string;
   tech: string[];
   link: string;
   github: string;
}

const projects: Project[] = [
   {
      title: "Subtracker",
      description: "A subscription management app with analytics and Google Calendar integration for tracking and reminders.",
      tech: ["Next.js", "TypeScript", "Google Calendar API"],
      link: "https://sub-tracker.xyz",
      github: "https://github.com/Abhijeet03s/SubTracker",
   },
   {
      title: "Pocket Planner",
      description: "PocketPlanner is a user-friendly expense tracking application designed to help individuals take control of their personal finances.",
      tech: ["Next.js", "TanStack Query", "Tailwind CSS"],
      link: "https://pocket-planner-app.vercel.app",
      github: "https://github.com/Abhijeet03s/Pocket-Planner",
   },
   {
      title: "Light-Lens",
      description: "A modern e-commerce platform for eyewear featuring a sleek catalog, shopping cart functionality, and secure authentication.",
      tech: ["Reactjs", "Tailwind CSS", "Framer Motion", "Firebase"],
      link: "https://light-lens.vercel.app",
      github: "https://github.com/Abhijeet03s/Light-Lens"
   }
];

export default function ProjectsPage() {
   return (
      <motion.div
         className="space-y-6 md:space-y-8"
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5 }}
      >
         <div className="space-y-3 md:space-y-4">
            <h2 className="text-lg md:text-xl font-bold font-sora tracking-wide">A Peek Into My Tinkering</h2>
            <p className="text-gray-300 text-sm md:text-base">
               A showcase of projects I&apos;ve built (completely, I promise!). The ideas though? Let&apos;s just say they were half-baked 🫠. But hey, the effort counts, right?
            </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {projects.map((project, index) => (
               <div
                  key={index}
                  className="group relative p-4 md:p-6 rounded-lg bg-[#1a1a1a] border border-gray-800 hover:border-gray-700 transition-all duration-300 overflow-hidden"
               >
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-300/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="space-y-4 relative">
                     <div className="space-y-2">
                        <h2 className="text-lg font-semibold group-hover:text-blue-400 transition-colors font-sora">
                           {project.title}
                        </h2>
                        <p className="text-gray-300 text-sm leading-relaxed">
                           {project.description}
                        </p>
                     </div>

                     <div className="flex flex-wrap gap-2 font-sora">
                        {project.tech.map((tech, techIndex) => (
                           <span
                              key={techIndex}
                              className="px-2 py-1 text-xs bg-[#252525] text-gray-300 rounded group-hover:bg-[#2a2a2a] transition-colors"
                           >
                              {tech}
                           </span>
                        ))}
                     </div>

                     <div className="flex items-center gap-3 pt-4 font-sora">
                        <a
                           href={project.link}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="inline-flex items-center gap-2 px-2 py-2 md:px-4 md:py-2 bg-blue-500/10 text-blue-400 rounded-md hover:bg-blue-500/20 transition-colors text-xs md:text-sm"
                        >
                           <FaLink />
                           Live Demo
                        </a>
                        <a
                           href={project.github}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="inline-flex items-center gap-2 px-2 py-2 md:px-4 md:py-2 bg-gray-800/50 text-gray-300 rounded-md hover:bg-gray-800 transition-colors text-xs md:text-sm"
                        >
                           <FaGithub />
                           Source
                        </a>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </motion.div>
   );
} 
