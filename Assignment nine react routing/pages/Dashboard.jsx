import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard({ setIsAuthenticated }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Admin Dashboard Page.</h2>
      <p className="welcome-message">Welcome Admin! You have access to the admin dashboard.</p>
      <p style={{ marginBottom: "25px", fontSize: "14px", color: "#888" }}>
        This page is only accessible to admin users.
      </p>
      <button onClick={handleLogout} className="logout-button">Logout</button>
    </div>
  );
}

export default Dashboard;
