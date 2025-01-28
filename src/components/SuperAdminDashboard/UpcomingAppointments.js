import React from "react";

const UpcomingAppointment = () => {
  return (
    <div className="upcoming-appointment card">
      <h3>Upcoming Appointment</h3>
      <div className="appointment-details">
        <div className="doctor-info">
          <p><strong>Dr. Alison Ogaga</strong></p>
          <p>General Practitioner</p>
        </div>
        <div className="appointment-time">
          <p>October 28th, 2023</p>
          <p>11:30 - 12:00</p>
          <p>UK, Ikor, RW, USA</p>
        </div>
        <div className="appointment-actions">
          <button className="reschedule-btn">Reschedule</button>
          <button className="confirm-btn">Confirm Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default UpcomingAppointment;
