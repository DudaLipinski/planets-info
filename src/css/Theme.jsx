import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    black: "#000000",
    blue: "#0b090f",
    blueCharcoal: "#5ABFA3",
    yellow: "#EAC853",
    pink: "#FFF4EE",
    champagnePink: "#F9E4D8",
    grey: "#899CA2",
  },
  fontSizes: {
    small: "16px",
    medium: "18px",
    large: "20px",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
