import * as React from "react";
import { ThemeProvider, withStyles } from "@material-ui/styles";
import { createMuiTheme, CssBaseline } from "@material-ui/core";
import SideBar from "./SideBar";

const theme = createMuiTheme({
  typography: {
    fontFamily: '"Overpass Mono", monospace'
  },
  palette: {
    background: {
      default: "#400df8"
    },
    primary: {
      main: "#400df8",
      contrastText: "#FFFFFF"
    },
    text: {
      primary: "#FFFFFF"
    }
  }
});

export default withStyles({
  logo: {}
})((props: any) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SideBar />
    </ThemeProvider>
  );
});
