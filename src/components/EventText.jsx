import React from "react";
import RegisterInterestBtn from "./RegisterInterestBtn";

// White box
const EventText = ({ eventText }) => {
  // note: eventText is an array of paragraphs
  return (
    <div className="bg-white px-8 py-16 pb-12 lg:pb-3 lg:h-128 lg:mt-5 text-sm text-black font-medium rounded-bl-lg rounded-br-lg lg:rounded-lg lg:max-w-[420px] mb-5">
      {eventText.map((para, i) => (
        <p key={i} className="pb-4">
          {para}
        </p>
      ))}

      <div className="flex justify-center mt-4 lg:mt-12 pb-4 lg:pb-8">
        <RegisterInterestBtn />
      </div>
    </div>
  );
};

export default EventText;
