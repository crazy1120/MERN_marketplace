import React, { useContext } from "react";
import { Affix, Col, Image, Layout, Row, Typography } from "antd";

import { Context } from "../../../redux/Context";

const Header = () => {
  const { state } = useContext(Context);

  return (
    <Affix offsetTop={0}>
      <Layout.Header style={{ background: "white", height: "70px" }}>
        <Row
          justify="center"
          align="top"
          style={{ backgroundColor: "white", height: "100%" }}>
          <Row
            justify="start"
            align="top"
            style={{
              maxWidth: "2000px",
              width: "100%",
              height: "100%",
              backgroundColor: "white",
            }}>
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
          </Row>
        </Row>
      </Layout.Header>
    </Affix>
  );
};

export default Header;
