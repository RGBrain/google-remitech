import React from "react";
import Image from "next/image";
import FadeTextWrapper from "./FadeTextWrapper";

const SectionFour = () => {
  return (
    <section id="s4" className="px-5 sm:px-10 md:px-0 py-24 pb-12 md:pb-4 pt-30 bg-white mb-4 min-[840px]:-mb-6">
      <div className="flex flex-col items-center max-w-[1350px] mx-auto overflow-x-hidden xl:overflow-x-visible">
        <FadeTextWrapper twClasses="text-left md:px-8 xl:ml-8 min-[1315px]:-ml-6 max-w-[800px] self-start mb-8 md:mb-2">
          <h1 className="text-5xl font-bold leading-14 sm:leading-18 mb-5 text-left">Tech Stack</h1>
          {/* ABOVE justify-start flex flex-col items-start */}

          <p className="text-gray-600 mb-5 text-left">We've spent a great deal of time exploring options before settling on the best possible technology-stack. Below you can see a couple of examples of the tech we use.</p>
        </FadeTextWrapper>

        <div className="flex flex-col mt-8 md:mt-0 md:flex-row min-h-[650px] md:min-h-[600px] items-center mx-auto space-y-8 md:space-y-0">
          {/* Text */}
          <div className="xl:pl-16 lg:pr-18 xl:pr-12 text-left md:min-w-[450px] md:pl-8 lg:min-w-[650px]">
            {/* flex-1/2 so fill 50% of the screen */}
            <FadeTextWrapper twClasses="">
              <h1 className="text-5xl font-bold leading-14">Next.JS</h1>
              {/* adding leading to try and get the line-height spacing on this h1 */}
              <h3 className="text-2xl font-bold text-btn my-6">The React Framework for the Web</h3>
              {/* my-6 to try and replicate vertical spacing between text elements */}
              <p className="text-gray-600">When Facebook created React, it changed the web development world - a whole new paradigm - there were two problems however: speed, and SEO.</p>
              <p className="text-gray-600 pt-4">
                Both of these issues are caused by a single factor: React websites are essentially empty until the page loads, with Javascript then used to fetch the data.  This has huge advantages, but
                it's slow, and awful for SEO. Next.JS addresses this problem with Static Site Generation. This creates the ideal situation - dynamic websites, blisteringly fast, and optimised for SEO. React itself now recommends that it is run in
                Next.JS.
              </p>
            </FadeTextWrapper>
            {/* text-gray-600 looks similar to what is on original site */}
          </div>
          {/* Image */}
          {/* ORIG */}
          {/* <Image src="/placeholder-transparent-bg.png" alt="Section One Image" width={200} height={600} className="self-center sm:self-stretch flex-3/5"></Image> */}
          <Image src="/img-section-four.png" alt="Section Four Image" width={500} height={500} className="md:hidden ml-6"></Image>
          <Image src="/img-section-four.png" alt="Section Four Image" width={600} height={900} className="hidden md:block lg:hidden"></Image>

          {/* ORIG: USE THIS, IF DO NOT WANT IMAGE TO REACH RIGHT EDGE OF SCREEN at 1760px */}
          <Image src="/img-section-four.png" alt="Section Four Image" width={755} height={900} className="hidden lg:block -ml-16 lg:-ml-8 xl:-ml-4 mt-20"></Image>

          {/* THIS IS IF WANT IMAGE TO REACH RIGHT EDGE OF SCREEN e.g. at 1760px */}
          {/* <Image src="/img-section-four.png" alt="Section Four Image" width={755} height={900} className="hidden lg:block xl:hidden -ml-16 xl:-ml-4"></Image>
          <Image src="/img-section-four.png" alt="Section Four Image" width={1000} height={900} className="hidden xl:block -ml-16 xl:-ml-4"></Image> */}
        </div>
      </div>
    </section>
  );
};

export default SectionFour;
