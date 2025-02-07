import React, { useState, useEffect } from "react";
import { useLanguage } from "../../LanguageContext"; // Import the context
import { translations } from "../../translations"; // Import translations

export default function Help() {
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
    <section className="w-11/12 mx-auto 2xl:max-w-[1161px] py-[50px]">
      <div className="flex flex-col justify-start items-center lg:flex-row gap-5 max-md:flex-col">
        <div className="flex flex-col w-full lg:w-[33%] max-md:ml-0">
        <img
  loading="lazy"
  src="/images/help.png"
  alt="Rapido Relief App illustration"
  className="object-contain mt-10 w-[100%] max-w-[200px] md:w-full md:max-w-none mx-auto"
/>
        </div>
        <div className="flex flex-col lg:w-[67%] max-md:w-full">
          <div className="flex flex-col items-start mt-2 w-full max-md:mt-10">
            <h1 className="text-[#1A4402] text-center md:text-start text-[30px] md:text-[30px] font-medium leading-[44px] md:leading-[64px] tracking-[-0.4px]">
             {t.    aboutRapidoReliefApp}
            </h1>

            <p className="text-[#647067] md:text-left text-[16px] md:text-[18px] font-normal leading-[24px] md:leading-[28.8px] tracking-[-0.18px] mt-4">
             {t.    rapidoReliefDescription}
              <br />
              <br />
             {t.peaceOfMind}
            </p>
            <div className="flex flex-wrap gap-6 mt-6 justify-center max-md:justify-center">
              {/* Card 1 */}
              <div className="flex flex-col border border-[#E1E1E1] p-[24px] rounded-[8px] rounded-b-[16px] w-[220px] h-[250px] shadow-[0px_3px_9.1px_-1px_#00000066] items-center justify-center max-md:w-[160px]">
                <img
                  src="/images/vectorimg1.svg"
                  alt="Vector Image 1"
                  className="w-[145px] h-[125px] object-contain"
                />
                <h2 className="text-black text-center text-[20px] font-semibold mt-4">
                  {t.allInOne}
                </h2>
                <p className="text-[#000000;] text-[15px] font-normal text-center mt-2">
                  {t.completeHealthcare}
                </p>
              </div>
              {/* Card 2 */}
              <div className="flex flex-col border border-[#E1E1E1] p-[24px] rounded-[8px] rounded-b-[16px] w-[220px] h-[250px] shadow-[0px_3px_9.1px_-1px_#00000066] items-center justify-center max-md:w-[160px]">
                <img
                  src="/images/vectorimg2.svg"
                  alt="Vector Image 2"
                  className="w-[145px] h-[125px] object-contain"
                />
                <h2 className="text-black text-center text-[20px] font-semibold mt-4">
                 {t.fastAndAccurate}
                </h2>
                <p className="text-[#000000;] text-[15px] font-normal text-center mt-2">
                 {t.testReports}
                </p>
              </div>
              {/* Card 3 */}
              <div className="flex flex-col border border-[#E1E1E1] p-[24px] rounded-[8px] rounded-b-[16px] w-[220px] h-[250px] shadow-[0px_3px_9.1px_-1px_#00000066] items-center justify-center max-md:w-[160px]">
                <img
                  src="/images/vectorimg3.svg"
                  alt="Vector Image 3"
                  className="w-[145px] h-[125px] object-contain"
                />
                <h2 className="text-black text-center text-[20px] font-semibold mt-4">
                  24/7
                </h2>
                <p className="text-[#000000;] text-[15px] font-normal text-center mt-2">
                  {t.customerSupport}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}