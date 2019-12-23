import State from "../types/State";
import { handleActions } from "redux-actions";
import { addNotification, clearNotifications } from "../actions/notifications";

export default handleActions<State["notifications"], any>(
  {
    [addNotification.toString()]: (
      state,
      action: ReturnType<typeof addNotification>
    ) => [...state, action.payload],
    [clearNotifications.toString()]: () => []
  },
  []
);
