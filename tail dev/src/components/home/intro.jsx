import { useContext, createElement } from "react";
import { Typography } from "@material-tailwind/react";

import { textsContext, linksContext } from "@/contexts";
import { UserPlusIcon } from "@heroicons/react/24/solid";

const Intro = () => {
  const { state: linksState } = useContext(linksContext);
  const { state: textsState } = useContext(textsContext);

  return (
    <section className="bg-primary">
      <div className="container mx-auto flex flex-col justify-center">
        <img src="/img/titleImage.png" className="mx-auto w-80" />
        <Typography
          variant="h1"
          color="black"
          className="
          mx-auto my-6 w-full max-w-[550px] text-center font-heading text-[2.75rem] font-black leading-none
          md:max-w-[780px] md:text-7xl xl:text-[5.5rem]"
        >
          {textsState.home_title}
        </Typography>
        <p className="mx-auto w-1/2 text-center font-satoshi text-3xl ">
          {textsState.home_desc}
        </p>
        <a
          href="/sign-up"
          className="duration-30 mx-auto my-6 flex w-fit transform items-center rounded-full bg-white px-4 py-2 text-lg font-semibold text-black shadow-lg transition ease-in-out hover:scale-110"
        >
          {createElement(UserPlusIcon, {
            className: "w-[18px] h-[18px] text-lg mr-1",
          })}
          Start Now
        </a>
      </div>
    </section>
  );
};

export default Intro;
