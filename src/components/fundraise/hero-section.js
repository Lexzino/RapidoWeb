import React, { useState, useEffect } from "react";
import { useLanguage } from "../../LanguageContext"; // Import the context
import { translations } from "../../translations"; // Import translations
import { Link } from "react-router-dom";
import Heroimg1 from "../../public/images/fandr.png";
import Heroimg2 from "../../public/images/fandr.png";
import Heroimg3 from "../../public/images/fandr.png";

export default function HeroSection() {
  const { selectedLanguage } = useLanguage(); // Use context for language
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [Heroimg1, Heroimg2, Heroimg3];

  // Auto-sliding logic for carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const t = translations[selectedLanguage]; // Get the translation for the selected language

  return (
    <div className="w-11/12 mx-auto 2xl:max-w-[1161px]">
      <div className="relative pt-[108px] pb-[90px]">
        <div>
          <h1 className="text-[#58FD0A] font-[Roboto] max-w-[595px] text-[45px] xl:text-[70px] font-bold leading-[45px] xl:leading-[75px] capitalize">
            {t.heroSectionTitle}
          </h1>
          <p className="mt-7 text-[#FEFEFE] font-[Roboto] text-[20px] xl:text-[30px] max-w-[560px] font-normal leading-[120%]">
            {t.heroSectionDescription}
          </p>
          <div className="mt-7 flex flex-col md:flex-row justify-start items-center gap-4">
            <button className="text-[#58FD0A] font-[Roboto] rounded-[13px] border-[1px] border-[#58FD0A] uppercase text-[26px] font-medium leading-normal px-3">
              {t.heroSectionDonateButton}
            </button>
            <button className="text-[#58FD0A] font-[Roboto] rounded-[13px] border-[1px] border-[#58FD0A] uppercase text-[26px] font-medium leading-normal px-3">
              {t.heroSectionSupportButton}
            </button>
          </div>

          <h1 style={{ fontWeight: 500 }} className="font-[Roboto] text-[25px] leading-normal text-white mt-3 xl:mt-[24px]">
            {t.heroSectionSignupText}{" "}
            <Link to="#" className="text-[#58FD0A] pl-4">
              {t.heroSectionSignupLinkText}
            </Link>
          </h1>
        </div>

        {/* Carousel Section */}
        <div className="w-full mt-10 lg:mt-0 lg:w-[40%] xl:w-[51%] h-auto lg:absolute lg:-right-0 lg:top-20">
          <div className="carousel-container relative overflow-hidden">
            {/* Carousel Slides */}
            <div
              className="carousel-slides flex transition-all duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {images.map((img, index) => (
                <div key={index} className="carousel-slide w-full flex-shrink-0">
                  <img src={img} alt={`Slide ${index}`} className="w-full h-auto" />
                </div>
              ))}
            </div>

            {/* Dot Indicators */}
            <div className="dot-indicators flex justify-center absolute bottom-[-10px] left-0 right-0 py-4">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`dot mx-2 cursor-pointer transition-all duration-300 ease-in-out ${
                    index === currentIndex
                      ? "w-[20px] h-[8px] bg-[#28A745] rounded-[4px]"
                      : "w-[8px] h-[8px] bg-[#FFFFFF36] rounded-full"
                  }`}
                  onClick={() => goToSlide(index)}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}