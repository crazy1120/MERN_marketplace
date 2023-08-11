import React from "react";

import {
  Intro,
  Creators,
  Brands,
  Usecases,
  Categories,
  Heroes,
} from "@/components/home";
import { Public } from "@/widgets/layout/commonlayout";

export const Home = () => {
  return (
    <Public>
      <Intro />
      <Heroes />
      <Categories />
      {/* <Creators /> */}
      {/* <Brands /> */}
      {/* <Usecases /> */}
    </Public>
  );
};

export default Home;
