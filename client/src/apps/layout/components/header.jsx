import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Affix, Row } from "antd";

import { commonContext } from "../../../redux/context";
import { actions } from "../../../redux/slices/auth";

const Header = () => {
  const dispatch = useDispatch();
  const { state } = useContext(commonContext);

  const handleSignOut = () => {
    localStorage.removeItem("token");
    dispatch(actions.signOut());
  };

  return (
    <Affix offsetTop={0}>
      <header>
        <div className="container">
          <Row className="flex-around">
            <nav id="appLogo">
              <Link to="/">
                <img src={state.appLogo} alt="Logo" />
                <h1>{state.appName}</h1>
              </Link>
            </nav>
            <nav className="navbar">
              {localStorage.token && (
                <button className="big-btn" onClick={handleSignOut}>
                  Sign Out
                </button>
              )}
            </nav>
          </Row>
        </div>
      </header>
    </Affix>
  );
};

export default Header;
