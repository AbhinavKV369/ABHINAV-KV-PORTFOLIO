import React from "react";
import Truckhaulers from "../data/project/truckhaulers.webp";
import Knrfilmcity from "../data/project/knrfilmcity.webp";
import Voltex from "../data/project/volt-ex.webp";

const projects = [
  {
    title: "Truck Haulers",
    description:
      "A production-ready eCommerce platform for truck accessories featuring a clean UI, responsive design, and optimized user experience for real-world customers.",
    image: Truckhaulers,
    tech: ["Bootstrap", "Node.js","Express","MongoDB", "EJS"],
    live: "https://truckhaulers.shop/",
    github: "#",
  },
  {
    title: "KNR Filmcity",
    description:
      "A movie booking web application with an intuitive interface for browsing movies, selecting shows, and delivering a smooth, user-friendly booking experience.",
    image: Knrfilmcity,
    tech: ["React", "Tailwind"],
    live: "https://knrfilmcity.vercel.app/",
    github: "#",
  },
  {
    title: "Volt-ex",
    description:
      "A modern frontend eCommerce website for mobiles and accessories, built with a mobile-first approach and focused on performance and clean visual design.",
    image: Voltex,
    tech: ["React", "Tailwind"],
    live: "https://volt-ex-sand.vercel.app/",
    github: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section className="bg-black py-28 px-6 lg:px-20">
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
                border-2
              "
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000">
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

                <p className="text-neutral-400 text-md leading-relaxed line-clamp-3">
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
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-block
                      text-xs font-medium
                      text-white
                      border border-white/20
                      px-4 py-2
                      rounded-md
                      hover:border-white
                      transition
                    ">
                    View Live →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
