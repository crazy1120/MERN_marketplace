import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  HomeIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";

import { Home, Profile, SignIn, SignUp } from "@/pages";

const PublicRoute = ({ children }) => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

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

const publicRoutes = [
  {
    icon: HomeIcon,
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    icon: UserCircleIcon,
    name: "profile",
    path: "/profile",
    element: <Profile />,
  },
  {
    icon: ArrowRightOnRectangleIcon,
    name: "Sign In",
    path: "sign-in",
    element: (
      <PublicRoute>
        <SignIn />
      </PublicRoute>
    ),
  },
  {
    icon: UserPlusIcon,
    name: "Sign Up",
    path: "sign-up",
    element: (
      <PublicRoute>
        <SignUp />
      </PublicRoute>
    ),
  },
];

export default publicRoutes;
