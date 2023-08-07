import React from "react";
import ReactDOM from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";

import store from "./redux";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import Header from "./components/layout/header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <Header />
    </ReduxProvider>
  </React.StrictMode>
);

reportWebVitals();
