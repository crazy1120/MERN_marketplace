import "./index.css";
import Header from "./components/header";
import Sider from "./components/sider";

export { Header };

const CommonLayout = ({ children }) => {
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

export default CommonLayout;
