import React from "react";
import FadeTextWrapper from "@/components/FadeTextWrapper";
import SlideElementWrapper from "./SlideElementWrapper";
import ClientOnlyWrapper from "@/components/ClientOnlyWrapper";
import EventHeading from "./EventHeading";
import EventText from "./EventText";
import EventImage from "./EventImage";

const EventTemplate = ({ eventData, textPos, lastEvent = false }) => {
  const textSlideFrom = textPos === "left" ? `bottomLeft` : `bottomRight`;
  const headingSlideFrom = textPos === "left" ? `left` : `right`;

  return (
    <article className={`flex flex-col ${textPos === "left" ? `lg:mr-20` : `lg:ml-10`} my-18 lg:my-28 items-start space-y-5 lg:h-[765px] ${lastEvent === true ? `overflow-hidden pt-20 -mt-20` : ``}`}>
      <div className={`lg:relative lg:bottom-155 lg:order-2 self-stretch z-30 mt-24 lg:mt-0 lg:self-start ${textPos === "left" ? `lg:left-10` : `lg:left-106`}`}>
        <ClientOnlyWrapper>
          <SlideElementWrapper slideFrom={headingSlideFrom} duration="0.7">
            <EventHeading eventTitle={eventData.eventTitle} eventSubTitle={eventData.eventSubTitle} />
          </SlideElementWrapper>
        </ClientOnlyWrapper>
      </div>
      <div className={`w-full max-w-[500px] rounded-lg lg:order-1 h-[565px] z-10 self-center -mt-30 lg:-mt-0 ${textPos === "left" ? `lg:self-end` : `lg:self-start`}`}>
        {/* THIS OUTER DIV JUST FOR THE IMAGE, maybe gives a bit more control on image width */}
        <FadeTextWrapper>
          <EventImage imageSrc={eventData.imageSrc} imageAlt={eventData.imageAlt} />
        </FadeTextWrapper>
      </div>

      <div className={`lg:relative lg:bottom-254 lg:order-3 z-40 -mt-3 lg:-mt-0 ${textPos === "left" ? `lg:left-23` : `lg:left-119`}`}>
        <ClientOnlyWrapper>
          <SlideElementWrapper slideFrom={textSlideFrom} duration="0.7">
            <EventText eventText={eventData.eventText} />
          </SlideElementWrapper>
        </ClientOnlyWrapper>
      </div>
    </article>
  );
};

export default EventTemplate;
