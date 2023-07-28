import { Col } from "antd";
import Header from "./header";

export { Header };

const CommonLayout = ({ children }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
        <Col
          span={18}
          offset={3}>
          {children}
        </Col>
      </div>
    </div>
  );
};

export default CommonLayout;
