import React from "react";
import BtnPDFWithIcon from "@/components/BtnPDFWithIcon";
import FadeTextWrapper from "@/components/FadeTextWrapper";
import SlideElementWrapper from "@/components/SlideElementWrapper";
import ClientOnlyWrapper from "@/components/ClientOnlyWrapper";

const SectionTwo = () => {
  return (
    <section id="s2" className="bg-gradient-to-tr from-remitech-purple to-remitech-turquoise to-85% min-h-120">
      <div className="px-4 py-8 max-w-[800px] mx-auto flex flex-col items-start space-y-5 lg:h-[590px]">
        <FadeTextWrapper>
          {/* <div className="flex flex-col items-start space-y-5"> */}
          <div className="bg-white rounded-lg p-4 mb-6">
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
        </FadeTextWrapper>
        <ClientOnlyWrapper>
          <SlideElementWrapper slideFrom="right">
            <div className="bg-[#2a6af9] px-5 py-6 text-sm text-white font-medium sm:w-[500px] rounded-lg lg:relative left-86 bottom-43">
              <h4 className="pb-4 font-bold text-lg">Do your best work with Gemini for Workspace</h4>

              <p className="pb-4">
                Gemini for Workspace helps you work smarter, not harder, increasing productivity and saving time so you can focus on higher-impact work. This guide explores different ways to quickly jump in and gain mastery of the basics to help you
                accomplish your day-to-day tasks.
              </p>

              <p className="pb-1">
                Explore foundational skills for writing effective prompts organized by role and use case. While the possibilities are virtually endless, there are consistent best practices that you can put to use today — dive in!
              </p>
            </div>
          </SlideElementWrapper>
        </ClientOnlyWrapper>
      </div>
    </section>
  );
};

export default SectionTwo;
