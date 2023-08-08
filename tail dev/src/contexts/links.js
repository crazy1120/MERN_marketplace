import { createContext } from "react";

const state = {
  home_bg:
    "'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80'",
};

const linksContext = createContext({
  state,
  dispatch: () => null,
});

export default linksContext;
