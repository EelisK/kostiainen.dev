import * as React from "react";
import { Theme, AppBar, Toolbar, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import HideOnScroll from "./HideOnScroll";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: theme.palette.text.primary,
    color: theme.palette.primary.main,
    flexGrow: 1,
    maxHeight: "100%"
  },
  logo: {
    height: "100%",
    maxHeight: theme.spacing(4)
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

interface Props {}

const TopBar: React.FC<Props> = props => {
  const classes = useStyles(props);

  const openUrlOnClick = (url: string) => () => window.open(url, "_blank");

  return (
    <HideOnScroll>
      <AppBar position="sticky" className={classes.root}>
        <Toolbar>
          <img src="/assets/isolated-layout.svg" className={classes.logo} />
          <div className={classes.grow} />
          <div className={classes.section}>
            <IconButton
              color="primary"
              onClick={openUrlOnClick(LINKEDIN_PROFILE)}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              color="primary"
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
