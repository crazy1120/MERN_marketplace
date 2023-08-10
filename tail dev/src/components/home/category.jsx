import React from "react";

import CreatorCard from "@/widgets/cards/creator-card";

const Category = ({ title, bg, text }) => {
  return (
    <div className="w-full">
      <div className={`${bg} py-3 text-center font-heading text-3xl ${text}`}>
        {title}
      </div>
      <div className="container mx-auto flex flex-wrap justify-between py-6">
        <CreatorCard width="w-1/4" aos="fade-down-right" />
        <CreatorCard width="w-1/4" aos="fade-down-right" />
        <CreatorCard width="w-1/4" aos="fade-down-right" />
        <CreatorCard width="w-1/4" aos="fade-down-right" />
        <CreatorCard width="w-1/4" aos="fade-down-right" />
        <CreatorCard width="w-1/4" aos="fade-down-right" />
      </div>
    </div>
  );
};

export default Category;
