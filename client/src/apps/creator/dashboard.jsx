import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "antd";

import { actions } from "../../redux/slices/deal";
import { CreatorSelectiveRender } from ".";
import { Deal, Guest } from "./components";

const Deals = () => {
  const dispatch = useDispatch();
  const { deals } = useSelector(state => state.deal),
    auth = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(actions.getDealsStart());
  }, []);

  if (auth.isAuthenticated && auth.user.level === 1)
    return (
      <div id="creatorDashboard">
        <div className="deals">
          {deals.map(deal => (
            <Deal key={deal._id} feature={deal} />
          ))}
        </div>
        <div id="createLink">
          <Link to={"/create-deal"}>
            <Button type="primary">Create Deal</Button>
          </Link>
        </div>
      </div>
    );
  else return <Guest />;
};

const Dashboard = () => (
  <CreatorSelectiveRender>
    <Deals />
  </CreatorSelectiveRender>
);

export default Dashboard;
