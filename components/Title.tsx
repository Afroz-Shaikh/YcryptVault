import React from "react";
import { FlipWords } from "./ui/FlipWords";

import '../app/sf-pro.css';

export function Title() {
  const words = ["Ultimate Protection", "Absolute Privacy", "Offline Access", "Total Control"];

  return (
    <div className="h-[35rem] flex justify-start items-center ">
      <div className="text-6xl mx-auto  tracking-tighter text-white font-medium px-5">
        {/* Build */}
        <div className="flex justify-start ">
            <img src="/logo.webp" alt="logo" className="h-20 w-20"/>
            </div>
        <FlipWords words={words} /> <br />
        Your Passwords, Your Way
      </div>
    </div>
  );
}
