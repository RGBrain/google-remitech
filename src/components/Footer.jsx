import React from "react";
import Image from "next/image";
import IconArrow from "../../public/icon-arrow.svg";

const Footer = () => {
  return (
    <>
      <footer className="bg-white w-full shadow-md shadow-gray-400 sticky top-0 z-50 pt-8 pb-3 lg:pt-10 lg:pb-7 md:py-2">
        <div className="flex flex-col-reverse md:flex-row justify-center md:justify-between items-center min-h-[84px] md:min-h-[110px] max-w-[1450px] mx-auto">
          <div className="text-sm mt-6 md:mt-0 md:ml-16 flex flex-col justify-center">
            {/* m-5 ml-10 lg:ml-16 */}
            <a href="https://inbound.systems/privacy/">
              <p className="md:text-[16px]">
                <IconArrow className="inline fill-foreground w-4 mr-1" /> View the LeadaMarket privacy statement
              </p>
            </a>
          </div>
          <Image src="/MSSurface_TDSYNNEX-Logos-scaled.png" width={400} height={400} alt="TD Synnex and Microsoft Surface logos" className="md:mr-18 w-65 lg:w-110" />
        </div>
      </footer>

      {/* trademark text with dark green bg */}
      <div className="bg-td-footer w-full shadow-md shadow-gray-400 sticky top-0 z-50 pb-3 py-3">
        <div className="flex flex-col-reverse md:flex-row justify-center md:justify-between items-center max-w-[1450px] mx-auto px-6 sm:px-10 md:pl-17">
          <div className="text-xs leading-4 sm:leading-5">
            {/* m-5 ml-10 lg:ml-16 */}
            <a href="https://inbound.systems/privacy/">
              <p className="text-white">
                © TD Synnex Corporation, 2025 <br />
                TD SYNNEX and TD SYNNEX logo are registered trademarks of TD SYNNEX Corporation in the United States and other countries. All other trademarks are the property of their respective owners.
              </p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
