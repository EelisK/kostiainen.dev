import * as React from "react";
import { makeStyles, withStyles, createStyles } from "@material-ui/styles";
import {
  Theme,
  IconButton,
  SnackbarContent,
  Snackbar
} from "@material-ui/core";
import { amber, green } from "@material-ui/core/colors";
import {
  Notification as NotificationType,
  NotificationLevel
} from "../../types";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

import ErrorIcon from "@material-ui/icons/Error";
import WarningIcon from "@material-ui/icons/Warning";
import InfoIcon from "@material-ui/icons/Info";
import CloseIcon from "@material-ui/icons/Close";
import { SvgIconProps } from "@material-ui/core/SvgIcon";
import { WithStyles } from "@material-ui/styles/withStyles";

const NOTIFICATION_LEVEL_ICONS: {
  [level in NotificationLevel]: (props: SvgIconProps) => JSX.Element;
} = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon
};

const styles = (theme: Theme) =>
  createStyles({
    success: {
      background: green[600]
    },
    error: {
      background: theme.palette.error.dark
    },
    info: {
      background: theme.palette.text.primary
    },
    warning: {
      background: amber[700]
    },
    icon: {
      fontSize: 20
    },
    iconVariant: {
      opacity: 0.9,
      marginRight: theme.spacing(1)
    },
    message: {
      display: "flex",
      alignItems: "center"
    }
  });

const AUTOHIDE_DURATION = 6000;

export interface Props extends WithStyles<typeof styles> {
  onClose?: () => void;
  className?: string;
  notification: NotificationType;
}

class Notification extends React.PureComponent<Props> {
  public state = { open: true };

  private handleClose = (
    _: React.SyntheticEvent | React.MouseEvent,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    this.props.onClose && this.props.onClose();
    this.setOpen(false);
  };

  private setOpen = (open: boolean) => this.setState({ open });

  render() {
    const { notification, className, classes } = this.props;
    const Icon = NOTIFICATION_LEVEL_ICONS[notification.level];
    return (
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        open={this.state.open}
        autoHideDuration={AUTOHIDE_DURATION}
        onClose={this.handleClose}
        className={className}
      >
        <SnackbarContent
          className={classes[notification.level]}
          message={
            <span id="client-snackbar" className={classes.message}>
              <Icon className={`${classes.icon} ${classes.iconVariant}`} />
              {notification.message}
            </span>
          }
          action={[
            <IconButton
              key="close"
              aria-label="close"
              color="inherit"
              onClick={this.handleClose}
            >
              <CloseIcon className={classes.icon} />
            </IconButton>
          ]}
        />
      </Snackbar>
    );
  }
}

export default withStyles(styles)(Notification);
