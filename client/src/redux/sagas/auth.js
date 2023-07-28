import api from "./api";
import { put, takeEvery } from "redux-saga/effects";

import * as actions from "../slices/auth";

function* signInWithCredentials({ payload: { email, password } }) {
  try {
    const res = yield api.post("/signIn", { email, password });
    const { token } = !!res.data.token ? res.data : null;
    localStorage.token = token;
    yield put(actions.signInSuccess(token));
  } catch (err) {
    yield put(actions.signInFailure(err.response.data));
  }
}

export default function* authSagas() {
  yield takeEvery("auth/signInStart", signInWithCredentials);
}

// export function* signUpWithCredentials({ payload: { email, password } }) {
//   try {
//     yield signUp(email, password);
//     yield put(signUpSuccess({ email, password }));
//   } catch (err) {
//     yield put(signUpFailure(err));
//   }
// }

// export function* signInAftersignUp({ payload: { email, password } }) {
//   yield signInWithCredentials({ payload: { email, password } });
// }

// export function* onSignUpStart() {
//   yield takeLatest("SIGNUp_START", signUpWithCredentials);
// }

// export function* onSignUpSuccess() {
//   yield takeLatest("SIGNUp_SUCCESS", signInAftersignUp);
// }
