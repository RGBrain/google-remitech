import React from "react";
import RemitechLogoColor from "../../public/remitech-logo-color.svg";

const RemitechContact = () => {
  return (
    <div className="flex w-full shrink-0 grow-1 basis-1 flex-col items-center space-y-4 md:order-2 md:basis-1/3">
      <RemitechLogoColor className="w-56" />
      <span>
        +44 20 8144 2589
        <br />
        hi@remitech.com
      </span>
    </div>
  );
};

export default RemitechContact;
