import React from "react";
import Image from "next/image";

const SectionOne = () => {
  return (
    <section id="s1" className="">
      <div className="px-0 mx-auto max-w-[1350px]">
        {/* was max-w-[1350px] */}

        <div className="mx-auto w-full bg-white pb-20 xl:pb-8 2xl:pb-0 xl:-mt-12 2xl:-mt-16">
          {/* THIS OUTER DIV JUST FOR THE IMAGE, maybe gives a bit more control on image width */}
          <Image
            alt="Google Workspace Diagram"
            className="mx-auto"
            src="/img-google-workspace.png"
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
