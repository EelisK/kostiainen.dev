import * as React from "react";
import { Theme, IconButton, Avatar, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import SKILLS_LIST from "./list";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: "50%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
  },
  gridContainer: {
    padding: theme.spacing(6),
    width: "100%",
    margin: 0
  },
  gridItem: {
    padding: "0 !important"
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

const openUrlOnClick = (url: string) => () => window.open(url, "_blank");

const Social: React.FC<{}> = props => {
  const classes = useStyles(props);
  return (
    <div className={classes.root} id="skills">
      <Grid
        container
        spacing={3}
        justify="center"
        className={classes.gridContainer}
      >
        {SKILLS_LIST.map(({ name, href, icon }) => (
          <Grid item className={classes.gridItem} key={name}>
            <Avatar className={classes.avatar}>
              <IconButton color="secondary" onClick={openUrlOnClick(href)}>
                {icon}
              </IconButton>
            </Avatar>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Social;
