import { createAction } from "redux-actions";
import { Notification } from "../types";

export const addNotification = createAction(
  "ADD_NOTIFICATION",
  (
    notification: Notification | Pick<Notification, "level" | "message">
  ): Notification => {
    if ("time" in notification) return notification;
    else return { ...notification, time: new Date() };
  }
);

export const clearNotifications = createAction("CLEAR_NOTIFICATIONS");
