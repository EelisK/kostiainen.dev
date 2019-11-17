import * as React from "react";
import Contact from "./Contact";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme();

export default () => (
  <ThemeProvider theme={theme}>
    <Contact />
  </ThemeProvider>
);
