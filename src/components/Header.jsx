"use client";

import React from "react";
import RemitechLogoColor from "../../public/remitech-logo-color.svg";
import RemitechLogoWhite from "../../public/remitech-logo-white.svg";
import BtnPDF from "@/components/BtnPDF";
import { useScrollPosition } from "@thibault.sh/hooks/useScrollPosition";

const Header = () => {
  const { y } = useScrollPosition();

  return (
    <header
      id="hhh"
      className={`sticky top-0 z-50 w-full bg-gradient-to-tr to-85% transition duration-750 ease-in-out ${y > 0 ? "from-remitech-purple to-remitech-turquoise shadow-lg" : "from-white to-white"}`}
    >
      {/* OUTER DIV for max width and consistent 'padding' */}
      <div className="mx-auto flex min-h-[84px] max-w-[1450px] items-center justify-center md:min-h-[110px] md:justify-between lg:min-h-[125px]">
        {/* DIV with 'hidden' around the Button.*/}
        <div className="m-5 mt-3 ml-10 hidden md:block lg:ml-16">
          <BtnPDF />
        </div>
        {y > 0 ? (
          <RemitechLogoWhite className="w-56 fill-white md:mr-18" />
        ) : (
          <RemitechLogoColor className="w-56 md:mr-18" />
        )}
      </div>
    </header>
  );
};

export default Header;
