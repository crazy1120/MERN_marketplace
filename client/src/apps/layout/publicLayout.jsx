import { Header } from "antd/es/layout/layout";
import React from "react";

const PublicLayout = ({ children }) => (
  <>
    <Header />
    <div className="container">{children}</div>
  </>
);

export default PublicLayout;
