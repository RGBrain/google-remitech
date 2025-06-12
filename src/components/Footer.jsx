import React from "react";
import Image from "next/image";
import ClickIcon from "../../public/icon-click.svg";
import RemitechContact from "@/components/RemitechContact";

const Footer = () => {
  return (
    <>
      <footer className="bg-white w-full shadow-md shadow-gray-400 sticky top-0 z-50 pt-5 lg:pt-6 pb-3">
        <div className="flex justify-between items-center min-h-[80px] md:min-h-[90px] max-w-[1420px] mx-auto px-5 pl-6 sm:pl-14 sm:px-14 flex-wrap md:flex-nowrap">
          <RemitechContact />

          <div className="md:basis-1/3 mr-3 md:order-1 basis-1/2">
            <ClickIcon className="w-8 inline-block mr-3 -mt-[6px]" />
            <a href="https://remitech.com/privacy/" target="_blank">
              <span className="text-[10px] sm:text-xs lg:text-sm">Remitech privacy policy</span>
            </a>
          </div>

          {/* WIDE SCREEN */}
          <div className="hidden lg:flex basis-1/3 justify-end shrink-1 md:order-3">
            <Image className="" src="/google-cloud-partner-logo.png" alt="Google Cloud Parter Logo" width="110" height="110" />
          </div>

          {/* MOBILE */}
          <div className="basis-1/3 flex justify-end lg:hidden md:order-3">
            <Image className="" src="/google-cloud-partner-logo.png" alt="Google Cloud Parter Logo" width="80" height="80" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
