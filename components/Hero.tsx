import React, { useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import { FaPlay } from "react-icons/fa";
import Modal from "./Modal";
import WaitlistForm from "./Waitlist"; // Import the waitlist form
import {Title} from "./Title";
import '../app/sf-pro.css';

function Hero() {
  // State to control the modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const commonStyles = {
    focusRing:
      "focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-600 focus:ring-offset-gray-900",
    // container: "container px-6 mx-auto sm:px-8 sm:px-20 lg:px-12 max-w-7xl ",
    container: "container  px-4 lg:px-8 mx-4 sm:px-8 sm:px-20  lg:px-8 max-w-6xl ",
    button:
      " justify-center text-base font-semibold transition-all duration-200 rounded-full sm:text-lg sm:leading-8",
  };
  // bg-gradient-to-b from-black via-[#80A41A] to-[#BBF517]
  return (
   <div className="flex-col ">
     <div className="relative pt-15 overflow-hidden bg-black xl:pt-30 ">
      <div className="relative">
        <div className={commonStyles.container}>
          {/* <div className="text-left md:max-w-xl md:mx-auto sm:text-center "> */}
          
            {/* <h1 className="tracking-tighter text-white">
              <span className="font-serif italic text-5xl">Your Device, Your Data </span>
              <br />
              <span className="font-serif italic text-5xl"> No Sync, Just Security!</span>
            </h1>
            <p className="mt-5 text-base font-normal leading-7 text-white text-opacity-70">
              All your data stays on your phone no matter what
            </p> */}
          
           
              <Title/>

           
          {/* </div> */}
        </div>
      </div>
    </div>
    <div className="container  px-4  mx-6  sm:px-24  lg:px-48 max-w-6xl flex justify-start">
{/* Button to trigger the modal */}
<button
  onClick={handleOpenModal} // Open modal on click
  className={`${commonStyles.button} px-8 py-2  text-black   bg-white border-2 border-transparent hover:bg-opacity-90 ${commonStyles.focusRing}`}
>
  Join Waitlist
</button>

{/* Modal to display the waitlist form */}
<Modal isOpen={isModalOpen} onClose={handleCloseModal}>
  <h2 className="text-xl font-bold text-white mb-4">
    Join Our Waitlist
  </h2>
  <WaitlistForm />
</Modal>

{/* Other buttons can be added here if necessary */}
</div>
   </div>
  );
}



export default Hero;
