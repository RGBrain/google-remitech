import React from "react";
import EventTemplate from "./EventTemplate";

//! EVENT 3 - CISO @ The O2 Club

//* data for this event

const eventData = {};

eventData.eventNum = 3;
eventData.eventText = [];
eventData.eventText.push(`Join Remitech with fellow CISOs and security leaders for an evening of networking, great food, and world-class entertainment—right from the luxury of our VIP suite at The O2 Arena, in partnership with Cloudflare.`);
eventData.eventText.push(`🎤 Lady Gaga – 30th September 2025`);
eventData.eventText.push(`🎼 Hans Zimmer – 1st December 2025`);
eventData.eventText.push(`Spaces are extremely limited—just 14 spots per event—and will be allocated on a first come, first served basis. Please register interest below.`);

eventData.imageSrc = "/event3-image.png";
eventData.imageAlt = "O2 Arena";
eventData.eventTitle = `CISO @ <span style="white-space: nowrap;">The O2 Club</span>`;
eventData.eventSubTitle = "Lady Gaga | Hans Zimmer";

const Event3 = () => {
  return <EventTemplate eventData={eventData} textPos="right" lastEvent={true} />;
};

export default Event3;
