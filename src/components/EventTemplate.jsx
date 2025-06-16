"use client";

import React from "react";
import FadeTextWrapper from "@/components/FadeTextWrapper";
import SlideEventWrapper from "./SlideEventWrapper";
import ClientOnlyWrapper from "@/components/ClientOnlyWrapper";
import EventHeading from "./EventHeading";
import EventText from "./EventText";
import EventImage from "./EventImage";

import { useRef } from "react";

const EventTemplate = ({ eventData, textPos }) => {
  const textSlideFrom = textPos === "left" ? `bottomLeft` : `bottomRight`;
  const headingSlideFrom = textPos === "left" ? `left` : `right`;

  const thisEvent = useRef(null);

  return (
    <article
      ref={thisEvent}
      className={`flex flex-col my-28 items-start lg:h-[965px] lg:w-[1000px] `}
    >
      {/* Blue Box */}
      <div
        className={`lg:relative lg:bottom-180 lg:order-2 self-stretch z-30 mt-24 lg:mt-0 lg:self-start ${textPos === "left" ? `lg:left-10` : `lg:left-106`}`}
      >
        <ClientOnlyWrapper>
          <SlideEventWrapper
            eventRef={thisEvent}
            slideFrom={headingSlideFrom}
            duration="0.7"
            delay="0.0"
          >
            <EventHeading
              eventTitle={eventData.eventTitle}
              eventSubTitle={eventData.eventSubTitle}
            />
          </SlideEventWrapper>
        </ClientOnlyWrapper>
      </div>

      {/* Image */}
      <div
        className={`w-full h-150 z-10 self-center -mt-30 lg:-mt-0 lg:max-w-[540px] lg:h-[785px] ${textPos === "left" ? `lg:self-end lg:mx-16` : `lg:self-start`} `}
      >
        <FadeTextWrapper>
          <EventImage
            imageSrc={eventData.imageSrc}
            imageAlt={eventData.imageAlt}
          />
        </FadeTextWrapper>
      </div>

      {/* White Box */}
      <div
        className={`lg:relative lg:bottom-295 lg:order-3 z-40 -mt-3 lg:-mt-0 ${textPos === "left" ? `lg:left-23` : `lg:left-119`}`}
      >
        <ClientOnlyWrapper>
          <SlideEventWrapper
            eventRef={thisEvent}
            slideFrom={textSlideFrom}
            duration="0.7"
            delay="0.2"
          >
            <EventText eventText={eventData.eventText} />
          </SlideEventWrapper>
        </ClientOnlyWrapper>
      </div>
    </article>
  );
};

export default EventTemplate;
