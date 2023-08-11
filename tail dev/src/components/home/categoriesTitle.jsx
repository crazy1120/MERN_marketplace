import React from "react";

const CategoriesTitle = () => {
  return (
    <div className="mx-3 flex h-60 w-96 flex-wrap content-between">
      <img
        src="/img/plainEarth.png"
        className="absolute left-0 z-0 mt-[-100px] w-screen overflow-hidden opacity-50"
      />
      <div className="z-10 w-full font-heading text-4xl text-black">
        <i>Browse the</i>
      </div>
      <div className="z-10 w-full text-center font-heading text-5xl text-black">
        <i>World</i>
      </div>
      <div className="z-10 w-full text-right font-heading text-4xl text-black">
        <i>of Possibilities</i>
      </div>
    </div>
  );
};

export default CategoriesTitle;
