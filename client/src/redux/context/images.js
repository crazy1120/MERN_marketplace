import { createContext } from "react";

import iconAgree from "../../images/icon-agree.jpg";
import iconSponsor from "../../images/icon-sponsor.png";
import linkedinImage from "../../images/linkedin.png";
import googleImage from "../../images/google.png";

const initialState = {
  iconAgree,
  iconSponsor,
  linkedinImage,
  googleImage,
};

const initialContext = {
  state: initialState,
  dispatch: () => null,
};

export default createContext(initialContext);
