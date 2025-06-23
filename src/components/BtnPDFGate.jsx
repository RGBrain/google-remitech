"use client";

import React from "react";
import { track } from "@vercel/analytics";

function scrollToElement(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

const BtnPDFGate = () => {
  return (
    <button
      onClick={() => scrollToElement("downloadPDF")}
      className="text-remitech-purple hover:text-remitech-turquoise mt-3 transform cursor-pointer rounded-md bg-gradient-to-tr from-white to-white p-3 px-5 text-base font-bold transition duration-200 ease-in hover:scale-102"
    >
      Download Prompting Guide 101
    </button>
  );
};

export default BtnPDFGate;
