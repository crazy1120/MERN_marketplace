import { createContext } from "react";

const formRules = {
  // Rules applied for auth forms
  nameRule: [
    {
      required: true,
      message: "Please input your name!",
    },
  ],
  emailRule: [
    {
      type: "email",
      message: "The input is not valid E-mail!",
    },
    {
      required: true,
      message: "Please input your email!",
    },
  ],
  birthdayRule: [
    {
      required: true,
      message: "Please input your birthday!",
    },
  ],
  passwordRule: [
    {
      required: true,
      message: "Please input your password!",
    },
  ],
  confirmRule: [
    {
      required: true,
      message: "Please confirm your password!",
    },
  ],
  confirmMatch: "The new password that you entered do not match!",
  locationRule: [
    {
      type: "array",
      required: true,
      message: "Please select your current location!",
    },
  ],
  phoneRule: [
    {
      required: true,
      message: "Please input your phone number!",
    },
  ],
  genderRule: [
    {
      required: true,
      message: "Please select gender!",
    },
  ],
  agreeRule: "Should accept agreement",
  levelRule: [
    {
      required: true,
      message: "Please select your role in this site!",
    },
  ],

  // Rules applied for deal forms
  dealTitleRule: [
    { required: true, message: "Please input the title of your deal!" },
  ],
  dealDescRule: [
    {
      required: true,
      message: "Please input the description of your deal!",
    },
  ],
  dealPriceRule: [
    {
      required: true,
      message: "Please input the desired price of your deal!",
    },
  ],

  // Rules applied for profile forms
  profileIntroRule: [
    {
      required: true,
      message: "Please input some description about yourself.",
    },
  ],
};

export default createContext({
  state: formRules,
  dispatch: () => null,
});
