import React from "react";
import Image from "next/image";
import ClickIcon from "../../public/icon-click.svg";

const Footer = () => {
  return (
    <>
      <footer className="bg-white w-full shadow-md shadow-gray-400 sticky top-0 z-50 pt-5 lg:pt-6 pb-3">
        <div className="flex justify-between items-center min-h-[80px] md:min-h-[90px] max-w-[1420px] mx-auto px-5 pl-6 sm:pl-14 sm:px-14">
          <div>
            <ClickIcon className="w-8 inline-block mr-3 -mt-[6px]" />
            <a href="https://inbound.systems/privacy/" target="_blank">
              <span className="text-[10px] sm:text-xs lg:text-sm">View the LeadaMarket privacy statement</span>
            </a>
          </div>

          {/* WIDE SCREEN */}
          <Image className="hidden lg:block" src="/google-cloud-partner-logo.png" alt="Google Cloud Parter Logo" width="110" height="110" />

          {/* MOBILE */}
          <Image className="lg:hidden" src="/google-cloud-partner-logo.png" alt="Google Cloud Parter Logo" width="80" height="80" />
        </div>
      </footer>
    </>
  );
};

export default Footer;
