import React, { useState, useEffect } from "react";
import { useLanguage } from "../../LanguageContext"; // Import the context
import { translations } from "../../translations"; // Import translations

const CustomIcon = () => (
  <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5.41699 59.5833C5.41699 47.6171 15.1175 37.9166 27.0837 37.9166C39.0499 37.9166 48.7503 47.6171 48.7503 59.5833H5.41699ZM27.0837 35.2083C18.1055 35.2083 10.8337 27.9364 10.8337 18.9583C10.8337 9.98019 18.1055 2.70831 27.0837 2.70831C36.0618 2.70831 43.3337 9.98019 43.3337 18.9583C43.3337 27.9364 36.0618 35.2083 27.0837 35.2083ZM54.167 46.0416H65.0003V51.4583H54.167V46.0416ZM46.042 32.5H65.0003V37.9166H46.042V32.5ZM51.4587 18.9583H65.0003V24.375H51.4587V18.9583Z"
      fill="#1A4402"
    />
  </svg>
);

const SurveyFillIcon = () => (
  <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M16.25 10.8334V21.6667H48.75V10.8334H54.1845C55.6703 10.8334 56.875 12.0384 56.875 13.5238V56.8929C56.875 58.3787 55.6701 59.5834 54.1845 59.5834H10.8155C9.32956 59.5834 8.125 58.3784 8.125 56.8929V13.5238C8.125 12.0379 9.33007 10.8334 10.8155 10.8334H16.25ZM24.375 46.0417H18.9583V51.4584H24.375V46.0417ZM24.375 37.9167H18.9583V43.3334H24.375V37.9167ZM24.375 29.7917H18.9583V35.2084H24.375V29.7917ZM43.3333 5.41669V16.25H21.6667V5.41669H43.3333Z" 
      fill="#1A4402"
    />
  </svg>
);

const HeartPulseFillIcon = () => (
  <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M44.6869 8.125C52.9137 8.125 59.5827 14.8958 59.5827 24.375C59.5827 43.3333 39.2702 54.1667 32.4994 58.2292C27.1434 55.0157 13.3142 47.5654 7.7682 35.2083H20.4911L23.0202 30.9934L31.1452 44.535L36.7411 35.2083H46.041V29.7917H33.6742L31.1452 34.0066L23.0202 20.4651L17.4243 29.7917L5.98542 29.7914C5.61692 28.0654 5.41602 26.2604 5.41602 24.375C5.41602 14.8958 12.1868 8.125 20.3118 8.125C25.3493 8.125 29.791 10.8333 32.4994 13.5417C35.2077 10.8333 39.6493 8.125 44.6869 8.125Z" 
      fill="#1A4402"
    />
  </svg>
);

export default function Work() {
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
    <div className="w-11/12 mx-auto 2xl:max-w-[1161px] pt-[40px] md:pt-[70px] pb-[50px] md:pb-[86px]">
      {/* Title and Button */}
      <div className="flex flex-col md:flex-row items-center justify-center mb-[24px] md:space-x-4 text-center">
        <h2 className="text-[28px] md:text-[25px] font-medium text-[#1A4402] leading-[40px] md:leading-[64px] tracking-wide uppercase">
          {t.howRapidoWorksTitle} {/* Translated Title */}
        </h2>
        <button className="w-full md:w-[297px] h-[auto] bg-[#1A4402] border-none rounded-[10px] flex items-center justify-center mt-4 md:mt-0">
          <span
            style={{
              fontStyle: "italic",
              fontWeight: 100,
              fontSize: "35px",
              lineHeight: "auto",
              color: "#58FD0A",
            }}
            className="text-center"
          >
            {t.simpleButtonText} {/* Translated Button Text */}
          </span>
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px] md:gap-[24px]">
        <Card
          name={t.card1Title} 
          description={[
            t.card1Description1, // Translated description
            t.card1Description2, // Translated description
          ]}
          leftIcon={<CustomIcon />}
        />
        <Card
          name={t.card2Title} 
          description={[
            t.card2Description1, // Translated description
            t.card2Description2, // Translated description
          ]}
          leftIcon={<SurveyFillIcon />}
        />
        <Card
          name={t.card3Title} 
          description={[
            t.card3Description1, // Translated description
            t.card3Description2, // Translated description
          ]}
          leftIcon={<HeartPulseFillIcon />}
        />
      </div>
    </div>
  );
}

const Card = ({ name, description, leftIcon }) => {
  return (
    <div className="w-full sm:w-[300px] md:w-[385px] mx-auto flex justify-center">
      <div className="p-5 bg-[#EAF9D6] relative rounded-b-[15px]">
        <div className="flex items-start space-x-4">
          {/* Left icon */}
          {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
          {/* Text */}
          <div className="text-[#000] text-[20px] md:text-[25px] font-semibold leading-[30px]">
            {name}
          </div>
        </div>
        <ul className="list-inside list-disc text-[#647067] font-normal leading-[24px] text-[16px] md:text-[18px] mt-3 ml-[60px] md:ml-[83px] pl-[20px]">
          {description.map((item, index) => (
            <li
              key={index}
              className="break-words text-ellipsis"
              style={{
                wordBreak: "break-word",
                textIndent: "-20px",
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};