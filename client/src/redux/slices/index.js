import { combineReducers } from "redux";
import auth from "./auth";
import deal from "./deal";

const rootReducer = combineReducers({ auth, deal });

export default rootReducer;
