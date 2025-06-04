import React from "react";
import Image from "next/image";
import IconPowerPerformance from "../../public/icon-power-performance.svg";
import IconSecurityTrust from "../../public/icon-security-trust.svg";
import IconAiEnhancedProductivity from "../../public/icon-ai-enhanced-productivity.svg";
import FadeTextWrapper from "@/components/FadeTextWrapper";

const SectionTwo = () => {
  return (
    <section id="s2" className="shadow-md px-4 sm:px-10 py-24 pb-28 bg-white text-center">
      {/* FADE SECTION TWO INTO VIEW WHEN IN VIEWPORT */}
      <FadeTextWrapper>
        <div className="flex flex-col items-center max-w-[1350px] mx-auto">
          {/* i notice that everything in SectionTwo is horizontally centered, so put 'text-center' on section element */}
          {/* px- value to create left and right padding from edge of screen */}
          {/* py-24 to create top and bottom padding within SectionTwo */}
          {/* explicitly putting bg-white, otherwise if client system in dark mode, the bg is black */}

          <h1 className="scale-90 text-5xl font-bold sm:leading-18 leading-14 mb-5">Why us?</h1>
          {/* adding leading to try and get the line-height spacing on this h1 */}
          <p className="text-gray-600 sm:px-4 md:px-20 max-w-[1020px]">
            Brain Web Development is a new web development house, created by two brothers: Richard and Matt Brain. Richard's extensive B2B marketing experience for software companies means that we understand how to take solutions to market. Matt has
            been building software for years, from a box office ecommerce site, to a chess problem training site!
          </p>
          <p className="mt-4 text-gray-600 sm:px-20">In 2025, we formed our company, and are passionate about bringing your ideas to life.</p>

          {/* CREATE DIV (FLEX) CONTAINING THREE ITEMS.  MOBILE: flex-col (default), AND sm:flex-row to
 replicate original site */}
          <div className="flex flex-col min-[850px]:flex-row mt-20 mx-auto md:justify-center space-y-10">
            {/* may need to set md:space-y-0 or similar if needed???  */}
            {/* mx-auto to center horizontally on screen */}
            {/* adding margin top (mt-15) */}
            {/* three inner divs for each flex item */}
            <div className="md:mt-0 text-center md:mx-auto max-w-[300px] md:px-4 md:shrink:1">
              {/* on each of the 3 items, putting sm:mt-0 to undo the mt-5 which is only for flex-col (mobiles) */}
              {/* <Image alt="icon for Power and Performance" className="fill-foreground text-center mx-auto" src={iconPowerPerformance} /> */}
              <IconPowerPerformance className="text-center mx-auto fill-foreground w-18 md:-mt-2" />
              <h2 className="text-xl font-bold ">Power & performance</h2>
              <p className="text-gray-600 mt-3">We have chosen a modern high-performance tech-stack to deliver lightening fast websites.</p>
            </div>
            <div className="mt-5 sm:mt-0 text-center md:mx-auto max-w-[300px] md:px-4 md:shrink:1">
              {/* on each of the 3 items, putting sm:mt-0 to undo the mt-5 which is only for flex-col (mobiles) */}
              <IconSecurityTrust className="text-center mx-auto fill-foreground w-16" />
              <h2 className="text-xl font-bold ">Built for security</h2>
              <p className="text-gray-600 mt-3">We adopt a security-first approach to web development.</p>
            </div>
            <div className="mt-5 sm:mt-0 text-center md:mx-auto max-w-[300px] md:px-4 md:shrink:1">
              {/* on each of the 3 items, putting sm:mt-0 to undo the mt-5 which is only for flex-col (mobiles) */}
              <IconAiEnhancedProductivity className="text-center mx-auto fill-foreground w-16" />
              <h2 className="text-xl font-bold ">AI enhanced productivity</h2>
              <p className="text-gray-600 mt-3">By utilising GitHub Copilot in Visual Studio Code, we can optimise coding efficiency, to deliver projects on-time.</p>
            </div>
          </div>
        </div>
      </FadeTextWrapper>
    </section>
  );
};

export default SectionTwo;
