import React from "react";
import CommonLayout from "../layout";

const Profile = () => {
  return (
    <CommonLayout>
      <div className="app-container">
        profile: show creator's profile, otherwise show alert and button to
        create
      </div>
    </CommonLayout>
  );
};

Profile.propTypes = {};

export default Profile;
