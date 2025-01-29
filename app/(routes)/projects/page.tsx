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
      <div className="space-y-8">
         <div className="space-y-4">
            <h1 className="text-xl font-bold font-sora tracking-wide">A Peek Into My Tinkering</h1>
            <p className="text-gray-400 text-base">
               A showcase of projects I&apos;ve built (completely, I promise!). The ideas though? Let&apos;s just say they were half-baked 🫠. But hey, the effort counts, right?
            </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
               <div
                  key={index}
                  className="group relative p-6 rounded-lg bg-[#1a1a1a] border border-gray-800 hover:border-gray-700 transition-all duration-300 overflow-hidden"
               >
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-300/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="space-y-4 relative">
                     <div className="space-y-2">
                        <h2 className="text-lg font-semibold group-hover:text-blue-400 transition-colors font-sora">
                           {project.title}
                        </h2>
                        <p className="text-gray-400 text-sm leading-relaxed">
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
                           className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 text-blue-400 rounded-md hover:bg-blue-500/20 transition-colors text-sm"
                        >
                           Live Demo
                           <svg
                              className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                           >
                              <path
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 strokeWidth={2}
                                 d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                           </svg>
                        </a>
                        <a
                           href={project.github}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 text-gray-300 rounded-md hover:bg-gray-800 transition-colors text-sm"
                        >
                           <svg
                              className="w-4 h-4"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                           >
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                           </svg>
                           Source
                        </a>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
} 