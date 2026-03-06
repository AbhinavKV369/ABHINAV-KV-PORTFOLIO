import React from "react";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import { projects } from "../../data/projects";
import { ExternalLink, Github } from "lucide-react";


const ProjectsSection = React.memo(() => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const projectVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="projects" className="relative bg-black pt-32 pb-24 px-6 lg:px-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="text-sm font-mono text-cyan-400 tracking-[0.3em] uppercase mb-4">Portfolio</h2>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto" />
        </motion.div>

        {/* Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={projectVariants}
              whileHover={{ y: -10 }}
              className="
                group
                relative
                rounded-3xl
                overflow-hidden
                bg-white/5
                backdrop-blur-md
                border border-white/10
                hover:border-white/20
                transition-all duration-300
              ">
              {/* Image Container with Overlay */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                {/* Floating Tech Badges on Image */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {project.tech.slice(0, 2).map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-[10px] text-white/90 uppercase tracking-wider">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* All Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                        text-[10px]
                        font-semibold
                        text-cyan-300/80
                        bg-cyan-400/10
                        border border-cyan-400/20
                        px-2 py-0.5
                        rounded-md
                      ">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-bold text-white hover:text-cyan-400 transition-colors"
                  >
                    Live Demo <ExternalLink size={16} />
                  </a>
                  {project.github !== "#" && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-white transition-colors"
                    >
                      Source Code <Github size={16} />
                    </a>
                  )}
                </div>
              </div>

              {/* Shine Effect */}
              <div className="absolute -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-40 group-hover:animate-shine" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});

export default ProjectsSection;
