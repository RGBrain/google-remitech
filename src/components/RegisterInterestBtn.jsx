"use client";

import React from "react";

function scrollToElement(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

const RegisterInterestBtn = () => {
  return (
    <button
      onClick={() => scrollToElement("FormRegisterInterest")}
      className="bg-btn mt-3 transform cursor-pointer rounded-md px-14 py-4 text-base font-normal text-white transition duration-200 ease-in hover:scale-102 hover:bg-[#5888f1]"
    >
      Register Interest
    </button>
  );
};

export default RegisterInterestBtn;
