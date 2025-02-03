import React, { useState } from "react";

const WaitingList = () => {
  const [activeTab, setActiveTab] = useState("Index");

  // Sample data for each tab
  const data = {
    Index: [
      { name: "Leslie Alexander", email: "leslie.alexander@example.com", date: "10/10/2023", visitTime: "9:15 - 9:45 AM" },
      { name: "Ronald Richards", email: "ronald.richards@example.com", date: "10/11/2023", visitTime: "10:00 - 10:30 AM" },
      { name: "Jason Cooper", email: "jason.cooper@example.com", date: "10/12/2023", visitTime: "11:00 - 11:30 AM" },
      { name: "Robert Fox", email: "robert.fox@example.com", date: "10/13/2023", visitTime: "12:00 - 12:30 PM" },
      { name: "Jenny Wilson", email: "jenny.wilson@example.com", date: "10/14/2023", visitTime: "1:00 - 1:30 PM" },
    ],
    Doctors: [
      { name: "Leslie Alexander", email: "leslie.alexander@example.com", date: "10/10/2023", visitTime: "9:15 - 9:45 AM" },
      { name: "Ronald Richards", email: "ronald.richards@example.com", date: "10/11/2023", visitTime: "10:00 - 10:30 AM" },
    ],
    Pharmacies: [
      { name: "Jason Cooper", email: "jason.cooper@example.com", date: "10/12/2023", visitTime: "11:00 - 11:30 AM" },
    ],
    Therapists: [
      { name: "Robert Fox", email: "robert.fox@example.com", date: "10/13/2023", visitTime: "12:00 - 12:30 PM" },
    ],
    Patients: [
      { name: "Jenny Wilson", email: "jenny.wilson@example.com", date: "10/14/2023", visitTime: "1:00 - 1:30 PM" },
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
            className= {`px-5 py-1.5 z-${tab.indexOf() + 10} -translate-x-10 relative shadow-lg rounded-t-md text-base font-bold bg-white`}
            onClick={() => setActiveTab(tab)}
          >
            {tab == 'Index' ? 'Waiting List' : tab}
          </button>
        ))}
      </div>

      {/* Table */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Date</th>
            <th>Visit Time</th>
          </tr>
        </thead>
        <tbody>
          {data[activeTab].map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.date}</td>
              <td>{item.visitTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WaitingList;
