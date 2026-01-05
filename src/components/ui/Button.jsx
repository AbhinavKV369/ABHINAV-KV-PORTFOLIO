import React from "react";

const Button = ({ text = "Contact Me" }) => {
  return (
    <button
      className="
        px-7 py-3.5
        text-sm font-medium tracking-wide
        text-neutral-100
        bg-black
        border border-neutral-700
        rounded-lg
        transition-all duration-300 ease-out
        hover:border-neutral-400
        hover:bg-neutral-900
        focus:outline-none
        focus:ring-2 focus:ring-neutral-600/40
      ">
      {text}
    </button>
  );
};

export default Button;
