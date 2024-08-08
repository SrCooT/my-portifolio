import { Container, Grid, styled, Typography } from "@mui/material";
import React from "react";
import { FaJsSquare, FaCss3Alt, FaHtml5, FaReact, FaGithub } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";

const StyledSkills = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up("xs")]: {
    paddingTop: "100px",
    paddingBottom: "50px",
    
    },
    [theme.breakpoints.up("md")]: {
    paddingTop: "0",
    },
  }));


const StyledList = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  cursor: "pointer",
  gap: "10px",
  border: "1px solid white",
  }));

const StyledTypographyContainer = styled(Container)(({ theme }) => ({
 display:"flex",
 justifyContent:"center",
 alignItems: "center",
  paddingTop: theme.breakpoints.up("xs") ? "50px" : "0",
  paddingBottom: theme.breakpoints.up("xs") ? "50px" : "0",
}));

const SkillItem = ({ icon: Icon, description }) => (
  <Typography
    color="secondary.light"
    variant="body1"
    display="flex"
    justifyContent="center"
    alignItems="center"
    flexDirection="column"
  >
    <Icon fontSize="80px" />
    {description}
  </Typography>
);

const Skills = () => (
  <StyledSkills>
    <Container maxWidth="lg">
      <Grid container>
        <Grid item xs={12} md={7}>
          <Typography color="secondary.light" variant="h1" textAlign="center">
            Skills
          </Typography>
          <StyledList>
            <StyledTypographyContainer>
              <SkillItem
                icon={FaHtml5}
                description="HTML: Linguagem de marcação que define a estrutura básica das páginas"
              />
            
            <SkillItem
              icon={FaCss3Alt}
              description="CSS: Ferramenta para estilizar páginas web, controlando layout, cores e fontes."
            />
            <SkillItem
              icon={FaJsSquare}
              description="JavaScript: Linguagem de programação que permite adicionar interatividade e funcionalidades dinâmicas aos sites"
              />
            <SkillItem
              icon={FaReact}
              description="React: Biblioteca JavaScript para criar interfaces de usuário com componentes reutilizáveis e eficientes."
              />
            <SkillItem
              icon={BiLogoTypescript}
              description="TypeScript: Superset de JavaScript que adiciona tipagem estática, facilitando a detecção de erros e a manutenção do código."
              />
            <SkillItem
              icon={FaGithub}
              description="GitHub: Plataforma de hospedagem de código que oferece controle de versão e facilita a colaboração em projetos de software."
              />
              </StyledTypographyContainer>
          </StyledList>
        </Grid>
      </Grid>
    </Container>
  </StyledSkills>
);

export default Skills;
