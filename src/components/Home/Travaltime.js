import React, { useState, useEffect } from "react";
import { useLanguage } from "../../LanguageContext"; // Import the context
import { translations } from "../../translations"; // Import translations


export default function Traveltime() {
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
    <div className="bg-parrot-dark ">
      <div className="w-11/12 mx-auto 2xl:max-w-[1154px] py-14">
        <div className="grid grid-cols-12 gap-2 sm:gap-10 2xl:gap-20">
          <div className="col-span-12 sm:col-span-6 xl:col-span-4">
            <div className="text-center">
              <ul className="sm:inline-flex items-center space-x-5 ">
                <img
                  src="/images/Carimg.svg"
                  className="w-[91px] h-[76px] mx-auto sm:mx-0"
                  alt=""
                />
                <h1 className="f-f-r text-2xl lg:text-5xl text-white  text-center mt-2 sm:mt-0  sm:text-start">
                 {t.cutDownTravelTime}
                </h1>
              </ul>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 xl:col-span-4">
            <div className="text-center">
              <ul className="sm:inline-flex items-center space-x-5 ">
                <img
                  src="/images/Zeowaiting.svg"
                  className="w-[91px]  h-[76px] mx-auto sm:mx-06px]"
                  alt=""
                />
                <h1 className="f-f-r text-2xl lg:text-5xl text-white  text-center mt-2 sm:mt-0  sm:text-start">
                  {t.zeroWaitingPeriod}{" "}
                </h1>
              </ul>
            </div>
          </div>
          <div className="col-span-12 xl:col-span-4">
            <div className="text-center">
              <ul className="sm:inline-flex items-center space-x-5 ">
                <img
                  src="/images/Certifieddoctor.svg"
                  className="w-[91px]  mx-auto sm:mx-0 h-[76px]"
                  alt=""
                />
                <h1 className="f-f-r text-2xl lg:text-5xl text-white  text-center mt-2 sm:mt-0 sm:text-start">
                  {t.certifiedExperts}
                </h1>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
