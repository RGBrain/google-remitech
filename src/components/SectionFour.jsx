import React from "react";
import Event1 from "@/components/Event1";
import Event2 from "@/components/Event2";
import Event3 from "@/components/Event3";
import ContactForm from "./ContactForm";

const SectionFour = () => {
  return (
    <section id="s4" className="bg-gradient-to-tr from-remitech-purple to-remitech-turquoise to-85% min-h-120 lg:pt-12 pb-12">
      <div className="px-4 py-8 max-w-[535px] lg:max-w-[1000px] mx-auto">
        <h2 className="text-white text-4xl lg:text-5xl font-normal lg:mb-36 -mb-20 leading-12 lg:leading-15 mt-6 lg:ml-10">
          Forthcoming <br />
          Events
        </h2>
        <Event1 />
        <Event2 />
        <Event3 />
        <div className="mx-auto flex justify-center">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default SectionFour;
