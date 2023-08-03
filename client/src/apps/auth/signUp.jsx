import React from "react";
import { useContext } from "react";
// import { useDispatch } from "react-redux";
// import { Checkbox, Divider, Form, Input } from "antd";

// import { actions } from "../../redux/slices/auth";
import * as context from "../../redux/context";
import { PublicLayout } from "../layout";

import { Cascader, Checkbox, DatePicker, Form, Input, Select } from "antd";
const { Option } = Select;

const SignUpForm = () => {
  const links = useContext(context.commonContext).state,
    formRules = useContext(context.formContext).state,
    texts = useContext(context.textContext).state,
    image = useContext(context.imageContext).state,
    [form] = Form.useForm();

  const onFinish = values => {
    console.log("Received values of form: ", values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 100,
        }}
      >
        <Option value="212">+212</Option>
        <Option value="380">+380</Option>
      </Select>
    </Form.Item>
  );

  return (
    <Form
      form={form}
      name="signUpForm"
      onFinish={onFinish}
      initialValues={{ prefix: "212" }}
      scrollToFirstError
    >
      <p>Create your account</p>
      <span>
        <Form.Item name="name" label="Name" rules={formRules.nameRule}>
          <Input />
        </Form.Item>

        <Form.Item name="email" label="Email" rules={formRules.emailRule}>
          <Input />
        </Form.Item>
      </span>

      <span>
        <Form.Item name="gender" label="Gender" rules={formRules.genderRule}>
          <Select placeholder={texts.genderSelection}>
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="birthday"
          label="Birthday"
          rules={formRules.birthdayRule}
        >
          <DatePicker />
        </Form.Item>
      </span>

      <span>
        <Form.Item
          name="password"
          label="Password"
          rules={formRules.passwordRule}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm"
          dependencies={["password"]}
          hasFeedback
          rules={[
            ...formRules.confirmRule,
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error(formRules.confirmMatch));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
      </span>

      <Form.Item
        name="location"
        label="Current location"
        rules={formRules.locationRule}
      >
        <Cascader options={texts.signUpLocations} />
      </Form.Item>

      <Form.Item name="phone" label="Phone Number" rules={formRules.phoneRule}>
        <Input addonBefore={prefixSelector} />
      </Form.Item>

      <Form.Item name="level" label="Level" rules={formRules.levelRule}>
        <Select placeholder={texts.levelSelection.title}>
          <Option value="creator">{texts.levelSelection.creator}</Option>
          <Option value="brand">{texts.levelSelection.brand}</Option>
          <Option value="buyer">{texts.levelSelection.buyer}</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(new Error(formRules.agreeRule)),
          },
        ]}
      >
        <Checkbox>
          I have read the <a href="https://linkedin.com/in/xxx">agreement</a>
        </Checkbox>
      </Form.Item>

      <Form.Item>
        <button type="submit" className="black-btn">
          Sign Up
        </button>
      </Form.Item>

      <div className="sign-switch">
        Already have account?
        <a href="/signin" className="black-btn">
          Sign In
        </a>
      </div>

      <p>Or Continue with</p>
      <span className="third-auth">
        <a href={links.googleLink}>
          <img src={image.googleImage} alt="Google" />
        </a>
        <a href={links.linkedinLink}>
          <img src={image.linkedinImage} alt="Linkedin" />
        </a>
      </span>
    </Form>
  );
};

const SignUp = () => (
  <PublicLayout>
    <SignUpForm />
  </PublicLayout>
);

export default SignUp;
