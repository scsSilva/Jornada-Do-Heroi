import { useContext, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { HeroesContext } from "../../contexts/HeroesContext";
import { api } from "../../utils/api";
import Hero from "../../components/Hero";
import * as Styles from "./styles";

const Home = () => {
  const { heroes, setHeroes } = useContext(HeroesContext);
  const [isLoading, setIsLoading] = useState(true);
  const [actualPage, setActualPage] = useState(1);

  useEffect(() => {
    const fetchHeroes = async () => {
      const response = await api.get(
        "http://homologacao3.azapfy.com.br/api/ps/metahumans"
      );

      setHeroes(response.data);
      setIsLoading(false);
    };

    fetchHeroes();
  }, []);

  const itensPerPage = 6;

  const totalPages = Math.ceil(heroes.length / itensPerPage);
  const firstIndex = (actualPage - 1) * itensPerPage;
  const lastIndex = actualPage * itensPerPage;

  const handlePreviousPage = () => {
    setActualPage((prevState) => Math.max(prevState - 1, 1));
  };

  const handleNextPage = () => {
    setActualPage((prevState) => Math.min(prevState + 1, totalPages));
  };

  return (
    <Styles.Container>
      {isLoading ? (
        <p>Carregando...</p>
      ) : (
        <>
          <Styles.FormSection>
            <Styles.Input placeholder="Informe o nome" />
            <Styles.Button>Filtrar</Styles.Button>
          </Styles.FormSection>
          <Styles.ListSection>
            <Styles.ButtonPage onClick={handlePreviousPage}>
              <ChevronLeft size={100} />
            </Styles.ButtonPage>
            <Styles.List>
              {heroes.slice(firstIndex, lastIndex).map((item) => {
                return (
                  <Styles.ItemList key={item.id}>
                    <Hero hero={item} />
                  </Styles.ItemList>
                );
              })}
            </Styles.List>
            <Styles.ButtonPage onClick={handleNextPage}>
              <ChevronRight size={100} />
            </Styles.ButtonPage>
          </Styles.ListSection>
        </>
      )}
    </Styles.Container>
  );
};

export default Home;
