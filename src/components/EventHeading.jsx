import React from "react";

const EventHeading = ({ eventTitle, eventSubTitle }) => {
  return (
    <div className="bg-btn px-7 pt-8 py-6 text-sm text-white font-medium lg:rounded-lg rounded-tl-lg rounded-tr-lg lg:w-[400px] lg:pb-102">
      <h3 className="text-5xl mb-1" dangerouslySetInnerHTML={{ __html: eventTitle }}></h3>
      <h4 className="text-3xl ml-11" dangerouslySetInnerHTML={{ __html: eventSubTitle }}></h4>
    </div>
  );
};

export default EventHeading;
