import * as React from "react";
import { SvgAnimation } from "../Animation";
import { Typography, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    left: 0,
    right: 0,
    margin: "0 auto",
    width: "50%",
    maxWidth: 500,
    color: "#4c32e5",
    textAlign: "center"
  }
}));

const PlaceHolder: React.FC<{}> = props => {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <SvgAnimation src="/assets/logo-color.svg" />
      <Typography variant="h5">This site is under construction</Typography>
    </div>
  );
};

export default PlaceHolder;
