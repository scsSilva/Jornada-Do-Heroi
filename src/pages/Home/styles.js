import styled from "styled-components";

export const ContainerLoading = styled.main`
  height: 100vh;
  width: 100vw;
  background-color: #001c30;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextLoading = styled.p`
  font-size: 6rem;
  font-family: "Bebas Neue", sans-serif;
  font-style: italic;
`;

export const Container = styled.main`
  height: 100vh;
  width: 100vw;
  background-color: #001c30;
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  padding: 0 2rem;
  overflow: hidden;

  @media (max-width: 1300px) and (min-width: 1000px) {
    grid-template-columns: 1fr 2fr;
  }

  @media (max-width: 1000px) and (min-height: 700px) {
    grid-template-rows: 1fr 3fr;
    grid-template-columns: none;
    padding: 2rem 1rem;
  }

  @media (max-width: 1000px) and (max-height: 700px) {
    grid-template-columns: none;
    grid-template-rows: 1fr 2fr;
    padding: 1rem;
  }
`;

export const FormSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
`;

export const ImgLogo = styled.img`
  height: 4rem;
  margin-bottom: 2rem;

  @media (max-width: 700px) {
    height: 2.5rem;
    margin-bottom: 1rem;
  }
`;

export const Input = styled.input`
  width: 60%;
  height: 6rem;
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  padding: 0 1rem;

  @media (max-width: 1300px) and (min-width: 1000px) {
    width: 90%;
  }

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  height: 6rem;
  width: 60%;
  background: #4e4feb;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s background;

  &:hover {
    background: #393abf;
  }

  @media (max-width: 1300px) and (min-width: 1000px) {
    width: 90%;
  }

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const ListSection = styled.section`
  height: 80%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #4e4feb;
  border-radius: 5px;
  overflow: hidden;

  @media (max-width: 1000px) {
    height: 100%;
  }
`;

export const ButtonPage = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`;

export const ItemList = styled.li`
  list-style: none;
`;
