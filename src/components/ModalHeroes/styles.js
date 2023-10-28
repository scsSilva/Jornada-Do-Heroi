import { Box, Modal } from "@mui/material";
import styled from "styled-components";

export const Container = styled(Modal)({
  backgroundColor: "",
});

export const Wrapper = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundImage:
    "url(https://media.istockphoto.com/id/1318101781/photo/stone-black-texture-background-dark-cement-wall.webp?b=1&s=170667a&w=0&k=20&c=KZzF_N_cRN5OXL873BJWfKfsBY0qN6cpxXEb_RUpNNs=)",
  backgroundSize: "cover",
  borderRadius: "5px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const WrapperTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WrapperHeroes = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const HeroImage = styled.img`
  height: 30rem;
  border-radius: 5px;

  @media (max-width: 800px) {
    height: 18rem;
  }
`;

export const Title = styled.h1`
  font-size: 7rem;
  font-family: "Bebas Neue";
  color: #618264;
  margin-left: 1rem;
  padding-top: 1rem;
  text-align: center;

  @media (max-width: 800px) {
    font-size: 3rem;
  }
`;

export const WrapperScore = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  @media (max-width: 800px) {
    margin: 1rem;
  }
`;

export const VsText = styled.p`
  font-size: 3rem;
  font-family: "Bebas Neue", sans-serif;
`;

export const TextScore = styled.p`
  font-size: 8rem;
  font-family: "Bebas Neue", sans-serif;

  @media (max-width: 800px) {
    font-size: 6rem;
  }
`;
