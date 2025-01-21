import React, { useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "./authService";
import Cookies from 'js-cookie'

const AuthGuard = ({ children, adminRequired }) => {
  
  const user = Cookies.get("userId");
  const isAdmin = Cookies.get("isAdmin");

  if (!user || !Cookies.get("userId")) {
    return <Navigate to="/" />;
  }

  if (adminRequired && isAdmin !== "true") {
    // If admin is required and the user is not an admin, redirect to home
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
}; 

export default AuthGuard;
