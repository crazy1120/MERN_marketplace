import React from "react";
import { useDispatch } from "react-redux";

import { PrivateLayout } from "../layout";
import { DealForm } from "./components";
import { actions } from "../../redux/slices/deal";

const CreateDeal = () => {
  const dispatch = useDispatch();

  const handleSubmit = values => dispatch(actions.createDealStart(values));

  return (
    <PrivateLayout>
      <DealForm action="Create" handleSubmit={handleSubmit} />
    </PrivateLayout>
  );
};

export default CreateDeal;
