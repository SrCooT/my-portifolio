import { Box, styled } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";
import EmailIcon from "@mui/icons-material/Email";
import { AnimatedBackground } from "./../../../../components/AnimatedBackground/animatedBackground";
import React from "react";
import StyledButton from "./../../../../components/StyledButton/StyledButton";
import avatar from "../../../../assets/img/avatar.jpg";

function Hero() {
  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up("xs")]: {
      paddingTop: "100px",
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: "0",
    },
  }));
  const StyledImg = styled("img")(({ theme }) => ({
    width: "80%",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.contrastText}`,
  }));

  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <Box position="relative">
                <Box position="absolute" width={"150%"} top={-100} right={0}>
                  <AnimatedBackground />
                </Box>
              </Box>
              <Box position="relative" textAlign={"center"}>
                <StyledImg src={avatar} />
              </Box>
            </Grid>
            <Grid item xs={12} md={7}>
              <Typography
                color="secondary.light"
                variant="h1"
                textAlign="center"
                pb={2}
              >
                Juno Cristian
              </Typography>

              <Typography
                variant="h2"
                textAlign="center"
                color="secondary.dark"
              >
                Welcome My Friends
              </Typography>

              <Grid
                container
                display="flex"
                justifyContent="center"
                spacing={3}
                pt={3}
              >
                <Grid
                  item
                  xs={12}
                  md={4}
                  display="flex"
                  justifyContent="center"
                  
                >
                  <StyledButton onClick={() => console.log("download")}>
                    <SimCardDownloadIcon />
                    <a href="/src/assets/pdfs/Juno Cristian Meireles Virgínia desenvolvedor.pdf" target="blank"><Typography>Download CV</Typography></a>
                    
                  </StyledButton>
                </Grid>

                <Grid
                  item
                  xs={12}
                  md={4}
                  display="flex"
                  justifyContent="center"
                >
                  <StyledButton onClick={() => console.log("download")}>
                    <EmailIcon />
                   <a href="https://www.linkedin.com/in/juno-cristian/" target="_blank" rel="noopener noreferrer"><Typography>Contact me</Typography></a> 
                  </StyledButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  );
}

export default Hero;
