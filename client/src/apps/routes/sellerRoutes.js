import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { Dashboard, CreateDeal } from "../seller";
import { useEffect } from "react";

const SellerRoute = ({ children }) => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (!auth.isAuthenticated) navigate("/signIn");
    else if (auth.user.level !== 1) navigate("/");
  }, [navigate, auth]);

  return <>{children}</>;
};

const SellerRoutes = [
  {
    path: "/creator",
    element: (
      <SellerRoute>
        <Dashboard />
      </SellerRoute>
    ),
  },
  {
    path: "/createDeal",
    element: (
      <SellerRoute>
        <CreateDeal />
      </SellerRoute>
    ),
  },
];

export default SellerRoutes;
