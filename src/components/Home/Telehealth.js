import React, { useState, useEffect } from "react";
import { useLanguage } from "../../LanguageContext"; // Import the context
import { translations } from "../../translations"; // Import translations

export default function Telehealth() {
  const { selectedLanguage, changeLanguage } = useLanguage(); // Use context for language
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
    <div className="w-full mx-auto px-4 md:px-6 2xl:max-w-[1161px] py-[50px] md:py-[75px]">
      {/* Header Section */}
      <h1 className="text-[#1A4402] f-f-b text-[24px] sm:text-[28px] md:text-[32px] font-medium leading-[34px] md:leading-[46px] tracking-[-1.2px] text-center mb-6 sm:mb-8">
        {t.getDoctorWhoGetsYou}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left pl-[10px]">
          <p className="text-[#2F3C33] f-f-b text-[20px] sm:text-[24px] md:text-[30px] font-extrabold leading-[30px] sm:leading-[40px] md:leading-[46px] tracking-[-1px]">
            {t.telehealthAIChatbot}
          </p>
          <p className="f-f-r mt-3 sm:mt-4 md:mt-6 text-[#647067] text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[160%] tracking-[-0.18px]">
            {t.rapidosDescription}
          </p>
          <p className="f-f-r mt-3 sm:mt-4 text-[#647067] text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[160%] tracking-[-0.18px]">
            {t.joinUsJourney}
          </p>
          <h5 className="text-[#647067] mt-4 sm:mt-5 f-f-r text-[10px] sm:text-[12px] md:text-[14px] font-black tracking-[1.2px] uppercase">
            {t.rapidoChatbotAppointments}
          </h5>
          <div className="w-full sm:w-[320px] md:w-[388px] bg-[#F5F5F5] rounded-[3px] mt-3 sm:mt-4">
            <div className="w-[80%] sm:w-[90%] md:w-[339px] h-[8px] bg-[#84CC16] rounded-[3px] mt-2"></div>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center w-full mt-8 md:mt-0">
          <img
            src="/images/telehealth1.png"
            className="max-w-[180px] sm:max-w-[220px] md:max-w-[262px] h-[300px] sm:h-[380px] md:h-[450px] object-cover"
            alt={t.telehealthChatbot}
          />
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center xl:items-start text-center md:text-left mt-6 md:mt-0">
          <h1 className="text-[#2F3C33] max-w-[320px] sm:max-w-[388px] f-f-b text-[20px] sm:text-[24px] md:text-[30px] font-extrabold leading-[28px] sm:leading-[38px] md:leading-[46px] tracking-[-1px]">
            {t.seeSpecialistsWithInsurance}
          </h1>
          <h2 className="text-[#2F3C33] mt-5 sm:mt-6 max-w-[240px] f-f-b text-[18px] sm:text-[20px] md:text-[25px] font-bold leading-[28px] sm:leading-[35px] md:leading-[40px] tracking-[-1px]">
            {t.mentalHealthSupport}
          </h2>
          <p className="f-f-r mt-2 sm:mt-3 md:mt-1 max-w-[380px] sm:max-w-[431px] text-[#647067] text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[160%] tracking-[-0.18px]">
            {t.mentalHealthDescription}
          </p>
          <h2 className="text-[#2F3C33] mt-6 sm:mt-8 max-w-[209px] f-f-b text-[18px] sm:text-[20px] md:text-[24px] font-bold leading-[28px] sm:leading-[35px] md:leading-[40px] tracking-[-1px]">
            {t.smartAlertSystem}
          </h2>
          <p className="f-f-r mt-2 sm:mt-3 md:mt-1 max-w-[380px] sm:max-w-[431px] text-[#647067] text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[160%] tracking-[-0.18px]">
            {t.sendEmergencyAlert}
          </p>
        </div>
      </div>
    </div>
  );
}