"use client";

import React from "react";
import { useEffect } from "react";

function scrollToElement(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

const BtnSurvey = () => {
  return (
    <button onClick={() => scrollToElement("hrAboveSurvey")} className="btnSurvey p-3 px-6 lg:p-[14px] lg:px-8 bg-btn hover:bg-btn-hover transition text-white font-bold text-base cursor-pointer">
      Complete the survey
    </button>
  );
};

export default BtnSurvey;
