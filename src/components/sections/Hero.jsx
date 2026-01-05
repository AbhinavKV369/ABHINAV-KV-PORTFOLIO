import React from "react";
import profileImg from "../../assets/Portfolio-Image.png";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen px-6 lg:px-16 pt-24 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
      {/* Left Image */}
      <div className="relative w-full max-w-md lg:max-w-lg flex justify-center lg:justify-start">
        {/* Electric Border */}
        <div className=" rounded-xl p-[2px]">
          <img
            src={profileImg}
            alt="Profile"
            className="electric-border w-full h-auto object-contain rounded-xl bg-black"
          />
        </div>
      </div>

      {/* Right Text */}
      <div
        className="text-center lg:text-left max-w-lg space-y-4"
        data-aos="fade-left">
        <div className="text-center lg:text-left max-w-lg space-y-4">
          <p className="text-xl text-gray-300 font-medium">Hi, I’m</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            ABHINAV KV
          </h1>
          <p className="text-2xl sm:text-3xl text-gray-200 font-semibold">
            MERN Stack Developer <br className="hidden sm:block" />
          </p>
        </div>

        {/* Buttons */}
        <div className="flex justify-center lg:justify-start gap-4 pt-4">
          <a
            href="#contact"
            className="px-2 mx-3 py-3 bg-gray-600 text-white rounded-lg text-base font-semibold hover:bg-gray-700 transition">
            Contact Me
          </a>
          <a
            href="#projects"
            className="px-6 py-3 border border-gray-600 text-purple-600 rounded-lg text-base font-semibold hover:bg-purple-50 transition">
            See Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
