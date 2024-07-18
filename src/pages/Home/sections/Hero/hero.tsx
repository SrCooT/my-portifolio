import { styled } from "@mui/material";
import Avatar from "../../../../assets/img/avatar.png.jpg";
import  Grid  from "@mui/material/Grid";
import { Container } from "react";


const Hero = () => {
  const StyledHero = styled("div")(() => ({
    backgroundColor: "black",
  }));
  const StyledImg = styled("img")(() => ({
    width: "30%",
    borderRadius: "50%",
  }));

  return (
    <>
      <StyledHero>
        <Container>
            <Grid container spacing={2}>
                < Grid item xs={4}>
                <StyledImg src={Avatar} />
                </Grid>
                <Grid item xs={8}>
                <Typography color="primary">Juno Cristian</Typography>
                </Grid>
            </Grid>    
        </Container>
        </StyledHero>
    </>
  );
};

export default Hero;
