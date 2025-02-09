import React, { useState }  from 'react';
import { FaSignOutAlt} from "react-icons/fa";
import {
    Home,
    Users,
    Pill,
    Stethoscope,
    FileText,
    Calendar,
    MessageCircle,
    DollarSign,
    Settings,
    LogOut
} from 'lucide-react';
import { useNavigate } from "react-router-dom";
import { menu, menu2 } from "../components/MenuItems";


function Sidebar() {
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
  }
    return (
        <div className="fixed inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 bg-green-900 w-64 md:w-64 lg:w-72 min-h-screen p-4 text-white z-50">
            <div className="px-3 py-1 mt-4 flex flex-row justify-center items-center mb-8 border border-white rounded-md">
                 <img src="/images/logo.svg" alt="Logo" className="w-10 h-8" />
          <label className="text-lg ml-2">RapidoRelief</label>
            </div>

            <nav className="md:hidden">
                <ul className="space-y-2">
                    {[
                        { icon: Home, text: 'Dashboard', active: true },
                        { icon: Users, text: 'Doctors' },
                        { icon: Pill, text: "Pharmacy's" },
                        { icon: Stethoscope, text: 'Patients' },
                        { icon: FileText, text: 'Reports' },
                        { icon: Calendar, text: 'Calendar' },
                        { icon: MessageCircle, text: 'Message' },
                        { icon: DollarSign, text: 'Payments' },
                    ].map((item, index) => (
                        <li
                            key={index}
                            className={`flex items-center p-2 rounded ${item.active ? 'bg-green-700' : 'hover:bg-green-700'}`}
                        >
                            <item.icon className="mr-3" size={20} />
                            <span>{item.text}</span>
                        </li>
                    ))}
                </ul>
            </nav>
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
                    {item.icon ? item.icon : <img src="/images/logo.svg" alt="Rapido" className="w-4 h-4" />}
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
            <div className="md:hidden absolute top-4 right-4">
                <button className="text-white">Close</button>
            </div>
        </div>
    );
}

export default Sidebar;