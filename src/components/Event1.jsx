import React from "react";
import EventTemplate from "./EventTemplate";

//! EVENT 1 - Fintech Dinner Club

//* data for this event

const eventData = {};

eventData.eventNum = 1;
eventData.eventText = [];
eventData.eventText.push(`Our dinners are a space for IT professionals across the Fintech sector — including Insuretech, Payment Platforms, Wealthtech, Lending, and more.`);
eventData.eventText.push(
  `The purpose? To connect, share experiences, and have open conversations about the challenges and successes of operating in a highly regulated industry. Each dinner is thoughtfully curated around a specific theme, designed to spark meaningful discussion and foster genuine peer-to-peer connections.`
);

eventData.imageSrc = "/event1-image.png";
eventData.imageAlt = "well made restaurant tables";
eventData.eventTitle = "Fintech";
eventData.eventSubTitle = "Dinner Club";

const Event1 = () => {
  return <EventTemplate eventData={eventData} textPos="right" />;
};

export default Event1;
