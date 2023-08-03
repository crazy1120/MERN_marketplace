import React from "react";
import { useDispatch } from "react-redux";

import { PublicLayout } from "../layout";
import { ProfileForm } from "./components";
import { actions } from "../../redux/slices/profile";

const CreateProfile = () => {
  const dispatch = useDispatch();

  const handleSubmit = values => dispatch(actions.createProfileStart(values));

  return (
    <PublicLayout>
      <ProfileForm action="Publish" handleSubmit={handleSubmit} />
    </PublicLayout>
  );
};

export default CreateProfile;
