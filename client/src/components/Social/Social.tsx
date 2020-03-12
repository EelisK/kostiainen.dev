import * as React from "react";
import { Theme, IconButton, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "50%"
  },
  avatar: {
    boxShadow: theme.shadows[4],
    background: theme.palette.background.default,
    height: theme.spacing(8),
    width: theme.spacing(8),
    margin: theme.spacing(2),
    transition: `all 0.2s ${theme.transitions.easing.sharp}`,
    "&:hover": {
      transform: "scale(1.5)"
    },
    "& button:hover": {
      background: "inherit"
    }
  }
}));

const LINKEDIN_PROFILE = "https://www.linkedin.com/in/eelis-kostiainen/";
const GITHUB_PROFILE = "http://github.com/EelisK";

const openUrlOnClick = (url: string) => () => window.open(url, "_blank");

const Social: React.FC<{}> = props => {
  const classes = useStyles(props);
  return (
    <div className={classes.root} id="social">
      <Avatar className={classes.avatar}>
        <IconButton
          color="secondary"
          onClick={openUrlOnClick(LINKEDIN_PROFILE)}
        >
          <LinkedInIcon fontSize="large" />
        </IconButton>
      </Avatar>
      <Avatar className={classes.avatar}>
        <IconButton color="secondary" onClick={openUrlOnClick(GITHUB_PROFILE)}>
          <GitHubIcon fontSize="large" />
        </IconButton>
      </Avatar>
    </div>
  );
};

export default Social;
