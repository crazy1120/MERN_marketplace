import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { actions } from "../../redux/slices/profile";
import { BrandSelectiveRender } from ".";
import UserProfile from "./components/profile";
import Deal from "./components/deal";

const CreatorOverview = ({ creator }) => {
  const dispatch = useDispatch(),
    { profile, deals } = useSelector(state => state.profile);

  useEffect(() => {
    dispatch(actions.getProfilePublicStart(creator));
    dispatch(actions.getDealsPublicStart(creator));
  }, []);

  return (
    <>
      <div className="custom-profile-div">
        <UserProfile feature={profile} />
      </div>
      <div className="custom-deal-div">
        {deals.map(deal => (
          <>
            <Deal feature={deal} />
            <br />
          </>
        ))}
      </div>
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
