import { useContext } from "react";
import { Button, Divider, Form, Input, Row, Select } from "antd";

import { formContext } from "../../redux/context";
import { useRedirect } from "../hooks";

const DealForm = () => {
  const { state } = useContext(formContext);
  const redirect = useRedirect();

  const handleSubmit = (values) => {
    console.log("object");
    // dispatch(signInStart(values));
  };

  const handleCancel = () => {
    redirect("/creator");
  };

  return (
    <Row justify={"center"}>
      <Form
        name="handleDealForm"
        onFinish={handleSubmit}>
        <Divider orientation="left">Title (must be shorter.)</Divider>
        <Form.Item
          name="title"
          rules={state.dealTitleRule}>
          <Input />
        </Form.Item>

        <Divider orientation="left">
          Description (with more than 100 characters.)
        </Divider>
        <Form.Item
          name="desc"
          rules={state.dealDescRule}>
          <Input.TextArea />
        </Form.Item>

        <Divider orientation="left">Price</Divider>
        <Form.Item
          name="price"
          rules={state.dealPriceRule}>
          <span style={{ display: "flex" }}>
            <Input
              type="text"
              style={{ flex: 1 }}
            />
            <Select
              style={{
                width: 80,
                marginLeft: "8px",
              }}>
              <Select.Option value="dollar">US$</Select.Option>
            </Select>
          </span>
        </Form.Item>

        <Form.Item style={{ display: "flex", justifyContent: "center" }}>
          <Button
            type="primary"
            htmlType="submit">
            Create
          </Button>
          <Button
            htmlType="button"
            onClick={handleCancel}
            style={{ marginLeft: "10px" }}>
            Cancel
          </Button>
        </Form.Item>
      </Form>
    </Row>
  );
};

export default DealForm;
