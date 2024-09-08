// components/ui/Navbar.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "../../public/vault.svg"; // Adjust the path as necessary

const styles = {
  link: "text-base font-medium transition-all duration-200 hover:text-gray-400 focus:text-gray-400",
};

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (href: string, id: string) => {
    if (window.location.pathname !== href) {
      window.location.href = href; // Navigate to the page
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 500); // Timeout to ensure the page has loaded
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <header className="bg-[#090909] text-white sticky top-0 z-50">
        <div className="px-4 mx-auto max-w-6xl sm:px-6 lg:px-8">
          <nav className="relative flex items-center justify-between h-16 bg-[#090909] lg:rounded-md lg:shadow-lg lg:h-24 lg:px-8 lg:py-6">
            <div className="flex-shrink-0">
              <Link href="/" title="Vault" className="flex items-center space-x-2">
                <Logo className="w-10 h-10" />
                <h1 className="text-lg lg:text-xl font-bold">YCRYPT VAULT</h1>
              </Link>
            </div>

            <button
              type="button"
              className="inline-flex p-2 ml-5 transition-all duration-200 rounded-md text-white focus:bg-gray-800 hover:bg-gray-800 lg:hidden"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>

            <div className="hidden lg:flex lg:items-center lg:space-x-10 lg:mr-auto lg:ml-auto border-gray-800">
              <button
                className={styles.link}
                onClick={() => handleNavigation("/", "hero")}
              >
                Home
              </button>
              <button
                className={styles.link}
                onClick={() => handleNavigation("/", "features")}
              >
                Features
              </button>
              <Link href="/privacy" className={styles.link} title="Privacy">
                Privacy
              </Link>
              {/* <Link href="/faqs" className={styles.link} title="FAQs">
                FAQs
              </Link> */}
            </div>

            <div className="hidden lg:flex lg:items-center">
              <a
                href="mailto:apps.afrozshaikh@gmail.com"
                className={`${styles.link} border-t border-gray-700 pt-4 lg:pt-0`}
                title="Contact Us"
              >
                Contact Us
              </a>
            </div>
          </nav>

          {isMenuOpen && (
            <nav className="flex flex-col items-center py-4 space-y-2 lg:hidden bg-[#090909]">
              <button
                className={styles.link}
                onClick={() => handleNavigation("/", "hero")}
              >
                Home
              </button>
              <button
                className={styles.link}
                onClick={() => handleNavigation("/", "features")}
              >
                Features
              </button>
              <Link href="/privacy" className={styles.link} title="Privacy">
                Privacy
              </Link>
              {/* <Link href="/faqs" className={styles.link} title="FAQs">
                FAQs
              </Link> */}
              <a
                href="mailto:apps.afrozshaikh@gmail.com"
                className={styles.link}
                title="Contact Us"
              >
                Contact Us
              </a>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default NavBar;
