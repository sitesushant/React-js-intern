import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated, userType, requiredUserType, children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  
  if (requiredUserType && userType !== requiredUserType) {
    // Redirect to appropriate page based on user type
    if (userType === "admin") {
      return <Navigate to="/dashboard" replace />;
    } else {
      return <Navigate to="/home" replace />;
    }
  }
  
  return children;
};

export default ProtectedRoute;
