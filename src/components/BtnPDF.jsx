import React from "react";

const BtnPDF = () => {
  return (
    <a href="/remitech-prompting-guide.pdf" download>
      <button className="p-3 px-5 mt-3 bg-gradient-to-tr from-remitech-purple to-remitech-turquoise transition text-white hover:to-remitech-purple font-bold text-base rounded-md cursor-pointer">Download Prompting Guide 101</button>
    </a>
  );
};

export default BtnPDF;
