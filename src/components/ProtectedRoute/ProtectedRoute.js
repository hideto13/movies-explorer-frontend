import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, loggedIn }) => {
  const token = localStorage.getItem("jwt");
  return loggedIn || token ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
