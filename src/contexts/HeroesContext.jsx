import { createContext, useState } from "react";

export const HeroesContext = createContext();

export const HeroesContextProvider = ({ children }) => {
  const [heroes, setHeroes] = useState([]);
  const [heroesSelected, setHeroesSelected] = useState([]);

  return (
    <HeroesContext.Provider
      value={{ heroes, setHeroes, heroesSelected, setHeroesSelected }}
    >
      {children}
    </HeroesContext.Provider>
  );
};
