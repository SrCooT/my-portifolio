import { Container, Grid, styled, Typography } from "@mui/material";
import React from "react";


const About = () => {
    const StyledAbout = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
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
    <StyledAbout>
    <Container maxWidth="lg" >
        <Grid container display="flex" justifyContent="center">
            <Grid item xs={12} md={7}>
            <Typography color="primary.dark" variant="h1" textAlign="center">
                About
            </Typography>
            <Typography
                color="secondary.dark"
                variant="h2"
                textAlign="center"
            ></Typography>
            <Typography
                color="secondary.contrastText"
                variant="body1"
                textAlign="center"
                lineHeight={1.6}
            >
                I am currently a salesman of electrical materials and am in
                transition career path to the technology field. I have always
                been fascinated by technology and, in 2015, I graduated in
                hardware and networks from Cebrac. After finding master Gustavo
                Guanabara on YouTube, I I was deeply interested in programming.
                I found the brothers Rodrigo and Ricardo from DevEmDobro, who
                only strengthened my passion and learn I have already carried
                out several projects during the course, which are all available
                for viewing in the Projects tab. My intention is to create
                technological solutions that impact certainly people's lives. I
                look forward to applying my skills and grow professionally in
                the technology area.
            </Typography>
            </Grid>
        </Grid>
        </Container>
    </StyledAbout>
    </>
);
};

export default About;
