import * as React from "react";
import TopBar from "./TopBar";
import { Collapse, Theme, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import State from "../../types/State";
import { PageState } from "../../types";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: "100%",
    width: "100%"
  }
}));

export interface Props {
  isVisible: boolean;
}

export const MainPage: React.FC<Props> = props => {
  const classes = useStyles(props);
  return (
    <Collapse in={props.isVisible} unmountOnExit className={classes.root}>
      <TopBar />
      <Typography variant="h1">TODO</Typography>
    </Collapse>
  );
};

const mapStateToProps = (state: State) => ({
  isVisible: state.page === PageState.Main
});

export default connect(mapStateToProps)(MainPage);
