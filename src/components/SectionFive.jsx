import React from "react";
import FadeTextWrapper from "./FadeTextWrapper";
import ContactForm from "./ContactForm";

const SectionFive = () => {
  return (
    <section id="s5" className="bg-white min-h-120 pb-15 pt-8 lg:pt-0">
      <div className="px-4 py-8 max-w-[800px] mx-auto flex flex-col items-center space-y-5">
        <ContactForm />
      </div>
    </section>
  );
};

export default SectionFive;
