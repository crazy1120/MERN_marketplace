import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Popconfirm } from "antd";

import { useRedirect } from "../hooks";
import { actions } from "../../redux/slices/profile";
import { textContext, imageContext } from "../../redux/context";

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

  return (
    <>
      {creators.map(creator => (
        <div key={creator.email} className="creator-box">
          <p>{creator.name}</p>
          <p>{creator.intro}</p>
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
    </>
  );
};

export default Creators;
