import { Dispatch } from "redux";
import HttpRequest from "../../util/HttpRequest";
import {
  sendMessgeStart,
  sendMessageSuccess,
  sendMessageFail,
  toggleMessageFormDisabled
} from "../../actions/contact";

export const handleSendMessge = async (
  { payload }: ReturnType<typeof sendMessgeStart>,
  dispatch: Dispatch
) => {
  try {
    const request = new HttpRequest(
      "POST",
      "/contact/tg",
      JSON.stringify(payload)
    );
    dispatch(toggleMessageFormDisabled(true));
    const response = await request.send();
    if (!response.ok) throw new Error(`Failed to send. Please try again`);
    dispatch(sendMessageSuccess());
  } catch (error) {
    dispatch(sendMessageFail(error));
  } finally {
    dispatch(toggleMessageFormDisabled(false));
  }
};
