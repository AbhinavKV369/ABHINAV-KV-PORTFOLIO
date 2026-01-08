import React from "react";

import Button from "../ui/Button";
import { projects } from "../data/projects";


const ProjectsSection = React.memo(() => {
  return (
    <section id="projects" className="bg-black pt-15 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-semibold text-white">Projects</h2>
          <p className="text-neutral-500 mt-4 mx-auto text-lg">
            Real-world projects built with attention to detail, performance, and
            clean UI.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="
                group
                rounded-2xl
                overflow-hidden
                bg-neutral-950
                transition-all duration-300
                hover:bg-neutral-900
                border-white/30
                border-2">
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="
                    w-full h-44 object-cover
                    transition-transform duration-500
                    group-hover:scale-105
                  "
                />
              </div>

              {/* Content */}
              <div className="p-5 space-y-4">
                <h3 className="text-lg font-semibold text-white">
                  {project.title}
                </h3>

                <p className="text-neutral-400 text-md leading-relaxed ">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                        text-[15px]
                        text-neutral-400
                        border border-white/10
                        px-2.5 py-1
                        rounded-full
                      ">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="pt-2">
                  <Button
                    color="white"
                    text="Live ⚡"
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                  {project.github == "#" ? (
                    ""
                  ) : (
                    <Button
                      color="green"
                      text="Github"
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default ProjectsSection;
