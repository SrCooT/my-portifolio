import React from "react";
import Hero from "./sections/Hero/hero";
import NavBar from "./../../components/NavBar/NavBar";
import About from "./sections/About/about";
import Skills from "./sections/Skills/skills";
import Certificados from "./sections/Certficados/certificados";


const Home = () => {
  return (
    <>
      <NavBar />
      <Hero/>
      <About/>
      <Skills/>
      <Certificados />
    </>
  );
};

export default Home;
