import React from "react";
import EventTemplate from "./EventTemplate";

//! EVENT 3 - CISO @ The O2 Club

//* data for this event

const eventData = {};

eventData.eventNum = 3;
eventData.eventText = [];
eventData.eventText.push(`Our dinners are a space for IT professionals across the Fintech sector — including Insuretech, Payment Platforms, Wealthtech, Lending, and more.`);
eventData.eventText.push(
  `The purpose? To connect, share experiences, and have open conversations about the challenges and successes of operating in a highly regulated industry. Each dinner is thoughtfully curated around a specific theme, designed to spark meaningful discussion and foster genuine peer-to-peer connections.`
);

eventData.imageSrc = "/event3-image.png";
eventData.imageAlt = "O2 Arena";
eventData.eventTitle = "Fintech";
eventData.eventSubTitle = "Dinner Club";

const Event3 = () => {
  return <EventTemplate eventData={eventData} textPos="right" lastEvent={true} />;
};

export default Event3;
