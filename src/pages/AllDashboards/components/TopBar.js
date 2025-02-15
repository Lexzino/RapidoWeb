import React from 'react';
import { useState, useEffect } from 'react';
import { Search, Bell, MoreVertical } from 'lucide-react';
import { FaEnvelope, FaInfo } from "react-icons/fa";

function TopBar() {
  const [firstName, setUserName] = useState('');
  useEffect(() => {
    const storedUserName = localStorage.getItem('firstName');
    if (storedUserName) {
      setUserName(storedUserName);
    }
    }, []);
  return (
    <div className="bg-[#EBF9D6] w-full shadow-sm p-2 md:p-4 flex flex-col md:flex-row justify-between items-start md:items-center space-y-2 md:space-y-3">
      <div className="">
        {/* Header Section */}
        <div className="w-full flex flex-row justify-between items-center mb-2 mt-4">
          <h2 className="text-green-dark mt-2">
            <label className="font-bold text-gray-800"> Welcome, </label>
            <label className="font-bold text-green-dark">Super Admin - </label>
            <label className="font-bold text-light-green-700">{firstName}!</label>
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
        <div className="flex flex-row justify-between gap-3">
          <button className="relative">
            <Bell size={20} className="md:w-6 md:h-6 text-white" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full px-1.5 text-xs">3</span>
          </button>
          <button className="relative">
            <FaEnvelope size={20} className="md:w-6 md:h-6 text-white" />
            <span className="absolute -top-1 -right-1 bg-orange-500 text-white rounded-full px-1.5 text-xs">2</span>
          </button>
          <button className="relative">
            <FaInfo size={10} className="md:w-4 md:h-3 text-white" />
          </button>
          <div className="flex items-center">
            <img
              src="/images/mike.png"
              alt="Profile"
              className="w-10 h-5 md:w-10 md:h-5 border rounded-full"
            />
            <span className="text-sm md:text-base"></span>
          </div>
          <MoreVertical size={22} className="" />
        </div>
      </div>
    </div>
  )
}

export default TopBar