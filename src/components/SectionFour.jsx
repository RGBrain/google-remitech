import React from "react";
import BtnPDFWithIcon from "@/components/BtnPDFWithIcon";
import Image from "next/image";

const SectionFour = () => {
  return (
    <section id="s2" className="bg-gradient-to-tr from-remitech-purple to-remitech-turquoise to-85% min-h-120 lg:pt-12">
      <div className="px-4 py-8 max-w-[800px] lg:max-w-[1000px] mx-auto flex flex-col items-start space-y-5 lg:h-[740px]">
        <div className="w-full max-w-[500px] bg-white rounded-lg order-3 lg:order-1">
          {/* THIS OUTER DIV JUST FOR THE IMAGE, maybe gives a bit more control on image width */}
          <Image
            alt="well made restaurant tables"
            className="mx-auto"
            src="/img-section-four.png"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }} // optional
          />
        </div>
        <div className="bg-[#2a6af9] px-5 py-6 text-sm text-white font-medium rounded-lg lg:relative lg:left-112 lg:bottom-180 order-1 lg:order-2 lg:w-[400px] lg:pb-102">
          <h3 className="text-5xl">Fintech</h3>
          <h4 className="text-3xl ml-11">Dinner Club</h4>
        </div>
        <div className="bg-white px-5 py-6 text-sm text-black font-medium rounded-lg lg:relative lg:left-125 lg:bottom-279 lg:max-w-[372px] order-2 mb-5 lg:order-3 pb-32">
          <p className="pb-4">Our dinners are a space for IT professionals across the Fintech sector — including Insuretech, Payment Platforms, Wealthtech, Lending, and more.</p>
          <p className="pb-5">
            The purpose? To connect, share experiences, and have open conversations about the challenges and successes of operating in a highly regulated industry. Each dinner is thoughtfully curated around a specific theme, designed to spark
            meaningful discussion and foster genuine peer-to-peer connections.
          </p>
          <h5 className="text-2xl pb-4 font-normal">Register Interest:</h5>
          <div>( ... form to go here ... )</div>
        </div>
      </div>
    </section>
  );
};

export default SectionFour;
