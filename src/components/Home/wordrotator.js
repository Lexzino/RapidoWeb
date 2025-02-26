import React, { useState, useEffect } from "react";

const WordRotator = () => {
  const words = ["ANYTIME", "ANYWHERE"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  // Rotate words every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true); // Start fade-out
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsFading(false); // Fade-in the new word
      }, 500); // Wait for fade-out to complete (half of the animation duration)
    }, 2000); // Total interval time (animation + display time)

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <span
        className={`text-4xl font-bold transition-opacity duration-1000 ${
          isFading ? "opacity-0" : "opacity-100"
        }`}
      >
        {words[currentWordIndex]}
      </span>
    </div>
  );
};

export default WordRotator;