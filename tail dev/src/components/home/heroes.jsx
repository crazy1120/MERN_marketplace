import React from "react";

import { CreatorBriefCard } from "@/widgets/cards";

const Heroes = () => {
  return (
    <div className="w-full bg-primary">
      <div className="bg-software py-3 text-center font-heading text-3xl text-software_s">
        Meet the world's top creators and businesses
      </div>
      <div className="container mx-auto flex flex-wrap justify-between py-6">
        <CreatorBriefCard width="w-1/5" aos="fade-down-right" delay="500" />
        <CreatorBriefCard width="w-1/5" aos="fade-down-right" delay="500" />
        <CreatorBriefCard width="w-1/5" aos="fade-down-left" delay="500" />
        <CreatorBriefCard width="w-1/5" aos="fade-down-left" delay="500" />
        <CreatorBriefCard width="w-1/5" aos="fade-up-right" delay="500" />
        <CreatorBriefCard width="w-1/5" aos="fade-up-right" delay="500" />
        <CreatorBriefCard width="w-1/5" aos="fade-up-left" delay="500" />
        <CreatorBriefCard width="w-1/5" aos="fade-up-left" delay="500" />
      </div>
    </div>
  );
};

export default Heroes;
