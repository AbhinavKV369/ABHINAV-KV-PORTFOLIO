import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left */}
        <p className="text-sm text-gray-500">
          © {year} Abhinav. All rights reserved.
        </p>

        {/* Center */}
        <p className="text-sm text-gray-500 text-center">
          Built with <span className="font-medium text-gray-700">React</span>
        </p>

        {/* Right */}
        <div className="flex gap-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-black transition"
            aria-label="GitHub">
            <Github size={20} />
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-black transition"
            aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>

          <a
            href="mailto:yourmail@gmail.com"
            className="text-gray-500 hover:text-black transition"
            aria-label="Email">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
