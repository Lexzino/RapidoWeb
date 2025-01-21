import React, { useState, useEffect } from "react";
import { useLanguage } from "../../LanguageContext"; // Import the context
import { translations } from "../../translations"; // Import translations
import Rapidologo from "../../assets/images/Group 17155.svg";
import Email from "../../assets/images/Email.svg";
import Google from "../../assets/images/Google play2.svg";
import Apple from "../../assets/images/Appss.svg";
import Gfacebook from "../../assets/images/Gfacebook.svg";
import Ginstagram from "../../assets/images/Ginstagram.svg";
import Gsocial from "../../assets/images/Gsocial.svg";
import Glinkedin from "../../assets/images/Glinkedin.svg";
// import Gyoutube from "../../assets/images/Gyoutube.svg";
import { Link } from "react-router-dom";
import LanguageSelector from "./language-select";

export default function Footer() {
  const { selectedLanguage, changeLanguage } = useLanguage(); // Use context for language
  const [open, setOpen] = React.useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [langUpdated, setLangUpdated] = useState(false); // State to trigger re-render on language change

  const t = translations[selectedLanguage]; // Get the translation for the selected language

  // Use effect to force re-render when language changes
  useEffect(() => {
    setLangUpdated(false); // Reset state before language change
    const timeout = setTimeout(() => {
      setLangUpdated(true); // Update state after a brief delay
    }, 100); // Delay to allow the context to update
    return () => clearTimeout(timeout); // Cleanup timeout
  }, [selectedLanguage]); // Dependency on language change

  return (
    <div className="bg-green-dark ">
      <div className="w-11/12 mx-auto 2xl:max-w-[1161px] py-9 relative">
        <div className=" absolute bottom-28 -right-6 xl:-right-36 hidden md:block">
          <HoverPersistentComponent />
        </div>
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12  xl:col-span-3">
            <div className="text-center xl:text-start ">
              <ul className="xl:inline-flex w-full  items-center space-x-2">
                <li>
                  <img src={Rapidologo} className="w-12 h-12 mx-auto" alt="" />
                </li>
                <li>
                  <h1 className="f-f-r font-semibold text-white text-[32px]">
                    {t.companyName}
                  </h1>
                </li>
              </ul>

              <ul className="xl:inline-flex w-full items-center space-x-4 md:space-x-4 mt-4 xl:mt-[47px]">
                <li>
                  <img
                    src={Email}
                    className="w-[38px] h-[35px] mx-auto "
                    alt=""
                  />
                </li>
                <div className="xl:w-[160px] ">
                  <li>
                    <h1 className="f-f-r  text-white text-sm  mt-3 xl:mt-0">
                      {t.supportText}{" "}
                      <span className="f-f-li  text-green">
                        contact@rapidorelief.com
                      </span>{" "}
                    </h1>
                  </li>
                </div>
              </ul>
              <h3 className="f-f-r text-xl text-white mt-4">
                {t.followUs}
              </h3>
              <div className=" px-6 mt-[17px] ">
                <ul className="inline-flex items-center space-x-[10px]  ">
                  <li>
                    <a href="https://web.facebook.com/RapidoReliefApp/">
                      <img src={Gfacebook} className="w-6 h-6" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/rapidreliefapp/">
                      <img src={Ginstagram} className="w-6 h-6" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/rapidoreliefapp">
                      <img src={Gsocial} className="w-6 h-6" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/rapidreliefapp">
                      <img src={Glinkedin} className="w-6 h-6" alt="" />
                    </a>
                  </li>
                  {/* <li>
                    <button>
                      <img src={Gyoutube} className="w-6 h-6" alt="" />
                    </button>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 xl:col-span-3">
            <div className="text-center xl:text-start xl:pl-20 mt-3 xl:mt-0">
              <h1 className="f-f-r font-semibold text-white text-xl">
                {t.solution}
              </h1>
              <h1 className="f-f-r  text-white text-xl mt-4">{t.findDoctors}</h1>
              <h1 className="f-f-r  text-white text-xl mt-3 ">
                {t.findPharmacy}{" "}
              </h1>
              <h1 className="f-f-r  text-white text-xl mt-3">
                {t.healthcareExpertise}
              </h1>
              <h1 className="f-f-r  text-white text-xl mt-3">
                {t.patientCommunication}
              </h1>
              <h1 className="f-f-r  text-white text-xl mt-3">
                {t.providerCommunication}
              </h1>
              <h1 className="f-f-r  text-white text-xl mt-3">
                {t.workflowAutomation}
              </h1>
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 xl:col-span-3">
            <div className=" text-center xl:text-start xl:pl-20 mt-3 xl:mt-0">
              <h1 className="f-f-r font-semibold text-white text-xl">
               {t.resources}
              </h1>
              <h1 className="f-f-r  text-white text-xl mt-4">About Us</h1>
              <h1 className="f-f-r  text-white text-xl mt-2">Blog </h1>
              <h1 className="f-f-r  text-white text-xl mt-2">
                {t.successStories}
              </h1>
              <h1 className="f-f-r  text-white text-xl mt-2">{t.whitePapers}</h1>
              <h1 className="f-f-r  text-white text-xl mt-2"> {t.career} </h1>
              <h1 className="f-f-r  text-white text-xl mt-2">
                {t.podcastsVideos}
              </h1>
            </div>
          </div>
          <div className="col-span-12  xl:col-span-3">
            <div className="text-center xl:text-end mt-3 xl:mt-0">
              <h1 className="f-f-m f text-white text-2xl ">{t.comingSoon}</h1>
              <div className="sm:space-x-4 xl:space-x-0">
                <button className="w-full sm:w-[170px] h-[39px] mt-3  border border-green rounded-[10px] cursor-pointer">
                  <ul className="inline-flex items-center space-x-2">
                    <li>
                      <img src={Google} className="w-[30px] h-[26px]" alt="" />
                    </li>
                    <li>
                      <h5 className="f-f-r text-xs text-white text-start ">
                        {t.getItOn}
                      </h5>
                      <h3 className="f-f-m text-lg sm:text-2xl text-white leading-4">
                        {t.googlePlay}
                      </h3>
                    </li>
                  </ul>
                </button>
                <button className="w-full sm:w-[152px] h-[39px] border border-green rounded-[10px] cursor-pointer mt-[14px]">
                  <ul className="inline-flex items-center space-x-2">
                    <li>
                      <img src={Apple} className="w-[35px] h-[30px]" alt="" />
                    </li>
                    <li>
                      <h5 className="f-f-r text-xs text-white text-start  ">
                      {t.downloadOnAppStore}
                      </h5>
                      <h3 className="f-f-m text-lg sm:text-2xl text-white leading-4">
                        App Store
                      </h3>
                    </li>
                  </ul>
                </button>
                <div className=" mt-10">
                  <LanguageSelector />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-[2px] bg-white mt-7"></div>

        <div className="grid grid-cols-12 items-center mt-6">
          <div className="col-span-12 md:col-span-4">
            <h1 className="f-f-m text-base lg:text-base text-white text-center md:text-star">
              {t.copyright}
            </h1>
          </div>
          <div className="col-span-12 md:col-span-8">
            <div className="text-center md:text-end mt-3 md:mt-0">
              <ul className="inline-flex space-x-3 sm:space-x-5 items-center uppercase">
                <Link to="/privacy-policy">
                  <li className="f-f-m text-sm text-white ">{t.privacyPolicy} </li>
                </Link>
                <li>
                  <div className="bg-white h-3 w-[2px]"></div>
                </li>
                <li className="f-f-m text-sm text-white">{t.legal}</li>
                <li>
                  <div className="bg-white h-3 w-[2px]"></div>
                </li>
                <li className="f-f-m text-sm text-white">{t.cookies} </li>
                <li>
                  <div className="bg-white h-3 w-[2px]"></div>
                </li>
                <li className="f-f-m text-sm text-white">{t.termsConditions}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const HoverPersistentComponent = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="relative w-[121.971px] h-[122.027px] cursor-pointer flex justify-center items-center bg-[#456c0f] rounded-full group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="53"
        height="54"
        viewBox="0 0 53 54"
        fill="none">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M29.7463 53.8666V13.691L48.2555 32.2086L52.8824 27.4133L26.4412 0.959961L0 27.4133L4.62705 32.0422L23.136 13.691V53.8666H29.7463V53.8666Z"
          fill="#1A4402"
        />
      </svg>

      {/* Hidden Items Initially, will become visible when hovered */}
      <div
        className={`absolute -top-[380px] w-[25.594px] h-[25.594px] rotate-[-45deg] rounded-[7px] border-4 border-[#1A4402] bg-white shadow-[0_0_49px_-2px_rgba(0,0,0,0.19)] transition-all duration-500 ease-out translate-y-full ${
          isHovered ? "translate-y-0 opacity-30" : "opacity-0"
        }`}></div>

      <div
        className={`absolute -top-[305px] w-[25.594px] h-[25.594px] rotate-[-45deg] rounded-[7px] border-4 border-[#1A4402] bg-white shadow-[0_0_49px_-2px_rgba(0,0,0,0.19)] transition-all duration-500 ease-out translate-y-full ${
          isHovered ? "translate-y-0 opacity-30" : "opacity-0"
        }`}></div>

      <div
        className={`absolute -top-[235px] w-[25.594px] h-[25.594px] rotate-[-45deg] rounded-[7px] border-4 border-[#749D1C] bg-[#749D1C] shadow-[0_0_49px_-2px_rgba(0,0,0,0.19)] transition-all duration-500 ease-out translate-y-full ${
          isHovered ? "translate-y-0 opacity-100" : "opacity-0"
        }`}></div>

      <div
        className={`absolute text-[32px] -top-[250px] right-20 rounded-[7px] px-3 font-normal leading-normal bg-[#749D1C] text-white transition-all duration-500 ease-out translate-y-full ${
          isHovered ? "translate-y-0 opacity-100" : "opacity-0"
        }`}>
        Services
      </div>

      <div
        className={`absolute -top-[150px] w-[25.594px] h-[25.594px] rotate-[-45deg] rounded-[7px] border-4 border-[#1A4402] bg-white shadow-[0_0_49px_-2px_rgba(0,0,0,0.19)] transition-all duration-500 ease-out translate-y-full ${
          isHovered ? "translate-y-0 opacity-30" : "opacity-0"
        }`}></div>

      <div
        className={`absolute -top-[75px] w-[25.594px] h-[25.594px] rotate-[-45deg] rounded-[7px] border-4 border-[#1A4402] bg-white shadow-[0_0_49px_-2px_rgba(0,0,0,0.19)] transition-all duration-500 ease-out translate-y-full ${
          isHovered ? "translate-y-0 opacity-30" : "opacity-0"
        }`}></div>
    </div>
  );
};
