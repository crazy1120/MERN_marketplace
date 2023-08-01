import React from "react";
import { useSelector } from "react-redux";

import CommonLayout, { Header } from "../layout";
import Creators from "./creators";

const Brand = () => (
  <CommonLayout>
    <div id="creatorsGallery" className="app-container">
      <Creators />
    </div>
  </CommonLayout>
);

const Guest = () => (
  <>
    <Header />
    <div className="container">
      <p id="meetCreators">Meet all creators</p>
      <div id="creatorsGallery">
        <Creators />
      </div>
    </div>
  </>
);

const Gallery = () => {
  const auth = useSelector(state => state.auth);

  if (auth.isAuthenticated && auth.user.level === 2) return <Brand />;
  else return <Guest />;
};

export default Gallery;
