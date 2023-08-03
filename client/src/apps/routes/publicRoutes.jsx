import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { SignIn, SignUp } from "../auth";
import { Dashboard } from "../creator";
import { Gallery, Creator } from "../brand";

const PublicRoute = ({ children }) => {
  const navigate = useNavigate();
  const auth = useSelector(state => state.auth);

  useEffect(() => {
    if (auth.isAuthenticated) {
      switch (auth.user.level) {
        case 1:
          navigate("/deals");
          break;
        case 2:
          navigate("/creators");
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
    path: "/signin",
    element: (
      <PublicRoute>
        <SignIn />
      </PublicRoute>
    ),
  },
  {
    path: "/signup",
    element: (
      <PublicRoute>
        <SignUp />
      </PublicRoute>
    ),
  },
  {
    path: "/deals",
    element: <Dashboard />,
  },
  {
    path: "/creators",
    element: <Gallery />,
  },
  {
    path: "/creator/:creator",
    element: <Creator />,
  },
];

export default PublicRoutes;
