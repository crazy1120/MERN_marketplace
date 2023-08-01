import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const SiderElements = () => {
  const auth = useSelector(state => state.auth);

  if (auth.isAuthenticated) {
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
        return (
          <ul>
            <li>
              <Link to="/creators">
                <button className="big-btn">Creators</button>
              </Link>
            </li>
            <li>
              <Link to="/brand/profile">
                <button className="big-btn">Profile</button>
              </Link>
            </li>
          </ul>
        );
      case 3:
        return <></>;
      default:
        break;
    }
  } else {
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
