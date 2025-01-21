import React from 'react'
import Greentik from '../../assets/images/Greentick.svg'
import BellIcon from '../../assets/icons/BellIcon.svg'; // Example icon
import CrescentIcon from '../../assets/icons/CrescentIcon.svg'; // Example icon
import InfoIcon from '../../assets/icons/InfoIcon.svg'; // Example icon
import ProfileImage from '../../assets/images/mike.png'; // Example image

import Calendar from './Calendar'
export default function Header() {
  return (
<div className="flex-1 flex flex-col p-6 ml-[35px]">
        {/* Top Row (Welcome Text, Search Bar, and Icons) */}
        <div className="flex justify-between items-center mb-6">
          {/* Left Side (Welcome Text) */}
          <div className="flex-1 text-2xl font-bold">
            <span className="text-black">Welcome, Super Admin - </span>
            <span className="text-green-600">Michael Tosin Adesanwo</span>
          </div>

          {/* Right Side (Search Bar, Icons, Profile) */}
          <div className="flex items-center space-x-6 bg-[#C8EE98] p-2 rounded-full">
            {/* Search Bar */}
            <div className="flex items-center bg-[#EAF9D6] p-2 rounded-full w-[214px]">
              <input
                type="text"
                placeholder="Search..."
                className="w-full border-none focus:ring-0 bg-[#EAF9D6] text-gray-700"
              />
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-4">
              {/* Bell Icon */}
              <img className="w-6 h-6 cursor-pointer" src={BellIcon} alt="Notifications" />

              {/* Crescent Icon */}
              <img className="w-6 h-6 cursor-pointer" src={CrescentIcon} alt="Theme Toggle" />

              {/* Info Icon */}
              <img className="w-6 h-6 cursor-pointer" src={InfoIcon} alt="Info" />

              {/* Profile Image */}
              <img
                className="w-10 h-10 rounded-full cursor-pointer"
                src={ProfileImage}
                alt="Profile"
              />
            </div>
          </div>
          </div>
          
          </div>
  )
}
