import React from "react";
import { useDispatch } from "react-redux";

import CommonLayout from "../layout";
import ProfileForm from "./profileForm";
import { actions } from "../../redux/slices/profile";

const CreateProfile = () => {
  const dispatch = useDispatch();

  const handleSubmit = values => dispatch(actions.createProfileStart(values));

  return (
    <CommonLayout>
      <ProfileForm action="Publish" handleSubmit={handleSubmit} />
    </CommonLayout>
  );
};

export default CreateProfile;
