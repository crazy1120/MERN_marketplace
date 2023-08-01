import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Affix, Row } from "antd";

import { commonContext } from "../../../redux/context";
import Linkbar from "./linkbar";

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
