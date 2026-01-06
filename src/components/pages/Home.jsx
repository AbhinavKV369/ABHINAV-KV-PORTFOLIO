import React from 'react'
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import Hero from '../sections/Hero';
import SkillsSection from '../sections/Skills';
import ProjectsSection from '../sections/Projects';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ProjectsSection/>
      <SkillsSection/>
      <Footer />
    </>
  );
}

export default Home