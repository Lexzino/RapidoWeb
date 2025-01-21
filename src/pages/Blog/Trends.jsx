import React from "react";

export default function Trends() {
    return (
        <div className="w-[1155px] max-w-full m-auto pb-6 px-4">
            {/* Trend Items */}
            <div className="flex flex-wrap justify-center text-[#1A4402] text-sm lg:text-[20px]">
                {/* Items with separators */}
                <div className="flex flex-wrap justify-center items-center space-x-2 lg:space-x-4">
                    <span className="mb-2 lg:mb-0">Healthcare Trends</span>
                    <span className=" lg:inline">•</span>
                    <span className="mb-2 lg:mb-0">Telemedicine</span>
                    <span className=" lg:inline">•</span>
                    <span className="mb-2 lg:mb-0">Mental Health</span>
                    <span className=" lg:inline">•</span>
                    <span className="mb-2 lg:mb-0">Medical Tourism</span>
                    <span className=" lg:inline">•</span>
                    <span className="mb-2 lg:mb-0">Patient Stories</span>
                    <span className=" lg:inline">•</span>
                    <span className="mb-2 lg:mb-0">Diversity & Inclusion</span>
                </div>
            </div>
            {/* Separator */}
            <div className="mt-4 w-full border-t-2 border-[#749D1C]"></div>
        </div>
    );
}