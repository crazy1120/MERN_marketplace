import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { Affix, Button, Col, Image, Layout, Row, Typography } from "antd";

import { Context } from "../../../redux/Context";
import { signOut } from "../../../redux/slices/auth";

const Header = () => {
  const dispatch = useDispatch();
  const { state } = useContext(Context);

  const handleSignOut = () => {
    localStorage.removeItem("token");
    dispatch(signOut());
  };

  return (
    <Affix offsetTop={0}>
      <Layout.Header style={{ background: "white", height: "70px" }}>
        <Row
          justify="center"
          align="middle"
          style={{ backgroundColor: "white", height: "100%" }}>
          <Col
            offset={1}
            style={{ cursor: "pointer" }}
            onClick={() => {
              window.scrollTo(0, 0);
            }}>
            <Row
              justify="center"
              align="bottom">
              <Col>
                <Image
                  height={30}
                  preview={false}
                  src={state.appLogo}></Image>
              </Col>
              <Col>
                <Typography.Title
                  level={3}
                  style={{ color: "black", marginLeft: "10px" }}>
                  {state.appName}
                </Typography.Title>
              </Col>
            </Row>
          </Col>
          <Col offset={12}>
            <Button onClick={handleSignOut}>Sign Out</Button>
          </Col>
        </Row>
      </Layout.Header>
    </Affix>
  );
};

export default Header;
