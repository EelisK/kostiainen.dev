import * as React from "react";
import {
  Theme,
  AppBar,
  Toolbar,
  IconButton,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import HideOnScroll from "../HideOnScroll";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: theme.palette.background.default,
    flexGrow: 1,
    maxHeight: "100%"
  },
  titleContainer: {
    position: "relative",
    textAlign: "center",
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2)
  },
  title: {
    color: theme.palette.text.primary,
    lineHeight: `${theme.spacing(4)}px`,
    transition: theme.transitions.easing.sharp,
    cursor: "pointer",
    outline: "none",
    "&:after": {
      background: theme.palette.secondary.main,
      bottom: 0,
      content: '""',
      height: "2px",
      left: "50%",
      position: "absolute",
      transition: "width 0.3s ease 0s, left 0.3s ease 0s",
      width: 0
    },
    "&:hover:after": {
      width: "100%",
      left: 0
    },
    "&:focus:after": {
      left: "50%",
      width: 0
    }
  },
  grow: {
    flexGrow: 1
  },
  section: {
    display: "flex"
  }
}));

const LINKEDIN_PROFILE = "https://www.linkedin.com/in/eelis-kostiainen/";
const GITHUB_PROFILE = "http://github.com/EelisK";

const TopBar: React.FC<{}> = props => {
  const classes = useStyles(props);

  const openUrlOnClick = (url: string) => () => window.open(url, "_blank");

  return (
    <HideOnScroll>
      <AppBar position="sticky" className={classes.root}>
        <Toolbar>
          <div className={classes.grow} />
          <div className={classes.section}>
            <IconButton
              color="secondary"
              onClick={openUrlOnClick(LINKEDIN_PROFILE)}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              color="secondary"
              onClick={openUrlOnClick(GITHUB_PROFILE)}
            >
              <GitHubIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default TopBar;
