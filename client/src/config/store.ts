import { createStore, compose, applyMiddleware } from "redux";
import root from "../reducers/root";
import emailMiddleware from "../middlewares/emailMiddleware";

const composer =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(root, composer(applyMiddleware(emailMiddleware)));

export default store;
