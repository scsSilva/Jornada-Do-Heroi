import styled from "styled-components";

export const Container = styled.main`
  height: 100vh;
  width: 100vw;
  background-color: #001c30;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const FormSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
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
  background-color: #4e4feb;
  border: none;
  border-radius: 5px;
`;

export const ListSection = styled.section`
  height: 80%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #eeeeee;
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
