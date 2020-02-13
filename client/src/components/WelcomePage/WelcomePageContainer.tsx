import * as React from "react";
import clsx from "clsx";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { Collapse, Theme, Container, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Swipeable } from "react-swipeable";
import { connect } from "react-redux";
import State from "../../types/State";
import { PageState } from "../../types";
import { setPage } from "../../actions/page";
import { BounceAnimation } from "../Animation";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    flexDirection: "column",
    background: theme.palette.background.default,
    color: theme.palette.secondary.main
  },
  swipeAble: {
    position: "absolute",
    top: 0,
    left: 0
  },
  fullSize: {
    height: "100%",
    width: "100%"
  },
  close: {
    display: "flex",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    "& svg": {
      transform: "scale(1.5)"
    }
  }
}));

export interface Props {
  close: () => void;
  isVisible: boolean;
}

export const WelcomePageContainer: React.FC<Props> = props => {
  const classes = useStyles(props);
  const onSwipedUp = () => props.isVisible && props.close();
  return (
    <Collapse in={props.isVisible} unmountOnExit className={classes.root}>
      <Swipeable
        onSwipedUp={onSwipedUp}
        className={clsx(classes.swipeAble, classes.fullSize)}
      />
      <Container className={classes.root}>
        <Container className={classes.fullSize}>{props.children}</Container>
        <Container maxWidth={false} className={classes.close}>
          <BounceAnimation delay={18} infinite={true}>
            <IconButton onClick={props.close} color="secondary">
              <ExpandLessIcon />
            </IconButton>
          </BounceAnimation>
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
