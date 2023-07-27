import axios from "./axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import jwtDecode from "jwt-decode";

import {
  signInFailure,
  signInSuccess,
  // signUpFailure,
  // signUpSuccess,
} from "../actions/auth";

const signIn = async (email, password) => {
  const res = await axios.post("/signIn", { email, password });
  const { token } = res.data;
  localStorage.token = token;
  return jwtDecode(token);
};

// const signUp = async (email, password) => {
// await axios.post("/signUp", {
// email,
// password,
// });
// };

export function* signInWithCredentials({ payload: { email, password } }) {
  try {
    const user = yield signIn(email, password);
    yield put(signInSuccess(user));
  } catch (err) {
    yield put(signInFailure(err));
  }
}

export function* onSignInStart() {
  yield takeLatest("SIGNIN_START", signInWithCredentials);
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

export default function* authSagas() {
  yield all([
    call(onSignInStart),
    //  call(onSignUpStart),
    // call(onSignUpSuccess)
  ]);
}
