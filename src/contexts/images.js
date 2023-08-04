import { createContext } from "react";

import iconAgree from "./images/icon-agree.jpg";
import iconSponsor from "./images/icon-sponsor.png";
import linkedinImage from "./images/linkedin.png";
import googleImage from "./images/google.png";

const state = {
  iconAgree,
  iconSponsor,
  linkedinImage,
  googleImage,
};

const initialContext = {
  state,
  dispatch: () => null,
};

export default createContext(initialContext);
