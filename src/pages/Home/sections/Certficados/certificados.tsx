    import { Container, Grid,styled, Typography } from "@mui/material";
    import React from "react";





    const StyledProjetc = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    display: "flex",
    alignItems: "center",
    paddingTop: theme.breakpoints.up("md") ? "0" : "100px",
    paddingBottom: "50px",
    }));

    const StyledList = styled("div")({
    position: "relative",
    height: "500px", 
    display: "flex",
    alignItems:"center",
    justifyContent:"center",
    overflow: "hidden",
    });

    const SlideContainer = styled("div")({
    display: "flex",
    width:"350px",
    height:"350px",
    
    animation: "slide 30s infinite",
    "@keyframes slide": {
        "0%": { transform: "translateX(0)" },
        "20%": { transform: "translateX(-100%)" },
        "40%": { transform: "translateX(-200%)" },
        "60%": { transform: "translateX(-300%)" },
        "80%": { transform: "translateX(-400%)" },
        "100%": { transform: "translateX(0)" },
    },
    });


const Certificados = () => {
    return (
        
        <StyledProjetc>
        <Container maxWidth="lg">
            <Grid container display="flex" justifyContent="center">
            <Grid item xs={15} md={7}>
                <Typography color="Primary.Dark" variant="h1" textAlign="center">
                Certificados
                </Typography>
                <StyledList>
                <SlideContainer>
                   <a href="https://www.facebook.com/?locale=pt_BR" target="_blank"> <img src="/src/assets/pdfs/Captura de tela 2024-08-27 170117.png" alt="certificado front-end" /></a>
                   <a href=""><img src="/src/assets/pdfs/Captura de tela 2024-12-19 225350.png" alt="" /></a>
                </SlideContainer>
                </StyledList>
            </Grid>
            </Grid>
        </Container>
        </StyledProjetc>
    
    );
    };

export default Certificados;
