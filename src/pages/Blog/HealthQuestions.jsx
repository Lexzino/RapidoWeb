import React, { useState } from "react";
import { FaChevronDown, FaHourglass, FaSearch, FaStethoscope } from "react-icons/fa";

export default function HealthQuestions() {
    const [category, setCategory] = useState("All");
    const [dateRange, setDateRange] = useState("All");
    const [showDropdown, setShowDropdown] = useState(false);
    const [showDateDropdown, setShowDateDropdown] = useState(false);
    const [keyword, setKeyword] = useState("");

    const categories = ["All", "Nutrition", "Fitness", "Mental Health", "Diseases"];
    const dateRanges = ["All", "Feb-May", "Jun-Sept", "Oct-Dec"];

    const handleCategorySelect = (selectedCategory) => {
        setCategory(selectedCategory);
        setShowDropdown(false);
    };

    const handleDateRangeSelect = (selectedRange) => {
        setDateRange(selectedRange);
        setShowDateDropdown(false);
    };

    const handleSearch = () => {
        console.log("Search clicked");
        console.log({ category, dateRange, keyword });
    };

    const handleReset = () => {
        setCategory("All");
        setDateRange("All");
        setKeyword("");
    };

    return (
        <div className="w-[1155px] max-w-full bg-[#EAF9D6] rounded-2xl m-auto mb-8 relative lg:mt-[-70px] mt-[-30px] px-4">
            <div className="py-8">
                <h2 className="text-2xl mb-6 text-[#1A4402]">
                    Find Answers to Your Health Questions
                </h2>
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-8 space-y-4 sm:space-y-0">
                    {/* Category Dropdown */}
                    <div className="relative">
                        <p className="mb-2 text-[#1A440280]">Category</p>
                        <button
                            className="border-[1px] w-full sm:w-[165px] text-left bg-[#749D1C80] p-2 rounded-xl flex items-center justify-between"
                            onClick={() => setShowDropdown(!showDropdown)}
                        >
                            <div className="flex items-center space-x-2">
                                <FaStethoscope className="text-[#1A440280]" />
                                <span>{category}</span>
                            </div>
                            <FaChevronDown className="text-[#1A440280]" />
                        </button>
                        {showDropdown && (
                            <div className="absolute mt-2 w-full sm:w-[165px] bg-white shadow-lg rounded-md z-10">
                                {categories.map((cat, index) => (
                                    <div
                                        key={index}
                                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                                        onClick={() => handleCategorySelect(cat)}
                                    >
                                        {cat}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Date Dropdown */}
                    <div className="relative">
                        <p className="mb-2 text-[#1A440280]">Date</p>
                        <button
                            className="border-[1px] w-full sm:w-[165px] text-left bg-[#749D1C80] p-2 rounded-xl flex items-center justify-between"
                            onClick={() => setShowDateDropdown(!showDateDropdown)}
                        >
                            <div className="flex items-center space-x-2">
                                <FaHourglass className="text-[#1A440280]" />
                                <span>{dateRange}</span>
                            </div>
                            <FaChevronDown className="text-[#1A440280]" />
                        </button>
                        {showDateDropdown && (
                            <div className="absolute mt-2 w-full sm:w-[165px] bg-white shadow-lg rounded-md z-10">
                                {dateRanges.map((range, index) => (
                                    <div
                                        key={index}
                                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                                        onClick={() => handleDateRangeSelect(range)}
                                    >
                                        {range}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Keyword Search with Buttons */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-4 w-full">
                        <div className="relative flex-1">
                            <p className="mb-2 text-[#1A440280]">Keyword</p>
                            <input
                                type="text"
                                placeholder="Search..."
                                value={keyword}
                                onChange={(e) => setKeyword(e.target.value)}
                                className="border-[1px] pl-10 placeholder:text-[#1A440280] bg-[#749D1C80] p-2 rounded-xl w-full"
                            />
                            <FaSearch className="absolute mt-4 top-1/2 left-3 transform -translate-y-1/2 text-[#1A440280]" />
                        </div>

                        {/* Buttons */}
                        <div className="flex space-x-4 mt-4 lg:mt-8">
                            <button
                                className="bg-[#1A4402] text-white px-6 py-2 rounded-xl w-full lg:w-auto"
                                onClick={handleSearch}
                            >
                                Search
                            </button>
                            <button
                                className="bg-[#749D1C80] text-[#1A4402] px-6 py-2 rounded-xl w-full lg:w-auto"
                                onClick={handleReset}
                            >
                                Reset
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}