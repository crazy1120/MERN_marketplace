import { createContext } from "react";

const formRules = {
  // Rules applied for auth forms
  emailRule: [
    {
      required: true,
      message: "Please input your email!",
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
};

export default createContext({
  state: formRules,
  dispatch: () => null,
});
