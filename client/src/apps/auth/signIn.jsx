import { useContext } from "react";
import { useDispatch } from "react-redux";
import { Checkbox, Divider, Form, Input } from "antd";

import { actions } from "../../redux/slices/auth";
import { formContext, imageContext } from "../../redux/context";
import { Header } from "../layout";

// Main Component
const SignInForm = () => {
  const dispatch = useDispatch(),
    form = useContext(formContext).state,
    image = useContext(imageContext).state;

  const handleSubmit = values => dispatch(actions.signInStart(values));

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="container">
      <Form
        name="signInForm"
        initialValues={{ remember: true }}
        onFinish={handleSubmit}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <p>Sign in with your account</p>

        <Divider orientation="left">Email</Divider>
        <Form.Item name="email" rules={form.emailRule}>
          <Input />
        </Form.Item>

        <Divider orientation="left">Password</Divider>
        <Form.Item name="password" rules={form.passwordRule}>
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
          <button type="submit" className="black-btn">
            Sign In
          </button>
        </Form.Item>

        <div id="toSignUp">
          Don't have account?
          <a href="/signup" className="black-btn">
            Sign Up
          </a>
        </div>

        <p>Or Sign in with</p>
        <span>
          <a href="https://accounts.google.com">
            <img src={image.googleImage} alt="Google" />
          </a>
          <a href="https://linkedin.com">
            <img src={image.linkedinImage} alt="Linkedin" />
          </a>
        </span>
      </Form>
    </div>
  );
};

const SignIn = () => {
  return (
    <>
      <Header />
      <SignInForm />
    </>
  );
};

export default SignIn;
