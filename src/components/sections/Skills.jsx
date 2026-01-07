import React, { memo } from "react";

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

const SkillItem = memo(({ skill }) => (
  <div className="flex flex-col items-center gap-3 transform transition-transform hover:scale-105">
    <img
      src={skill.src}
      alt={skill.name}
      loading="lazy"
      width={56}
      height={56}
      className="w-14 h-14 object-contain"
    />
    <span className="text-sm text-neutral-300">{skill.name}</span>
  </div>
));

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="flex items-center justify-center p-6 mt-20 bg-black">
      <div
        className="
          bg-black/90
          rounded-xl
          p-10
          max-w-5xl w-full
          border border-orange-500/30
          shadow-[0_0_12px_rgba(255,140,0,0.25)]
        ">
        <h2 className="text-4xl font-bold text-white text-center mb-10">
          Core Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {skills.map((skill) => (
            <SkillItem key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
