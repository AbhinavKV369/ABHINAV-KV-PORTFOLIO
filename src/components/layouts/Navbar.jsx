import React, { useState, useRef, useEffect } from "react";
import { Home, User, Code, Archive, Mail } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const links = [
    { name: "Home", href: "#home", icon: <Home /> },
    { name: "About", href: "#about", icon: <User /> },
    { name: "Skills", href: "#skills", icon: <Code /> },
    { name: "Projects", href: "#projects", icon: <Archive /> },
    { name: "Contact", href: "#contact", icon: <Mail /> },
  ];

  // Close menu on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50">
      {/* Desktop Navbar */}
      <nav className="hidden md:flex mx-auto h-16 px-4 items-center justify-center">
        <ul className="flex items-center gap-10 text-[15px] font-medium tracking-wide">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-white transition-colors duration-200 hover:text-purple-400">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center justify-between mx-4 px-4 h-16">
        <span className="text-white text-lg font-bold"></span>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none">
          <div className="space-y-2">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </button>
      </div>

      {/* Mobile Vertical Menu */}
      {isOpen && (
        <nav
          ref={menuRef}
          className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center gap-8 animate-slideDown">
          <ul className="flex flex-col items-center gap-8 text-white font-medium text-lg">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex flex-col items-center hover:text-purple-400 transition-colors">
                  {React.cloneElement(link.icon, { size: 28 })}
                  <span className="mt-1 text-sm">{link.name}</span>
                </a>
              </li>
            ))}
          </ul>

          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-white text-4xl font-bold ">
            &times;
          </button>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
