import { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Typography,
  Layout,
  Row,
  Col,
  Image,
  Button,
  Tooltip,
  Popover,
} from "antd";
import { DownloadOutlined } from "@ant-design/icons";

import { Header } from "../../layout";
import { commonContext } from "../../../redux/context";

// props: image
const FloatImageCol = props => {
  return (
    <Col span={12}>
      <Row justify="center">
        <motion.div
          initial={{ y: 300, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { type: "spring", bounce: 0, duration: 1 },
          }}
          viewport={{ once: true }}
        >
          <Image
            height={400}
            preview={false}
            src={props.image}
            style={{
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            }}
          ></Image>
        </motion.div>
      </Row>
    </Col>
  );
};

// props title, text
const FloatTextCol = props => {
  return (
    <Col span={12}>
      <motion.div
        initial={{ y: 300, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: { type: "spring", bounce: 0, duration: 1 },
        }}
        viewport={{ once: true }}
      >
        <Row justify="center" style={{ padding: "0px 50px" }}>
          <Typography.Title>{props.title}</Typography.Title>
        </Row>
        <Row justify="center" style={{ padding: "0px 50px" }}>
          <Typography style={{ fontSize: "16px" }}>{props.text}</Typography>
        </Row>
      </motion.div>
    </Col>
  );
};

// props: sectionItem, backgroundColor
const SectionItemImageOnTheLeft = props => {
  return (
    <Row
      justify="center"
      align="middle"
      style={{
        backgroundColor: props.backgroundColor,
        height: "700px",
        padding: "100px",
      }}
    >
      <Row justify="center" align="middle" style={{ maxWidth: "2000px" }}>
        <FloatImageCol image={props.sectionItem.image} />
        <FloatTextCol
          title={props.sectionItem.title}
          text={props.sectionItem.text}
        />
      </Row>
    </Row>
  );
};

// props: sectionItem, backgroundColor
const SectionItemImageOnTheRight = props => {
  return (
    <Row
      justify="center"
      align="middle"
      style={{
        backgroundColor: props.backgroundColor,
        height: "700px",
        padding: "100px",
      }}
    >
      <Row justify="center" align="middle" style={{ maxWidth: "2000px" }}>
        <FloatTextCol
          title={props.sectionItem.title}
          text={props.sectionItem.text}
        />
        <FloatImageCol image={props.sectionItem.image} />
      </Row>
    </Row>
  );
};

// props: sectionList
const SectionList = props => {
  return (
    <>
      {props.sectionList.map((sectionItem, index) => {
        return index % 2 === 0 ? (
          <SectionItemImageOnTheLeft
            key={index}
            sectionItem={sectionItem}
            backgroundColor={"white"}
          />
        ) : (
          <SectionItemImageOnTheRight
            key={index}
            sectionItem={sectionItem}
            backgroundColor={null}
          />
        );
      })}
    </>
  );
};

const Desktop = () => {
  const { state } = useContext(commonContext);

  return (
    <Layout style={{ minWidth: "1000px" }}>
      <Header />

      <Layout.Content>
        <Row id="mainLanding" className="center-middle">
          <Row justify="center" align="middle" style={{ maxWidth: "2000px" }}>
            <Col id="titleBoard">
              <Row justify="center" style={{ padding: "0px 50px" }}>
                <Typography.Title>{state.coverTitle}</Typography.Title>
              </Row>

              <Row justify="center" style={{ padding: "0px 50px" }}>
                <Typography>{state.coverText}</Typography>
              </Row>

              <Row justify="center" style={{ marginTop: "50px" }}>
                <Link className="big-black-btn" to="/signin">
                  SIGNIN
                </Link>
                <Link className="big-black-btn" to="/signup">
                  SIGNUP
                </Link>
              </Row>
            </Col>

            <Col style={{ width: "60%" }}>
              <Row justify="center">
                <Image
                  width={800}
                  height={700}
                  preview={false}
                  src={state.coverImage}
                ></Image>
              </Row>
            </Col>
          </Row>
        </Row>

        {/* endorsement list */}
        <Row
          justify="center"
          align="middle"
          style={{ height: "700px", padding: "100px" }}
        >
          <Row justify="center" align="middle" style={{ maxWidth: "2000px" }}>
            <motion.div
              initial={{ y: 300, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { type: "spring", bounce: 0, duration: 1 },
              }}
              viewport={{ once: true }}
            >
              <Row justify="center">
                <Typography.Title>{state.endorsementTitle}</Typography.Title>
              </Row>
              <Row justify="center">
                <Typography style={{ fontSize: "16px" }}>
                  {state.endorsementText}
                </Typography>
              </Row>

              <Row justify="center" style={{ marginTop: "50px" }}>
                {state.endorsementList.map((endorsementItem, index) => {
                  return (
                    <Col span={3}>
                      <Tooltip
                        placement="top"
                        title={endorsementItem.title}
                        color={endorsementItem.titleColor}
                      >
                        <a
                          href={endorsementItem.URL}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image
                            height={70}
                            preview={false}
                            src={endorsementItem.image}
                            style={{
                              boxShadow:
                                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                            }}
                          ></Image>
                        </a>
                      </Tooltip>
                    </Col>
                  );
                })}
              </Row>
            </motion.div>
          </Row>
        </Row>

        {/* section list */}
        <SectionList sectionList={state.sectionList} />

        {/* policies */}
        <Row
          justify="center"
          align="middle"
          style={{
            backgroundColor: "white",
            height: "500px",
            padding: "100px",
          }}
        >
          <Row
            justify="left"
            align="top"
            style={{ maxWidth: "2000px", width: "100%" }}
          >
            <Col style={{ padding: "0px 20px" }}>
              <Row
                justify="start"
                align="middle"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                <Col>
                  <Image
                    height={30}
                    preview={false}
                    src={state.appLogo}
                    style={{ filter: "grayscale(1)", opacity: "0.7" }}
                  ></Image>
                </Col>
                <Col>
                  <Typography.Title
                    level={3}
                    style={{ color: "gray", marginLeft: "10px" }}
                  >
                    {state.appName}
                  </Typography.Title>
                </Col>
              </Row>
              <Row
                justify="start"
                align="middle"
                style={{ marginTop: "125px" }}
              >
                <Col>
                  <Button
                    type="primary"
                    shape="round"
                    icon={<DownloadOutlined />}
                    size="large"
                    danger
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                  >
                    Download
                  </Button>
                </Col>
              </Row>
            </Col>

            <Col style={{ padding: "0px 20px" }}>
              <Row justify="start" align="middle" style={{ margin: "20px 0" }}>
                <Typography>Who we are</Typography>
              </Row>
              <Row justify="start" align="middle">
                <a
                  href={state.appURL + "/policy/cookies"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Typography.Title level={5}>Cookies Policy</Typography.Title>
                </a>
              </Row>
              <Row justify="start" align="middle">
                <a
                  href={state.appURL + "/policy/privacy"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Typography.Title level={5}>Privacy Policy</Typography.Title>
                </a>
              </Row>
              <Row justify="start" align="middle">
                <a
                  href={state.appURL + "/policy/terms"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Typography.Title level={5}>
                    Terms of Service
                  </Typography.Title>
                </a>
              </Row>
            </Col>

            <Col style={{ padding: "0px 20px" }}>
              <Row justify="start" align="middle" style={{ margin: "20px 0" }}>
                <Typography>Need help?</Typography>
              </Row>
              <Row justify="start" align="middle" style={{ cursor: "pointer" }}>
                <Popover
                  placement="top"
                  title="Contact Us"
                  content={
                    <a
                      href={state.discordLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Row justify="start" align="middle">
                        <Col>
                          <Image
                            height={40}
                            preview={false}
                            src={state.discordImage}
                          ></Image>
                        </Col>
                        <Col style={{ marginLeft: "5px" }}>
                          <Typography>Join our Discord</Typography>
                        </Col>
                      </Row>
                    </a>
                  }
                  trigger="click"
                >
                  <Typography.Title level={5}>Contact Us</Typography.Title>
                </Popover>
              </Row>
            </Col>
          </Row>
        </Row>

        <Row
          justify="center"
          align="middle"
          style={{ backgroundColor: "white", padding: "0 0 40px 0" }}
        >
          <Col>
            <Typography.Text type="secondary" style={{ fontSize: 12 }}>
              {state.appName} © {new Date().getFullYear()}
            </Typography.Text>
          </Col>
        </Row>
      </Layout.Content>
    </Layout>
  );
};

export default Desktop;
