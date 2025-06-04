"use client";

import dynamic from "next/dynamic";

const SurveyComponent = dynamic(() => import("../../../components/SurveyComponent"), {
  ssr: false,
});

export default function Survey() {
  return <SurveyComponent />;
}
