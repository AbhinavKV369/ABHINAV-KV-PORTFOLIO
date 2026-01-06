import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css"; 

import Home from './components/pages/Home';
import Button from './components/ui/Button';
import NeonButton from './components/ui/Button';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, 
      easing: "ease-in-out", // easing function
      once: true, // animation happens only once while scrolling down
      mirror: false, // repeat animation on scroll up
    });
  }, []);
  return (
    <>
      <Home />
    </>
  );
}

export default App