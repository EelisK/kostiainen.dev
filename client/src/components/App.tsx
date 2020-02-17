import * as React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme, CssBaseline } from "@material-ui/core";
import WelcomePage from "./WelcomePage";
import MainPage from "./MainPage";
import Contact from "./Contact";
import "devicon";

const theme = createMuiTheme({
  typography: {
    fontFamily: '"Overpass Mono Regular", monospace'
  },
  palette: {
    type: "light",
    primary: {
      main: "#ff6021",
      dark: "#f15b74",
      light: "#fc8569"
    },
    secondary: {
      main: "#1e66f1",
      dark: "#0f56e0",
      light: "#296ef0"
    },
    text: {
      primary: "#092545",
      secondary: "#c9d7e0"
    },
    divider: "#BDBDBD"
  }
});

export default () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <WelcomePage />
    <MainPage />
    <Contact />
  </ThemeProvider>
);
