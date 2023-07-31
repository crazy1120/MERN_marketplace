import { combineReducers } from "redux";
import { reducer as auth } from "./auth";
import { reducer as deal } from "./deal";
import { reducer as profile } from "./profile";

const rootReducer = combineReducers({ auth, deal, profile });

export default rootReducer;
