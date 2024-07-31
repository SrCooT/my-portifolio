import {  Container, Grid, List, styled, Typography } from "@mui/material";
import React from "react";
import { FaJsSquare } from "react-icons/fa";
import { FaCss3Alt, FaHtml5 , FaReact , FaGithub } from "react-icons/fa6";
import { BiLogoTypescript } from "react-icons/bi";

const Skills = () => {
    const StyledSkills = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up("xs")]: {
        paddingTop: "10px",
        paddingBottom: "100px",
        
        },
        [theme.breakpoints.up("md")]: {
        paddingTop: "0",
        },
      }));
      const StyledList = styled("List")(({ theme }) => ({
        display:"flex",
        justifyContent: "center",
        flexDirection:"column",
        alignItems: "center",
        listStyle:"none",
        margin:"0 1em",
        fontSize: "1.5em",
        cursor:"pointer",
        background: `${theme.palette.primary.dark}`,
      }));

  return (
    <>
      <StyledSkills>
      <Container maxWidth="lg">
      <Grid container display="flex" justifyContent="center">
        <Typography color="secondary.light" variant="h1" textAlign="center">Skills</Typography>

        <StyledList>
          <List>
            <Typography color="secondary.light" variant="body1" textAlign="center">Skills<FaHtml5 /></Typography>
          <li><Typography color="secondary.light" variant="body1" textAlign="center">Skills<FaCss3Alt /></Typography></li>
          <li><Typography color="secondary.light" variant="body1" textAlign="center">Skills<FaJsSquare /></Typography></li>
          <li><Typography color="secondary.light" variant="body1" textAlign="center">Skills<FaReact /></Typography></li>
          <li><Typography color="secondary.light" variant="body1" textAlign="center">Skills<BiLogoTypescript /></Typography></li>
          <li><Typography color="secondary.light" variant="body1" textAlign="center">Skills<FaGithub/></Typography></li>
          </List>
         
        </StyledList>
        
       
        
        </Grid>
        </Container>
      </StyledSkills>
    </>
  );
};

export default Skills;
