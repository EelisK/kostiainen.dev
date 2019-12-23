import { combineReducers } from "redux";
import page from "./page";
import notifications from "./notifications";

export default combineReducers({ page, notifications });
