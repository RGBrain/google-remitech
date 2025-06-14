import React from "react";
import IconDownload from "../../public/icon-download.svg";

const BtnPDF = () => {
  return (
    <a className="inline-block" href="/Prompting-Guide-101-Remitech.pdf" download>
      <div className="py-5 pt-[20px] px-11 bg-white text-remitech-turquoise hover:text-remitech-purple transition font-normal text-base cursor-pointer rounded-lg flex justify-between group hover:scale-102 transform duration-200 ease-in">
        <span className="pr-6 font-bold">Download</span>

        <IconDownload className="w-6 fill-[#2BB9D6] group-hover:fill-remitech-purple transition" />
      </div>
    </a>
  );
};

export default BtnPDF;
