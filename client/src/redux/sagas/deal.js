// Third-party modules
import { put, takeEvery } from "redux-saga/effects";

// Tools
import { api } from "../utils";
import { actions } from "../slices/deal";

// Retrieve deals saga
function* getDeals() {
  try {
    const res = yield api.get("/creator/deal");
    yield put(actions.getDealsSuccess(res));
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
  yield takeEvery("deal/getDealsStart", getDeals);
  yield takeEvery("deal/createDealStart", createDeal);
}
