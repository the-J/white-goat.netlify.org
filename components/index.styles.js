import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: myFirstFont;
    src: url("../public/fonts/whitneysemibold.woff");
  }
  
  body {
    font-family: 'Whitney', sans-serif;
  }
`;

export const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
`
