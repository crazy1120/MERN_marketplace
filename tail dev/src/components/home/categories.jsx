import React, { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";
import classNames from "classnames";

import Category from "./category";
import CategoriesTitle from "./categoriesTitle";

const Categories = () => {
  const { y: scrollY } = useWindowScroll();
  const [backgroundColor, setBackgroundColor] = useState("bg-transparent");

  useEffect(() => {
    const scrollPercent =
      (scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;

    const breakpoints = [
      { percent: 0, color: "bg-transparent" },
      { percent: 20, color: "bg-primary" },
      { percent: 40, color: "bg-f1e9fa" },
      { percent: 60, color: "bg-e9d8f1" },
      { percent: 80, color: "bg-e1c7e9" },
      { percent: 100, color: "bg-brown" },
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
    <section className={classNames(backgroundColor)}>
      <div className="container mx-auto flex flex-col justify-center py-5">
        <div className="mx-auto my-12 flex w-1/2 justify-between">
          <Category title="Consultation" aos="up" />
          <Category title="Marketing" aos="up" />
        </div>
        <div className="mx-auto my-12 flex w-full items-center justify-between">
          <Category title="Lorem ipsum" aos="left" />
          <CategoriesTitle />
          <Category title="Lorem ipsum" aos="right" />
        </div>
        <div className="mx-auto my-12 flex w-1/2 justify-between">
          <Category title="Lorem ipsum" aos="down" />
          <Category title="Lorem ipsum" aos="down" />
        </div>
      </div>
    </section>
  );
};

export default Categories;
