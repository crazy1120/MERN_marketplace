// Third-party modules
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card } from "antd";

// Components
import CommonLayout from "../layout/common";

// Tools
import { actions } from "../../redux/slices/deal";

const Deal = ({ feature }) => {
  return (
    <Card
      type="inner"
      style={{ marginBottom: "20px" }}
      title={feature.title}>
      {feature.desc}
      <br />
      Price: {feature.price}
    </Card>
  );
};

// Main Component
const Deals = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getDealsStart());
  }, []);

  const state = useSelector((state) => state.deal);
  console.log(state);
  return (
    <CommonLayout>
      <div style={{ padding: "3% 8% 0" }}>
        {state.deals.map((deal) => (
          <Deal feature={deal} />
        ))}

        <Link
          style={{ margin: "20px 0", float: "right" }}
          to={"/createDeal"}>
          <Button type="primary">Create Deal</Button>
        </Link>
      </div>
    </CommonLayout>
  );
};

export default Deals;
