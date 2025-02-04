import React, { useState } from "react";
import { FaHome, FaNewspaper, FaQuestionCircle, FaSignOutAlt, FaUser, FaUserGraduate } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate here
import logo from "../../assets/images/logo.svg";
import { menu, menu2 } from "./components/MenuItems";

export default function Sidebar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleLogout = () => {
    // Clear the session or any authentication-related data
    localStorage.removeItem("userToken"); // or sessionStorage, depending on how you store user data
    sessionStorage.removeItem("userToken");

    // Redirect to login page
    navigate("/"); // navigate to the login page
  };

  return (
    <div className="w-1/6 bg-[#1A4402] px-4 py-2.5 text-white flex flex-col fixed left-0 top-0 bottom-0">
        {/* Logo */}
        <div className="px-3 py-1 mt-4 flex flex-row justify-center items-center border border-white rounded-md">
          <img src={logo} alt="Logo" className="w-10 h-8" />
          <label className="text-lg ml-2">RapidoRelief</label>
        </div>

        <div className="border border-white rounded-md mt-10">
          {menu.map((item, index) => (
            <div key={index} className="w-auto px-3 py-2 flex flex-col justify-around items-start">
              <button className="flex flex-row justify-around items-center" onClick={() => toggleDropdown()}>
                {item.icon ? item.icon : ''}
                <label className="text-white text-base mx-2">{item.name}</label>
              </button>
              {(item.submenu?.length > 0 && isDropdownOpen) &&
                item?.submenu.map((item, index) => (
                  <button className="ml-6 flex flex-row justify-around items-center py-1" key={index}>
                    {item.icon ? item.icon : <img src={logo} alt="Rapido" className="w-4 h-4" />}
                    <label className="ml-2">{item.name}</label>
                  </button> 
                ))
              }
            </div>
          ))
          }
        </div>

        <div className="border border-white rounded-md mt-6 bg-white py-2 px-3">
          {menu2.map((item, index) => (
              <button key={index} className="bg-transparent flex flex-row justify-around items-center py-1">
                {item.icon ? item.icon : ''}
                <label className="text-[#1A4402] font-bold text-base mx-2">{item.name}</label>
              </button>
          ))
          }
        </div>
      
        {/* Logout */}
        <div className="mt-6">
          <div onClick={handleLogout} className="flex items-center px-4 py-2 bg-white text-[#1A4402] cursor-pointer rounded-md">
            <FaSignOutAlt className="mr-3" /> 
            <label className="text-base">Logout</label>
          </div>
        </div>
    </div>
  )
}