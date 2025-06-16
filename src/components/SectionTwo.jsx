import React from "react";
import BtnPDFWithIcon from "@/components/BtnPDFWithIcon";
import FadeTextWrapper from "@/components/FadeTextWrapper";
import SlideElementWrapper from "@/components/SlideElementWrapper";
import ClientOnlyWrapper from "@/components/ClientOnlyWrapper";

const SectionTwo = () => {
  return (
    <section
      id="s2"
      className="from-remitech-purple to-remitech-turquoise min-h-120 bg-gradient-to-tr to-85%"
    >
      <div className="mx-auto flex max-w-[800px] flex-col items-start space-y-5 px-4 py-8 lg:h-[590px]">
        <FadeTextWrapper>
          <div className="mb-6 rounded-lg bg-white p-4">
            <span className="text-[#757575]">
              <b className="font-bold text-black lg:text-lg">Gemini</b> for
              Google Workspace
            </span>

            <h2 className="bg-gradient-to-r from-[#4785f5] from-30% to-[#d36173] bg-clip-text pt-6 pb-3 text-4xl text-transparent md:text-7xl lg:pt-9 lg:pr-8 lg:text-7xl lg:leading-20">
              Prompting <br />
              guide 101
            </h2>
          </div>

          <BtnPDFWithIcon />
        </FadeTextWrapper>
        <ClientOnlyWrapper>
          <SlideElementWrapper slideFrom="right" duration="0.7">
            <div className="bg-btn bottom-43 left-86 rounded-lg px-5 py-6 text-sm font-medium text-white sm:w-[500px] lg:relative">
              <h4 className="pb-4 text-lg font-bold">
                Do your best work with Gemini for Workspace
              </h4>

              <p className="pb-4">
                Gemini for Workspace helps you work smarter, not harder,
                increasing productivity and saving time so you can focus on
                higher-impact work. This guide explores different ways to
                quickly jump in and gain mastery of the basics to help you
                accomplish your day-to-day tasks.
              </p>

              <p className="pb-1">
                Explore foundational skills for writing effective prompts
                organized by role and use case. While the possibilities are
                virtually endless, there are consistent best practices that you
                can put to use today — dive in!
              </p>
            </div>
          </SlideElementWrapper>
        </ClientOnlyWrapper>
      </div>
    </section>
  );
};

export default SectionTwo;
