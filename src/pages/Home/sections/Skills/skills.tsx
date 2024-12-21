import { Container, Grid, styled, Typography } from "@mui/material";
import React from "react";
import { FaJsSquare, FaCss3Alt, FaHtml5, FaReact, FaGithub } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";


const StyledSkills = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  display: "flex",
  alignItems: "center",
  paddingTop: theme.breakpoints.up("md") ? "0" : "100px",
  paddingBottom: "50px",
}));

const StyledList = styled("div")({
  position: "relative",
  height: "250px", 
  display: "flex",
  alignItems:"center",
  justifyContent:"center",
  overflow: "hidden",
});

const SlideContainer = styled("div")({
  display: "flex",
  animation: "slide 16s infinite",
  "@keyframes slide": {
    "0%": { transform: "translateX(0)" },
    "20%": { transform: "translateX(-100%)" },
    "40%": { transform: "translateX(-200%)" },
    "60%": { transform: "translateX(-300%)" },
    "80%": { transform: "translateX(-400%)" },
    "100%": { transform: "translateX(0)" },
  },
  //animation:hover{ 1}
});

const SkillItem = ({ icon: Icon, description }) => (
  <div style={{ flex: "0 0 100%", textAlign: "center", }}>
    <Typography color="secondary.light" variant="body2">
      <Icon fontSize="80px" />
    </Typography>
    <Typography color="secondary.light" variant="body1">
      {description}
    </Typography>
  </div>
);

const Skills = () => {
  return (
    <StyledSkills>
      <Container maxWidth="lg">
        <Grid container display="flex" justifyContent="center">
          <Grid item xs={12} md={7}>
            <Typography color="secondary.light" variant="h1" textAlign="center">
              Skills
            </Typography>
            <StyledList>
              <SlideContainer>
                <SkillItem
                  icon={FaHtml5}
                  description=" Marca a estrutura básica das páginas web."
                />
                <SkillItem
                  
                  icon={FaCss3Alt}
                  description=" Estiliza o conteúdo e controla o layout das páginas."
                />
                <SkillItem
                  icon={FaJsSquare}
                  description=" Traz interatividade e dinâmica para as páginas web."
                />
                <SkillItem
                  icon={FaReact}
                  description="Biblioteca para construir interfaces de usuário eficientes."
                />
                <SkillItem
                  icon={BiLogoTypescript}
                  description=" Superconjunto de JavaScript que adiciona tipos estáticos."
                />
                <SkillItem
                  icon={FaGithub}
                  description=" Plataforma para versionamento de código e colaboração."
                />
              </SlideContainer>
            </StyledList>
          </Grid>
        </Grid>
      </Container>
    </StyledSkills>
  );
};

export default Skills;
