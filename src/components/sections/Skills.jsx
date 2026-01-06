const skills = [
  {
    name: "HTML",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "SASS",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
  },
  {
    name: "JavaScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Node JS",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "MongoDB",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Firebase",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  {
    name: "GitHub",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
];
const SkillsSection = () => {
  return (
    <section id="skills" className=" flex items-center justify-center p-6 mt-21 bg-black">
      <div
        className="
        bg-black/90
        rounded-xl
        p-10
        max-w-5xl w-full
        border border-orange-500/30
        shadow-[0_0_25px_rgba(255,140,0,0.25)]
      ">
        <h2 className="text-4xl font-bold text-white text-center mb-10">
          Core Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center gap-3">
              <img
                src={skill.src}
                alt={skill.name}
                loading="lazy"
                className="w-14 h-14 object-contain"
              />
              <span className="text-sm text-neutral-300">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;