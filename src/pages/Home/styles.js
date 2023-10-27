import styled from "styled-components";

export const Container = styled.main`
  height: 100vh;
  width: 100vw;
  background-color: #001c30;
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  padding: 0 2rem;
`;

export const FormSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
`;

export const Input = styled.input`
  width: 60%;
  height: 6rem;
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  padding: 0 1rem;
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
`;

export const ListSection = styled.section`
  height: 80%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #4e4feb;
  border-radius: 5px;
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
