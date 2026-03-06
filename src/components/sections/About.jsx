import React from "react";
import { motion } from "framer-motion";
import { Code2, Server, Globe } from "lucide-react";

const roles = [
  {
    title: "Frontend Development",
    icon: <Code2 className="text-cyan-400" size={28} />,
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
    icon: <Server className="text-purple-400" size={28} />,
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
    icon: <Globe className="text-emerald-400" size={28} />,
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

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="relative bg-black pt-32 pb-24 px-6 lg:px-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="text-sm font-mono text-cyan-400 tracking-[0.3em] uppercase mb-4">Features</h2>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">What I Do</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6" />
          <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
            I specialize in building complete, modern web solutions with a focus on high performance, 
            scalability, and exceptional user experiences.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 lg:grid-cols-3 md:grid-cols-2"
        >
          {roles.map((role) => (
            <motion.div
              key={role.title}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="
                group
                relative
                rounded-2xl
                p-8
                bg-white/5
                backdrop-blur-md
                border border-white/10
                hover:border-white/20
                transition-all duration-300
                overflow-hidden
              ">
              {/* Card Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-6 p-3 w-fit rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                  {role.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {role.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed mb-8 text-sm md:text-base">
                  {role.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {role.skills.map((skill) => (
                    <span
                      key={skill}
                      className="
                        text-[11px]
                        font-medium
                        text-gray-300
                        border border-white/10
                        px-2.5 py-1
                        rounded-md
                        bg-white/5
                        hover:bg-white/10
                        hover:border-cyan-400/30
                        hover:text-cyan-400
                        transition-all
                        cursor-default
                      ">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
