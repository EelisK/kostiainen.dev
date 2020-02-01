import { combineReducers } from "redux";
import page from "./page";
import notifications from "./notifications";
import contact from "./contact";

export default combineReducers({ page, notifications, contact });
