import React, { useEffect } from "react";
import Aos from "aos";

const CreatorCard = ({ width, aos }) => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <div
      className={`${width} m-3 flex items-center justify-center rounded-xl border-l-2 border-t-2 border-solid border-black p-2 shadow-[4px_4px_0px_rgba(27,_28,_29,_0.9)]`}
      data-aos={aos}
    >
      <img src="./img/me.jpg" className="m-4 h-14 w-14 rounded-full" />
      <div className="flex flex-col justify-start">
        <h5 className="font-satoshi text-xl font-bold">Alex Borgan</h5>
        <p>
          You can meet creators in every fields or you can just create your own
          business and get help from brands.
        </p>
      </div>
    </div>
  );
};

export default CreatorCard;
