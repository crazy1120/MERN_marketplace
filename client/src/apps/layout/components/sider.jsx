import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const SiderElements = () => {
  const auth = useSelector(state => state.auth);

  switch (auth.user.level) {
    case 1:
      return (
        <ul>
          <li>
            <Link to="/deals">
              <button className="big-btn">Deals</button>
            </Link>
          </li>
          <li>
            <Link to="/creator/profile">
              <button className="big-btn">Profile</button>
            </Link>
          </li>
          <li>
            <Link to="/creator/channels">
              <button className="big-btn">Channels</button>
            </Link>
          </li>
        </ul>
      );
    case 2:
      return <></>;
    case 3:
      return <></>;
    case 4:
      return <></>;
    default:
      break;
  }
};

const Sider = () => {
  return (
    <div id="appSider">
      <div className="container">
        <SiderElements />
      </div>
    </div>
  );
};

Sider.propTypes = {};

export default Sider;
