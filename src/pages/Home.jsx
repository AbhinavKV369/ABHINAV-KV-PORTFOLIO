import React, { lazy, Suspense } from "react";
import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";
import Button from "../components/ui/Button";
import Hero from "../components/sections/Hero";
import AboutSection from "../components/sections/About";
import ChatWidget from "../components/chat/ChatWidget";

const SkillsSection = lazy(() => import("../components/sections/Skills"));
const ProjectsSection = lazy(() => import("../components/sections/Projects"));
const Contact = lazy(() => import("../components/sections/Contact"));

const Home = () => {
  return (
    <div id="home" className="relative">
      {/* Chat Widget Button */}
      <div>
        <ChatWidget/>
      </div>
      {/* Download CV Button */}
    

      <Navbar />
      <Hero />
      <AboutSection />
      <Suspense fallback={<h1 className="text-center">Loading...</h1>}>
        <SkillsSection />
        <ProjectsSection />
        <Contact />
      </Suspense>
      <Footer />
    </div>
  );
};

export default Home;
