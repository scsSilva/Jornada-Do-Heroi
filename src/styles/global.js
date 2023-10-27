import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    color: #fff;
  }

  button, input {
    font-size: 1.5rem;
  }

  :root {
    font-size: 62.5%;
  }
`;
