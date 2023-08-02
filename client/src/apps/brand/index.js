import { useSelector } from "react-redux";

import Gallery from "./gallery";
import Creator from "./creator";
import "./index.css";
import CommonLayout, { Header } from "../layout";

const Brand = ({ children }) => (
  <CommonLayout>
    <div className="app-container">{children}</div>
  </CommonLayout>
);

const Guest = ({ children }) => (
  <>
    <Header />
    <div className="container">{children}</div>
  </>
);

export const SelectiveRender = ({ children }) => {
  const auth = useSelector(state => state.auth);

  if (auth.isAuthenticated && auth.user.level === 2)
    return <Brand>{children}</Brand>;
  else return <Guest>{children}</Guest>;
};

export { Gallery, Creator };
