// Third-party modules
import React from "react";
import { useDispatch } from "react-redux";

// Components
import CommonLayout from "../layout/common";
import DealForm from "./dealForm";

// Tools
import { createDealStart } from "../../redux/slices/deal";

// Main Component
const CreateDeal = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => dispatch(createDealStart(values));

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
