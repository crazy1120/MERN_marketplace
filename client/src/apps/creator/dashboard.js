// Third-party modules
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button, Descriptions } from "antd";

// Components
import CommonLayout from "../layout/common";

// Tools
import { actions } from "../../redux/slices/deal";

const Deal = () => {
  return (
    <Descriptions title="User Info">
      <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
      <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
      <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
      <Descriptions.Item label="Remark">empty</Descriptions.Item>
      <Descriptions.Item label="Address">
        No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
      </Descriptions.Item>
    </Descriptions>
  );
};

// Main Component
const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getDealsStart());
  }, []);

  return (
    <CommonLayout>
      <div style={{ padding: "3% 8% 0" }}>
        <Deal />
        <Link
          style={{ marginTop: "20px", float: "right" }}
          to={"/createDeal"}>
          <Button type="primary">Create Deal</Button>
        </Link>
      </div>
    </CommonLayout>
  );
};

export default Products;
