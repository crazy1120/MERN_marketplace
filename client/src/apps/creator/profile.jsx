import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "antd";

import CommonLayout from "../layout";
import { actions } from "../../redux/slices/profile";

const Profile = () => {
  const dispatch = useDispatch();
  const { profile, error } = useSelector(state => state.profile);

  useEffect(() => {
    dispatch(actions.getProfileStart());
  }, []);

  return (
    <CommonLayout>
      <div id="creatorProfile" className="app-container">
        {!!profile.name && (
          <div className="create-profile-box">
            <h6>{profile.name}</h6>
            <p>{profile.intro}</p>
            <p>{profile.birthday}</p>
            <p>Join me at {profile.email}</p>
            <Button type="primary">Edit Profile</Button>
          </div>
        )}
        {!profile.name && (
          <div className="create-profile-box">
            <p>{error}</p>
            <Link to={"/creator/profile/create"}>
              <Button type="primary">Create Profile</Button>
            </Link>
          </div>
        )}
      </div>
    </CommonLayout>
  );
};

Profile.propTypes = {};

export default Profile;
