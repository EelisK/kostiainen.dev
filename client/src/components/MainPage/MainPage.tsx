import * as React from "react";
import TopBar from "../TopBar";
import Notifications from "../Notifications";
import { Collapse, Theme } from "@material-ui/core";
import { connect } from "react-redux";
import State from "../../types/State";
import { PageState } from "../../types";
import { makeStyles } from "@material-ui/styles";
import About from "../About";
import Social from "../Social";
import Skills from "../Skills";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: "100% !important",
    width: "100%",
    // HACK: collapse contains nested components
    // that need their height to be set manually
    "& > div, & > div > div": {
      height: "100%",
      "& > div:first-child": {
        marginTop: theme.spacing(20)
      }
    }
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
      <About />
      <Skills />
      <Social />
      <Notifications />
    </Collapse>
  );
};

const mapStateToProps = (state: State) => ({
  isVisible: state.page === PageState.Main
});

export default connect(mapStateToProps)(MainPage);
