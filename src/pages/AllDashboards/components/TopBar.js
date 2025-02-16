import React from 'react';
import { Search, Bell, MoreVertical, Info } from 'lucide-react';
import { FaEnvelope } from "react-icons/fa";

function TopBar() {
  return (
    <div className="bg-[#EBF9D6] w-full shadow-sm p-2 md:p-4 flex flex-col md:flex-row justify-between items-start md:items-center space-y-2 md:space-y-3">
      <div className="">
        {/* Header Section */}
        <div className="w-full flex flex-row justify-between items-center mb-2 mt-4">
          <h2 className="text-green-dark mt-2">
            <label className="font-bold text-gray-800"> Welcome, </label>
            <label className="font-bold text-green-dark">Super Admin - </label>
            <label className="font-bold text-light-green-700">Michael Tosin Adesanwo</label>
          </h2>
        </div>
      </div>
      <div className="flex items-center space-x-2 space-y-2  md:space-x-4 md:space-y-2 w-full h-12 md:w-auto justify-between md:justify-end border rounded-full px-2 py-3 bg-light-green-300">
        <div className="relative flex-grow max-w-full md:max-w-lg mr-0 md:mr-4 w-full ">
          <input
            type="text"
            placeholder="Search"
            className="md:w-[300px] w-full h-8 pl-10 pr-4 py-2 text-sm md:text-base border rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <Search className="absolute left-3 top-[8px] text-gray-400" size={20} />
        </div>
        <div className="flex items-center gap-3">
          {/* Notification Bell */}
          <button className="relative flex items-center justify-center w-8 h-8 rounded-full ">
            <Bell size={20} className="text-white" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1.5 flex items-center justify-center">
              3
            </span>
          </button>

          {/* Email Icon */}
          <button className="relative flex items-center justify-center w-8 h-8 rounded-full ">
            <FaEnvelope size={20} className="text-white" />
            <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full px-1.5 flex items-center justify-center">
              2
            </span>
          </button>

          {/* Info Icon */}
          <button className="flex items-center justify-center w-8 h-8 rounded-full ">
            <Info size={20} className="text-white" />
          </button>

          {/* Profile Image */}
          <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center">
            <img
              src="/images/mike.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* More Options */}
          <MoreVertical size={20} className="text-white" />
        </div>
      </div>
    </div>
  )
}

export default TopBar