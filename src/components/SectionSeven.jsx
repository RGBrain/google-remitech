import React from "react";
import ContactForm from "@/components/ContactForm";
import IconEmail from "../../public/icon-email.svg";

const SectionSeven = () => {
  return (
    <section id="s7" className="shadow-md shadow-gray-400 bg-[#f2f2f2] py-24 pt-18 sm:pt-20 px-8 border-t-2 border-gray-200">
      <div className="max-w-[662px] mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-14 sm:mb-2 md:mb-4 text-left md:text-center">Let's talk</h1>
        {/* adding leading to try and get the line-height spacing on this h1 */}
        <p className="text-gray-600 text-sm sm:text-base mb-8 md:mb-14 text-left md:text-center">Please feel free to test our contact us form - it's all plumbed-in!</p>
        <ContactForm />
        <div className="flex justify-center mt-4">
          <div className="mx-auto rounded-full border-2 p-4">
            <IconEmail className="text-center mx-auto fill-foreground w-8" />
          </div>
        </div>
        <p className="text-center mx-auto mt-3 text-xl font-semibold sm:text-2xl"><a href="mailto:richard.brain@leadamarket.com">richard.brain@leadamarket.com</a>

</p>
      </div>
    </section>
  );
};

export default SectionSeven;
