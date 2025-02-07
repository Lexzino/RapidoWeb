import React, { useState, useEffect } from "react";
import { useLanguage } from "../../LanguageContext"; // Import the context
import { translations } from "../../translations"; // Import translations

export default function TrendingProduct() {
  const { selectedLanguage, changeLanguage } = useLanguage(); // Use context for language
  const [open, setOpen] = React.useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [langUpdated, setLangUpdated] = useState(false); // State to trigger re-render on language change

  const t = translations[selectedLanguage]; // Get the translation for the selected language
  const products = [
    {
      img: "/images/ayurvedic.svg",
      subtitle: t.productSubtitle1,
      description: t.productDescription1,
    },
    {
      img: "/images/categories.svg",
      subtitle: t.productSubtitle2,
      description: t.productDescription2,
    },
    {
      img: "/images/plant-powered.svg",
      subtitle: t.productSubtitle3,
      description: t.productDescription3,
    },
    {
      img: "/images/health-drink.svg",
      subtitle: t.productSubtitle4,
      description: t.productDescription4,
    },
    
  ];

  // Use effect to force re-render when language changes
  useEffect(() => {
    setLangUpdated(false); // Reset state before language change
    const timeout = setTimeout(() => {
      setLangUpdated(true); // Update state after a brief delay
    }, 100); // Delay to allow the context to update
    return () => clearTimeout(timeout); // Cleanup timeout
  }, [selectedLanguage]); // Dependency on language change

  return (
    <div className="w-11/12 mx-auto 2xl:max-w-[1325px] py-[104px]">
      <div className="flex justify-between items-center mt-28">
        <span className="hidden md:block w-[10%] lg:w-[20%] 2xl:w-[50%] h-[1px] bg-black"></span>
        <span
          style={{ fontFamily: "inter" }}
          className="text-[#000] xl:pl-0 text-7xl text-center w-full 2xl:w-[80%] md:text-[48px] font-medium leading-normal"
        >
          {t.trendingProductsTitle}
        </span>
        <span className="hidden md:block w-[10%] lg:w-[20%] 2xl:w-[50%] h-[1px] bg-black"></span>
      </div>
      <div className="flex flex-wrap justify-center gap-6 pt-20 pb-0">
        {products.map((product, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center overflow-hidden border rounded-[20px] w-[256px] h-[310px] border-[#C9C9C9] shadow-lg"
          >
            {/* Image Section */}
            <img
              src={product.img}
              alt={product.subtitle}
              className="w-full h-[200px] object-cover md:h-[240px]"
            />

            {/* Text Section */}
            <div
              className="flex flex-col items-start justify-center bg-white p-[10px] px-[15px] shadow-lg"
              style={{
                height: "71px",
                width: "100%",
              }}
            >
              <p className="text-[12px] pt-2 md:text-[14px] font-medium text-[#6F6F70]">
                {product.subtitle}
              </p>
              <h3 className="text-[16px] w-100% md:text-[18px] font-normal text-[#323234]">
                {product.description}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}