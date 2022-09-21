import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: "Helvetica";
    background-color: ${(props) => props.theme.colors.black};
  }
  .App {
    height: 100vh;
    display: flex;
  }
`;

export default GlobalStyles;
