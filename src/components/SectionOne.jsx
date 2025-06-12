import React from "react";
import Image from "next/image";

const SectionOne = () => {
  return (
    <section id="s1" className="">
      <div className="px-0 mx-auto max-w-[1250px]">
        {/* was max-w-[1350px] */}

        <div className="mx-auto w-full bg-white pb-18 pt-12 lg:pt-22 xl:-mt-12 2xl:-mt-16">
          {/* THIS OUTER DIV JUST FOR THE IMAGE, maybe gives a bit more control on image width */}
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
