import React from 'react'
import { Navigate } from "react-router-dom";

const ProtectedRouteInstructor = ({ children }) => {
     const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/becomeanInstructor/login" replace />;
  }
  return children;
}

export default ProtectedRouteInstructor
