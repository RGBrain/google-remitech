"use client";

import React from "react";
import { useScrollPosition } from "@thibault.sh/hooks/useScrollPosition";
import { track } from "@vercel/analytics";

function scrollToElement(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

const BtnPDF = () => {
  const { y } = useScrollPosition();
  return (
    <button
      onClick={() => scrollToElement("s2")}
      className={`mt-3 p-3 px-5 ${y > 0 ? `text-remitech-purple hover:text-remitech-turquoise from-white to-white` : `from-remitech-purple to-remitech-turquoise hover:to-remitech-purple hover:from-remitech-purple text-white`} transform cursor-pointer rounded-md bg-gradient-to-tr text-base font-bold transition duration-200 ease-in hover:scale-102`}
    >
      Download Prompting Guide 101
    </button>
  );
};

export default BtnPDF;
