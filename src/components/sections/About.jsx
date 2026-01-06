import React from "react";

const roles = [
  {
    title: "Frontend Development",
    description:
      "Building responsive, accessible, and high-performance user interfaces with a strong focus on usability and clean UI.",
    skills: [
      "React",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Responsive Design",
      "Component Architecture",
      "State Management",
      "API Integration",
    ],
  },
  {
    title: "Backend Development",
    description:
      "Developing scalable server-side applications, secure REST APIs, and efficient database architectures.",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "MongoDB",
      "Mongoose",
      "Authentication (JWT)",
      "API Security",
    ],
  },
  {
    title: "Full-Stack Development",
    description:
      "End-to-end MERN stack development, handling frontend, backend, authentication, and deployment workflows.",
    skills: [
      "MERN Stack",
      "JWT Authentication",
      "Role-Based Access",
      "API Integration",
      "Deployment (Vercel)",
      "Environment Variables",
      "Performance Optimization",
    ],
  },
];

const WhatIDo = () => {
  return (
    <section className="bg-black pt-24 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-semibold text-white">What I Do</h2>
          <p className="text-neutral-500 mt-4 text-lg">
            I build complete web solutions with a focus on quality and
            scalability.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {roles.map((role) => (
            <div
              key={role.title}
              className="
                group
                rounded-2xl
                p-6
                transition-all duration-300
                bg-gradient-to-br from-[#1a1a1a] via-[#0f0f0f] to-black
                border border-white/20
                shadow-[0_0_25px_rgba(229,231,235,0.12)]
                hover:shadow-[0_0_45px_rgba(229,231,235,0.35)]
                hover:border-white/40
                hover:-translate-y-1
              ">
              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-200 mb-3">
                {role.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed mb-5">
                {role.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {role.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      text-sm
                      text-gray-300
                      border border-white/20
                      px-3 py-1
                      rounded-full
                      bg-black/40
                    ">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
