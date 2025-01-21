// authService.js

import Cookies from "js-cookie";
import api from "./api";
import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const login = async (credentials) => {
    try {
      const response = await api.post("/partner-login", credentials);
      const role = response.data.partner.role;
      if (role === "partner") {
        Cookies.set("isAdmin", true);
      }

      Cookies.set("userId", JSON.stringify(response?.data.partner._id));
      debugger
      return response;
    } catch (error) {
      console.error("Login error:", error);
      return null;
    }
  };

  const partnerSignup = async (data) => {
    try {
      const response = await api.post("/partner/create", data);

      if (response.status === 201) {
        // Handle successful signup
        return response;
      } else {
        // Handle error
        const errorData = await response.json();
        console.error("Signup failed:", errorData.error);
        return null;
      }
    } catch (error) {
      console.error("Signup error:", error.response.data.error);
      return error;
    }
  };
  const userSignup = async (data) => {
    try {
      const response = await api.post("/user-signup", data);
      if (response.status === 201) {
        // Handle successful signup
        return response;
      } else {
        // Handle error
        const errorData = await response.json();
        console.error("Signup failed:", errorData.error);
        return null;
      }
    } catch (error) {
      console.error("Signup error:", error.response.data.error);
      return error;
    }
  };

  const logout = () => {
    Cookies.remove("userId");
    Cookies.remove("isAdmin");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ login, logout, partnerSignup, userSignup }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
