import * as React from "react";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { Collapse, Theme, Container, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import State from "../../types/State";
import { PageState } from "../../types";
import { setPage } from "../../actions/page";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    background: theme.palette.text.primary,
    color: theme.palette.primary.main
  },
  fullSize: {
    height: "100%",
    width: "100%"
  },
  close: {
    display: "flex",
    justifyContent: "center",
    position: "absolute",
    bottom: 0
  }
}));

export interface Props {
  close: () => void;
  isVisible: boolean;
}

export const WelcomePageContainer: React.FC<Props> = props => {
  const classes = useStyles(props);
  return (
    <Collapse in={props.isVisible} unmountOnExit className={classes.root}>
      <Container className={classes.root}>
        <Container className={classes.fullSize}>{props.children}</Container>
        <Container maxWidth={false} className={classes.close}>
          <IconButton onClick={props.close} color="primary">
            <ExpandLessIcon />
          </IconButton>
        </Container>
      </Container>
    </Collapse>
  );
};

const mapStateToProps = (state: State) => ({
  isVisible: state.page === PageState.Welcome
});

export default connect(mapStateToProps, {
  close: () => setPage(PageState.Main)
})(WelcomePageContainer);
