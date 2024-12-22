import React from "react";
import { Routes, Route } from "react-router-dom";
import Projetos from "../pages/Home/sections/projetos/projects";
import Skills from "../pages/Home/sections/Skills/skills";
import About from "../pages/Home/sections/About/about";
import Home from "../pages/Home/home";
import { styled } from "@mui/material";

const StyledRoutes = styled("div")(() => ({
  padding: "5px",
}));

const AppRoutes: React.FC = () => {
  return (
    <StyledRoutes>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projetos />} />
      </Routes>
    </StyledRoutes>
  );
};

export default AppRoutes;
