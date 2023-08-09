import React from "react";

import { Intro, Creators, Brands, Usecases } from "@/components/home";
import { Public } from "@/widgets/layout/commonlayout";

export const Home = () => {
  return (
    <Public>
      <Intro />
      <Creators />
      <Brands />
      <Usecases />
    </Public>
  );
};

export default Home;
