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
