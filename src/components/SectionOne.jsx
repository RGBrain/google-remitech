import React from "react";
import Image from "next/image";

const SectionOne = () => {
  return (
    <section id="s1" className="flex relative shadow-xs shadow-gray-300 bg-[#f2f2f2] pt-8">
      {/* <div className="flex flex-col sm:flex-row min-h-[650px] items-end max-w-[1350px] mx-auto md:mx-0"> */}
      <div className="md:flex md:items-end lg:items-center md:mx-auto items-center max-w-[1350px] overflow-x-hidden">
        {/* Text */}
        <div className="md:-mr-40 md:min-w-[450px] lg:min-w-[650px] flex flexbasis-1/2 flex-wrap py-15 px-4 z-30 sm:pl-8 lg:pr-0">
          <h1 className="max-[410px]:text-5xl text-6xl font-bold leading-18 min-w-2/3">Brain Web Development</h1>

          <h3 className="text-3xl font-bold text-btn my-6">Proof of Concept</h3>
          {/* my-6 to try and replicate vertical spacing between text elements */}
          <p className="text-gray-600">
            We have recreated this campaign landing page by way of demonstrating our capabilities. This site is not only a recreation of the existing site, we have improved performance by building the site using Next.JS, a modern React framework,
            optimised for high-performance.
          </p>
        </div>

        {/* MOBILE IMAGE */}
        <Image src="/man-with-surface-placeholder.png" alt="Section One Image" width={500} height={500} className="sm:hidden ml-6"></Image>

        {/* > 640px */}
        <Image src="/man-with-surface-placeholder.png" alt="Section One Image" width={900} height={900} className="hidden sm:block lg:ml-30"></Image>
      </div>
    </section>
  );
};

export default SectionOne;
