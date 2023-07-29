// Third-party modules
import { useContext } from "react";
import { useDispatch } from "react-redux";
import { Button, Checkbox, Form, Input } from "antd";

// Components
import CommonLayout from "../layout/common";

// Tools
import { actions } from "../../redux/slices/auth";
import { formContext } from "../../redux/context";

// Main Component
const SignInForm = () => {
  const dispatch = useDispatch();
  const { state } = useContext(formContext);

  const handleSubmit = (values) => dispatch(actions.signInStart(values));

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}>
      <Form
        name="signInForm"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ width: "50%" }}
        initialValues={{ remember: true }}
        onFinish={handleSubmit}
        onFinishFailed={onFinishFailed}
        autoComplete="off">
        <Form.Item
          label="Email"
          name="email"
          rules={state.emailRule}>
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={state.passwordRule}>
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
    </div>
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
