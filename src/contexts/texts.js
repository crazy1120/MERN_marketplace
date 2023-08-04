import { createContext } from "react";

const state = {
  appDevName: "allibright",
  coverTitle: "Welcome to our marketplace full of sponsorships",
  coverText:
    "Here you can meet creators or just create your own business and meet our brands.",
};

const initialContext = {
  state,
  dispatch: () => null,
};

export default createContext(initialContext);
