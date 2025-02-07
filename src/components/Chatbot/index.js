import React, { useState, useEffect } from "react";
import { useLanguage } from "../../LanguageContext"; // Import the context
import { chatbotTranslations } from "./ChatbotTranslation"; // Import translations
import "./style.css";

export default function RapidoReliefChatbot() {
  const { selectedLanguage } = useLanguage(); // Use context for language
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [currentStep, setCurrentStep] = useState("welcome");

  const t = chatbotTranslations[selectedLanguage]; // Get translations for the current language

  const chatbotFlow = {
    welcome: {
      message: t.welcomeMessage,
      options: [
        { label: t.welcomeOption1, value: "mental_health" },
        { label: t.welcomeOption2, value: "healthcare_provider" },
        { label: t.welcomeOption3, value: "emergency_support" },
        { label: t.welcomeOption4, value: "healthcare_services" },
      ],
    },
    emergency_support: {
      message: t.emergencySupportMessage,
      options: [
        { label: t.emergencyOption1, value: "ambulance" },
        { label: t.emergencyOption2, value: "doctor" },
        { label: t.emergencyOption3, value: "family" },
        { label: t.emergencyOption4, value: "device_alert" },
      ],
    },
    ambulance: {
      message: t.ambulanceMessage,
      options: [
        { label: t.ambulanceOption1, value: "ambulance_confirmed" },
        { label: t.ambulanceOption2, value: "welcome" },
      ],
    },
    ambulance_confirmed: {
      message: t.ambulanceConfirmedMessage,
      options: [],
    },
    mental_health: {
      message: t.mentalHealthMessage,
      options: [
        { label: t.mentalHealthOption1, value: "mental_health_articles" },
        { label: t.mentalHealthOption2, value: "coping_strategies" },
        { label: t.mentalHealthOption3, value: "welcome" },
      ],
    },
    mental_health_articles: {
      message: t.mentalHealthArticlesMessage,
      options: [{ label: t.mentalHealthArticlesOption1, value: "welcome" }],
    },
    coping_strategies: {
      message: t.copingStrategiesMessage,
      options: [{ label: t.copingStrategiesOption1, value: "welcome" }],
    },
  };

  useEffect(() => {
    if (isOpen) {
      addBotMessage(chatbotFlow.welcome.message);
    }
  }, [isOpen, selectedLanguage]); // Ensure language updates trigger re-render

  const handleOptionClick = (value) => {
    const nextStep = chatbotFlow[value];
    const userOption = chatbotFlow[currentStep]?.options.find(
      (option) => option.value === value
    );
    addUserMessage(userOption?.label);
    addBotMessage(nextStep.message);
    setCurrentStep(value);
  };

  const addUserMessage = (message) => {
    setMessages((prev) => [...prev, { sender: "user", text: message }]);
  };

  const addBotMessage = (message) => {
    setMessages((prev) => [...prev, { sender: "bot", text: message }]);
  };

  const toggleChat = () => {
    const button = document.querySelector('.chatbot-icon');
    button.classList.add('squeezing'); // Add the animation class
    setTimeout(() => button.classList.remove('squeezing'), 300); // Remove the class after animation
  
    if (isOpen) {
      // Reset messages and start new conversation when reopened
      setMessages([]);
      setCurrentStep("welcome");
    }
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <button className="chatbot-icon" onClick={toggleChat}>
        <img src="/icons/chatbot-icon.svg" alt="Chatbot Icon" />
      </button>
      {isOpen && (
        <div className="chatbot-overlay">
          <div className="chatbot-container">
            <div className="chatbot-left">
              <div className="phone-image-wrapper">
                <img
                  src="/images/chatbot-img.png"
                  alt="Phone"
                  className="chatbot-phone-image"
                />
              </div>
            </div>
            <div className="chatbot-right">
              <button className="close-chatbot" onClick={toggleChat}>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.6 22.5L15 17.1L20.4 22.5L22.5 20.4L17.1 15L22.5 9.6L20.4 7.5L15 12.9L9.6 7.5L7.5 9.6L12.9 15L7.5 20.4L9.6 22.5ZM15 30C12.925 30 10.975 29.606 9.15 28.818C7.325 28.031 5.7375 26.9625 4.3875 25.6125C3.0375 24.2625 1.969 22.675 1.182 20.85C0.394 19.025 0 17.075 0 15C0 12.925 0.394 10.975 1.182 9.15C1.969 7.325 3.0375 5.7375 4.3875 4.3875C5.7375 3.0375 7.325 1.9685 9.15 1.1805C10.975 0.3935 12.925 0 15 0C17.075 0 19.025 0.3935 20.85 1.1805C22.675 1.9685 24.2625 3.0375 25.6125 4.3875C26.9625 5.7375 28.031 7.325 28.818 9.15C29.606 10.975 30 12.925 30 15C30 17.075 29.606 19.025 28.818 20.85C28.031 22.675 26.9625 24.2625 25.6125 25.6125C24.2625 26.9625 22.675 28.031 20.85 28.818C19.025 29.606 17.075 30 15 30ZM15 27C18.35 27 21.1875 25.8375 23.5125 23.5125C25.8375 21.1875 27 18.35 27 15C27 11.65 25.8375 8.8125 23.5125 6.4875C21.1875 4.1625 18.35 3 15 3C11.65 3 8.8125 4.1625 6.4875 6.4875C4.1625 8.8125 3 11.65 3 15C3 18.35 4.1625 21.1875 6.4875 23.5125C8.8125 25.8375 11.65 27 15 27Z"
                    fill="#1A4402"
                  />
                </svg>
              </button>
              <div className="chatbot-messages">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`chatbot-message ${msg.sender === "bot" ? "bot" : "user"}`}
                  >
                    {msg.text}
                  </div>
                ))}
              </div>
              <div className="chatbot-options-container">
                <div className="chatbot-options">
                  {chatbotFlow[currentStep]?.options?.map((option) => (
                    <button
                      key={option.value}
                      className="chatbot-option"
                      onClick={() => handleOptionClick(option.value)}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}