import React, { useState, useEffect } from 'react';

export default function CookiesBanner() {
  const [isBannerVisible, setIsBannerVisible] = useState(false);

  useEffect(() => {
    // Clear cookies consent for testing
    localStorage.removeItem('cookiesConsent');
    setIsBannerVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookiesConsent', 'true');
    setIsBannerVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookiesConsent', 'false');
    setIsBannerVisible(false);
  };

  return (
    <>
      {isBannerVisible && (
        <div
          className="fixed bottom-4 left-4 bg-[#EAF9D6] text-gray-800 shadow-lg rounded-lg p-4 w-80 lg:w-[600px] z-50"
          style={{ border: '1px solid #C7E5A2' }}
        >
          <div className="flex justify-between items-start">
            <h3 className="font-semibold text-[#1A4402] text-[20px] lg:text-[35px]">Cookie Settings</h3>
            <button
              onClick={() => setIsBannerVisible(false)}
              aria-label="Close banner"
              className="text-gray-500 hover:text-gray-700 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 30 30"
                fill="none"
                className="text-gray-500 hover:text-gray-700"
              >
                <path
                  d="M9.6 22.5L15 17.1L20.4 22.5L22.5 20.4L17.1 15L22.5 9.6L20.4 7.5L15 12.9L9.6 7.5L7.5 9.6L12.9 15L7.5 20.4L9.6 22.5ZM15 30C12.925 30 10.975 29.606 9.15 28.818C7.325 28.031 5.7375 26.9625 4.3875 25.6125C3.0375 24.2625 1.969 22.675 1.182 20.85C0.394 19.025 0 17.075 0 15C0 12.925 0.394 10.975 1.182 9.15C1.969 7.325 3.0375 5.7375 4.3875 4.3875C5.7375 3.0375 7.325 1.9685 9.15 1.1805C10.975 0.3935 12.925 0 15 0C17.075 0 19.025 0.3935 20.85 1.1805C22.675 1.9685 24.2625 3.0375 25.6125 4.3875C26.9625 5.7375 28.031 7.325 28.818 9.15C29.606 10.975 30 12.925 30 15C30 17.075 29.606 19.025 28.818 20.85C28.031 22.675 26.9625 24.2625 25.6125 25.6125C24.2625 26.9625 22.675 28.031 20.85 28.818C19.025 29.606 17.075 30 15 30ZM15 27C18.35 27 21.1875 25.8375 23.5125 23.5125C25.8375 21.1875 27 18.35 27 15C27 11.65 25.8375 8.8125 23.5125 6.4875C21.1875 4.1625 18.35 3 15 3C11.65 3 8.8125 4.1625 6.4875 6.4875C4.1625 8.8125 3 11.65 3 15C3 18.35 4.1625 21.1875 6.4875 23.5125C8.8125 25.8375 11.65 27 15 27Z"
                  fill="#1A4402"
                />
              </svg>
            </button>
          </div>
          <p className="lg:text-[20px] mt-2">
            Rapido Relief uses cookies to enhance your browsing experience, serve personalized ads or content, and
            analyze our traffic. By clicking <strong>“Accept all”</strong>, you consent to our use of cookies.
          </p>
          <div className="flex items-center mt-4 space-x-2">
            <button
              onClick={handleAccept}
              className="bg-[#1A4402] border-[1px] border-[#1A4402] text-[#EAF9D6] lg:text-[18px] px-4 py-2 rounded-lg transition"
            >
              Accept all
            </button>
            <button
              onClick={handleDecline}
              className="bg-[#EAF9D6] border-[1px] border-[#1A4402] text-[#1A4402] lg:text-[18px] px-4 py-2 rounded-lg transition"
            >
              Reject all
            </button>
          </div>
        </div>
      )}
    </>
  );
}