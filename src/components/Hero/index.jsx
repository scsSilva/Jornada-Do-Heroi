import { useContext, useEffect, useState } from "react";
import { Card, CardActionArea, CardMedia } from "@mui/material";
import { HeroesContext } from "../../contexts/HeroesContext";
import * as Styles from "./styles";

const Hero = ({ hero }) => {
  const { heroesSelected, setHeroesSelected } = useContext(HeroesContext);
  const [isSelected, setSelected] = useState(false);

  useEffect(() => {
    if (heroesSelected.includes(hero)) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  }, [heroesSelected]);

  const handleClick = () => {
    if (!heroesSelected.includes(hero)) {
      setHeroesSelected((prevState) => [...prevState, hero]);
    } else {
      setHeroesSelected((prevState) =>
        prevState.filter((selectedHero) => selectedHero !== hero)
      );
    }
  };

  return (
    <Card
      sx={{
        width: 200,
        height: 280,
        position: "relative",
        borderRadius: 3,
        border: isSelected ? "4px solid #213363" : "",
      }}
      onClick={() => handleClick()}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="280"
          image={hero.images.lg}
          alt={hero.slug}
        />
        <Styles.Content>
          <Styles.HeroName
            variant="h2"
            style={{
              fontSize: "3rem",
              fontFamily: "Bebas Neue",
            }}
          >
            {hero.name}
          </Styles.HeroName>
        </Styles.Content>
      </CardActionArea>
    </Card>
  );
};

export default Hero;
