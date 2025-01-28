import React from "react";

const announcements = [
  "Meeting has been rescheduled for 28 May.",
  "We request our doctor to use our website.",
  "Dr. Faisal has completed 400 surgery cases."
];

const Announcements = () => (
  <div className="card">
    <h3>Announcements</h3>
    <ul>
      {announcements.map((note, index) => (
        <li key={index}>{note}</li>
      ))}
    </ul>
  </div>
);

export default Announcements;
