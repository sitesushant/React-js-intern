import React from "react";
import { useNavigate } from "react-router-dom";

function Home({ setIsAuthenticated }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Welcome at Home Page.</h2>
      <p className="welcome-message">
        Logged in as a regular user. <br />
        This is your home page.
      </p>
      <p style={{ marginBottom: "25px", fontSize: "14px", color: "#888" }}>
        Regular users can only access this home page.
      </p>
      <button onClick={handleLogout} className="logout-button">Logout</button>
    </div>
  );
}

export default Home;
