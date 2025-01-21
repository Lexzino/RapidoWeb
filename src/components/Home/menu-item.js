import React, { useState } from "react";
import { Link } from "react-router-dom";

const MenuItem = ({ link, label, subItems = [], ...props }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const handleMouseEnter = () => {
    if (subItems.length > 0) {
      const id = setTimeout(() => {
        setDropdownOpen(true);
      }, 200); // Delay of 200ms before opening
      setTimeoutId(id);
    }
  };

  const handleMouseLeave = () => {
    if (subItems.length > 0) {
      clearTimeout(timeoutId);
      const id = setTimeout(() => {
        setDropdownOpen(false);
      }, 200); // Delay of 200ms before closing
      setTimeoutId(id);
    }
  };

  const handleSubItemClick = (subItem) => {
    if (subItem.onClick) {
      subItem.onClick(); // Execute onClick if defined for the subItem
    }
  };

  return (
    <li
      className="text-left w-full lg:w-auto relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex justify-start items-center gap-1 cursor-pointer">
        {link ? (
          <Link
            to={link}
            className="block py-2 px-3 text-green-light f-f-r text-base rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 lg:p-0"
          >
            {label}
          </Link>
        ) : (
          <div
            {...props}
            className="block py-2 px-3 text-green-light f-f-r text-base rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 lg:p-0"
          >
            {label}
          </div>
        )}
        {subItems.length > 0 && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            className="cursor-pointer ml-1"
            fill="none"
          >
            <path
              d="M9.99975 10.9761L14.1246 6.85132L15.3031 8.02983L9.99975 13.3332L4.69645 8.02983L5.87497 6.85132L9.99975 10.9761Z"
              fill="#EAF9D6"
            />
          </svg>
        )}
      </div>

      {isDropdownOpen && subItems.length > 0 && (
        <div
          className="bg-[#EDF7F5] text-[#666] absolute top-7 left-0 min-w-[137px] pl-[12px] py-[12px] z-[99999] shadow-lg transition-all duration-300 ease-out opacity-100 transform translate-y-0"
          style={{
            transition: "all 0.3s ease-out",
            opacity: isDropdownOpen ? 1 : 0,
            transform: isDropdownOpen ? "translateY(0)" : "translateY(-10px)",
          }}
        >
          <div
            style={{ fontFamily: "Nunito" }}
            className="w-full flex flex-col items-start"
          >
            {subItems.map((subItem, index) => (
              <div key={index} className="mb-3">
                {subItem.link ? (
                  <Link
                    to={subItem.link}
                    className="font-normal text-[16px] py-3 w-full cursor-pointer leading-[16px] hover:text-[#4CAF50] duration-300 transition-colors"
                  >
                    {subItem.label}
                  </Link>
                ) : (
                  <div
                    onClick={() => handleSubItemClick(subItem)}
                    className="font-normal text-[16px] py-3 w-full cursor-pointer leading-[16px] hover:text-[#4CAF50] duration-300 transition-colors"
                  >
                    {subItem.label}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </li>
  );
};

export default MenuItem;