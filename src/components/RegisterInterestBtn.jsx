"use client";

import React from "react";
import { useEffect } from "react";

function scrollToElement(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

const RegisterInterestBtn = () => {
  return (
    <button onClick={() => scrollToElement("FormRegisterInterest")} className="py-4 px-14 mt-3 text-white transition font-normal text-base rounded-md cursor-pointer bg-btn hover:bg-[#5888f1] hover:scale-102 transform duration-200 ease-in">
      Register Interest
    </button>
  );
};

export default RegisterInterestBtn;
