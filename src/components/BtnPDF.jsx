"use client";

import React from "react";
import { useScrollPosition } from "@thibault.sh/hooks/useScrollPosition";

const BtnPDF = () => {
  const { y } = useScrollPosition();
  return (
    <a href="/remitech-prompting-guide.pdf" download>
      <button
        className={`p-3 px-5 mt-3 ${y > 0 ? `from-white to-white text-remitech-purple hover:text-remitech-turquoise` : `from-remitech-purple to-remitech-turquoise text-white hover:to-remitech-purple hover:from-remitech-purple`}  bg-gradient-to-tr transition font-bold text-base rounded-md cursor-pointer`}
      >
        Download Prompting Guide 101
      </button>
    </a>
  );
};

export default BtnPDF;
