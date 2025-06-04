import React from "react";
import BtnSurvey from "./BtnSurvey";
import Image from "next/image";

const Header = () => {
  return (
    <header id="hhh" className="bg-white w-full shadow-md shadow-gray-400 sticky top-0 z-40">
      {/* 'min-h-[84px] sm:min-h-[110px]' - i did this because the header had less height than original site before */}
      {/* 'items-center' - to center Btn and Logo vertically */}
      {/* NOW STICKY with 'sticky top-0 */}
      {/* shadow color gray-400 roughly matches */}
      <div className="flex justify-center md:justify-between items-center min-h-[84px] lg:min-h-[110px] max-w-[1450px] mx-auto">
        {/* ABOVE is an OUTER DIV so there can be a max width and consistend 'padding' */}

        <div className="hidden md:block m-5 ml-10 lg:ml-16 ">
          {/* putting this div with 'hidden' around the BtnSurvey.  The above code WAS in the BtnSurvey component, but it is better outside of it.  Because the BtnSurvey component is used more than once */}
          {/* ALSO, i have moved the 'm-5 ml-10' OUT of the BtnSurvey component and into the above div, because this margin is only specifc to the button in the header, and not to every button - 
        THE PADDING REMAINS still in BtnSurvey component because that is part of the button component - same for every button */}

          <BtnSurvey />
        </div>

        <Image src="/MSSurface_TDSYNNEX-Logos-scaled.png" width={400} height={400} alt="TD Synnex and Microsoft Surface logos" className="md:mr-18 w-65 lg:w-110" />
      </div>
    </header>
  );
};

export default Header;
