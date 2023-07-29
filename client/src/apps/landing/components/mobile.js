import { useContext } from "react";
import { motion } from "framer-motion";

import {
  Typography,
  Layout,
  Row,
  Col,
  Affix,
  Image,
  Button,
  Tooltip,
  Popover,
} from "antd";
import { DownloadOutlined } from "@ant-design/icons";

import { commonContext } from "../../../redux/context";

// props: sectionItem, backgroundColor
const SectionItem = (props) => {
  return (
    <Row
      justify="center"
      align="top"
      style={{
        backgroundColor: props.backgroundColor,
        height: "700px",
        padding: "70px 20px",
      }}>
      <motion.div
        initial={{ x: -300, opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: { type: "spring", bounce: 0, duration: 1 },
        }}
        viewport={{ once: true }}>
        <Row justify="center">
          <Typography.Title level={2}>
            {props.sectionItem.title}
          </Typography.Title>
        </Row>
        <Row justify="center">
          <Typography style={{ fontSize: "16px" }}>
            {props.sectionItem.text}
          </Typography>
        </Row>
      </motion.div>

      <motion.div
        initial={{ x: -300, opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: { type: "spring", bounce: 0, duration: 1 },
        }}
        viewport={{ once: true }}>
        <Image
          preview={false}
          src={props.sectionItem.image}
          style={{
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          }}></Image>
      </motion.div>
    </Row>
  );
};

// props: sectionList
const SectionList = (props) => {
  return (
    <>
      {props.sectionList.map((sectionItem, index) => (
        <SectionItem
          key={index}
          sectionItem={sectionItem}
          backgroundColor={index % 2 === 0 ? "white" : null}
        />
      ))}
    </>
  );
};

const Mobile = () => {
  const { state } = useContext({ commonContext });

  return (
    <Layout style={{ "overflow-x": "hidden" }}>
      <Affix offsetTop={0}>
        <Layout.Header style={{ background: "white", width: "100%" }}>
          <Row
            justify="center"
            align="middle"
            style={{ backgroundColor: "white", width: "100%", height: "100%" }}>
            <Col>
              <Image
                width={30}
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
        </Layout.Header>
      </Affix>

      <Layout.Content>
        {/* cover headline */}
        <Row
          justify="center"
          align="middle"
          style={{
            backgroundColor: "white",
            height: "800px",
            paddingTop: "50px",
          }}>
          <Row justify="center">
            <Typography.Title level={2}>{state.coverTitle}</Typography.Title>
          </Row>

          <Row
            justify="center"
            style={{ padding: "0px 20px" }}>
            <Typography style={{ fontSize: "16px" }}>
              {state.coverText}
            </Typography>
          </Row>

          <Row justify="space-around">
            {state.appleStoreLink && (
              <Col style={{ width: "45%" }}>
                <Row justify="center">
                  <a
                    href={state.appleStoreLink}
                    target="_blank"
                    rel="noopener noreferrer">
                    <Image
                      height={50}
                      preview={false}
                      src={state.appleStoreBadge}></Image>
                  </a>
                </Row>
              </Col>
            )}
            {state.googlePlayLink && (
              <Col style={{ width: "45%" }}>
                <Row justify="center">
                  <a
                    href={state.googlePlayLink}
                    target="_blank"
                    rel="noopener noreferrer">
                    <Image
                      height={50}
                      style={{ padding: "2px 0" }}
                      preview={false}
                      src={state.googlePlayBadge}></Image>
                  </a>
                </Row>
              </Col>
            )}
          </Row>

          <Row justify="center">
            <Image
              preview={false}
              src={state.coverImage}
              style={{ width: "100%" }}></Image>
          </Row>
        </Row>

        {/* endorsement list */}
        <Row
          justify="center"
          align="top"
          style={{ height: "500px", padding: "70px 20px" }}>
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: { type: "spring", bounce: 0, duration: 1 },
            }}
            viewport={{ once: true }}>
            <Row justify="center">
              <Typography.Title level={2}>
                {state.endorsementTitle}
              </Typography.Title>
            </Row>
            <Row justify="center">
              <Typography style={{ fontSize: "16px" }}>
                {state.endorsementText}
              </Typography>
            </Row>
            <Row
              justify="space-between"
              style={{ marginTop: "50px" }}>
              {state.endorsementList.map((endorsementItem, index) => {
                return (
                  <Col span={4}>
                    <Tooltip
                      placement="top"
                      title={endorsementItem.title}
                      color={endorsementItem.titleColor}>
                      <a
                        href={endorsementItem.URL}
                        target="_blank"
                        rel="noopener noreferrer">
                        <Image
                          height={50}
                          preview={false}
                          src={endorsementItem.image}
                          style={{
                            boxShadow:
                              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                          }}></Image>
                      </a>
                    </Tooltip>
                  </Col>
                );
              })}
            </Row>
          </motion.div>
        </Row>

        {/* section list */}
        <SectionList sectionList={state.sectionList} />

        {/* policies */}
        <Row
          justify="center"
          align="top"
          style={{
            backgroundColor: "white",
            height: "450px",
            padding: "70px 20px",
          }}>
          <Row
            justify="center"
            align="top"
            style={{ width: "100%" }}>
            <Button
              type="primary"
              shape="round"
              icon={<DownloadOutlined />}
              size="large"
              danger
              onClick={() => {
                window.scrollTo(0, 0);
              }}>
              Download
            </Button>
          </Row>

          <Row
            justify="space-around"
            align="top"
            style={{ width: "100%" }}>
            <Col>
              <Row
                justify="start"
                align="middle">
                <Typography>Who we are</Typography>
              </Row>
              <Row
                justify="start"
                align="middle"
                style={{ marginTop: "20px" }}>
                <a
                  href={state.appURL + "/policy/cookies"}
                  target="_blank"
                  rel="noopener noreferrer">
                  <Typography.Title
                    level={5}
                    style={{ margin: "0px" }}>
                    Cookies Policy
                  </Typography.Title>
                </a>
              </Row>
              <Row
                justify="start"
                align="middle"
                style={{ marginTop: "20px" }}>
                <a
                  href={state.appURL + "/policy/privacy"}
                  target="_blank"
                  rel="noopener noreferrer">
                  <Typography.Title
                    level={5}
                    style={{ margin: "0px" }}>
                    Privacy Policy
                  </Typography.Title>
                </a>
              </Row>
              <Row
                justify="start"
                align="middle"
                style={{ marginTop: "20px" }}>
                <a
                  href={state.appURL + "/policy/terms"}
                  target="_blank"
                  rel="noopener noreferrer">
                  <Typography.Title
                    level={5}
                    style={{ margin: "0px" }}>
                    Terms of Service
                  </Typography.Title>
                </a>
              </Row>
            </Col>

            <Col>
              <Row
                justify="start"
                align="middle">
                <Typography>Need help?</Typography>
              </Row>
              <Row
                justify="start"
                align="middle"
                style={{ cursor: "pointer", marginTop: "20px" }}>
                <Popover
                  placement="top"
                  title="Contact Us"
                  content={
                    <a
                      href={state.discordLink}
                      target="_blank"
                      rel="noopener noreferrer">
                      <Row
                        justify="start"
                        align="middle">
                        <Col>
                          <Image
                            width={40}
                            height={40}
                            preview={false}
                            src={state.discordImage}></Image>
                        </Col>
                        <Col style={{ marginLeft: "5px" }}>
                          <Typography>Join our Discord</Typography>
                        </Col>
                      </Row>
                    </a>
                  }
                  trigger="click">
                  <Typography.Title
                    level={5}
                    style={{ margin: "0px" }}>
                    Contact Us
                  </Typography.Title>
                </Popover>
              </Row>
            </Col>
          </Row>
        </Row>

        <Row
          justify="center"
          align="middle"
          style={{ backgroundColor: "white", padding: "0 0 40px 0" }}>
          <Col>
            <Typography.Text
              type="secondary"
              style={{ fontSize: 12 }}>
              {state.appName} © {new Date().getFullYear()}
            </Typography.Text>
          </Col>
        </Row>
      </Layout.Content>

      {/*
            <Layout.Footer>


            </Layout.Footer>
            */}
    </Layout>
  );
};

export default Mobile;
