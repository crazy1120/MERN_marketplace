// Third-party modules
import { put, takeLatest } from "redux-saga/effects";

// Tools
import { api } from "../utils";
import { actions } from "../slices/deal";

// Retrieve deals saga
function* getDeals() {
  try {
    const res = yield api.get("/creator/deal");
    yield put(actions.getDealsSuccess(res.data));
  } catch (err) {
    yield put(actions.getDealsFailure(err.response.data));
  }
}

// Create a deal saga
function* createDeal({ payload: { title, desc, price } }) {
  try {
    const res = yield api.post("/creator/deal", { title, desc, price });
    yield put(actions.createDealSuccess(res));
  } catch (err) {
    yield put(actions.createDealFailure(err.response.data));
  }
}

export default function* dealSagas() {
  yield takeLatest("deal/getDealsStart", getDeals);
  yield takeLatest("deal/createDealStart", createDeal);
}
