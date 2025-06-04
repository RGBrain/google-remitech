import React from "react";
import Survey from "@/components/Survey";
import FadeTextWrapper from "./FadeTextWrapper";

const SectionSix = () => {
  return (
    <>
      {/* <div className="flex justify-center"> */}

      <FadeTextWrapper>
        <hr id="hrAboveSurvey" className="h-px my-8 w-11/12 mx-auto max-w-[1200px] text-center fill-amber-500 text-green-700 bg-gray-300 border-0" />
        {/* HOW CENTER THAT hr element ?</div> */}
        <section id="s6" className="shadow-md md:px-4 py-24 pb-12 bg-white">
          <div className="max-w-[980px] mx-auto">
            <h1 className="px-7 text-4xl md:text-5xl font-bold leading-12 md:leading-14 mb-4 sm:mb-6 text-left md:text-center">We've recreated the survey</h1>
            {/* adding leading to try and get the line-height spacing on this h1 */}
            <p className="px-7 text-sm sm:text-base text-gray-600 mb-2 md:mb-8 text-left md:text-center">We've used SurveyJS to create a survey, feel free to try it out.</p>
            <div id="div_survey_wrapper" className="mx-4">
              {/* it was max-24 but it's having no effect */}
              <Survey />
            </div>
          </div>
        </section>
      </FadeTextWrapper>
    </>
  );
};

export default SectionSix;
