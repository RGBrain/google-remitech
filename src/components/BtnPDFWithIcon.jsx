import React from "react";
import IconDownload from "../../public/icon-download.svg";

const BtnPDF = () => {
  return (
    <a className="inline-block" href="/remitech-prompting-guide.pdf" download>
      <div className="py-3 pt-[14px] px-6 bg-white text-remitech-turquoise hover:text-remitech-purple transition font-normal text-base cursor-pointer rounded-lg flex justify-between">
        <span className="pr-6">Download</span>

        <IconDownload className="w-6" />
      </div>
    </a>
  );
};

export default BtnPDF;
