import * as React from "react";
import { connect } from "react-redux";
import { Notification as NotificationType } from "../../types";
import Notification from "./Notification";
import State from "State";
import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

export interface Props {
  notifications: NotificationType[];
  notificationLimit?: number;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    zIndex: 1400,
    position: "fixed",
    alignItems: "center",
    flexDirection: "column-reverse",
    bottom: 0
  },
  child: {
    position: "relative",
    marginTop: theme.spacing()
  }
}));

export const NotificationsContainer: React.FC<Props> = props => {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      {props.notifications
        .slice(0, props.notificationLimit)
        .map((notification, i) => (
          <Notification
            className={classes.child}
            key={notification.time.toISOString()}
            notification={notification}
          />
        ))}
    </div>
  );
};

const mapStateToProps = ({ notifications }: State) => ({ notifications });

export default connect(mapStateToProps)(NotificationsContainer);
