"use client";

import React from "react";
import RemitechLogoColor from "../../public/remitech-logo-color.svg";
import RemitechLogoWhite from "../../public/remitech-logo-white.svg";
import BtnPDF from "@/components/BtnPDF";
// import Image from "next/image";
import { useScrollPosition } from "@thibault.sh/hooks/useScrollPosition";

const Header = () => {
  const { y } = useScrollPosition();

  return (
    <header id="hhh" className={`w-full sticky top-0 z-40 transition ease-in-out duration-1000 bg-gradient-to-tr to-85% ${y > 0 ? " from-remitech-purple to-remitech-turquoise shadow-lg" : "from-white to-white"}`}>
      {/* 'min-h-[84px] sm:min-h-[110px]' - i did this because the header had less height than original site before */}
      {/* 'items-center' - to center Btn and Logo vertically */}
      {/* NOW STICKY with 'sticky top-0 */}
      {/* shadow color gray-400 roughly matches */}
      <div className="flex justify-center md:justify-between items-center min-h-[84px] md:min-h-[110px] lg:min-h-[125px] max-w-[1450px] mx-auto">
        {/* ABOVE is an OUTER DIV so there can be a max width and consistend 'padding' */}
        <div className="hidden md:block m-5 ml-10 lg:ml-16 mt-3">
          {/* putting this div with 'hidden' around the Button.*/}

          <BtnPDF />
        </div>

        {y > 0 ? <RemitechLogoWhite className="fill-white w-56 md:mr-18" /> : <RemitechLogoColor className="w-56 md:mr-18" />}

        {/* <Image src="/remitech-logo-color.png" width={222} height={200} alt="Remitech Logo" className="md:mr-18" /> */}

        {/* <Image src="/MSSurface_TDSYNNEX-Logos-scaled.png" width={400} height={400} alt="TD Synnex and Microsoft Surface logos" className="md:mr-18 w-65 lg:w-110" /> */}
      </div>
    </header>
  );
};

export default Header;
