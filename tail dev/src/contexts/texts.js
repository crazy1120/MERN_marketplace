import { createContext } from "react";

const state = {
  app_title: "MarketPlace",
  home_title: "Your business grows with us.",
  home_desc:
    "You can meet creators in every fields or you can just create your own business and get help from brands.",
};

const textsContext = createContext({
  state,
  dispatch: () => null,
});

export default textsContext;
