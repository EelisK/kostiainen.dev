import { Dispatch } from "redux";
import HttpRequest from "../../util/HttpRequest";
import {
  sendEmailStart,
  sendEmailSuccess,
  sendEmailFail
} from "../../actions/contact";

export const handleSendEmail = async (
  { payload }: ReturnType<typeof sendEmailStart>,
  dispatch: Dispatch
) => {
  try {
    const request = new HttpRequest("POST", "/email", payload);
    await request.send();
    dispatch(sendEmailSuccess());
  } catch (error) {
    dispatch(sendEmailFail(error));
  }
};
