import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import reducer from "./slices";
import rootSaga from "./sagas";

const saga = createSagaMiddleware();

const store = configureStore({
  reducer,
  middleware: [saga],
});

saga.run(rootSaga);
export default store;
