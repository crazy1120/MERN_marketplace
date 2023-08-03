import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { actions } from "../../redux/slices/profile";
import { BrandSelectiveRender } from ".";

const CreatorOverview = ({ creator }) => {
  const dispatch = useDispatch(),
    { profile, deals } = useSelector(state => state.profile);

  useEffect(() => {
    dispatch(actions.getProfilePublicStart(creator));
    dispatch(actions.getDealsPublicStart(creator));
  }, []);

  return (
    <>
      {profile.title}
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
    <BrandSelectiveRender>
      <CreatorOverview creator={creator} />
    </BrandSelectiveRender>
  );
};

export default Creator;