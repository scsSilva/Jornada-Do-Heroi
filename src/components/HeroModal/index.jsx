import { Card, CardActionArea, CardMedia } from "@mui/material";
import { Brain, Crown, Dumbbell, Heart, Swords, Zap } from "lucide-react";
import * as Styles from "./styles";

const HeroModal = ({ hero }) => {
  const { powerstats } = hero;
  const { innerWidth: width, innerHeight: height } = window;

  return (
    <Card
      sx={{
        width: innerWidth > 800 ? 210 : innerWidth * 0.5,
        height: innerWidth > 800 ? 300 : innerHeight * 0.3,
        position: "relative",
        borderRadius: 3,
        overflow: "hidden",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height={innerWidth > 800 ? 300 : innerHeight * 0.3}
          image={hero.images.lg}
          alt={hero.slug}
        />
        <Styles.Content>
          <Styles.Powerstats>
            <Styles.ItemList>
              <Brain size={32} />
              <Styles.StatValue>{powerstats.intelligence}</Styles.StatValue>
            </Styles.ItemList>
            <Styles.ItemList>
              <Dumbbell size={32} />
              <Styles.StatValue>{powerstats.strength}</Styles.StatValue>
            </Styles.ItemList>
            <Styles.ItemList>
              <Zap size={32} />
              <Styles.StatValue>{powerstats.speed}</Styles.StatValue>
            </Styles.ItemList>
            <Styles.ItemList>
              <Heart size={32} />
              <Styles.StatValue>{powerstats.durability}</Styles.StatValue>
            </Styles.ItemList>
            <Styles.ItemList>
              <Crown size={32} />
              <Styles.StatValue>{powerstats.power}</Styles.StatValue>
            </Styles.ItemList>
            <Styles.ItemList>
              <Swords size={32} />
              <Styles.StatValue>{powerstats.combat}</Styles.StatValue>
            </Styles.ItemList>
          </Styles.Powerstats>
        </Styles.Content>
      </CardActionArea>
    </Card>
  );
};

export default HeroModal;
