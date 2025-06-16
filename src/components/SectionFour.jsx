import React from "react";
import Event1 from "@/components/Event1";
import Event2 from "@/components/Event2";
import Event3 from "@/components/Event3";
import ContactForm from "./ContactForm";

const SectionFour = () => {
  return (
    <section
      id="s4"
      className="from-remitech-purple to-remitech-turquoise min-h-120 bg-gradient-to-tr to-85% pb-12 lg:pt-12"
    >
      <div className="mx-auto max-w-[535px] px-4 py-8 lg:max-w-[1000px]">
        <h2 className="mt-6 -mb-20 text-4xl leading-12 font-normal text-white lg:mb-36 lg:ml-10 lg:text-5xl lg:leading-15">
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
