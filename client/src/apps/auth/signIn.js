import React from "react";
import { useDispatch } from "react-redux";
import { Button, Checkbox, Form, Input } from "antd";

import CommonLayout from "../layout/common";
import { signInStart } from "../../redux/slices/auth";
// import { signInStart } from "../../redux/actions/auth";

const SignInForm = () => {
  const dispatch = useDispatch();

  const onFinish = (values) => {
    dispatch(signInStart(values));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off">
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your email!",
          },
        ]}>
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}>
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button
          type="primary"
          htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

const SignIn = () => {
  return (
    <CommonLayout>
      <SignInForm />
    </CommonLayout>
  );
};

export default SignIn;
