import * as React from "react";
import { makeStyles } from "@material-ui/styles";
import { Drawer, Theme } from "@material-ui/core";
import Animation from "../Animation";

type Props = {};

const useStyles = makeStyles((theme: Theme) => ({
  root: { display: "flex", width: theme.spacing(10), height: "100%" },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    width: "100%",
    height: theme.spacing(10)
  }
}));

const SideBar: React.SFC<Props> = props => {
  const classes = useStyles(props);
  return (
    <Drawer anchor="left" variant="permanent" className={classes.root}>
      <Animation src="./assets/vector/db.svg" className={classes.content} />
    </Drawer>
  );
};

export default SideBar;
