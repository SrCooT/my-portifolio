import React from "react";
import Hero from "./sections/Hero/hero";
import NavBar from "./../../components/NavBar/NavBar";
import About from "./sections/About/about";


const Home = () => {
  return (
    <>
      <NavBar />
      <Hero/>
      <About/>
    </>
  );
};

export default Home;
