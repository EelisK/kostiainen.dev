import { createStore, compose, applyMiddleware } from "redux";
import { emailMiddleWare } from "../middlewares/contact";
import root from "../reducers/root";

const composer =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(root, composer(applyMiddleware(emailMiddleWare)));

export default store;
