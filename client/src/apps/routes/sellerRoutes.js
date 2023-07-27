import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { Products } from "../seller";
import { useEffect } from "react";

const SellerRoute = ({ children }) => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    !auth.isAuthenticated && navigate("/signIn");
    auth.user.level !== 1 && navigate("/");
  }, [navigate, auth]);

  return <>{children}</>;
};

const SellerRoutes = [
  {
    path: "/myProducts",
    element: (
      <SellerRoute>
        <Products />
      </SellerRoute>
    ),
  },
];

export default SellerRoutes;
