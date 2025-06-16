import React from "react";
import Image from "next/image";

const SectionOne = () => {
  return (
    <section id="s1" className="">
      <div className="mx-auto max-w-[1250px] px-0">
        <div className="mx-auto w-full bg-white pt-12 pb-18 lg:pt-22 xl:-mt-12 2xl:-mt-16">
          {/* OUTER DIV TO CONTROL IMAGE WIDTH */}
          <Image
            alt="Office Illustration Diagram"
            className="mx-auto"
            src="/office-illustration-white.jpg"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }} // optional
          />
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
