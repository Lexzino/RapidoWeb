import React from "react";

const Header = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
      <h1>Welcome, Super Admin</h1>
      <input
        type="search"
        placeholder="Search..."
        style={{
          padding: "0.5rem",
          borderRadius: "8px",
          border: "1px solid #ccc",
          outline: "none",
        }}
      />
    </div>
  );
};

export default Header;
