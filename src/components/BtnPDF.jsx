import React from "react";

const BtnPDF = () => {
  return (
    <a href="/remitech-prompting-guide.pdf" download>
      <button className="py-3 pt-[14px] px-3 bg-white text-remitech-turquoise hover:text-remitech-purple transition font-normal text-base cursor-pointer rounded-lg">Download Prompting Guide</button>
    </a>
  );
};

export default BtnPDF;
