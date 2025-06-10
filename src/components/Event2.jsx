import React from "react";
import EventTemplate from "./EventTemplate";

//! EVENT 2 - Rooftop BBQ

//* data for this event

const eventData = {};

eventData.eventNum = 2;
eventData.eventText = [];
eventData.eventText.push(`Join Us for an evening of great food, drinks, conversation, and an informal Q&A with Arek Dreyer, renowned Apple expert and trainer, on Thursday, 26th June from 6:00pm at a Kings Cross rooftop.`);
eventData.eventText.push(`Arek will be sharing his thoughts on what’s new and noteworthy for MacAdmins following WWDC25 —plus answering your questions live on the night.`);
eventData.eventText.push(`Spaces are limited, so please register below to secure your place.`);
eventData.eventText.push(`Event sponsored by Kandji`);

eventData.imageSrc = "/event2-image.png";
eventData.imageAlt = "urban building rooftops";
eventData.eventTitle = "Rooftop BBQ";
eventData.eventSubTitle = "An Evening with Arek Dreyer";

const Event2 = () => {
  return <EventTemplate eventData={eventData} textPos="left" />;
};

export default Event2;
