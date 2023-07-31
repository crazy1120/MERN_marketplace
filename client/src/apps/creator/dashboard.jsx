import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "antd";

import { actions } from "../../redux/slices/deal";
import CommonLayout from "../layout";

const Deal = ({ feature }) => {
  return (
    <div className="deal">
      <h4>{feature.title}</h4>
      <hr />
      <div>{feature.desc}</div>
      <br />
      <br />
      Price: {feature.price}US$
    </div>
  );
};

// Main Component
const Deals = () => {
  const dispatch = useDispatch();
  const { deals } = useSelector(state => state.deal);

  useEffect(() => {
    dispatch(actions.getDealsStart());
  }, []);

  return (
    <CommonLayout>
      <div id="creatorDashboard" className="app-container">
        <div className="deals">
          {deals.map(deal => (
            <Deal key={deal._id} feature={deal} />
          ))}
        </div>
        <div id="createLink">
          <Link to={"/createDeal"}>
            <Button type="primary">Create Deal</Button>
          </Link>
        </div>
      </div>
    </CommonLayout>
  );
};

export default Deals;
