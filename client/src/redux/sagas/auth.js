import { api } from "../utils";
import { put, takeLatest } from "redux-saga/effects";

import { actions } from "../slices/auth";

// Sign in with own email and password saga
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

// Sign up with own info saga
function* signUp({ payload }) {
  try {
    const res = yield api.post("/signUp", payload);
    const { email, password } = payload;
    yield put(actions.signUpSuccess(res.data));
    yield put(actions.signInStart({ email, password }));
  } catch (err) {
    yield put(actions.signUpFailure(err.response.data));
  }
}

export default function* authSagas() {
  yield takeLatest("auth/signInStart", signInWithCredentials);
  yield takeLatest("auth/signUpStart", signUp);
}
