import React from "react";

const requests = [
  { name: "Nitin Verma", disease: "Child Care", date: "01/27", approved: false },
  { name: "Leena Dua", disease: "Child Care", date: "01/27", approved: true },
];

const AppointmentRequests = () => (
  <div className="card">
    <h3>Appointment Requests</h3>
    <ul>
      {requests.map((req, index) => (
        <li key={index}>
          {req.name} - {req.disease} ({req.date}){" "}
          <button style={{ background: req.approved ? "#4CAF50" : "#F44336", color: "#fff", marginLeft: "10px" }}>
            {req.approved ? "Approved" : "Reject"}
          </button>
        </li>
      ))}
    </ul>
  </div>
);

export default AppointmentRequests;
