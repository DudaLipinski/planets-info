import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: "Helvetica";
    background-color: ${(props) => props.theme.colors.blue};
  }
`;

export default GlobalStyles;
