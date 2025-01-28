import React, { useState } from "react";

const WaitingList = () => {
  const [activeTab, setActiveTab] = useState("Doctors");

  // Sample data for each tab
  const data = {
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
    <div className="waiting-list card">
      <h3>Waiting List</h3>
      {/* Tabs */}
      <div className="tabs">
        {Object.keys(data).map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
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
