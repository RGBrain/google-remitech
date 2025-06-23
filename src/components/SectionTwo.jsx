import React from "react";
import FadeTextWrapper from "@/components/FadeTextWrapper";
import SlideElementWrapper from "@/components/SlideElementWrapper";
import ClientOnlyWrapper from "@/components/ClientOnlyWrapper";
import GateForm from "@/components/GateForm";
import BtnPDFGate from "./BtnPDFGate";
import Image from "next/image";

const SectionTwo = () => {
  return (
    <section
      id="s2"
      className="from-remitech-purple to-remitech-turquoise min-h-120 bg-gradient-to-tr to-85%"
    >
      <div className="mx-auto flex max-w-[800px] flex-col items-start space-y-5 px-4 py-8 lg:flex-row lg:flex-wrap">
        <div className="text-white lg:mr-8 lg:shrink-0 lg:grow-1 lg:basis-2/5">
          <h2 className="mb-4 text-3xl font-bold">
            Gemini for Google Workspace Prompt Guide
          </h2>
          <p>
            Download this quick-start handbook and learn about writing effective
            prompts to supercharge your productivity using Gemini for Workspace.
          </p>
          <BtnPDFGate />
        </div>

        <div className="mt-8 mb-12 lg:shrink-0 lg:grow-1 lg:basis-2/5">
          <Image
            src="/prompting-guide-101-cover.jpg"
            alt="Prompting Guide Cover"
            width={200}
            height={200}
          />
        </div>

        <div className="mr-8 text-white lg:shrink-0 lg:grow-1 lg:basis-2/5">
          <h3 className="mb-4 text-2xl font-bold">
            Do your best work with Gemini for Workspace
          </h3>
          <p className="mb-4">
            Gemini for Workspace helps you work smarter, not harder, increasing
            productivity and saving time so you can focus on higher&#8209;impact
            work. This guide explores different ways to quickly jump in and gain
            mastery of the basics to help you accomplish your
            day&#8209;to&#8209;day tasks. 
          </p>
          <p className="mb-4">
            Explore foundational skills for writing effective prompts organized
            by role and use case. While the possibilities are virtually endless,
            there are consistent best practices that you can put to use today —
            dive in!
          </p>
        </div>

        <div
          id="divFormGate"
          className="mt-8 self-stretch rounded-lg bg-white p-4 lg:mt-0 lg:shrink-0 lg:grow-1 lg:basis-2/5 lg:p-1"
        >
          <GateForm />
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
