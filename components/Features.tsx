import React from "react";
import { FaFingerprint, FaMoon } from "react-icons/fa6";
import { FiFilter } from "react-icons/fi";
import { RxLightningBolt } from "react-icons/rx";
import { motion } from "framer-motion";

const Feature15 = () => {
  const containerStyles = "py-10 bg-black sm:py-16 lg:py-24"; // AMOLED background
  const innerContainerStyles = "px-4 mx-auto max-w-7xl sm:px-6 lg:px-8";
  const gridStyles =
    "grid grid-cols-1 text-center sm:grid-cols-2 gap-y-8 lg:grid-cols-4 sm:gap-12";
  const itemStyles = "flex flex-col items-center";

  // Variants for the animation
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3, // Stagger the children
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <div className="mt-32">
        <motion.div
          className={containerStyles}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Ensures animation triggers when 20% is in view
          variants={containerVariants}
        >
          <div className={innerContainerStyles}>
            <div className={gridStyles}>
              {/* Secured Feature */}
              <motion.div className={itemStyles} variants={itemVariants}>
                <div className="h-20 w-20 bg-[#36AADB] flex items-center justify-center rounded-full"> {/* Sky Blue */}
                  <FaFingerprint className="flex items-center justify-center w-8 h-8 mx-auto text-black" /> {/* Black icon */}
                </div>
                <h3 className="mt-8 text-lg font-semibold text-white">Secured</h3>
                <p className="mt-4 text-sm text-gray-400">
                  Everything is encrypted and stored on your device.
                </p>
              </motion.div>

              {/* Offline Feature */}
              <motion.div className={itemStyles} variants={itemVariants}>
                <div className="h-20 w-20 bg-[#BBF517] flex items-center justify-center rounded-full"> {/* Bright Yellow-Green */}
                  <RxLightningBolt className="flex items-center justify-center w-8 h-8 mx-auto text-black" /> {/* Black icon */}
                </div>
                <h3 className="mt-8 text-lg font-semibold text-white">
                  Completely Offline
                </h3>
                <p className="mt-4 text-sm text-gray-400">
                  Works completely offline, no need to connect to the internet.
                </p>
              </motion.div>

              {/* Dark Mode Feature */}
              <motion.div className={itemStyles} variants={itemVariants}>
                <div className="h-20 w-20 bg-[#7FDAC7] flex items-center justify-center rounded-full"> {/* Light Teal */}
                  <FaMoon className="flex items-center justify-center w-8 h-8 mx-auto text-black" /> {/* Black icon */}
                </div>
                <h3 className="mt-8 text-lg font-semibold text-white">
                  Light & Dark Mode
                </h3>
                <p className="mt-4 text-sm text-gray-400">
                  Switch effortlessly between light and dark modes.
                </p>
              </motion.div>

              {/* Grouping Feature */}
              <motion.div className={itemStyles} variants={itemVariants}>
                <div className="h-20 w-20 bg-[#36AADB] flex items-center justify-center rounded-full"> {/* Sky Blue */}
                  <FiFilter className="flex items-center justify-center w-8 h-8 mx-auto text-black" /> {/* Black icon */}
                </div>
                <h3 className="mt-8 text-lg font-semibold text-white">
                  Easy Grouping
                </h3>
                <p className="mt-4 text-sm text-gray-400">
                  Easily filter through your credentials with tags.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Feature15;
