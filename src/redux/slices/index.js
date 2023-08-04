import { combineReducers } from "redux";
import { reducer as auth } from "./auth";

const rootReducer = combineReducers({ auth });

export default rootReducer;
