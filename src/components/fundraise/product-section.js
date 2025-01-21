import React, { useState, useEffect } from "react";
import { useLanguage } from "../../LanguageContext"; // Import the context
import { translations } from "../../translations"; // Import translations
import { Link } from "react-router-dom";

export default function ProductSection() {
  const { selectedLanguage, changeLanguage } = useLanguage(); // Use context for language
  const [open, setOpen] = React.useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [langUpdated, setLangUpdated] = useState(false); // State to trigger re-render on language change
  const productData = [
    {
      img: "/product1.jpeg",
      descriptionKey: "product1Description",
      buyLink: "#",
    },
    {
      img: "/product2.jpeg",
      descriptionKey: "product2Description",
      buyLink: "#",
    },
    {
      img: "/product3.jpeg",
      descriptionKey: "product3Description",
      buyLink: "#",
    },
  ];
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
    <div className="bg-[rgba(116,157,28,0.29)]">
      <div className="w-11/12 mx-auto 2xl:max-w-[1161px] py-[104px]">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-[#000] f-f-b text-[35px] lg:text-[45px] font-bold leading-normal">
            {t.productSectionTitle}
          </h1>
          <h4 className="text-[#000] f-f-r text-[24px] lg:text-[30px] font-normal leading-normal mt-2">
            {t.productSectionSubtitle}
          </h4>
          <p className="text-[rgba(38,38,38,0.76)] mt-4 max-w-[1086px] text-center f-f-r text-[18px] lg:text-[25px] font-normal lg:leading-[35px]">
            {t.productSectionDescription}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-12">
          {productData.map((product, index) => (
            <Card
              img={product.img}
              description={t[product.descriptionKey]}
              buyLink={product.buyLink}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Card({ img, description, buyLink }) {
  const { selectedLanguage } = useLanguage(); // Use context for language
  const t = translations[selectedLanguage]; // Get the translation for the selected language

  return (
    <div className="flex flex-col items-center justify-between w-full h-full overflow-hidden rounded-tl-[25px] rounded-tr-[25px] border border-[rgba(26,68,2,0.50)] bg-[#EAF9D6] p-4">
      <img
        src={img}
        alt={description}
        className="w-full h-[160px] object-cover rounded-tl-[25px] rounded-tr-[25px]"
      />
      <div className="flex flex-col items-center justify-between flex-grow w-full mt-6 px-4">
        <p className="text-[#000] text-center f-f-r text-[20px]">{description}</p>
        <Link
          to={buyLink}
          className="text-[#6F0] w-[130px] py-2 mt-6 rounded-lg bg-[#1A4402] f-f-m text-[20px] lg:text-[24px] font-medium leading-normal text-center hover:bg-[#58a00a] transition duration-300"
        >
          {t.buyNowButton}
        </Link>
      </div>
    </div>
  );
}