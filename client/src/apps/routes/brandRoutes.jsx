import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const BrandRoute = ({ children }) => {
  const navigate = useNavigate();
  const auth = useSelector(state => state.auth);

  useEffect(() => {
    if (!auth.isAuthenticated) navigate("/signIn");
    else if (auth.user.level !== 2) navigate("/");
  }, [navigate, auth]);

  return <>{children}</>;
};

const BrandRoutes = [];

export default BrandRoutes;
