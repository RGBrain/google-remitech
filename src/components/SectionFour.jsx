import React from "react";
import Event1 from "@/components/Event1";
import Event2 from "@/components/Event2";
import Event3 from "@/components/Event3";

const SectionFour = () => {
  return (
    <section id="s4" className="bg-gradient-to-tr from-remitech-purple to-remitech-turquoise to-85% min-h-120 lg:pt-12  pb-8 lg:pb-0">
      <div className="px-4 py-8 max-w-[800px] lg:max-w-[1000px] mx-auto">
        <h2 className="text-white text-4xl lg:text-5xl font-normal lg:mb-36 -mb-6 leading-12 mt-6 lg:ml-10">
          Forthcoming <br />
          Events
        </h2>
        <Event1 />
        <Event2 />
        <Event3 />
      </div>
    </section>
  );
};

export default SectionFour;
