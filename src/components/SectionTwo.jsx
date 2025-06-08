import React from "react";
import BtnPDFWithIcon from "@/components/BtnPDFWithIcon";

const SectionTwo = () => {
  return (
    <section id="s2" className="bg-gradient-to-tr from-remitech-purple to-remitech-turquoise to-85% min-h-120">
      <div className="px-4 py-8 max-w-[800px] mx-auto flex flex-col items-start space-y-5 lg:h-[590px]">
        {/* <div className="flex flex-col items-start space-y-5"> */}
        <div className="bg-white rounded-lg p-4">
          <span className="text-[#757575]">
            <b className="font-bold text-black lg:text-lg">Gemini</b> for Google Workspace
          </span>

          <h2 className="text-4xl md:text-7xl lg:text-7xl bg-gradient-to-r from-[#4785f5] from-30% to-[#d36173] text-transparent bg-clip-text pb-1 pt-6 lg:pr-8 lg:pt-9 lg:leading-20">
            Prompting <br />
            guide 101
          </h2>
        </div>

        <BtnPDFWithIcon />
        {/* </div> */}

        <div className="bg-[#2a6af9] px-5 py-6 text-sm text-white font-medium sm:w-[500px] rounded-lg lg:relative left-86 bottom-43">
          <p className="pb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
          </p>
          <p className="pb-4">
            aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          </p>
          <p className="pb-4">
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          </p>
          <p className="pb-0">veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
