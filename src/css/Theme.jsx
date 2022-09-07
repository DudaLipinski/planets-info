import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    blue: "#112A40",
    green: "#5ABFA3",
    rose: "#F2DFA7",
    orange: "#F2AA52",
    pink: "#F2916D",
  },
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
