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
          className="duration-30 after:ease-slick enabled:hover:after:ease-slick hover:aftertransition-all hover:afterease-slick ease-slick mx-auto my-6 mt-10  flex w-fit transform items-center justify-center gap-[10px] rounded-[7px] 
           bg-black  px-8 py-5 font-heading text-2xl font-semibold  text-white shadow-[6px_6px_0px_rgba(0,_0,_0,_0.25)] transition-all delay-150 ease-in-out after:m-auto after:flex after:h-full after:max-h-6 after:-translate-x-[2px] after:pl-1 after:transition-all after:delay-150 after:content-[url('https://media.beehiiv.com/cdn-cgi/image/format=auto/www/fancy_arrow.svg')] hover:scale-90 hover:after:translate-x-[2px] hover:after:delay-150 active:shadow-[3px_3px_0px_rgba(0,_0,_0,_0.15)] enabled:hover:after:translate-x-[2px] enabled:hover:after:transition-all enabled:hover:after:delay-150"
        >
          {createElement(UserPlusIcon, {
            className: "w-[18px] h-[18px] text-lg mr-1",
          })}
          Start now
        </a>
      </div>
    </section>
  );
};

export default Intro;
