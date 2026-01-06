import React from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import Hero from "../sections/Hero";
import SkillsSection from "../sections/Skills";
import ProjectsSection from "../sections/Projects";
import Button from "../ui/Button";
import AboutSection from "../sections/About";
import Contact from "../sections/Contact";

const Home = () => {
  return (
    <div id="home" className="relative">
      {/* Download CV Button */}
      <div className="fixed top-30 right-6 z-50">
        <Button color="white" text="Resume 📩" href="/AbhinavKV.pdf" download />
      </div>

      <Navbar />
      <Hero />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
