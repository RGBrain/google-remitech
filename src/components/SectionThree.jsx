import React from "react";
import Image from "next/image";
import BtnSurvey from "./BtnSurvey";
import FadeTextWrapper from "./FadeTextWrapper";

const SectionThree = () => {
  return (
    <section id="s3" className="shadow-md shadow-gray-400 bg-[#f2f2f2] lg:pt-8">
      <div className="px-4 pt-8 max-w-[1350px] mx-auto">
        {/* FADE TEXT INTO VIEW WHEN IN VIEWPORT */}
        <FadeTextWrapper>
          <div className="flex flex-col lg:flex-row-reverse">
            {/* Text div */}
            <div className="pb-15 text-center lg:text-left max-w-[600px] mx-auto lg:mr-8 xl:pr-4 lg:pl-4 xl:pl-2">
              <h1 className="text-5xl font-bold leading-14 pt-14">
                Your insights matter
              </h1>

              <h3 className="text-2xl font-bold text-btn my-6">
                Consultative Approach
              </h3>

              <p className="text-gray-600">
                We don't adopt a one-size-fits-all approach. Every project is
                bespoke and tailored to your needs.
              </p>

              <p className="text-gray-600 mt-4 mb-8">
                From inital conversation to deployment, we work closely with you
                to ensure that the project is aligned with your goals.
              </p>

              <div className="flex justify-center lg:justify-start">
                <BtnSurvey />
              </div>
            </div>

            <Image
              src="/coworkers-with-surface-screenshot-placeholder.png"
              alt="Coworkers with Microsoft Surface devices"
              width={500}
              height={500}
              className="w-full md:w-3/4 lg:w-1/2 self-center lg:self-end"
            ></Image>
          </div>
        </FadeTextWrapper>
      </div>
    </section>
  );
};

export default SectionThree;
