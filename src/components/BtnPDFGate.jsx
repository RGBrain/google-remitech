"use client";

import React from "react";
import { track } from "@vercel/analytics";

const BtnPDFGate = () => {
  return (
    <a
      href="/Prompting-Guide-101-Remitech.pdf"
      download
      onClick={() => {
        track("DownloadPdf");
      }}
    >
      <button className="text-remitech-purple hover:text-remitech-turquoise mt-3 transform cursor-pointer rounded-md bg-gradient-to-tr from-white to-white p-3 px-5 text-base font-bold transition duration-200 ease-in hover:scale-102">
        Download Prompting Guide 101
      </button>
    </a>
  );
};

export default BtnPDFGate;
