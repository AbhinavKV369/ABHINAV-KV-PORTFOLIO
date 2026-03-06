import React, { memo } from "react";
import { motion } from "framer-motion";

import HtmlIcon from "../../assets/skills/html5.svg";
import CssIcon from "../../assets/skills/css3.svg";
import SassIcon from "../../assets/skills/sass.svg";
import JsIcon from "../../assets/skills/javascript.svg";
import ReactIcon from "../../assets/skills/react.svg";
import NodeIcon from "../../assets/skills/nodejs.svg";
import MongoIcon from "../../assets/skills/mongodb.svg";
import FirebaseIcon from "../../assets/skills/firebase.svg";
import GithubIcon from "../../assets/skills/github.svg";

const skills = [
  { name: "HTML", src: HtmlIcon },
  { name: "CSS", src: CssIcon },
  { name: "SASS", src: SassIcon },
  { name: "JavaScript", src: JsIcon },
  { name: "React", src: ReactIcon },
  { name: "Node JS", src: NodeIcon },
  { name: "MongoDB", src: MongoIcon },
  { name: "Firebase", src: FirebaseIcon },
  { name: "GitHub", src: GithubIcon },
];

const SkillItem = memo(({ skill, index }) => (
  <motion.div 
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } }
    }}
    whileHover={{ y: -5, scale: 1.1 }}
    className="flex flex-col items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:bg-white/10 transition-colors group"
  >
    <div className="relative">
      <div className="absolute -inset-2 bg-cyan-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
      <img
        src={skill.src}
        alt={skill.name}
        loading="lazy"
        width={56}
        height={56}
        className="w-14 h-14 object-contain relative z-10"
      />
    </div>
    <span className="text-sm font-medium text-neutral-300 group-hover:text-cyan-400 transition-colors">{skill.name}</span>
  </motion.div>
));

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="relative flex items-center justify-center py-24 px-6 bg-black overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] -z-10" />

      <div
        className="
          relative
          bg-white/5
          backdrop-blur-md
          rounded-3xl
          p-8 md:p-12
          max-w-6xl w-full
          border border-white/10
          shadow-2xl
        ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-mono text-cyan-400 tracking-[0.3em] uppercase mb-4">Expertise</h2>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Core Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto" />
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-6 md:gap-8"
        >
          {skills.map((skill, index) => (
            <SkillItem key={skill.name} skill={skill} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
