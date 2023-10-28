import { useContext, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { HeroesContext } from "../../contexts/HeroesContext";
import { api } from "../../utils/api";
import Hero from "../../components/Hero";
import * as Styles from "./styles";
import ModalHeroes from "../../components/ModalHeroes";
import { calculateItensGrid } from "../../utils/gridItens";
import usePagination from "../../hooks/usePagination";
import Logo from "../../assets/logo.svg";

const Home = () => {
  const { heroes, setHeroes } = useContext(HeroesContext);
  const [isLoading, setIsLoading] = useState(true);
  const inputRef = useRef(null);

  const { innerWidth: width, innerHeight: height } = window;

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

  const itensPerPage = calculateItensGrid({
    height: innerHeight,
    width: innerWidth,
  });

  const {
    currentPage,
    totalPages,
    handlePreviousPage,
    handleNextPage,
    getPageItems,
  } = usePagination(heroes.length, itensPerPage);

  const handleFilter = () => {
    const name = inputRef.current.value.trim().toLowerCase();

    if (name.length > 0) {
      const heroesFilter = heroes.filter((item) =>
        item.name.toLowerCase().includes(name)
      );

      setHeroes(heroesFilter);
    }
  };

  if (isLoading) {
    return (
      <Styles.ContainerLoading>
        <Styles.TextLoading>Carregando...</Styles.TextLoading>
      </Styles.ContainerLoading>
    );
  }

  return (
    <Styles.Container>
      <Styles.FormSection>
        <Styles.ImgLogo src={Logo} />
        <Styles.Input placeholder="Informe o nome" ref={inputRef} />
        <Styles.Button onClick={handleFilter}>Filtrar</Styles.Button>
      </Styles.FormSection>
      <Styles.ListSection>
        <Styles.ButtonPage onClick={handlePreviousPage}>
          <ChevronLeft
            size={width < 450 ? 70 : 100}
            color={currentPage === 1 ? "gray" : "white"}
          />
        </Styles.ButtonPage>
        <Styles.List>
          {getPageItems(heroes).map((item) => {
            return (
              <Styles.ItemList key={item.id}>
                <Hero hero={item} />
              </Styles.ItemList>
            );
          })}
        </Styles.List>
        <Styles.ButtonPage onClick={handleNextPage}>
          <ChevronRight
            size={width < 450 ? 70 : 100}
            color={currentPage === totalPages ? "gray" : "white"}
          />
        </Styles.ButtonPage>
      </Styles.ListSection>

      <ModalHeroes />
    </Styles.Container>
  );
};

export default Home;
