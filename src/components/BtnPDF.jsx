import React from "react";

const BtnPDF = () => {
  return (
    <a href="/remitech-prompting-guide.pdf" download>
      <button className="p-3 px-6 lg:p-[18px] lg:px-8 bg-white text-remitech-turquoise hover:text-remitech-purple transition font-semibold text-base cursor-pointer rounded-md">Download Prompting Guide</button>
    </a>
  );
};

export default BtnPDF;
