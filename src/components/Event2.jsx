import React from "react";
import EventTemplate from "./EventTemplate";

//! EVENT 2 - Rooftop BBQ

//* data for this event

const eventData = {};

eventData.eventNum = 2;
eventData.eventText = [];
eventData.eventText.push(
  `Join Us for an evening of great food, drinks, conversation, and informal Q&A on Thursday, 26th June from 6:00pm at a Kings Cross rooftop.`,
);
eventData.eventText.push(
  `Spaces are limited, so please register below to secure your place.`,
);

eventData.imageSrc = "/event2-image.jpg";
eventData.imageAlt = "London Skyline";
eventData.eventTitle = "Rooftop BBQ";
eventData.eventSubTitle = `An Evening with Remitech`;

const Event2 = () => {
  return <EventTemplate eventData={eventData} textPos="left" />;
};

export default Event2;
