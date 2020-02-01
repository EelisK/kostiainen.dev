import { Middleware } from "redux";
import {
  sendEmailStart,
  sendEmailSuccess,
  sendEmailFail
} from "../../actions/contact";
import { handleSendEmail } from "./email";
import State from "../../types/State";
import { addNotification } from "../../actions/notifications";

export const emailMiddleWare: Middleware<State, any, any> = ({
  dispatch
}) => next => action => {
  const res = next(action);
  switch (action.type) {
    case sendEmailStart.toString():
      handleSendEmail(action, dispatch);
      break;
    case sendEmailSuccess.toString():
      dispatch(addNotification({ level: "success", message: "Message sent!" }));
      break;
    case sendEmailFail.toString():
      const { payload } = action as ReturnType<typeof sendEmailFail>;
      dispatch(addNotification({ level: "error", message: payload.message }));
      break;
  }
  return res;
};
