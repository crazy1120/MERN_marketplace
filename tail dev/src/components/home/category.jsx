import React, { useEffect } from "react";
import Aos from "aos";

const Category = ({ title, aos }) => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div
      className="mx-3 flex h-60 w-60 flex-wrap content-around justify-center rounded-xl py-2 text-center font-satoshi shadow-md_50"
      data-aos={`flip-${aos}`}
    >
      <h4 className="text-3xl underline">{title}</h4>
      <span className="text-2xl">1K Creators</span>
      <span className="text-2xl">300 Brands</span>
    </div>
  );
};

export default Category;
