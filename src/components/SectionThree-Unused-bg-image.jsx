import React from "react";
import Image from "next/image";
import FadeTextWrapper from "@/components/FadeTextWrapper";

const SectionThree = () => {
  return (
    <section id="s1" className="">
      <FadeTextWrapper>
        <div className="px-0 mx-auto">
          {/* was max-w-[1350px] */}

          <div className="mx-auto w-full bg-white">
            {/* THIS OUTER DIV JUST FOR THE IMAGE, maybe gives a bit more control on image width */}
            <Image
              alt="Google Workspace Diagram"
              className="mx-auto"
              src="/img-section-three.png"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }} // optional
            />
          </div>
        </div>
      </FadeTextWrapper>
    </section>
  );
};

export default SectionThree;
