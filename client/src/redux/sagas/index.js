import { all, call } from "redux-saga/effects";

import auth from "./auth";

export default function* rootSaga() {
  yield all([call(auth)]);
}
