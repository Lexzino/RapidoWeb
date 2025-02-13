import React, { useState } from "react";
import { Search } from 'lucide-react';

function PartnerTopbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="bg-[#EBF9D6] w-full shadow-sm p-2 md:p-4">
            <div className="flex flex-col w-full">
                <div className="flex justify-between gap-6">
                    <div className="relative flex-grow max-w-full md:max-w-lg w-full ">
                        <input
                            type="text"
                            placeholder="Search"
                            className="md:w-[300px] w-full h-8 pl-10 pr-4 py-3 text-sm md:text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <Search className="absolute left-3 top-[8px] text-gray-400" size={20} />
                    </div>
                    <div className="p-4">
                        <div className="container mx-auto flex ">
                            {/* Mobile Menu Button */}
                            <button
                                className="md:hidden text-white focus:outline-none"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                ☰
                            </button>
                            {/* Navigation Links */}
                            <ul
                                className={`md:flex space-x-6 absolute md:relative md:bg-transparent w-full transition-all duration-300 ease-in-out ${isOpen ? "top-16" : "hidden md:flex"
                                    }`}
                            >
                                <li>
                                    <a href="/" className="block text-sm text-green-800 px-4 py-2 md:py-0 hover:underline">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className="block text-sm text-green-800 px-4 py-2 md:py-0 hover:underline">
                                        Consultations
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className="block text-sm text-green-800 px-4 py-2 md:py-0 hover:underline">
                                        Profile
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="w-full flex flex-row justify-between items-center mb-2 mt-2">
                        <h2 className="mt-2">
                            <label className="font-bold text-base text-gray-800"> Welcome & Good Morning, </label>
                            <label className="font-bold text-base text-green-800">Dr Andre Villas - </label>
                            <label className="text-xs italic text-light-green-700">Cardiology Specialist</label>
                        </h2>
                    </div>
                    <div className="flex flex-row gap-3 items-center w-full">
                        <label className="text-xs italic text-light-green-700 whitespace-nowrap">
                            Here is your overview for today
                        </label>
                        <button className="px-3 py-2 border bg-green-dark text-white text-sm rounded-md">
                            View Full Schedule
                        </button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default PartnerTopbar;