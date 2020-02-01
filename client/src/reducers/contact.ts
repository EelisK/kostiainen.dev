import State from "../types/State";
import { handleActions } from "redux-actions";
import { toggleEmailForm } from "../actions/contact";

export default handleActions<State["contact"], any>(
  {
    [toggleEmailForm.toString()]: (
      state,
      _: ReturnType<typeof toggleEmailForm>
    ) => ({ ...state, emalFormOpen: !state.emalFormOpen })
  },
  {
    emalFormOpen: false
  }
);
