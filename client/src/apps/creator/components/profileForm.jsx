import { useContext } from "react";
import { useSelector } from "react-redux";
import { Button, Divider, Form, Input } from "antd";

import { formContext } from "../../../redux/context";
import { useRedirect } from "../../hooks";

export const ProfileForm = props => {
  const { state } = useContext(formContext);
  const { name, email, birthday } = useSelector(state => state.auth.user);
  const redirect = useRedirect();

  const handleSubmit = values => props.handleSubmit(values);

  const handleCancel = () => redirect("/creator/profile");

  return (
    <Form
      name="handleProfileForm"
      initialValues={{ name, email, birthday }}
      onFinish={handleSubmit}
    >
      <Divider orientation="left">Name</Divider>
      <Form.Item name="name" rules={state.nameRule}>
        <Input />
      </Form.Item>

      <Divider orientation="left">Email</Divider>
      <Form.Item name="email" rules={state.emailRule}>
        <Input />
      </Form.Item>

      <Divider orientation="left">Birthday</Divider>
      <Form.Item name="birthday" rules={state.birthdayRule}>
        <Input />
      </Form.Item>

      <Divider orientation="left">Brief Description</Divider>
      <Form.Item name="intro" rules={state.profileIntroRule}>
        <Input />
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
