import * as React from "react";
import { connect } from "react-redux";
import { Notification as NotificationType } from "../../types";
import Notification from "./Notification";
import State from "../../types/State";
import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

export interface Props {
  notifications: NotificationType[];
  notificationLimit?: number;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    zIndex: 1600,
    position: "fixed",
    flexDirection: "column",
    bottom: 0
  },
  child: {
    position: "relative",
    marginTop: theme.spacing()
  }
}));

const AUTOHIDE_DURATION = 6000;

export const NotificationsContainer: React.FC<Props> = props => {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      {props.notifications
        .sort((a, b) => b.time.valueOf() - a.time.valueOf())
        .slice(0, props.notificationLimit)
        .map((notification, i) => (
          <Notification
            className={classes.child}
            key={notification.time.toISOString()}
            notification={notification}
            autoHide={AUTOHIDE_DURATION}
          />
        ))}
    </div>
  );
};

const mapStateToProps = ({ notifications }: State) => ({ notifications });

export default connect(mapStateToProps)(NotificationsContainer);
