import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { Creators } from "../broker";

const BrokerRoute = ({ children }) => {
  const navigate = useNavigate();
  const auth = useSelector(state => state.auth);

  useEffect(() => {
    if (!auth.isAuthenticated) navigate("/signIn");
    else if (auth.user.level !== 2) navigate("/");
  }, [navigate, auth]);

  return <>{children}</>;
};

const BrokerRoutes = [
  {
    path: "/creators",
    element: (
      <BrokerRoute>
        <Creators />
      </BrokerRoute>
    ),
  },
];

export default BrokerRoutes;