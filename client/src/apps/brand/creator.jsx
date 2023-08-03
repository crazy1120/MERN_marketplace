import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { actions } from "../../redux/slices/profile";
import { SelectiveRender } from ".";

const CreatorOverview = ({ creator }) => {
  const dispatch = useDispatch(),
    { deals } = useSelector(state => state.profile);

  useEffect(() => {
    dispatch(actions.getDealsPublicStart(creator));
  }, []);

  return (
    <>
      {deals.map(deal => (
        <>
          {deal.title}
          <br />
        </>
      ))}
    </>
  );
};

const Creator = () => {
  const { creator } = useParams();

  return (
    <SelectiveRender>
      <CreatorOverview creator={creator} />
    </SelectiveRender>
  );
};

export default Creator;
