import { createContext } from "react";

const state = {
  signAlertConfirmTitle: "Sign In First",
  signAlertConfirmDesc: "After you sign in, you can follow creator.",
};

const initialContext = {
  state,
  dispatch: () => null,
};

export default createContext(initialContext);
