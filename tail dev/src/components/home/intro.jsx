import { useContext, createElement } from "react";
import { Typography } from "@material-tailwind/react";

import { textsContext, linksContext } from "@/contexts";
import IntroMain from "./intro-main";
import CreatorCard from "@/widgets/cards/creator-card";

const Intro = () => {
  const { state: linksState } = useContext(linksContext);
  const { state: textsState } = useContext(textsContext);

  return (
    <section className="bg-primary">
      <div className="container mx-auto flex justify-between pb-10">
        <IntroMain />
      </div>
    </section>
  );
};

export default Intro;
