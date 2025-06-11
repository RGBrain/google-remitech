import React from "react";
import RegisterInterestBtn from "./RegisterInterestBtn";

const EventText = ({ eventText }) => {
  // note: eventText is an array of paragraphs
  return (
    <div className="bg-white px-8 py-8 pb-12 lg:pb-3 text-sm text-black font-medium rounded-bl-lg rounded-br-lg lg:rounded-lg lg:max-w-[372px] mb-5">
      {eventText.map((para, i) => (
        <p key={i} className="pb-4">
          {para}
        </p>
      ))}

      <div className="flex justify-center mt-4 lg:mt-2 pb-4 lg:pb-8">
        <RegisterInterestBtn />
      </div>
    </div>
  );
};

export default EventText;
