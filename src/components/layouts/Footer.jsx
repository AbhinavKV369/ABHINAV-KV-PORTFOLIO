import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10 mt-15">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white">Abhinav KV</h3>
            <p className="text-sm text-neutral-500 mt-1">
              Full Stack MERN Developer
            </p>
            <p className="text-xs text-neutral-600 mt-2">
              © {year} All rights reserved.
            </p>
          </div>

          {/* Center */}
          <div className="text-center">
            <span className="inline-flex items-center gap-2 text-sm text-neutral-400">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              Open to opportunities
            </span>
            <p className="text-xs text-neutral-600 mt-2">
              Built with React & Tailwind CSS
            </p>
          </div>

          {/* Right */}
          <div className="flex gap-5">
            <a
              href="https://github.com/AbhinavKV369"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="
                text-neutral-400
                hover:text-white
                transition
                hover:scale-110
              ">
              <Github size={20} />
            </a>

            <a
             href="https://www.linkedin.com/in/abhinav-kv-3a352333b/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="
                text-neutral-400
                hover:text-white
                transition
                hover:scale-110
              ">
              <Linkedin size={20} />
            </a>

            <a
              href="mailto:abhinavkvmayyil@gmail.com"
              aria-label="Email"
              className="
                text-neutral-400
                hover:text-white
                transition
                hover:scale-110
              ">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
