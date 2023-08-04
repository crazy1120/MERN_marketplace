import { createContext } from "react";

const state = {
  appDevUrl: "http://localhost:3000",
  googleLink: "https://accounts.google.com",
  linkedinLink: "https://linkedin.com",
};

export default createContext({
  state,
  dispatch: () => null,
});
