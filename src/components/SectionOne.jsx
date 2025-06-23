import React from "react";
import Image from "next/image";
import GoogleWorkspaceLogo from "../../public/google-workspace-logo.svg";
import GeminiGoogleWorkspaceLogo from "../../public/gemini-google-workspace-logo.svg";

const SectionOne = () => {
  return (
    <section id="s1" className="">
      <div className="mx-auto max-w-[1250px] px-0">
        <GoogleWorkspaceLogo className="mx-auto mt-16 -mb-12 w-44 lg:-mb-16 lg:w-76" />
        <div className="mx-auto w-full bg-white pt-12 pb-8 lg:pt-22 xl:-mt-12 2xl:-mt-16">
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
        <GeminiGoogleWorkspaceLogo className="mx-auto mt-0 w-44 pb-10 lg:w-88" />
      </div>
    </section>
  );
};

export default SectionOne;
