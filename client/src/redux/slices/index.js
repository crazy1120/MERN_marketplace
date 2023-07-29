import { combineReducers } from "redux";
import { reducer as auth } from "./auth";
import { reducer as deal } from "./deal";

const rootReducer = combineReducers({ auth, deal });

export default rootReducer;
