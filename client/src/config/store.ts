import { createStore, compose } from "redux";
import root from "../reducers/root";

const composer =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(root, composer());

export default store;
