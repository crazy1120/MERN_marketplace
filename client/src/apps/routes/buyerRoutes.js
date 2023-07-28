import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { Products } from "../buyer";
import { useEffect } from "react";

const BuyerRoute = ({ children }) => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (!auth.isAuthenticated) navigate("/signIn");
    else if (auth.user.level !== 3) navigate("/");
  }, [navigate, auth]);

  return <>{children}</>;
};

const BuyerRoutes = [
  {
    path: "/myCarets",
    element: (
      <BuyerRoute>
        <Products />
      </BuyerRoute>
    ),
  },
];

export default BuyerRoutes;
