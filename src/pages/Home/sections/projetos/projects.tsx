import {  styled, Typography } from "@mui/material";
import React from "react";

// Estilização do contêiner principal
const StyledProjetc = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  paddingTop: theme.breakpoints.up("md") ? "0" : "100px",
  paddingBottom: "50px",
}));


const SlideWrapper = styled("div")({
  position: "relative",
  width: "100%",
  overflow: "hidden",
  maxWidth: "800px", 
  margin: "0 auto", 
});

const SlidesContainer = styled("div")({
  display: "flex",
  transition: "transform 0.5s ease-in-out", 
  "& > div": {
    minWidth: "100%", 
    boxSizing: "border-box",
    padding: "20px",
    textAlign: "center",
    
  },
});

const Slide = styled("div")({
  textAlign: "center",
  
});

const SlideImage = styled("img")({
  maxWidth: "100%",
  height: "auto",
  borderRadius: "8px",
  marginTop: "20px",
});

const NavigationButton = styled("button")({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  color: "white",
  border: "none",
  borderRadius:"50%",
  padding: "10px 15px",
  cursor: "pointer",
  zIndex: 2,
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.69)",
  },
});

const projectData = [
  {
    title: "CooTDex (Pokedex)",
    description:
      "É uma aplicação web projetada para oferecer aos usuários uma experiência interativa na exploração e busca de informações sobre Pokémons. A aplicação permite visualizar detalhes de cada Pokémon, incluindo suas habilidades, movimentos e estatísticas, tudo isso com uma interface amigável e personalizável através de temas.",
      
    image: "/src/assets/img/CooTDex.png",
    alt: "Imagem do projeto CooTDex (Pokedex)",
    url: "https://github.com/SrCooT/projeto-pokedex", 
  },
  {
    title: "Fetch-Github-Api",
    description:
      "Uma Página de pesquisa, onde o intuito é coletar informações do usuários na API do GitHub,que sao elas, Nome Do usuário,Quantidade seguidores,Repositórios,Eventos,Forks,Stars,watchers,Tecnologia.",
    image: "/src/assets/img/fetch-github.png",
    alt: "Imagem da pagina inicial",
    url:"https://github.com/SrCooT/search-git"
  },
  {
    title: "Gerador de Conselhos ",
    description:
      "Um projeto utilizando api que gera conselhos aleatoriamente.",
    image: "/src/assets/img/conselho.gif",
    alt: "Imagem do projeto gerador de conselho",
    url:"https://github.com/SrCooT/Gerador-de-Conselhos"
  },
  {
    title: "One piece ",
    description:
      "Um projeto para testar habilidades com javascript.",
    image: "/src/assets/img/one-piece.gif",
    alt: "Imagem do projeto gerador de conselho",
    url:"https://github.com/SrCooT/Desafio-one-piece",
  },
  {
    title: "Entre no meu githuub ",
    description:
      "Lá voce encontrara outros projetos de minha autoria .",
    image: "/src/assets/img/github.png",
    alt: "Imagem do projeto gerador de conselho",
    url:"https://github.com/SrCooT",
  },
];

const Projetos = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  // Função para mudar de slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === projectData.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? projectData.length - 1 : prevSlide - 1
    );
  };

  return (
    <StyledProjetc>
      <Typography color="secondary.light" variant="h1" textAlign="center">
        Projetos
      </Typography>

      <SlideWrapper>
        <SlidesContainer style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {projectData.map((project, index) => (
            <Slide key={index}>
              <Typography variant="h2" color="secondary.light">
                {project.title}
              </Typography>
              <Typography variant="body2" color="secondary.light" paragraph>
                {project.description}
              </Typography>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <SlideImage src={project.image} alt={project.alt} />
              </a>
            </Slide>
          ))}
        </SlidesContainer>

        <NavigationButton style={{ left: "10px" }} onClick={prevSlide}>
          &#8249;
        </NavigationButton>
        <NavigationButton style={{ right: "10px" }} onClick={nextSlide}>
          &#8250;
        </NavigationButton>
      </SlideWrapper>
    </StyledProjetc>
  );
};

export default Projetos;