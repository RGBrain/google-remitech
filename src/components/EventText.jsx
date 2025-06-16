import React from "react";
import RegisterInterestBtn from "./RegisterInterestBtn";

// White box
const EventText = ({ eventText }) => {
  // note: eventText is an array of paragraphs
  return (
    <div className="mb-5 rounded-br-lg rounded-bl-lg bg-white px-8 py-16 pb-12 text-sm font-medium text-black lg:mt-5 lg:h-128 lg:max-w-[420px] lg:rounded-lg lg:pb-3">
      {eventText.map((para, i) => (
        <p key={i} className="pb-4">
          {para}
        </p>
      ))}

      <div className="mt-4 flex justify-center pb-4 lg:mt-12 lg:pb-8">
        <RegisterInterestBtn />
      </div>
    </div>
  );
};

export default EventText;
