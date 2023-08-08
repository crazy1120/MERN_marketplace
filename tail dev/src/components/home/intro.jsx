import { useContext, createElement } from "react";
import { Typography } from "@material-tailwind/react";

import { textsContext, linksContext } from "@/contexts";
import { UserPlusIcon } from "@heroicons/react/24/solid";

const Intro = () => {
  const { state: linksState } = useContext(linksContext);
  const { state: textsState } = useContext(textsContext);

  return (
    <div className="relative flex h-screen content-center items-center justify-center pb-32 pt-16">
      <div className="absolute top-0 h-full w-full bg-primary bg-cover bg-center" />
      <div className="max-w-8xl container relative mx-auto">
        <div className="flex flex-wrap items-center">
          <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
            <img src="/img/app-symbolize.png" className="mx-auto mb-10 w-72" />
            <Typography variant="h1" color="black" className="mb-6 font-black">
              {textsState.home_title}
            </Typography>
            <Typography variant="lead" color="black" className="opacity-80">
              {textsState.home_desc}
            </Typography>
            <a
              href="/sign-up"
              className="duration-30 mx-auto mt-6 flex w-fit transform items-center rounded-full bg-white px-4 py-2 text-lg font-semibold text-black shadow-lg transition ease-in-out hover:scale-110"
            >
              {createElement(UserPlusIcon, {
                className: "w-[18px] h-[18px] text-lg mr-1",
              })}
              Start Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
