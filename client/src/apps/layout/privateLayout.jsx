import React from "react";
import CommonLayout from ".";

const PrivateLayout = ({ children }) => (
  <CommonLayout>
    <div className="app-container">{children}</div>
  </CommonLayout>
);

export default PrivateLayout;
