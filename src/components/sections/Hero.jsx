import profileImg from "../../assets/Portfolio-Image.webp";
import Button from "../ui/Button";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "MERN Stack Developer";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="hero"
      className="relative w-full px-6 lg:px-16 pt-32 pb-16 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-purple-600/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-blue-600/20 rounded-full blur-[120px] -z-10" />

      {/* Left Image Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full max-w-md lg:max-w-lg flex justify-center lg:justify-start"
      >
        <div className="relative group">
          {/* Animated Glow behind image */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
          
          <motion.div 
            whileHover={{ y: -10, scale: 1.02 }}
            className="relative rounded-2xl p-[2px] bg-white/10 backdrop-blur-sm border border-white/20"
          >
            <img
              src={profileImg}
              alt="Profile"
              fetchPriority="high"
              decoding="async"
              className="w-full h-auto max-h-[500px] object-cover rounded-2xl bg-black/50"
            />
          </motion.div>
          
          {/* Floating Badge (Optional decorative element) */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -right-6 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl hidden md:block"
          >
            <p className="text-cyan-400 font-bold text-sm">1+ Years Exp.</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Text Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center lg:text-left max-w-xl space-y-6"
      >
        <motion.div variants={itemVariants} className="space-y-2">
          <p className="text-cyan-400 font-mono tracking-widest uppercase text-sm font-bold">
            Available for hire
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight">
            ABHINAV <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-300">KV</span>
          </h1>
          <div className="h-10 sm:h-12">
            <p className="text-2xl sm:text-3xl text-gray-300 font-medium">
              {text}
              <span className="animate-pulse inline-block w-1 h-8 bg-cyan-400 ml-1 align-middle" />
            </p>
          </div>
        </motion.div>

        <motion.p variants={itemVariants} className="text-gray-400 text-lg leading-relaxed max-w-lg">
          Crafting high-performance, scalable web applications with the MERN stack. 
          Focused on building seamless user experiences and robust backend architectures.
        </motion.p>

        {/* Social Icons */}
        <motion.div variants={itemVariants} className="flex justify-center lg:justify-start gap-5 py-2">
          <a href="#" className="p-2 rounded-full bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:bg-white/10 transition-all text-gray-400 hover:text-cyan-400">
            <Github size={22} />
          </a>
          <a href="#" className="p-2 rounded-full bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:bg-white/10 transition-all text-gray-400 hover:text-cyan-400">
            <Linkedin size={22} />
          </a>
          <a href="#" className="p-2 rounded-full bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:bg-white/10 transition-all text-gray-400 hover:text-cyan-400">
            <Twitter size={22} />
          </a>
          <a href="#" className="p-2 rounded-full bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:bg-white/10 transition-all text-gray-400 hover:text-cyan-400">
            <Mail size={22} />
          </a>
        </motion.div>

        {/* Buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
          <Button text="Get In Touch" href="#contact" />
          <Button text="View Projects" href="#projects" color="green" />
          <Button
            color="white"
            text="Resume 📩"
            href="/AbhinavKV.pdf"
            download
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
