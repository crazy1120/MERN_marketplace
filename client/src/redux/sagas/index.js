import { all } from "redux-saga/effects";

import auth from "./auth";
import deal from "./deal";
import profile from "./profile";

export default function* rootSaga() {
  yield all([auth(), deal(), profile()]);
}
