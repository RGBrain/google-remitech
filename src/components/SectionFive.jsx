import React from "react";
import Image from "next/image";
import FadeTextWrapper from "./FadeTextWrapper";

const SectionFive = () => {
  return (
    <section id="s5" className="px-5 sm:px-10 py-24 pt-0 bg-white pb-30 md:pb-12">
      <div className="flex flex-col items-center max-w-[1350px] mx-auto">
        {/* adding pt-0 to SectionFive so it is not so far below SectionFour */}
        {/* px- value to create left and right padding from edge of screen */}
        {/* explicitly putting bg-white, otherwise if client system in dark mode, the bg is black */}

        <div className="flex flex-col-reverse md:flex-row min-h-[600px] md:min-h-[550px] items-center">
          {/* changed div to section - more semantic i'm pondering */}
          {/* just putting in a height for now just to get it looking like original site */}
          {/* Added backgound of #f2f2f2 for SectionOne div to replicate original site */}
          {/* mobile-first: default: flex-col to be like how it is in https://google-pixel.inbound.systems/ on mobile screen */}
          {/* above sm: breakpoint, it is flex-row (sm:flex-row) (horizontal) */}

          {/* Image */}

          {/* <Image src="/img-section-five.png" alt="Section Five Image" width={200} height={600} className="self-center sm:self-stretch flex-3/5"></Image> */}

          <Image src="/img-section-five.png" alt="Section Five Image" width={500} height={500} className="md:hidden -ml-6"></Image>

          <Image src="/img-section-five.png" alt="Section Five Image" width={600} height={900} className="hidden md:block lg:hidden -ml-68 min-[900px]:-ml-48 mr-4"></Image>

          <Image src="/img-section-five.png" alt="Section Five Image" width={755} height={900} className="hidden lg:block  -ml-48 mr-4 xl:-ml-12"></Image>

          {/* placeholder image just for now */}
          {/* image is center horizontally aligned (self-center) on mobiles (as that is flex-col), and Image is stretched on sm: and above (sm:self-stretch) (flex-row) this stretches from top to bottom - not sure if that is the right way */}

          {/* Text */}
          <div className="flex-2/5 pl-0 pr-2 md:pl-4 mb-6 md:mb-0">
            {/* flex-1/2 so fill 50% of the screen */}
            <FadeTextWrapper>
              <h1 className="text-5xl font-bold leading-14">Payload</h1>
              {/* adding leading to try and get the line-height spacing on this h1 */}
              <h3 className="text-2xl font-bold text-btn my-6">The backend to build the modern web.</h3>
              {/* my-6 to try and replicate vertical spacing between text elements */}
              <p className="text-gray-600">Payload is the open-source Next.js backend used in production by the most innovative companies on earth.</p>
              <p className="text-gray-600 pt-4">
                We knew it was important to have a powerful and intuitive Content Management System for the websites that we build. Having investigated many different options, we decided on Payload. It's a headless CMS, which means that it's
                decoupled. Following the modern design philosophy of distributed architecture, this provides the flexibility and power that we wanted.
              </p>
            </FadeTextWrapper>
            {/* text-gray-600 looks similar to what is on original site */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFive;
