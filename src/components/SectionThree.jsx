import React from "react";
import FadeTextWrapper from "@/components/FadeTextWrapper";

const SectionThree = () => {
  return (
    <section id="s3" className="">
      <FadeTextWrapper>
        <div className="mx-auto max-w-[650px] px-3 py-26 sm:py-28 lg:py-36">
          <div className="flex justify-center text-5xl font-bold sm:text-6xl lg:text-7xl">
            <h3 className="leading-14 sm:leading-18 lg:leading-22">
              <span className="whitespace-nowrap">Embrace the</span>
              <br />
              <span className="whitespace-nowrap"> future of work</span>
              <br />
              <span className="bg-gradient-to-r from-[#4785f5] from-30% to-[#d36173] bg-clip-text whitespace-nowrap text-transparent">
                with Google AI
              </span>
            </h3>
          </div>
        </div>
      </FadeTextWrapper>
    </section>
  );
};

export default SectionThree;
