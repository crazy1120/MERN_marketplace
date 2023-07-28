import React from "react";
import { Link } from "react-router-dom";

import CommonLayout from "../layout/common";
import { Row, Col, Button } from "antd";

const Products = () => {
  return (
    <CommonLayout>
      <Row
        flex="1"
        justify="end">
        <Col>
          <Link to={"/createDeal"}>
            <Button type="primary">Create Deal</Button>
          </Link>
        </Col>
      </Row>
    </CommonLayout>
  );
};

export default Products;
