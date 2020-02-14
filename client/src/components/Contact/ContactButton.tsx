import * as React from "react";
import clsx from "clsx";
import { connect } from "react-redux";
import ContactIcon from "@material-ui/icons/ChatBubble";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles, Theme, IconButton } from "@material-ui/core";
import { toggleMessageForm } from "../../actions/contact";
import State from "../../types/State";
import { linearGradient } from "../../util/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    width: theme.spacing(8),
    height: theme.spacing(8),
    background: linearGradient(theme.palette.primary, "bottom"),
    color: theme.palette.background.default,
    boxShadow: theme.shadows[9],
    cursor: "pointer",
    overflow: "hidden"
  },
  iconCommon: {
    transition: "transform 0.16s linear 0s, opacity 0.08s linear 0s",
    position: "absolute"
  },
  activeIcon: {
    opacity: "1",
    transform: "rotate(0deg) scale(1)"
  },
  inactiveIcon: {
    opacity: "0",
    transform: "rotate(-30deg)"
  }
}));

export interface Props {
  toggleContactForm(): void;
  formIsOpen: boolean;
}

export const ContactButton: React.FC<Props> = props => {
  const classes = useStyles(props);
  return (
    <IconButton className={classes.root} onClick={props.toggleContactForm}>
      <CloseIcon
        className={clsx(
          classes.iconCommon,
          props.formIsOpen ? classes.activeIcon : classes.inactiveIcon
        )}
      />
      <ContactIcon
        className={clsx(
          classes.iconCommon,
          props.formIsOpen ? classes.inactiveIcon : classes.activeIcon
        )}
      />
    </IconButton>
  );
};

export default connect(
  (state: State) => ({ formIsOpen: state.contact.emalFormOpen }),
  {
    toggleContactForm: toggleMessageForm
  }
)(ContactButton);
