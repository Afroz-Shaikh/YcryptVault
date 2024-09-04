"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import Logo from "../../public/vault.svg"; // Adjust the path as necessary

import Banner from "./Banner";



const styles = {
  link: "text-base font-medium transition-all duration-200 hover:text-gray-400 focus:text-gray-400",
};

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
    <header className="bg-[#090909] text-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* lg+ */}
        <nav className="relative flex items-center justify-between h-16 bg-[#090909] lg:rounded-md lg:shadow-lg lg:h-24 lg:px-8 lg:py-6">
          <div className="flex-shrink-0">
            <Link href="#" title="Vault" className="flex items-center space-x-2">
            <Logo className="w-10 h-10" />
              <h1 className="text-lg lg:text-xl font-bold">YCRYPT VAULT</h1>
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex p-2 ml-5 transition-all duration-200 rounded-md text-white focus:bg-gray-800 hover:bg-gray-800 lg:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>

          <div className="hidden lg:flex lg:items-center lg:space-x-10 lg:mr-auto lg:ml-auto lg:space-x-10 border-gray-800">
            <Link href="#" className={styles.link} title="Download">
            Download
            </Link>
            <Link href="#" className={styles.link} title="Features">
              Features
            </Link>
            <Link href="#" className={styles.link} title="About">
              About
            </Link>
            <Link href="#" className={styles.link} title="Pricing">
              Pricing
            </Link>
          </div>

          <div className="hidden lg:flex lg:items-center lg:space-x-10">
            <Link href="#" className={styles.link} title="Sign up">
              Contact us
            </Link>
            {/* <Link href="#" className={styles.link} title="Sign in">
              Sign in
            </Link> */}
          </div>
        </nav>

        {/* xs to lg */}
        {isMenuOpen && (
          <nav className="flex flex-col items-center py-4 space-y-2 lg:hidden bg-[#090909]">
            <Link href="#" className={styles.link} title="Download">
              Download
            </Link>
            <Link href="#" className={styles.link} title="Features">
              Features
            </Link>
            <Link href="#" className={styles.link} title="About">
              About
            </Link>
            <Link href="#" className={styles.link} title="Pricing">
              Pricing
            </Link>
          </nav>
        )}
      </div>
     
    </header>
    <Banner />
  
   
    </>
  );
};

export default NavBar;