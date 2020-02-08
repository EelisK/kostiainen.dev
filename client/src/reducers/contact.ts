import State from "../types/State";
import { handleActions } from "redux-actions";
import {
  toggleMessageForm,
  toggleMessageFormDisabled
} from "../actions/contact";

export default handleActions<State["contact"], any>(
  {
    [toggleMessageForm.toString()]: (
      state,
      _: ReturnType<typeof toggleMessageForm>
    ) => ({ ...state, emalFormOpen: !state.emalFormOpen }),
    [toggleMessageFormDisabled.toString()]: (
      state,
      { payload }: ReturnType<typeof toggleMessageFormDisabled>
    ) => ({ ...state, formDisabled: payload })
  },
  {
    emalFormOpen: false,
    formDisabled: false
  }
);
