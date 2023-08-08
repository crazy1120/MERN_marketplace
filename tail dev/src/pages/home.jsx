import React from "react";

import { Intro, Creators, Brands, Usecases } from "@/components/home";
import { Footer } from "@/widgets/layout";

export const Home = () => {
  return (
    <>
      <Intro />
      <Creators />
      <Brands />
      <Usecases />
      <Footer />
    </>
  );
};

export default Home;
