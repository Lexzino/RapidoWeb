import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Modal } from "antd";
import MenuItem from "./menu-item";
import aboutUs from '../Aboutus/index'
import AccountCreate from "./account-create";
import ComingSoon from "../ComingSoon";
import { translations } from "../../../src/translations"; // Import translations
import { useLanguage } from "../../LanguageContext"; // Import the custom hook
import "./navbar.css";

export default function Navbar() {
  const { selectedLanguage, changeLanguage } = useLanguage(); // Use the context here
  const [navbar, setNavbar] = useState(false);
  const [isGlobeDropdownOpen, setIsGlobeDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); // Reference for dropdown
  const [isDropdownAnimating, setIsDropdownAnimating] = useState(false); // Prevent toggling during animation
  const [popupOpen, setPopupOpen] = useState(false); // State for popup visibility

  // Fallback to default language if translations are missing
  const t = translations[selectedLanguage] || translations["en"];

  const toggleGlobeDropdown = () => {
    const dropdown = dropdownRef.current;

    if (!isGlobeDropdownOpen) {
      // Open dropdown
      dropdown.style.display = "block"; // Ensure it's visible
      dropdown.style.opacity = "0"; // Start with invisible
      dropdown.style.maxHeight = "0"; // Start collapsed
      dropdown.style.transition = "max-height 0.3s ease-out, opacity 0.3s ease-out";

      // Allow the browser to apply the initial styles
      setTimeout(() => {
        dropdown.style.maxHeight = `${dropdown.scrollHeight}px`; // Expand
        dropdown.style.opacity = "1"; // Fade in
      }, 10);
    } else {
      // Close dropdown
      dropdown.style.transition = "max-height 0.3s ease-in, opacity 0.3s ease-in";
      dropdown.style.maxHeight = "0"; // Collapse
      dropdown.style.opacity = "0"; // Fade out

      // Hide after transition ends
      setTimeout(() => {
        dropdown.style.display = "none"; // Fully hide
      }, 300); // Match the transition duration
    }

    setIsGlobeDropdownOpen(!isGlobeDropdownOpen);
  };

  const unfoldDropdown = () => {
    const dropdown = dropdownRef.current;
    dropdown.style.display = "block"; // Ensure it's visible before animation
    dropdown.style.maxHeight = "0"; // Set initial height to 0
    dropdown.style.transition = "max-height 0.3s ease-out"; // Transition for unfolding

    // Allow the browser to repaint before setting maxHeight to content height
    setTimeout(() => {
      dropdown.style.maxHeight = `${dropdown.scrollHeight}px`; // Set height based on content
      setIsDropdownAnimating(false); // Allow toggling after animation is complete
    }, 10);
  };

  const foldDropdown = () => {
    const dropdown = dropdownRef.current;
    dropdown.style.transition = "max-height 0.3s ease-in"; // Transition for folding
    dropdown.style.maxHeight = "0"; // Fold the dropdown

    // Hide the dropdown after the folding animation ends
    setTimeout(() => {
      dropdown.style.display = "none"; // Hide the dropdown after animation
      setIsDropdownAnimating(false); // Allow toggling after animation is complete
    }, 300); // Match the duration of the transition
  };

  const handleLanguageChange = (language) => {
    changeLanguage(language); // This updates the language immediately
    setIsGlobeDropdownOpen(false); // Close the dropdown after selecting a language
  };
  const openPopup = () => {
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false); // Close popup
  };



  return (
    <>
      <nav className="border-gray-200">
        <div className="w-11/12 xl:w-[1161px] flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Logo and menu section */}
          <div className="flex justify-between items-center w-full lg:w-auto">
            {/* Logo visible on both mobile and desktop */}
            <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src="/images/logo.svg" alt="Logo" className="h-10" />
            </Link>

            {/* Mobile view: Hamburger icon */}
            <div className="lg:hidden flex justify-between items-center">
              {/* Hamburger icon */}
              <button
                onClick={() => setNavbar(!navbar)}
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center"
                aria-controls="navbar-dropdown"
                aria-expanded={navbar ? "true" : "false"}
              >
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#B2FF87" viewBox="0 0 17 14">
                  <path stroke="#B2FF87" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
              </button>
            </div>
          </div>

          {/* Desktop view: Navbar items */}
          <div className={`${navbar ? "block" : "hidden"} w-full lg:block lg:w-auto`} id="navbar-dropdown">
            <ul className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-8 text-left lg:border-0 border-2 border-green rounded-[8px] mt-[8px]">
              <MenuItem label={t.aboutUsNav} subItems={[{ label: t.ourStory, link: "/aboutUs" }, { label: t.careers, link: "/career" }, { label: t.contactUs, link: "/contact-us" }]} />
              <MenuItem label={t.explore} subItems={[{ label: t.ourProviders, onClick: openPopup }, { label: t.blog, link: "/blog" }, { label: t.ourSolutions, onClick: openPopup }, { label: t.workWithUs, onClick: openPopup }, { label: t.whatItCost, onClick: openPopup }]} />
              <MenuItem label={t.mentalHealth} link="/mental-health" />
              <AccountCreate />
              <li className="hidden lg:block">
                <p className="block py-2 px-3 border border-white h-[27px] lg:p-0 f-f-b"></p>
              </li>
              <MenuItem
                label={
                  <button
                    onClick={() => (window.location.href = "/fundraise")}
                    className="block bg-[#58fd09] p-[2px] pr-[5px] rounded-[50px]"
                  >
                    <div className="f-f-r w-full flex items-center justify-between rounded-[50px] p-4 bg-[#1A4402] text-white text-[15px] font-normal leading-[1.5px]">
                      {t.getInvolved}
                    </div>
                  </button>
                }
              />


              {/* Globe button (desktop only) */}
              <MenuItem label={<li className="relative lg:block">
                <button
                  onClick={toggleGlobeDropdown}
                  className="flex items-center space-x-2"
                  aria-label="Select language"
                >
                  <img
                    src="/images/World.png"
                    alt="Globe"
                    className={`w-12 h-6 ${isGlobeDropdownOpen ? "squeezing" : ""}`}
                  />
                </button>
                <ul
                  ref={dropdownRef}
                  style={{ display: "none", maxHeight: "0", overflow: "hidden" }}
                  className="absolute left-0 mt-2 flex flex-wrap gap-2 bg-white p-1 shadow-lg z-50 border border-gray-200 w-max min-w-[50px]"
                >
                  {/* Flags for languages */}
                  <li
                    className="flex items-center py-2 px-2 hover:bg-gray-200 rounded-lg transition duration-300 ease-in-out"
                    onClick={() => handleLanguageChange("en")}
                  >
                    <svg width="24" height="24" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 0H0V12H16V0Z" fill="#B0BEC9" />
                      <path d="M15.5 0.5H0.5V11.5H15.5V0.5Z" fill="#0035A0" />
                      <path d="M9.5 0.5H6.5V11.5H9.5V0.5Z" fill="white" />
                      <path d="M15.5 4.5H0.5V7.5H15.5V4.5Z" fill="white" />
                      <path d="M8 7.85938L12.9625 11.5H15.5V9.64062L10.5375 6L15.5 2.35938V0.5H12.9625L8 4.14062L3.0375 0.5H0.5V2.35938L5.4625 6L0.5 9.64062V11.5H3.0375L8 7.85938Z" fill="white" />
                      <path d="M8 7.24063L13.8094 11.5H15.5V10.2594L9.69063 6L15.5 1.74062V0.5H13.8094L8 4.75938L2.19062 0.5H0.5V1.74062L6.30937 6L0.5 10.2594V11.5H2.19062L8 7.24063Z" fill="#E03232" />
                      <path d="M15.5 5H9V0.5H7V5H0.5V7H7V11.5H9V7H15.5V5Z" fill="#E03232" />
                    </svg>
                  </li>
                  <li
                    className="flex items-center py-2 px-2 hover:bg-gray-200 rounded-lg transition duration-300 ease-in-out"
                    onClick={() => handleLanguageChange("pt")}
                  >
                    <svg width="24" height="24" viewBox="0 0 16 12" xmlns="http://www.w3.org/2000/svg">
                      <rect width="16" height="12" fill="#009B3A" />
                      <polygon points="8,0 15,6 8,12 1,6" fill="#FFCC29" />
                      <circle cx="8" cy="6" r="3" fill="#002776" />
                    </svg>
                  </li>
                  <li
                    className="flex items-center py-2 px-2 hover:bg-gray-200 rounded-lg transition duration-300 ease-in-out"
                    onClick={() => handleLanguageChange("es")}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 16 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="16" height="12" fill="#AA151B" />
                      <rect y="4" width="16" height="4" fill="#F1BF00" />
                      <path d="M3 5H4V7H3V5ZM2 5H3V7H2V5ZM4 5H5V7H4V5Z" fill="#AA151B" />
                    </svg>
                  </li>
                  <li
                    className="flex items-center py-2 px-2 hover:bg-gray-200 rounded-lg transition duration-300 ease-in-out"
                    onClick={() => handleLanguageChange("nl")}
                  >
                    <svg width="24" height="24" viewBox="0 0 16 12" xmlns="http://www.w3.org/2000/svg">
                      <rect width="16" height="4" fill="#21468B" />
                      <rect y="4" width="16" height="4" fill="#FFFFFF" />
                      <rect y="8" width="16" height="4" fill="#AE1C28" />
                    </svg>
                  </li>
                </ul>
              </li>} />
            </ul>
          </div>
        </div>
      </nav>

      {/* Custom Popup for Our Providers */}
      {popupOpen && (
        <div
          className={`fixed inset-0 z-[99999999] bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ease-in-out ${popupOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          onClick={handleClosePopup} // To close when clicking outside
        >
          <ComingSoon />
        </div>
      )}


    </>
  );
}