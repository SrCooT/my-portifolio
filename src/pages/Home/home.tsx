import React from "react";
import Hero from "./sections/Hero/hero";
import About from "./sections/About/about";
import Skills from "./sections/Skills/skills";
import Certificados from "./sections/Certficados/certificados";
import Projetos from './sections/projetos/projects';
import Footer from "./sections/footer/footer";


const Home = () => {
  return (
    <>
      <Hero/>
      <About/>
      <Skills/>
      <Certificados />
      <Projetos/>
      <Footer/>
    </>
  );
};

export default Home;
