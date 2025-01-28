import React from "react";

const StatsCard = ({ title, value, bgColor }) => {
  return (
    <div className="card" style={{ backgroundColor: bgColor, color: "#fff", textAlign: "center" }}>
      <h3>{title}</h3>
      <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{value}</p>
    </div>
  );
};

export default StatsCard;
