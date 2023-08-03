import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Popconfirm, Tooltip } from "antd";

import { useRedirect } from "../hooks";
import { actions } from "../../redux/slices/profile";
import { textContext, imageContext } from "../../redux/context";

import { BrandSelectiveRender } from ".";

const Creators = () => {
  const dispatch = useDispatch(),
    { state: image } = useContext(imageContext),
    { state: text } = useContext(textContext),
    { creators } = useSelector(state => state.profile),
    { isAuthenticated } = useSelector(state => state.auth),
    redirect = useRedirect();

  useEffect(() => {
    dispatch(actions.getCreatorsStart());
  }, []);

  const toSignIn = () => redirect("/signin");

  const agreeCreator = () => {
    console.log("object");
  };

  const getDealsPublic = creator => redirect(`/creator/${creator}`);

  return (
    <>
      <p id="meetCreators">Meet all creators</p>
      <div id="creatorsGallery">
        {creators.map(creator => (
          <div key={creator.email} className="creator-box">
            <Tooltip
              title={`${text.introCreatorTooltip} ${creator.name}`}
              onClick={() => getDealsPublic(creator.owner)}
            >
              <p>{creator.name}</p>
              <p>{creator.intro}</p>
            </Tooltip>
            <span>
              {!isAuthenticated && (
                <Popconfirm
                  placement="top"
                  title={text.signAlertConfirmTitle}
                  description={text.signAlertConfirmDesc}
                  onConfirm={toSignIn}
                  okText="Sign In Now"
                  cancelText="No, any time later"
                >
                  <Button>
                    <img src={image.iconAgree} alt="like" />
                  </Button>
                </Popconfirm>
              )}
              {isAuthenticated && (
                <button onClick={agreeCreator}>
                  <img src={image.iconAgree} alt="like" />
                </button>
              )}
              {creator.likes}

              <img src={image.iconSponsor} alt="sponsor" />
              {creator.deals}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

const Gallery = () => (
  <BrandSelectiveRender>
    <Creators />
  </BrandSelectiveRender>
);

export default Gallery;
