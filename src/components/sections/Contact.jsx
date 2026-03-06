import { Mail, Phone, Github, Linkedin, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const contactActions = [
  {
    label: "Email Me",
    value: "abhinavkvmayyil@gmail.com",
    href: "mailto:abhinavkvmayyil@gmail.com",
    icon: <Mail size={28} />,
    color: "from-cyan-500/20 to-blue-500/20",
    hoverColor: "group-hover:text-cyan-400",
    borderColor: "group-hover:border-cyan-500/50",
  },
  {
    label: "WhatsApp",
    value: "+91 75589 16062",
    href: "https://wa.me/917558916062",
    icon: <Phone size={28} />,
    color: "from-green-500/20 to-emerald-500/20",
    hoverColor: "group-hover:text-green-400",
    borderColor: "group-hover:border-green-500/50",
  },
  {
    label: "GitHub",
    value: "github.com/AbhinavKV369",
    href: "https://github.com/AbhinavKV369",
    icon: <Github size={28} />,
    color: "from-purple-500/20 to-pink-500/20",
    hoverColor: "group-hover:text-purple-400",
    borderColor: "group-hover:border-purple-500/50",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/abhinavkv",
    href: "https://www.linkedin.com/in/abhinav-kv-3a352333b/",
    icon: <Linkedin size={28} />,
    color: "from-blue-500/20 to-indigo-500/20",
    hoverColor: "group-hover:text-blue-400",
    borderColor: "group-hover:border-blue-500/50",
  },
];

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="contact" className="relative bg-black pt-32 pb-24 px-6 lg:px-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="text-sm font-mono text-cyan-400 tracking-[0.3em] uppercase mb-4">Contact</h2>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let’s Connect</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto" />
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            Have a project, idea, or opportunity? I’m always open to discussing new ventures and creative solutions.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {contactActions.map(({ label, value, href, icon, color, hoverColor, borderColor }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className={`
                group
                relative
                bg-white/5
                backdrop-blur-md
                border border-white/10
                ${borderColor}
                rounded-3xl
                p-8
                text-center
                transition-all duration-300
                overflow-hidden
              `}
            >
              {/* Card Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className={`flex justify-center mb-6 text-gray-400 ${hoverColor} transition-colors duration-300 group-hover:scale-110`}>
                 {icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{label}</h3>
                <p className="text-gray-400 text-sm font-medium">{value}</p>
                
                <div className={`mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-500 ${hoverColor} transition-colors`}>
                  Connect <MessageSquare size={14} />
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
