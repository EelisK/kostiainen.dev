import State from "../types/State";
import { handleActions } from "redux-actions";
import { setPage } from "../actions/page";
import { PageState } from "../types";

export default handleActions<State["page"], any>(
  {
    [setPage.toString()]: (_, action: ReturnType<typeof setPage>) => {
      return action.payload;
    }
  },
  PageState.Welcome
);
