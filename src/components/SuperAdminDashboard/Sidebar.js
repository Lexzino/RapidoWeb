import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>RapidoRelief</h2>
      <nav>
        <ul>
          <li>Dashboard</li>
          <li>Doctors</li>
          <li>Pharmacies</li>
          <li>Patients</li>
          <li>Therapists</li>
          <li>Reports</li>
          <li>Messages</li>
          <li>Documents</li>
        </ul>
      </nav>
      <button style={{ marginTop: "2rem", backgroundColor: "#2d732d", padding: "10px", color: "#fff", border: "none", borderRadius: "5px" }}>
        Log Out
      </button>
    </div>
  );
};

export default Sidebar;
