import { Middleware } from "redux";
import State from "../types/State";

const emailMiddleware: Middleware<State, any, any> = ({
  dispatch,
  getState
}) => next => action => next(action);

export default emailMiddleware;
