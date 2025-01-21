import React, { useState, useEffect } from "react";
import { useLanguage } from "../../LanguageContext"; // Import the context
import { translations } from "../../translations"; // Import translations

export default function ProductAds() {
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
      <div className="flex flex-col xl:flex-row justify-between items-center gap-4">
        {/* First Product Ad */}
        <div className="flex flex-col-reverse gap-2 md:flex-row justify-between items-center w-full bg-[#f5f5f5] py-6 px-8">
          <div className="text-center md:text-left">
            <p
              style={{ fontFamily: "Inter" }}
              className="text-[#D89F4B] text-[20px] md:text-[24px] font-medium leading-normal"
            >
              {t.productAdsFirstProductCategory}
            </p>
            <p
              style={{ fontFamily: "Inter" }}
              className="text-[#000] max-w-[190px] text-[24px] md:text-[28px] font-medium leading-[32px] underline"
            >
              {t.productAdsFirstProductName}
            </p>
            <button className="text-[#000] border-[1px] mt-3 border-[#000] py-1 px-4 f-f-m text-[20px] md:text-[24px] font-medium uppercase">
              <span>{t.buyNowButton}</span>
              <span className="text-[#D89F4B]"> {t.productAdsFirstProductPrice}</span>
            </button>
          </div>
          <img className="h-[230px] w-full md:w-auto" src="/productads2.png" />
        </div>

        {/* Second Product Ad */}
        <div className="flex flex-col-reverse gap-2 md:flex-row justify-between items-center w-full bg-[#f5f5f5] py-6 px-8">
          <div className="text-center md:text-left">
            <p
              style={{ fontFamily: "Inter" }}
              className="text-[#D89F4B] text-[20px] md:text-[24px] font-medium leading-normal"
            >
              {t.productAdsSecondProductCategory}
            </p>
            <p
              style={{ fontFamily: "Inter" }}
              className="text-[#000] max-w-[190px] text-[24px] md:text-[28px] font-medium leading-[32px] underline"
            >
              {t.productAdsSecondProductName}
            </p>
            <button className="text-[#000] border-[1px] mt-3 border-[#000] py-1 px-4 f-f-m text-[20px] md:text-[24px] font-medium uppercase">
              <span>{t.buyNowButton}</span>
              <span className="text-[#D89F4B]"> {t.productAdsSecondProductPrice}</span>
            </button>
          </div>
          <img className="h-[230px] w-full md:w-auto" src="/productads1.png" />
        </div>
      </div>
    </div>
  );
};