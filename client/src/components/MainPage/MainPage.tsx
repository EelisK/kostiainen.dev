import * as React from "react";
import TopBar from "../TopBar";
import Notifications from "../Notifications";
import { Collapse, Theme } from "@material-ui/core";
import { connect } from "react-redux";
import State from "../../types/State";
import { PageState } from "../../types";
import { makeStyles } from "@material-ui/styles";
import PlaceHolder from "./PlaceHolder";

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
      <Notifications />
      <PlaceHolder />
    </Collapse>
  );
};

const mapStateToProps = (state: State) => ({
  isVisible: state.page === PageState.Main
});

export default connect(mapStateToProps)(MainPage);
