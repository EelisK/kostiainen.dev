import { createAction } from "redux-actions";
import { PageState } from "../types";

export const setPage = createAction(
  "SET_PAGE",
  (pageState: PageState) => pageState
);
