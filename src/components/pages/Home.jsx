import React, { lazy, Suspense } from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import Button from "../ui/Button";
import Hero from "../sections/Hero";
import AboutSection from "../sections/About";

const SkillsSection = lazy(() => import("../sections/Skills"));
const ProjectsSection = lazy(() => import("../sections/Projects"));
const Contact = lazy(() => import("../sections/Contact"));

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
