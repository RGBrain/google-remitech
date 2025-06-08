import React from "react";
import RemitechLogo from "../../public/remitech-logo.svg";
import BtnPDF from "@/components/BtnPDF";

const Header = () => {
  return (
    <header id="hhh" className="bg-gradient-to-tr from-remitech-purple to-remitech-turquoise to-85% w-full sticky top-0 z-40 ">
      {/* 'min-h-[84px] sm:min-h-[110px]' - i did this because the header had less height than original site before */}
      {/* 'items-center' - to center Btn and Logo vertically */}
      {/* NOW STICKY with 'sticky top-0 */}
      {/* shadow color gray-400 roughly matches */}
      <div className="flex justify-center md:justify-between items-center min-h-[84px] md:min-h-[110px] lg:min-h-[125px] max-w-[1450px] mx-auto">
        {/* ABOVE is an OUTER DIV so there can be a max width and consistend 'padding' */}
        <div className="hidden md:block m-5 ml-10 lg:ml-16">
          {/* putting this div with 'hidden' around the Button.*/}

          <BtnPDF />
        </div>
        <RemitechLogo className="fill-foreground w-56 md:mr-18" />
        {/* <Image src="/MSSurface_TDSYNNEX-Logos-scaled.png" width={400} height={400} alt="TD Synnex and Microsoft Surface logos" className="md:mr-18 w-65 lg:w-110" /> */}
      </div>
    </header>
  );
};

export default Header;
