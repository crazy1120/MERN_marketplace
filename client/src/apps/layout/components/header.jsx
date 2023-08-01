import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Affix, Row } from "antd";

import { commonContext } from "../../../redux/context";
import { actions } from "../../../redux/slices/auth";

const Linkbar = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector(state => state.auth);

  const handleSignOut = () => {
    localStorage.removeItem("token");
    dispatch(actions.signOut());
  };

  const authLink = (
    <a className="black-btn" href="/signIn" onClick={handleSignOut}>
      Sign Out
    </a>
  );
  const creatorLink = (
    <Link className="black-btn" to="deal">
      Creators
    </Link>
  );
  const brandLink = (
    <Link className="black-btn" to="brand">
      Brands
    </Link>
  );
  const commonLink = (
    <>
      <Link className="black-btn" to="/aboutUs">
        About Us
      </Link>
      <Link className="black-btn" to="/help">
        Help
      </Link>
    </>
  );

  if (!isAuthenticated)
    return (
      <>
        {creatorLink}
        {brandLink}
        {commonLink}
      </>
    );
  else if (user.level === 1)
    return (
      <>
        {creatorLink}
        {commonLink}
        {authLink}
      </>
    );
  else if (user.level === 2)
    return (
      <>
        {brandLink}
        {commonLink}
        {authLink}
      </>
    );
};

const Header = () => {
  const { state } = useContext(commonContext);

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
              <Linkbar />
            </nav>
          </Row>
        </div>
      </header>
    </Affix>
  );
};

export default Header;
