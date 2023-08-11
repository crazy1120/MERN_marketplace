import React, { useEffect } from "react";
import Aos from "aos";
import {
  HandThumbUpIcon,
  ChatBubbleLeftIcon,
} from "@heroicons/react/24/outline";
import { FaTwitter } from "react-icons/fa";

const CreatorBriefCard = ({ width, aos, delay }) => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div
      className={`${width} m-3 flex items-center justify-around rounded-xl border-l-2 border-t-2 border-solid border-black p-2 shadow-[4px_4px_0px_rgba(27,_28,_29,_0.9)]`}
      data-aos={aos}
      data-aos-delay={delay}
    >
      <img src="./img/me.jpg" className="h-16 w-16 rounded-full" />

      <div className="flex flex-col justify-start">
        <h5 className="mb-2 flex items-center justify-between text-center font-satoshi text-xl font-bold">
          Alex Borgan
          <FaTwitter className="h-6 w-6 text-software" />
        </h5>
        <p>Lifestyle thought editor</p>
        <span className="mt-2 flex items-center justify-around">
          <HandThumbUpIcon className="h-6 w-6" /> 24K
          <ChatBubbleLeftIcon className="ml-3 h-6 w-6" /> 240
        </span>
      </div>
    </div>
  );
};

export default CreatorBriefCard;
