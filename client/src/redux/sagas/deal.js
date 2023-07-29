import { api } from "../utils";
import { put, takeEvery } from "redux-saga/effects";
import * as actions from "../slices/deal";

function* createDeal({ payload: { title, desc, price } }) {
  try {
    const res = yield api.post("/creator/deal", { title, desc, price });
    yield put(actions.createDealSuccess(res));
  } catch (err) {
    yield put(actions.createDealFailure(err.response.data));
  }
}

export default function* dealSagas() {
  yield takeEvery("deal/createDealStart", createDeal);
}
