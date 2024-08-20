import { Container, Grid, styled, Typography } from "@mui/material";
import React from "react";
import { FaJsSquare, FaCss3Alt, FaHtml5, FaReact, FaGithub } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";

const Skills = () => {
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
const StyledList = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent:"center", 
  [theme.breakpoints.up("xs")]: {
    paddingTop: "100px",
    paddingBottom: "50px",
    },
    [theme.breakpoints.up("md")]: {
    paddingTop: "0",
    }, 
  cursor: "pointer",
  
  
  }));


const SkillItem = ({ icon: Icon }) => (
  <Typography
    color="secondary.light"
    variant="body2"
    
  >
    <Icon fontSize="80px" />
    
  </Typography>
);
return (
  <>
  <StyledSkills>
    <Container maxWidth="lg">
      <Grid container display="flex" justifyContent="center">
        <Grid item xs={15} md={7}>
          <Typography color="secondary.light" variant="h1" textAlign="center">
            Skills
          </Typography>
          <StyledList>
              <SkillItem
                icon={FaHtml5}
              />
            <SkillItem
              icon={FaCss3Alt}
            />
            <SkillItem
              icon={FaJsSquare}
              />
            <SkillItem
              icon={FaReact}/>
            <SkillItem
              icon={BiLogoTypescript}/>
            <SkillItem
              icon={FaGithub}/>
              </StyledList>
        </Grid>
      </Grid>
    </Container>
  </StyledSkills>
    </>
  );
  };

export default Skills;
