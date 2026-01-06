import React from "react";

const blackNeonStyles = {
  blue: `
    bg-black text-cyan-300 border border-cyan-500/40
    shadow-[0_0_15px_rgba(34,211,238,0.5)]
    hover:shadow-[0_0_35px_rgba(34,211,238,0.9)]
    hover:border-cyan-400
  `,
  green: `
    bg-black text-emerald-300 border border-emerald-500/40
    shadow-[0_0_15px_rgba(52,211,153,0.5)]
    hover:shadow-[0_0_35px_rgba(52,211,153,0.9)]
    hover:border-emerald-400
  `,
  pink: `
    bg-black text-pink-300 border border-pink-500/40
    shadow-[0_0_15px_rgba(244,114,182,0.5)]
    hover:shadow-[0_0_35px_rgba(244,114,182,0.9)]
    hover:border-pink-400
  `,
  white: `
    bg-black text-white border border-white/40
    shadow-[0_0_15px_rgba(255,255,255,0.4)]
    hover:shadow-[0_0_35px_rgba(255,255,255,0.9)]
    hover:border-white
  `,
};

const baseClasses = `
  px-3 py-3 mx-1 rounded-lg
  font-semibold tracking-wider
  transition-all duration-300
  focus:outline-none focus:ring-white/10
`;

const Button = ({ text = "Explore",color = "blue",href, onClick, ...rest}) => {
  const classes = `${baseClasses} ${blackNeonStyles[color] || blackNeonStyles.blue
    }`;

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {text}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes} {...rest}>
      {text}
    </button>
  );
};

export default Button;
