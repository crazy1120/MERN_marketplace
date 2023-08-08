import { configureStore } from "@reduxjs/toolkit";
import createSaga from "redux-saga";
import { createLogger } from "redux-logger";

import reducer from "./slices";
import rootSaga from "./sagas";

const saga = createSaga();
const logger = createLogger();

const store = configureStore({
  reducer,
  middleware: [saga, logger],
});

saga.run(rootSaga);
export default store;
