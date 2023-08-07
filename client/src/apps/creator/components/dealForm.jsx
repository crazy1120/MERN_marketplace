import { useContext } from "react";
import { Button, Divider, Form, Input, Select } from "antd";

import { formContext } from "../../../redux/context";
import { useRedirect } from "../../hooks";

export const DealForm = props => {
  const { state } = useContext(formContext);
  const redirect = useRedirect();

  const handleSubmit = values => props.handleSubmit(values);

  const handleCancel = () => redirect("/deals");

  return (
    <Form name="handleDealForm" onFinish={handleSubmit}>
      <Divider orientation="left">Title (must be shorter.)</Divider>
      <Form.Item name="title" rules={state.dealTitleRule}>
        <Input />
      </Form.Item>

      <Divider orientation="left">
        Description (with more than 100 characters.)
      </Divider>
      <Form.Item name="desc" rules={state.dealDescRule}>
        <Input.TextArea />
      </Form.Item>

      <Divider orientation="left">Price</Divider>
      <Form.Item name="price" rules={state.dealPriceRule}>
        <span style={{ display: "flex" }}>
          <Input type="text" style={{ flex: 1 }} />
          <Select
            value="US$"
            style={{
              width: 80,
              marginLeft: "8px",
            }}
          >
            <Select.Option value="dollar">US$</Select.Option>
          </Select>
        </span>
      </Form.Item>

      <Divider />
      <Form.Item style={{ display: "flex", justifyContent: "center" }}>
        <Button type="primary" htmlType="submit">
          {props.action}
        </Button>
        <Button
          htmlType="button"
          onClick={handleCancel}
          style={{ marginLeft: "10px" }}
        >
          Cancel
        </Button>
      </Form.Item>
    </Form>
  );
};
