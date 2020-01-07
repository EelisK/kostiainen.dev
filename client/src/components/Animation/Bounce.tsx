import * as React from "react";
import clsx from "clsx";
import { makeStyles, Theme } from "@material-ui/core";

export interface Props {
  delay?: number;
  infinite?: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    animationDelay: (props: Props) => `${props.delay || 10}s`
  }
}));

export default <T extends Props & React.Props<any>>(props: T) => {
  const classes = useStyles(props);
  return (
    <div
      className={clsx(
        "animated",
        "bounce",
        classes.root,
        props.infinite && "infinite"
      )}
    >
      {props.children}
    </div>
  );
};
