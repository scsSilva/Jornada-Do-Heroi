import { CardContent, Typography } from "@mui/material";
import styled from "styled-components";

export const Content = styled(CardContent)`
  position: absolute;
  bottom: 0;
  width: 100%;
  overflow: hidden;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: rgba(0, 0, 0, 0.5);
  }
`;

export const HeroName = styled(Typography)`
  text-align: center;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  ${Content}:hover & {
    opacity: 1;
  }
`;

export const Powerstats = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  width: 100%;
  opacity: 0;
  list-style: none;
  transition: opacity 0.3s ease-in-out;

  ${Content}:hover & {
    opacity: 1;
  }
`;

export const ItemList = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
`;

export const StatValue = styled.p`
  font-family: "Bebas Neue";
  font-size: 2.5rem;
  font-weight: 600;
`;
