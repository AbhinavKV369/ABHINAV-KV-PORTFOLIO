import React from "react";
import Button from "../ui/Button";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

const contactActions = [
  {
    label: "Email Me",
    value: "abhinavkvmayyil@gmail.com",
    href: "mailto:abhinavkvmayyil@gmail.com",
    icon: Mail,
    color: "cyan",
  },
  {
    label: "WhatsApp",
    value: "+91 XXXXX X6062",
    href: "https://wa.me/917558916062",
    icon: Phone,
    color: "green",
  },
  {
    label: "GitHub",
    value: "github.com/AbhinavKV369",
    href: "https://github.com/AbhinavKV369",
    icon: Github,
    color: "purple",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/abhinavkv",
    href: "https://www.linkedin.com/in/abhinav-kv-3a352333b/",
    icon: Linkedin,
    color: "blue",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="bg-black pt-15 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-semibold text-white">Let’s Connect</h2>
          <p className="text-neutral-500 mt-4 text-lg">
            Have a project, idea, or opportunity? Let’s talk.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {contactActions.map(({ label, value, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                bg-neutral-950
                border border-white/10
                rounded-2xl
                p-6
                text-center
                transition-all duration-300
                hover:border-white/30
                hover:bg-neutral-900
              "
            >
              <div className="flex justify-center mb-4">
                <Icon className="w-8 h-8 text-white group-hover:scale-110 transition" />
              </div>

              <h3 className="text-lg font-semibold text-white">{label}</h3>
              <p className="text-neutral-400 text-sm mt-2">{value}</p>
            </a>
          ))}
        </div>

        {/* CTA */}
      </div>
    </section>
  );
};

export default Contact;
