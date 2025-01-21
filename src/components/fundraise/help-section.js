import React, { useState, useEffect } from "react";
import { useLanguage } from "../../LanguageContext"; // Import the context
import { translations } from "../../translations"; // Import translations

export default function HelpSection() {
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
    <div className="w-11/12 mx-auto 2xl:max-w-[1161px] py-[104px]">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-[35px]">
        {/* Image Section */}
        <div className="w-full space-y-[18px]">
          <div className="w-full bg-[#749D1C] h-[225px] rounded-[25px]"></div>
          <div className="w-full gap-[18px] flex flex-col lg:flex-row justify-between items-center">
            <div className="w-full lg:w-[40%] bg-[#FCB83F] h-[225px] rounded-[25px]"></div>
            <div className="w-full lg:w-[60%] bg-[#75BD4A] h-[225px] rounded-[25px]"></div>
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full text-center lg:text-left">
          <h1 className="text-[#000] f-f-b text-[30px] sm:text-[35px] md:text-[45px] font-bold leading-[50px] max-w-[476px] mx-auto lg:mx-0">
            {t.helpSectionTitle}
          </h1>
          <p className="text-[rgba(38,38,38,0.76)] f-f-r text-[16px] sm:text-[18px] md:text-[25px] text-justify font-normal leading-[35px] mt-4">
            {t.helpSectionDescription}
          </p>
          <div className="mt-6 flex flex-col md:flex-row justify-center lg:justify-start items-center gap-4">
            <button
              style={{ fontVariant: "small-caps" }}
              className="text-[#FFF] rounded-[13px] border-[1px] border-[#58FD0A] f-f-m text-[22px] sm:text-[24px] font-medium leading-normal px-3 bg-[#1A4402]"
            >
              {t.donateButtonText}
            </button>
            <button
              style={{ fontVariant: "small-caps" }}
              className="text-[#FFF] rounded-[13px] border-[1px] border-[#58FD0A] f-f-m text-[22px] sm:text-[24px] font-medium leading-normal px-3 bg-[#1A4402]"
            >
              {t.shopButtonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};