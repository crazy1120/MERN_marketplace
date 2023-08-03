import { Link } from "react-router-dom";

export const Guest = () => (
  <div className="deals-guest">
    Here creators create and access their business.
    <br />
    If you want to become a creator, &nbsp;
    <Link className="big-black-btn sentence-btn" to="/signup">
      SIGN UP
    </Link>
    &nbsp; as creator first.
    <br />
    Or if you already have creator account, please &nbsp;
    <Link className="big-black-btn sentence-btn" to="/signin">
      SIGN IN
    </Link>
    &nbsp; to enjoy business.
  </div>
);
