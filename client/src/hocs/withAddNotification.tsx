import * as React from "react";
import { addNotification } from "../actions/notifications";
import { connect } from "react-redux";
import { compose } from "redux";

export interface AddNotificationProps {
  addNotification: typeof addNotification;
}

export default compose(
  connect(null, { addNotification }),
  <T extends object>(
    WrappedComponent: React.ComponentType<T & AddNotificationProps>
  ): React.ComponentType<T> => (props: T & AddNotificationProps) => (
    <WrappedComponent {...props} />
  )
);
