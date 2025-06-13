import React from "react";
import Image from "next/image";

const EventImage = ({ imageSrc, imageAlt }) => {
  return (
    <Image
      alt={imageAlt}
      className="mx-auto lg:rounded-lg"
      src={imageSrc}
      width={0}
      height={0}
      sizes="100vw"
      style={{
        width: "100%",
        height: "675px",
        objectFit: "cover",
        objectPosition: "top",
      }}
    />
  );
};

export default EventImage;
