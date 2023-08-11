import React, { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";
import classNames from "classnames";

const YourComponent = () => {
  const { y: scrollY } = useWindowScroll();
  const [backgroundColor, setBackgroundColor] = useState("bg-transparent");

  useEffect(() => {
    const scrollPercent =
      (scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;

    const breakpoints = [
      { percent: 0, color: "bg-transparent" },
      { percent: 25, color: "bg-red" },
      { percent: 50, color: "bg-yellow" },
      { percent: 75, color: "bg-green" },
      { percent: 100, color: "bg-blue" },
    ];

    const matchedBreakpoint = breakpoints.find(
      (breakpoint) => scrollPercent <= breakpoint.percent
    );
    const matchedColor = matchedBreakpoint
      ? matchedBreakpoint.color
      : breakpoints[breakpoints.length - 1].color;

    setBackgroundColor(matchedColor);
  }, [scrollY]);

  return (
    <div className={classNames("h-screen", backgroundColor)}>
      {/* Content */}
      <div className=" h-40 w-40 border-solid border-black">df</div>
      <div className="h-40 w-40 border-solid border-black">wef</div>
      <div className="h-40 w-40 border-solid border-black">wef</div>
      <div className="h-40 w-40 border-solid border-black">wef</div>
      <div className="h-40 w-40 border-solid border-black">wef</div>
    </div>
  );
};

export default YourComponent;
