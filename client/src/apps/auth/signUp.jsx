import React from "react";
import { useContext } from "react";
import { useDispatch } from "react-redux";
import { Cascader, Checkbox, DatePicker, Form, Input, Select } from "antd";

import { actions } from "../../redux/slices/auth";
import * as context from "../../redux/context";
import { PublicLayout } from "../layout";

const { Option } = Select;

const SignUpForm = () => {
  const links = useContext(context.commonContext).state,
    formRules = useContext(context.formContext).state,
    texts = useContext(context.textContext).state,
    image = useContext(context.imageContext).state,
    [form] = Form.useForm(),
    dispatch = useDispatch();

  const onFinish = values => {
    values.phone = values.prefix + " " + values.phone;
    values.location = values.location.join("-");
    const { $y: y, $M: m, $D: d } = values.birthday;
    values.birthday = `${y}-${m + 1 < 10 ? "0" + (m + 1) : m + 1}-${
      d < 10 ? "0" + d : d
    }`;

    dispatch(actions.signUpStart(values));
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select>
        {texts.signUpPhonePrefixes.map(phonePrefix => (
          <Option key={phonePrefix} value={phonePrefix}>
            +{phonePrefix}
          </Option>
        ))}
      </Select>
    </Form.Item>
  );

  return (
    <Form
      form={form}
      name="signUpForm"
      onFinish={onFinish}
      initialValues={{ prefix: "+212" }}
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

      <Form.Item name="level" label="Role" rules={formRules.levelRule}>
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
