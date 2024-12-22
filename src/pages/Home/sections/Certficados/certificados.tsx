    import { Container, Grid,styled, Typography } from "@mui/material";
    import React from "react";





    const StyledCertificados = styled("div")(({ theme }) => ({
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
  justifyContent: "center",
  alignItems: "center",
  width: "100%", // Faz o contêiner ocupar toda a largura
  height:'100%',
  gap:'10px',
    "& img": {
    maxWidth: "100%",
    height: "350px",
    borderRadius: "50px",
    },
    animation: "slide infinite",
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
        
        <StyledCertificados>
        <Container maxWidth="lg">
            <Grid container display="flex" justifyContent="center">
            <Grid item xs={15} md={7}>
                <Typography color="Primary.Dark" variant="h1" textAlign="center">
                Certificates
                </Typography>
                <StyledList>
                <SlideContainer>
                   <a href="https://www.linkedin.com/company/dev-em-dobro/posts/?feedView=all" target="_blank"> <img src="/src/assets/pdfs/Captura de tela 2024-08-27 170117.png" alt="certificado front-end" /></a>
                   <a href=""><img src="/src/assets/pdfs/Captura de tela 2024-12-19 225350.png" alt="" /></a>
                </SlideContainer>
                </StyledList>
            </Grid>
            </Grid>
        </Container>
        </StyledCertificados>
    
    );
    };

export default Certificados;
