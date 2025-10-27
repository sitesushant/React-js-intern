import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register({ setIsAuthenticated, setUserType }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (formData.password.length < 4) {
      alert("Password must be at least 4 characters long!");
      return;
    }

    // Demo registration - registered users are regular users
    alert("Registration successful! You are now logged in as a regular user.");
    setIsAuthenticated(true);
    setUserType("user");
    navigate("/home");
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Create Account</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          className="form-input"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          className="form-input"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          className="form-input"
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm your password"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="form-input"
          required
        />
        <button type="submit" className="login-button">Register</button>
      </form>
      <p style={{ marginTop: "15px", fontSize: "14px", color: "#666" }}>
        Already have an account?{" "}
        <button 
          onClick={() => navigate("/")} 
          style={{ 
            background: "none", 
            border: "none", 
            color: "#007bff", 
            cursor: "pointer",
            textDecoration: "underline"
          }}
        >
          Login here
        </button>
      </p>
    </div>
  );
}

export default Register;
