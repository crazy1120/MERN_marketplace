import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setAuthToken } from "../redux/utils";
import { actions } from "../redux/slices/auth";

// Pages
import Landing from "./landing";

// Routes
import * as Routes from "./routes";

const router = createBrowserRouter([
  { path: "/", element: <Landing /> },
  ...Routes.Public,
  ...Routes.Creator,
  ...Routes.Broker,
  ...Routes.Buyer,
]);

const Apps = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.token;
    if (token) {
      setAuthToken(token);
      dispatch(actions.signInSuccess(token));
    }
    window.addEventListener("storage", () => {
      if (!localStorage.token) dispatch(actions.signOut());
    });
  }, [dispatch]);

  return <RouterProvider router={router} />;
};

export default Apps;
