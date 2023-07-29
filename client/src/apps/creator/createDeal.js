// Third-party modules
import React from "react";
import { useDispatch } from "react-redux";

// Components
import CommonLayout from "../layout/common";
import DealForm from "./dealForm";

// Tools
import { actions } from "../../redux/slices/deal";

// Main Component
const CreateDeal = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => dispatch(actions.createDealStart(values));

  return (
    <CommonLayout>
      <DealForm
        action="Create"
        handleSubmit={handleSubmit}
      />
    </CommonLayout>
  );
};

export default CreateDeal;
