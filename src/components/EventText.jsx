import React from "react";
import RegisterInterestBtn from "./RegisterInterestBtn";

const EventText = ({ eventText }) => {
  // note: eventText is an array of paragraphs
  return (
    <div className="bg-white px-8 lg:px-9 py-8 pb-12 lg:pb-3 text-sm text-black font-medium rounded-bl-lg rounded-br-lg lg:rounded-lg lg:w-[400px] lg:h-[430px] mb-5 flex flex-col justify-between">
      <div className="flex flex-col justify-between">
        {eventText.map((para, i) => (
          <p key={i} className="pb-4">
            {para}
          </p>
        ))}
      </div>

      <div className="flex justify-center mt-4 lg:mt-2 pb-4 lg:pb-8">
        <RegisterInterestBtn />
      </div>
    </div>
  );
};

export default EventText;
