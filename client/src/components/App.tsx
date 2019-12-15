import * as React from "react";
import { ThemeProvider, withStyles } from "@material-ui/styles";
import { createMuiTheme, CssBaseline, Typography } from "@material-ui/core";
import { WelcomePage } from "./WelcomePage";

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

export default withStyles({
  logo: {}
})(() => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <WelcomePage />
      <Typography variant="h1">TODO</Typography>
    </ThemeProvider>
  );
});
