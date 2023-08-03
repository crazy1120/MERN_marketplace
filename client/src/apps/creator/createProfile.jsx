import React from "react";
import { useDispatch } from "react-redux";

import { PrivateLayout } from "../layout";
import { ProfileForm } from "./components";
import { actions } from "../../redux/slices/profile";

const CreateProfile = () => {
  const dispatch = useDispatch();

  const handleSubmit = values => {
    dispatch(actions.createProfileStart(values));
  };

  return (
    <PrivateLayout>
      <ProfileForm action="Publish" handleSubmit={handleSubmit} />
    </PrivateLayout>
  );
};

export default CreateProfile;
