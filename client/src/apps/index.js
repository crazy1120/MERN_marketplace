// import { useReducer } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import Landing from "./landing";

// Seller's routes
import {
  BrokerRoutes,
  BuyerRoutes,
  PublicRoutes,
  SellerRoutes,
} from "./routes";

// import { Context, initialState } from "../redux/Context";
// import { reducer } from "../redux/reducer";

const router = createBrowserRouter([
  { path: "/", element: <Landing /> },
  ...PublicRoutes,
  ...SellerRoutes,
  ...BrokerRoutes,
  ...BuyerRoutes,
]);

const Apps = () => {
  // const [state, dispatch] = useReducer(reducer, initialState);
  // const value = { state, dispatch };
  return (
    // <Context.Provider value={value}>
    <RouterProvider router={router} />
    // </Context.Provider>
  );
};

export default Apps;
