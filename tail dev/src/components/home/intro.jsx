import { useContext } from "react";

import { textsContext, linksContext } from "@/contexts";
import IntroMain from "./intro-main";

const Intro = () => (
  <section className="bg-primary">
    <div className="container mx-auto flex justify-between pb-10">
      <IntroMain />
    </div>
  </section>
);

export default Intro;
