import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { SignIn } from "../auth";

const PublicRoute = ({ children }) => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (auth.isAuthenticated) {
      switch (auth.user.level) {
        case 1:
          navigate("/myProducts");
          break;
        case 2:
          navigate("/myTasks");
          break;
        case 3:
          navigate("/myCarets");
          break;
        default:
          break;
      }
    }
  }, [navigate, auth]);

  return <>{children}</>;
};

const PublicRoutes = [
  {
    path: "/signIn",
    element: (
      <PublicRoute>
        <SignIn />
      </PublicRoute>
    ),
  },
];

export default PublicRoutes;
