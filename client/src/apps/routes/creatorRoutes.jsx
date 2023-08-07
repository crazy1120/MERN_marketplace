import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { CreateDeal, Profile, CreateProfile, Channels } from "../creator";
import { useEffect } from "react";

const CreatorRoute = ({ children }) => {
  const navigate = useNavigate();
  const auth = useSelector(state => state.auth);

  useEffect(() => {
    if (!auth.isAuthenticated) navigate("/signIn");
    else if (auth.user.level !== 1) navigate("/");
  }, [navigate, auth]);

  return <>{children}</>;
};

const CreatorRoutes = [
  {
    path: "create-deal",
    element: (
      <CreatorRoute>
        <CreateDeal />
      </CreatorRoute>
    ),
  },
  {
    path: "creator/profile",
    element: (
      <CreatorRoute>
        <Profile />
      </CreatorRoute>
    ),
  },
  {
    path: "creator/profile/create",
    element: (
      <CreatorRoute>
        <CreateProfile />
      </CreatorRoute>
    ),
  },
  {
    path: "creator/channels",
    element: (
      <CreatorRoute>
        <Channels />
      </CreatorRoute>
    ),
  },
];

export default CreatorRoutes;
