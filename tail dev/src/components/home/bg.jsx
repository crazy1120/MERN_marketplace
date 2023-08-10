import React, { useContext, createElement, useEffect } from "react";

import { useWindowScroll } from "react-use";

const Bg = () => {
  const { y: scrollY } = useWindowScroll();
  useEffect(() => {
    // Calculate the scale factor based on scroll position
    const scaleFactor = 1 - scrollY / 1000; // Adjust the divisor to control the zoom-out intensity
    const transformValue = `scale(${scaleFactor})`;

    // Apply the transform to the image element
    const imgElement = document.querySelector(".img-container img");
    if (imgElement) {
      imgElement.style.transform = transformValue;
    }
  }, [scrollY]);
  return (
    <div className="relative">
      <img
        src="/img/titleImage.png"
        alt="Image"
        className="absolute inset-0 mx-auto w-[600px] transform object-cover transition-transform duration-300"
      />
      <div className="absolute inset-0 z-0 h-full w-full bg-cover bg-center bg-no-repeat"></div>
    </div>
  );
};

export default Bg;
