import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { Dashboard, CreateDeal } from "../creator";
import { useEffect } from "react";

const CreatorRoute = ({ children }) => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (!auth.isAuthenticated) navigate("/signIn");
    else if (auth.user.level !== 1) navigate("/");
  }, [navigate, auth]);

  return <>{children}</>;
};

const CreatorRoutes = [
  {
    path: "/deals",
    element: (
      <CreatorRoute>
        <Dashboard />
      </CreatorRoute>
    ),
  },
  {
    path: "/createDeal",
    element: (
      <CreatorRoute>
        <CreateDeal />
      </CreatorRoute>
    ),
  },
];

export default CreatorRoutes;
