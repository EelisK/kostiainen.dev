import { Middleware } from "redux";
import {
  sendMessgeStart,
  sendMessageSuccess,
  sendMessageFail
} from "../../actions/contact";
import { handleSendMessge } from "./telegram";
import State from "../../types/State";
import { addNotification } from "../../actions/notifications";

export const messagingMiddleWare: Middleware<State, any, any> = ({
  dispatch
}) => next => action => {
  const res = next(action);
  switch (action.type) {
    case sendMessgeStart.toString():
      handleSendMessge(action, dispatch);
      break;
    case sendMessageSuccess.toString():
      dispatch(addNotification({ level: "success", message: "Message sent!" }));
      break;
    case sendMessageFail.toString():
      const { payload } = action as ReturnType<typeof sendMessageFail>;
      dispatch(addNotification({ level: "error", message: payload.message }));
      break;
  }
  return res;
};
