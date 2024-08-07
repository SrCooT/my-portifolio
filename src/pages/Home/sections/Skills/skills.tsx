import {  Container, Grid,  styled, Typography } from "@mui/material";
import React from "react";
import { FaJsSquare } from "react-icons/fa";
import { FaCss3Alt, FaHtml5 , FaReact , FaGithub } from "react-icons/fa6";
import { BiLogoTypescript } from "react-icons/bi";

const Skills = () => {
    const StyledSkills = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        display: "flex",
        justifyContent:"center",
        alignItems: "center",
        [theme.breakpoints.up("xs")]: {
        paddingTop: "10px",
        paddingBottom: "100px",
        },
        [theme.breakpoints.up("md")]: {
        paddingTop: "0",
        },
      }));
      const StyledList = styled("Container")(({ theme }) => ({
      Color: theme.palette.secondary.main,
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

  return (
    <>
      <StyledSkills>
      <Container maxWidth="lg">
        <Grid  >
      <Grid item xs={12} md={7}>
        <Typography color="secondary.light" variant="h1" textAlign="center">Skills</Typography>

        <StyledList>
          
            <Typography color="secondary.light" variant="body1" textAlign="center"  >
              <FaHtml5  fontSize={'80px'}> </FaHtml5>
              HTML: Linguagem de marcação que define a estrutura básica das páginas</Typography>
          <Typography color="secondary.light" variant="body1" ><FaCss3Alt  fontSize={'80px'}/>CSS: Ferramenta para estilizar páginas web, controlando layout, cores e fontes.</Typography>
          <Typography color="secondary.light" variant="body1" ><FaJsSquare  fontSize={'80px'}/>JavaScript: Linguagem de programação que permite adicionar interatividade e funcionalidades dinâmicas aos sites</Typography>
          <Typography color="secondary.light" variant="body1" ><FaReact fontSize={'80px'} />React: Biblioteca JavaScript para criar interfaces de usuário com componentes reutilizáveis e eficientes.</Typography>
          <Typography color="secondary.light" variant="body1" ><BiLogoTypescript  fontSize={'80px'}/>TypeScript: Superset de JavaScript que adiciona tipagem estática, facilitando a detecção de erros e a manutenção do código.</Typography>
          <Typography color="secondary.light" variant="body1"><FaGithub fontSize={'80px'}/>GitHub: Plataforma de hospedagem de código que oferece controle de versão e facilita a colaboração em projetos de software.</Typography>
          
         
        </StyledList>
        
       
        
        </Grid>
        </Grid>
        </Container>
      </StyledSkills>
    </>
  );
};

export default Skills;
