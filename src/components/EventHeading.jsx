import React from "react";

// Blue box
const EventHeading = ({ eventTitle, eventSubTitle }) => {
  return (
    <div className="bg-btn rounded-tl-lg rounded-tr-lg px-7 py-6 pt-8 text-sm font-medium text-white lg:-mt-3 lg:h-[630px] lg:w-[450px] lg:rounded-lg lg:pt-8 lg:pb-102">
      <h3
        className="mb-1 text-5xl"
        dangerouslySetInnerHTML={{ __html: eventTitle }}
      ></h3>
      <h4
        className="ml-11 text-2xl"
        dangerouslySetInnerHTML={{ __html: eventSubTitle }}
      ></h4>
    </div>
  );
};

export default EventHeading;
