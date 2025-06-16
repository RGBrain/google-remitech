import React from "react";
import IconDownload from "../../public/icon-download.svg";

const BtnPDF = () => {
  return (
    <a
      className="inline-block"
      href="/Prompting-Guide-101-Remitech.pdf"
      download
    >
      <div className="text-remitech-turquoise hover:text-remitech-purple group flex transform cursor-pointer justify-between rounded-lg bg-white px-11 py-5 pt-[20px] text-base font-normal transition duration-200 ease-in hover:scale-102">
        <span className="pr-6 font-bold">Download</span>

        <IconDownload className="group-hover:fill-remitech-purple w-6 fill-[#2BB9D6] transition" />
      </div>
    </a>
  );
};

export default BtnPDF;
