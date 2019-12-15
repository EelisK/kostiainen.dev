import * as React from "react";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { Collapse, Theme, Container, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

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

const WelcomePageContainer: React.FunctionComponent<{}> = props => {
  const classes = useStyles(props);
  const [visible, setVisible] = React.useState(true);
  const close = () => setVisible(false);
  const autoClose = 1; //setTimeout(close, 7000);
  React.useEffect(() => {
    visible || clearTimeout(autoClose);
  }, [visible]);
  return (
    <Collapse in={visible} unmountOnExit className={classes.root}>
      <Container className={classes.root}>
        <Container className={classes.fullSize}>{props.children}</Container>
        <Container maxWidth={false} className={classes.close}>
          <IconButton onClick={close} color="primary">
            <ExpandLessIcon />
          </IconButton>
        </Container>
      </Container>
    </Collapse>
  );
};

export default WelcomePageContainer;
