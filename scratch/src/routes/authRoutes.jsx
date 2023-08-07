import { Navigate, Route } from "react-router-dom";
import { Signup } from "../pages";
import { useEffect, useState } from "react";

const authRoute = (path, { comp }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const theUser = localStorage.getItem("user");

    if (theUser && !theUser.includes("undefined")) {
      setUser(JSON.parse(theUser));
    }
  }, []);

  return (
    <Route
      path={path}
      element={user?.email ? <Navigate to="/home" /> : { comp }}
    />
  );
};

const authRoutes = () => <>{authRoute("/signup", <Signup />)}</>;

export default authRoutes;
