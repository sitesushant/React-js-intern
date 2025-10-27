import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Home from "./pages/Home.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userType, setUserType] = useState(null);

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserType(null);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Login 
            setIsAuthenticated={setIsAuthenticated} 
            setUserType={setUserType}
          />
        }
      />
      <Route
        path="/register"
        element={
          <Register 
            setIsAuthenticated={setIsAuthenticated} 
            setUserType={setUserType}
          />
        }
      />
      <Route
        path="/home"
        element={
          <ProtectedRoute 
            isAuthenticated={isAuthenticated} 
            userType={userType}
            requiredUserType="user"
          >
            <Home setIsAuthenticated={handleLogout} />
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute 
            isAuthenticated={isAuthenticated} 
            userType={userType}
            requiredUserType="admin"
          >
            <Dashboard setIsAuthenticated={handleLogout} />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
