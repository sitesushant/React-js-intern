import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setIsAuthenticated, setUserType }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Admin credentials
    if (email === "admin@test.com" && password === "admin123") {
      setIsAuthenticated(true);
      setUserType("admin");
      navigate("/dashboard");
    }
    // Regular user credentials
    else if (email === "user@test.com" && password === "1234") {
      setIsAuthenticated(true);
      setUserType("user");
      navigate("/home");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Welcome Back</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-input"
          required
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-input"
          required
        />
        <button type="submit" className="login-button">Sign In</button>
      </form>
      <p style={{ marginTop: "15px", fontSize: "14px", color: "#666" }}>
        Don't have an account?{" "}
        <button 
          onClick={() => navigate("/register")} 
          style={{ 
            background: "none", 
            border: "none", 
            color: "#007bff", 
            cursor: "pointer",
            textDecoration: "underline"
          }}
        >
          Register here
        </button>
      </p>
    </div>
  );
}

export default Login;
