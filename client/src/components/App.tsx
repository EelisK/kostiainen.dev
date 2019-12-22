import * as React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme, CssBaseline } from "@material-ui/core";
import WelcomePage from "./WelcomePage";
import MainPage from "./MainPage";

const theme = createMuiTheme({
  typography: {
    fontFamily: '"Overpass Mono Regular", monospace'
  },
  palette: {
    background: {
      default: "#FFFFFF"
    },
    primary: {
      main: "#FFFFFF",
      contrastText: "#400df8"
    },
    text: {
      primary: "#400df8"
    }
  }
});

export default () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <WelcomePage />
    <MainPage />
  </ThemeProvider>
);
