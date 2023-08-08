import { put, takeLatest } from "redux-saga/effects";

import { api } from "../utils";
import { actions } from "../slices/profile";

// Retrieve own profile of creator saga
function* getProfile() {
  try {
    const res = yield api.get("/creator/profile");
    yield put(actions.getProfileSuccess(res.data));
  } catch (err) {
    yield put(actions.getProfileFailure(err.response.data));
  }
}

// Create a profile of creator saga
function* createProfile({ payload }) {
  try {
    const res = yield api.post("/creator/profile", payload);
    yield put(actions.createProfileSuccess(res));
  } catch (err) {
    yield put(actions.createProfileFailure(err.response.data));
  }
}

// Get all profiles of creators saga
function* getCreators() {
  try {
    const res = yield api.get("/public/creators");
    yield put(actions.getCreatorsSuccess(res.data));
  } catch (err) {
    yield put(actions.getCreatorsFailure(err.response.data));
  }
}

// Get profile of a creator by common users
function* getProfilePublic({ payload: creator }) {
  try {
    const res = yield api.get(`/public/creators/${creator}`);
    yield put(actions.getProfilePublicSuccess(res.data));
  } catch (err) {
    yield put(actions.getProfilePublicFailure(err.response.data));
  }
}

// Get all deals of a creator by common users
function* getDealsPublic({ payload: creator }) {
  try {
    const res = yield api.get(`/public/creators/${creator}/deals`);
    yield put(actions.getDealsPublicSuccess(res.data));
  } catch (err) {
    yield put(actions.getDealsPublicFailed(err.response.data));
  }
}

export default function* profileSagas() {
  yield takeLatest("profile/getProfileStart", getProfile);
  yield takeLatest("profile/createProfileStart", createProfile);
  yield takeLatest("profile/getCreatorsStart", getCreators);
  yield takeLatest("profile/getProfilePublicStart", getProfilePublic);
  yield takeLatest("profile/getDealsPublicStart", getDealsPublic);
}
