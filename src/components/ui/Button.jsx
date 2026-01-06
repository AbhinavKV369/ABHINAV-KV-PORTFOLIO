import React from "react";

const blackNeonStyles = {
  blue: `
    bg-black
    text-cyan-300
    border border-cyan-500/40
    shadow-[0_0_15px_rgba(34,211,238,0.5)]
    hover:shadow-[0_0_35px_rgba(34,211,238,0.9)]
    hover:border-cyan-400
  `,
  purple: `
    bg-black
    text-purple-300
    border border-purple-500/40
    shadow-[0_0_15px_rgba(168,85,247,0.5)]
    hover:shadow-[0_0_35px_rgba(168,85,247,0.9)]
    hover:border-purple-400
  `,
  green: `
    bg-black
    text-emerald-300
    border border-emerald-500/40
    shadow-[0_0_15px_rgba(52,211,153,0.5)]
    hover:shadow-[0_0_35px_rgba(52,211,153,0.9)]
    hover:border-emerald-400
  `,
  pink: `
    bg-black
    text-pink-300
    border border-pink-500/40
    shadow-[0_0_15px_rgba(244,114,182,0.5)]
    hover:shadow-[0_0_35px_rgba(244,114,182,0.9)]
    hover:border-pink-400
  `,
};

const Button = ({ text = "Explore", color = "blue", onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-3 py-3 mx-1
        rounded-lg
        bg-black
        font-semibold
        tracking-wider
        transition-all duration-300 
        focus:outline-none
         focus:ring-white/10
        ${blackNeonStyles[color]}
      `}>
      {text}
    </button>
  );
};

export default Button;
