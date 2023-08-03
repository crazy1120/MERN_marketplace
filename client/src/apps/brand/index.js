import { useSelector } from "react-redux";

import Gallery from "./gallery";
import Creator from "./creator";
import { PrivateLayout, PublicLayout } from "../layout";
import "./index.css";

export const BrandSelectiveRender = ({ children }) => {
  const auth = useSelector(state => state.auth);

  if (auth.isAuthenticated && auth.user.level === 2)
    return <PrivateLayout>{children}</PrivateLayout>;
  else return <PublicLayout>{children}</PublicLayout>;
};

export { Gallery, Creator };
