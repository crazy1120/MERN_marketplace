import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "antd";

import { actions } from "../../redux/slices/deal";
import CommonLayout, { Header } from "../layout";

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

const Guest = () => (
  <>
    <Header />
    <div className="container deals-guest">
      Here creators create and access their business.
      <br />
      If you want to become a creator, &nbsp;
      <Link className="big-black-btn sentence-btn" to="/signup">
        SIGN UP
      </Link>
      &nbsp; as creator first.
      <br />
      Or if you already have creator account, please &nbsp;
      <Link className="big-black-btn sentence-btn" to="/signin">
        SIGN IN
      </Link>
      &nbsp; to enjoy business.
    </div>
  </>
);

const Dashboard = () => {
  const auth = useSelector(state => state.auth);

  if (auth.isAuthenticated && auth.user.level === 1) return <Deals />;
  else return <Guest />;
};
export default Dashboard;
