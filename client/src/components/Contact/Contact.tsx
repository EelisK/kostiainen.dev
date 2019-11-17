import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Fab, createStyles } from "@material-ui/core";
import ContactIcon from "@material-ui/icons/Mail";
import CloseIcon from "@material-ui/icons/Close";
import Transition from "../Transition";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      position: "absolute",
      bottom: theme.spacing() * 2,
      right: theme.spacing() * 2
    }
  })
);

const Contact: React.StatelessComponent<{}> = props => {
  const classes = useStyles(props);
  const [toggled, setToggled] = React.useState(false);
  const onClick = () => setToggled(!toggled);
  return (
    <Fab color="primary" className={classes.root} onClick={onClick}>
      <Transition
        toggled={toggled}
        inNode={<CloseIcon />}
        outNode={<ContactIcon />}
      />
    </Fab>
  );
};

export default Contact;
