import React, { useState, useEffect } from "react";
import { useLanguage } from "../../LanguageContext"; // Import the context
import { translations } from "../../translations"; // Import translations

export default function FAQSection() {
  // State for active FAQ toggle
  const [activeFAQ, setActiveFAQ] = useState(null);

  // Language context
  const { selectedLanguage } = useLanguage();
  const [langUpdated, setLangUpdated] = useState(false); // To track language updates

  const t = translations[selectedLanguage]; // Get translations for the selected language

  // Force re-render when the language changes
  useEffect(() => {
    setLangUpdated(false); // Temporarily unset to show loading
    const timeout = setTimeout(() => {
      setLangUpdated(true);
    }, 100);
    return () => clearTimeout(timeout); // Cleanup timeout
  }, [selectedLanguage]);

  // Toggle the FAQ visibility
  const toggleFAQ = (index) => {
    setActiveFAQ((prev) => (prev === index ? null : index)); // Toggle open/close
  };

  if (!langUpdated) {
    return <div>Loading...</div>; // Placeholder during language update
  }

  return (
    <div className="bg-[#F6FCF3]">
      <div className="w-11/12 mx-auto 2xl:max-w-[1161px] py-20">
        <h1 className="text-black f-f-m text-[40px] text-center font-semibold leading-[64px] tracking-[-0.4px]">
          {t.faqTitle}
        </h1>
        <div className="flex flex-col gap-6 md:gap-0 md:flex-row justify-between items-start">
          {/* FAQ Column 1 */}
          <div className="max-w-[399px] space-y-7">
            <div>
              <h1
                className="text-black f-f-m text-[30px] font-semibold leading-[48px] tracking-[-0.3px] cursor-pointer"
                onClick={() => toggleFAQ(0)}
              >
                {t.swiftAccess}
              </h1>
              <div
                style={{
                  maxHeight: activeFAQ === 0 ? "500px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.3s ease-in-out",
                }}
              >
                <p className="text-[#647067] f-f-r text-[18px] font-normal leading-[28.8px] tracking-[-0.18px]">
                  {t.swiftAccessDescription}
                </p>
              </div>
            </div>
            <div>
              <h1
                className="text-black f-f-m text-[30px] font-semibold leading-[48px] tracking-[-0.3px] cursor-pointer"
                onClick={() => toggleFAQ(1)}
              >
                {t.quickAssistance}
              </h1>
              <div
                style={{
                  maxHeight: activeFAQ === 1 ? "500px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.3s ease-in-out",
                }}
              >
                <p className="text-[#647067] f-f-r text-[18px] font-normal leading-[28.8px] tracking-[-0.18px]">
                  {t.quickAssistanceDescription}
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Column 2 */}
          <div className="max-w-[399px] space-y-7">
            <div>
              <h1
                className="text-black f-f-m text-[30px] font-semibold leading-[48px] tracking-[-0.3px] cursor-pointer"
                onClick={() => toggleFAQ(2)}
              >
                {t.rapidConnections}
              </h1>
              <div
                style={{
                  maxHeight: activeFAQ === 2 ? "500px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.3s ease-in-out",
                }}
              >
                <p className="text-[#647067] f-f-r text-[18px] font-normal leading-[28.8px] tracking-[-0.18px]">
                  {t.rapidConnectionsDescription}
                </p>
              </div>
            </div>
            <div>
              <h1
                className="text-black f-f-m text-[30px] font-semibold leading-[48px] tracking-[-0.3px] cursor-pointer"
                onClick={() => toggleFAQ(3)}
              >
                {t.immediateHelp}
              </h1>
              <div
                style={{
                  maxHeight: activeFAQ === 3 ? "500px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.3s ease-in-out",
                }}
              >
                <p className="text-[#647067] f-f-r text-[18px] font-normal leading-[28.8px] tracking-[-0.18px]">
                  {t.immediateHelpDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}