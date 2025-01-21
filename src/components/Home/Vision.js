import React, { useState, useEffect } from "react";
import { useLanguage } from "../../LanguageContext"; // Import the context
import { translations } from "../../translations"; // Import translations

export default function Vision() {
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
    <div className="w-11/12 mx-auto 2xl:max-w-[1161px] pt-[70px] pb-[86px]">
      <div className="grid lg:grid-cols-3 gap-[24px]">
        <Card
          name={t.telemedicineConsultations}
          description={t.telemedicineDescription}
        />
        <Card
          name={t.virtualTherapySessions}
          description={t.virtualTherapyDescription}
        >
          <button
            style={{ fontVariant: "small-caps" }}
            className="text-[#FFF] rounded-[13px] border-[1px] border-[#58FD0A] f-f-m text-[20px] sm:text-[20px] font-medium leading-normal px-3 bg-[#1A4402] mt-4"
          >
            Get Started
          </button>
        </Card>
        <Card
          name={t.wearableHealthcare}
          description={t.wearableHealthcareDescription}
        />
      </div>
    </div>
  );
}

const Card = ({ name, description, children }) => {
  return (
    <div className="w-full flex justify-center">
      <div className="p-[24px] pb-10 bg-[#EAF9D6]">
        <div className="text-[#000] text-[25px] font-semibold f-f-r leading-[30px]">
          {name}
        </div>
        <p className="text-[#647067] font-normal leading-[30px] f-f-r text-[18px] mt-3">
          {description}
        </p>
        {children && <div className="mt-4">{children}</div>}
      </div>
    </div>
  );
};