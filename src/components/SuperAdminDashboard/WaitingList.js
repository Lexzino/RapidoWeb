import React, { useState } from "react";
import { FaPen, FaTrash } from 'react-icons/fa';

const WaitingList = () => {
  const [activeTab, setActiveTab] = useState("Index");

  // Sample data for each tab
  const data = {
    Index: [
      { name: "Leslie Alexander", email: "leslie.alexander@example.com", date: "10/10/2023", visitTime: "09:15 - 09:45 AM" },
      { name: "Ronald Richards", email: "ronald.richards@example.com", date: "10/11/2023", visitTime: "10:00 - 10:30 AM" },
      { name: "Jason Cooper", email: "jason.cooper@example.com", date: "10/12/2023", visitTime: "11:00 - 11:30 AM" },
      { name: "Robert Fox", email: "robert.fox@example.com", date: "10/13/2023", visitTime: "12:00 - 12:30 PM" },
      { name: "Jenny Wilson", email: "jenny.wilson@example.com", date: "10/14/2023", visitTime: "01:00 - 01:30 PM" },
    ],
    Doctors: [
      { name: "Leslie Alexander", email: "leslie.alexander@example.com", date: "10/10/2023", visitTime: "09:15 - 09:45 AM" },
      { name: "Ronald Richards", email: "ronald.richards@example.com", date: "10/11/2023", visitTime: "10:00 - 10:30 AM" },
    ],
    Pharmacies: [
      { name: "Jason Cooper", email: "jason.cooper@example.com", date: "10/12/2023", visitTime: "11:00 - 11:30 AM" },
    ],
    Therapists: [
      { name: "Robert Fox", email: "robert.fox@example.com", date: "10/13/2023", visitTime: "12:00 - 12:30 PM" },
    ],
    Patients: [
      { name: "Jenny Wilson", email: "jenny.wilson@example.com", date: "10/14/2023", visitTime: "01:00 - 01:30 PM" },
    ],
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      {/* Tabs */}
      <div className="w-11/12 flex flex-row justify-center items-center">
        {Object.keys(data).map((tab) => (
          <button
            key={tab}
            //className={`tab-button ${activeTab === tab ? "active" : ""}`}
            style = {tab == activeTab ? { color: 'black'} : { color: '#76836f'}}
            className= {`px-5 py-1.5 -translate-x-12 z-${(10 - (tab.indexOf() + 1))} relative shadow-sm rounded-t-lg text-base font-bold bg-white`}
            onClick={() => setActiveTab(tab)}
          >
            {tab == 'Index' ? 'Waiting List' : tab}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="px-3 py-3 rounded-md bg-white w-full shadow-md">
        <table className="w-full">
          <thead>
            <tr className="bg-[#FAFAFA] border-b-2 border-b-[#F4F4F4]">
              <th className="px-3 py-2 text-sm text-left">Name</th>
              <th className="px-2 py-2 text-sm text-left">Email</th>
              <th className="px-2 py-2 text-sm text-left">Date</th>
              <th className="px-2 py-2 text-sm text-left">Visit Time</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data[activeTab].map((item, index) => (
              <tr key={index} className="px-2 py-2">
                <td className="p-2 text-sm">{item.name}</td>
                <td className="p-2 text-sm">{item.email}</td>
                <td className="p-2 text-sm">{item.date}</td>
                <td className="p-2 text-sm">{item.visitTime}</td>
                <td className="p-2 text-sm">
                  <button className="mx-1.5">
                    <FaPen className="text-[#7e7e7e]" />
                  </button>
                  <button className="mx-1.5">
                    <FaTrash className="text-red-500" />
                  </button>
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WaitingList;
