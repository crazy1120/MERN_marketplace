import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { actions } from "../../../redux/slices/auth";

const Linkbar = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector(state => state.auth);

  const handleSignOut = () => {
    localStorage.removeItem("token");
    dispatch(actions.signOut());
  };

  const authLink = (
    <a className="black-btn" href="/signin" onClick={handleSignOut}>
      Sign Out
    </a>
  );
  const creatorLink = (
    <Link className="black-btn" to="/deals">
      For Creators
    </Link>
  );
  const brandLink = (
    <Link className="black-btn" to="/creators">
      For Brands
    </Link>
  );
  const commonLink = (
    <>
      <Link className="black-btn" to="/aboutUs">
        About Us
      </Link>
      <Link className="black-btn" to="/help">
        Help
      </Link>
    </>
  );

  if (!isAuthenticated)
    return (
      <>
        {creatorLink}
        {brandLink}
        {commonLink}
      </>
    );
  else if (user.level === 1)
    return (
      <>
        {creatorLink}
        {commonLink}
        {authLink}
      </>
    );
  else if (user.level === 2)
    return (
      <>
        {brandLink}
        {commonLink}
        {authLink}
      </>
    );
};

export default Linkbar;
