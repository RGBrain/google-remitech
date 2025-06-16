import React from "react";
import Image from "next/image";
import ClickIcon from "../../public/icon-click.svg";
import RemitechContact from "@/components/RemitechContact";

const Footer = () => {
  return (
    <>
      <footer className="sticky top-0 z-50 w-full bg-white pt-5 pb-3 shadow-md shadow-gray-400 lg:pt-6">
        <div className="mx-auto flex min-h-[80px] max-w-[1420px] flex-wrap items-center justify-between px-5 pl-6 sm:px-14 sm:pl-14 md:min-h-[90px] md:flex-nowrap">
          <RemitechContact />

          <div className="mr-3 basis-1/2 md:order-1 md:basis-1/3">
            <a href="https://remitech.com/privacy/" target="_blank">
              <ClickIcon className="-mt-[4px] mr-3 inline-block w-6" />
              <span className="text-[10px] sm:text-xs lg:text-sm">
                Remitech privacy policy
              </span>
            </a>
          </div>

          {/* WIDE SCREEN */}
          <div className="hidden shrink-1 basis-1/3 justify-end md:order-3 lg:flex">
            <Image
              className=""
              src="/google-cloud-partner-logo.png"
              alt="Google Cloud Parter Logo"
              width="110"
              height="110"
            />
          </div>

          {/* MOBILE */}
          <div className="flex basis-1/3 justify-end md:order-3 lg:hidden">
            <Image
              className=""
              src="/google-cloud-partner-logo.png"
              alt="Google Cloud Parter Logo"
              width="80"
              height="80"
            />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
