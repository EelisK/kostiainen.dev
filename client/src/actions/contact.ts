import { createAction } from "redux-actions";
import { ContactInformation } from "../types";

export const sendMessgeStart = createAction<ContactInformation>(
  "SEND_MESSAGE_START"
);
export const sendMessageSuccess = createAction("SEND_MESSAGE_SUCCESS");
export const sendMessageFail = createAction<Error>("SEND_MESSAGE_FAIL");

export const toggleMessageForm = createAction("TOGGLE_MESSAGE_FORM");

export const toggleMessageFormDisabled = createAction<boolean>(
  "TOGGLE_MESSAGE_FORM_DISABLED"
);
