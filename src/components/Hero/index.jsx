import { Card, CardActionArea, CardMedia } from "@mui/material";
import * as Styles from "./styles";

const Hero = ({ hero }) => {
  return (
    <Card
      sx={{
        width: 200,
        height: 280,
        position: "relative",
        borderRadius: 3,
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
