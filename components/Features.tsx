import React from "react";
import { FaFingerprint, FaMoon } from "react-icons/fa6";
import { FiFilter } from "react-icons/fi";
import { RxLightningBolt } from "react-icons/rx";

const Feature15 = () => {
  const containerStyles = "py-10 bg-black sm:py-16 lg:py-24 ";
  const innerContainerStyles = "px-4 mx-auto max-w-7xl sm:px-6 lg:px-8";
  const gridStyles =
    "grid grid-cols-1 text-center sm:grid-cols-2 gap-y-8 lg:grid-cols-4 sm:gap-12";
  const itemStyles = "flex flex-col items-center";

  return (
<> <div className="mt-32">
<div className={containerStyles}>
      <div className={innerContainerStyles}>
        <div className={gridStyles}>
          <div className={itemStyles}>
            <div className="h-20 w-20 bg-blue-100 flex items-center justify-center rounded-full">
              <FaFingerprint className="flex items-center justify-center w-8 h-8 mx-auto text-blue-600" />
            </div>

            <h3 className="mt-8 text-lg font-semibold text-white">
              Secured 
            </h3>
            <p className="mt-4 text-sm text-gray-600">
              Everything is encrpyted and stored on your device.
              
            </p>
          </div>
          <div className={itemStyles}>
            <div className="h-20 w-20 bg-orange-100 flex items-center justify-center rounded-full">
              {" "}
              <RxLightningBolt className="flex items-center justify-center w-8 h-8 mx-auto text-orange-600" />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-white">
              Completely Offline 
            </h3>
            <p className="mt-4 text-sm text-gray-600">
              Works completely offline, no need to connect to the internet.
            </p>
          </div>
          <div className={itemStyles}>
            <div className="h-20 w-20 bg-green-100 flex items-center justify-center rounded-full">
              <FaMoon className="flex items-center justify-center w-8 h-8 mx-auto text-green-600" />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-white">
              Light & Dark Mode
            </h3>
            <p className="mt-4 text-sm text-gray-600">
              Switch effortlessly between light and dark modes.
            </p>
          </div>

          <div className={itemStyles}>
            <div className="h-20 w-20 bg-red-100 flex items-center justify-center rounded-full">
              <FiFilter className="flex items-center justify-center w-8 h-8 mx-auto text-red-600" />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-white">
              Easy Grouping
            </h3>
            <p className="mt-4 text-sm text-gray-600">
              Easily filter through your credentials with tags.
            </p>
          </div>
        </div>
      </div>
    </div></div> </>
  );
};

export default Feature15;
