import { useSelector } from "react-redux";

import Dashboard from "./dashboard";
import CreateDeal from "./createDeal";
import Profile from "./profile";
import CreateProfile from "./createProfile";
import Channels from "./channels";
import { PrivateLayout, PublicLayout } from "../layout";
import "./index.css";

export const CreatorSelectiveRender = ({ children }) => {
  const auth = useSelector(state => state.auth);

  if (auth.isAuthenticated && auth.user.level === 1)
    return <PrivateLayout>{children}</PrivateLayout>;
  else return <PublicLayout>{children}</PublicLayout>;
};

export { Dashboard, CreateDeal, Profile, Channels, CreateProfile };
