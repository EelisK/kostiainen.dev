import * as React from "react";
import { Card, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    boxShadow: theme.shadows[4],
    margin: theme.spacing(),
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2)
  }
}));

export default (props: React.PropsWithChildren<{}>) => {
  const classes = useStyles(props);
  return <Card className={classes.root}>{props.children}</Card>;
};
