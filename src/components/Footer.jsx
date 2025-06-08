import React from "react";
import Image from "next/image";
import IconArrow from "../../public/icon-arrow.svg";

const Footer = () => {
  return (
    <>
      <footer className="bg-white w-full shadow-md shadow-gray-400 sticky top-0 z-50 pt-8 pb-3 lg:pt-10 lg:pb-7 md:py-2">
        <div className="flex flex-col-reverse md:flex-row justify-center md:justify-between items-center min-h-[84px] md:min-h-[110px] max-w-[1450px] mx-auto"></div>
      </footer>
    </>
  );
};

export default Footer;
