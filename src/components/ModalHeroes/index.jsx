import { useContext, useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { Award } from "lucide-react";
import { HeroesContext } from "../../contexts/HeroesContext";
import { calculateScore } from "../../utils/score";
import * as Styles from "./styles";
import HeroModal from "../HeroModal";

const ModalHeroes = () => {
  const { heroesSelected, setHeroesSelected } = useContext(HeroesContext);
  const [open, setOpen] = useState(false);

  const { innerWidth: width, innerHeight: height } = window;

  const hero1 = heroesSelected[0];
  const hero2 = heroesSelected[1];

  let scoreHero1, scoreHero2;

  useEffect(() => {
    if (heroesSelected.length === 2) {
      setOpen(true);
    }
  }, [heroesSelected]);

  const handleClose = () => {
    setOpen(false);
    setHeroesSelected([]);
  };

  if (hero1 && hero2) {
    scoreHero1 = calculateScore(hero1.powerstats);
    scoreHero2 = calculateScore(hero2.powerstats);
  }

  return (
    <Styles.Container open={open} onClose={handleClose}>
      <Styles.Wrapper
        style={{
          width: innerWidth > 800 ? "90rem" : innerWidth * 0.9,
          height: innerHeight * 0.9,
          padding: innerWidth < 800 ? "1rem" : "5rem",
          gap: innerWidth < 800 ? "2rem" : "7rem",
        }}
      >
        {hero1 && hero2 && (
          <>
            <Styles.WrapperTitle>
              <Award size={60} />
              <Styles.Title>
                {scoreHero1 > scoreHero2 ? hero1.name : hero2.name}
              </Styles.Title>
            </Styles.WrapperTitle>

            <Styles.WrapperHeroes>
              <HeroModal hero={hero1} />

              <Styles.WrapperScore>
                <Styles.TextScore
                  style={{
                    color: scoreHero1 > scoreHero2 ? "#618264" : "#c0392b",
                  }}
                >
                  {scoreHero1}
                </Styles.TextScore>
                <Styles.VsText>X</Styles.VsText>
                <Styles.TextScore
                  style={{
                    color: scoreHero2 > scoreHero1 ? "#618264" : "#c0392b",
                  }}
                >
                  {scoreHero2}
                </Styles.TextScore>
              </Styles.WrapperScore>

              <HeroModal hero={hero2} />
            </Styles.WrapperHeroes>
          </>
        )}
      </Styles.Wrapper>
    </Styles.Container>
  );
};

export default ModalHeroes;
