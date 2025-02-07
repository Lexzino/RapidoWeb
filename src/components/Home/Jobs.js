import React, { useState, useEffect } from "react";
import { useLanguage } from "../../LanguageContext"; // Import the context
import { translations } from "../../translations"; // Import translations
import Helathmedical from "../../assets/images/Helathmedical.svg";
import Handmedical from "../../assets/images/Handmedical.svg";
import Healthcaremedical from "../../assets/images/Healthcaremedical.svg";
import Hearmedical from "../../assets/images/Hearmedical.svg";
import Storagemedical from "../../assets/images/Storagemedical.svg";
import Plusmedical from "../../assets/images/Plusmedical.svg";

export default function Jobs() {
  const images = [
    Helathmedical,
    Hearmedical,
    Plusmedical,
    Healthcaremedical,
    Handmedical,
    Storagemedical,
  ];
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
    <div className="bg-white py-8">
      <div className="w-11/12 mx-auto 2xl:max-w-[1161px]">
        <h1 className="text-[#1A4402] text-center f-f-r mb-5 text-[32px] font-medium leading-normal">
          {t.featuredCustomer}
        </h1>

        <div className="relative overflow-hidden">
          <div className="flex animate-marquee space-x-4 md:space-x-8">
            {/* Repeating the images to create continuous sliding */}
            {[...images, ...images].map((image, index) => (
              <div key={index} className="flex justify-center">
                <img
                  src={image}
                  className="max-w-[120px] sm:max-w-[150px] md:max-w-[180px] lg:max-w-[200px] h-auto object-contain mx-auto"
                  alt={`Partner ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
}