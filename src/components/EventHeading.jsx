import React from "react";

// Blue box
const EventHeading = ({ eventTitle, eventSubTitle }) => {
  return (
    <div className="bg-btn px-7 pt-8 py-6 text-sm text-white font-medium lg:rounded-lg rounded-tl-lg rounded-tr-lg lg:h-[630px] lg:w-[450px] lg:pb-102 lg:pt-14 lg:-mt-3">
      <h3
        className="text-4xl mb-1"
        dangerouslySetInnerHTML={{ __html: eventTitle }}
      ></h3>
      <h4
        className="text-xl ml-11"
        dangerouslySetInnerHTML={{ __html: eventSubTitle }}
      ></h4>
    </div>
  );
};

export default EventHeading;
