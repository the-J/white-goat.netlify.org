import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: myFirstFont;
    src: url("../public/fonts/whitneysemibold.woff");
  }
  
  html,
  body {
    font-family: 'Whitney', sans-serif;
  }
  
  h1 {
    font-size: 4rem;
    line-height: 4rem;
  }
  h2 {
    font-size: 3rem;
    line-height: 3rem;
  }
  h3 {
    font-size: 2rem;
    line-height: 2rem;
  }
  h4, h5, p {
    font-size: 1rem;
    line-height: 1rem;
  }
`;

export const Layout = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
`

export const ContentWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding-bottom: 100px;
`

export const ListWrapper = styled.div`
  width: 100%;
  max-width: 700px;
`
