import * as React from "react";
import {
  Theme,
  AppBar,
  Container,
  Typography,
  Toolbar
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { SvgAnimation } from "../Animation";
import HideOnScroll from "./HideOnScroll";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.text.primary,
    color: theme.palette.primary.main,
    flexGrow: 1,
    flexFlow: "row nowrap",
    justifyContent: "flex-start",
    alignItems: "center",
    height: "100px"
  },
  logo: {
    maxWidth: "100%",
    maxHeight: "100%"
  }
}));

const TopBar: React.FC<{}> = props => {
  const classes = useStyles(props);
  return (
    <HideOnScroll>
      <AppBar position="sticky" className={classes.root}>
        <Toolbar>
          <Typography variant="h5">kostiainen.dev</Typography>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default TopBar;
