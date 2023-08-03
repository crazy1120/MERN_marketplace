import "./index.css";
import Header from "./components/header";
import Sider from "./components/sider";

export { Header };

export const CommonLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div id="appMain">
        <Sider />
        {children}
      </div>
    </>
  );
};

export const PrivateLayout = ({ children }) => (
  <CommonLayout>
    <div className="app-container">{children}</div>
  </CommonLayout>
);

export const PublicLayout = ({ children }) => (
  <>
    <Header />
    <div className="container">{children}</div>
  </>
);
