"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const WobbleCard = ({
  children,
  containerClassName,
  className,
}: {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = event;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (clientX - (rect.left + rect.width / 2)) / 20;
    const y = (clientY - (rect.top + rect.height / 2)) / 20;
    setMousePosition({ x, y });
  };

  return (
    <motion.section
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      style={{
        transform: isHovering
          ? `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) scale3d(1.02, 1.02, 1)`
          : "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
        transition: "transform 0.2s ease-out",
      }}
      className={cn(
        "relative mx-auto w-full bg-gray-900 rounded-2xl overflow-hidden shadow-xl",
        containerClassName
      )}
    >
      <div
        className="relative h-full p-1 bg-gradient-to-r from-[#BBF517] via-[#36AADB] to-[#7FDAC7] rounded-2xl"
        style={{
          backgroundPosition: `${mousePosition.x * 5}px ${mousePosition.y * 5}px`,
          transition: "background-position 0.1s ease-out",
        }}
      >
        <div
          className="relative h-full bg-black rounded-2xl shadow-lg transition-transform duration-300 ease-in-out group overflow-hidden"
          style={{
            boxShadow:
              "0 10px 32px rgba(0, 0, 0, 0.5), 0 8px 16px rgba(0, 0, 0, 0.4)",
          }}
        >
          <motion.div
            style={{
              transform: isHovering
                ? `translate3d(${-mousePosition.x}px, ${-mousePosition.y}px, 0) scale3d(1.03, 1.03, 1)`
                : "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
              transition: "transform 0.1s ease-out",
            }}
            className={cn("h-full px-4 py-20 sm:px-10", className)}
          >
            <Noise />
            {children}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

const Noise = () => {
  return (
    <div className="absolute inset-0 opacity-5 bg-noise bg-opacity-10 pointer-events-none"></div>
  );
};
