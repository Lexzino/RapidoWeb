import React, { createContext, useState, useEffect, useContext } from "react";

// Create the Language Context
const LanguageContext = createContext();

// Custom hook to use the language context
export const useLanguage = () => {
  return useContext(LanguageContext);
};

// Language Provider component
export const LanguageProvider = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem("selectedLanguage") || "en");

  useEffect(() => {
    // Store the selected language in localStorage whenever it changes
    localStorage.setItem("selectedLanguage", selectedLanguage);
  }, [selectedLanguage]);

  const changeLanguage = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <LanguageContext.Provider value={{ selectedLanguage, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};