import React, { useState } from "react";
import Loginmobile from "../../assets/images/Loginmobile.svg";
import { message } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  // State variables
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const [title, setTitle] = useState("Dr");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [activeTab, setActiveTab] = useState("superadmin");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [specialty, setSpecialty] = useState("");

  // Base URL for the backend
  const BASE_URL = "http://localhost:3020/api/superadmin-signup";

  // Signup handler
  const handleSignup = async () => {
    // Validate input
    if (!email || !password || !firstName || !lastName || (activeTab === "provider" && !specialty)) {
      message.error("Please fill in all required fields");
      return;
    }

    if (password !== confirmPassword) {
      message.error("Passwords do not match");
      return;
    }

    if (!acceptTerms) {
      message.error("You must accept the terms and conditions");
      return;
    }

    // Prepare credentials
    const credentials = {
      firstName,
      lastName,
      fullName: activeTab === "provider" ? fullName : `${firstName} ${lastName}`,
      title,
      email,
      password,
      role: activeTab,
      specialty: activeTab === "provider" ? specialty : undefined,
      userType: activeTab.toLowerCase(),
    };

    // API Call to backend
    try {
      const response = await axios.post(BASE_URL, credentials);

      if (response.status === 201 || response.data.success) {
        message.success("Sign-up successful");
        sessionStorage.setItem("user", JSON.stringify(response.data));
        // Navigate to the correct folder based on the role
        setTimeout(() => {
          if (response.data.userType  === "superadmin") {
            navigate("/superadmin"); 
          } else if (response.data.userType === "provider") {
            navigate("/provider");
          }
        }, 100);
      } else {
        message.error(response.data.message || "Error during sign-up");
      }
    } catch (error) {
      console.error("Sign-up failed:", error.message);
      message.error(
        error.response?.data?.message || "An unexpected error occurred"
      );
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-stretch w-full h-full lg:h-[80vh] bg-[#EAF9D6] lg:overflow-y-hidden">
      {/* Left Section - Hidden on small screens */}
      <div className="flex-1 hidden lg:flex justify-center items-center bg-green-dark h-full">
        <img src={Loginmobile} className="w-[250px] h-auto" alt="Signup Mobile" />
      </div>

      {/* Right Section */}
      <div className="flex flex-1 flex-col justify-center items-center lg:items-center px-6 sm:px-12">
        <div className="text-center lg:text-start w-full">
          <ul className="inline-flex items-center mt-3.5 space-x-4 flex-col lg:flex-row">
            <li className="text-green-dark lg:text-5xl lg:w-[180px] sm:text-5xl font-bold">Create Account</li>
            <li className="lg:w-[260px] w-[525px] border-[2px] border-green-dark rounded-md p-[6px] inline-flex space-x-2 items-center flex-row lg:flex-row mt-4 lg:mt-2">
              <button
                className={`hover:bg-green-dark hover:text-white w-full lg:w-[140px] py-1.5 rounded-[5px] text-lg ${
                  activeTab === "superadmin" ? "bg-green-dark text-white" : "bg-transparent text-green-dark"
                }`}
                onClick={() => setActiveTab("superadmin")}
              >
                Super Admin
              </button>
              <button
                className={`hover:bg-green-dark hover:text-white w-full lg:w-[100px] py-1.5 rounded-[5px] text-lg ${
                  activeTab === "provider" ? "bg-green-dark text-white" : "bg-transparent text-green-dark"
                }`}
                onClick={() => setActiveTab("provider")}
              >
                Provider
              </button>
            </li>
          </ul>
        </div>

        {/* Sign-up Form */}
        <div className="mt-5 w-full max-w-md">
          {activeTab === "superadmin" ? (
            <div className="flex space-x-4">
              <div className="flex-1">
                <h1 className="text-lg text-green-dark">First Name</h1>
                <input
                  type="text"
                  className="rounded-[5px] border-[1px] border-green-dark w-full h-[40px] text-base pl-4 mt-1.5"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="flex-1">
                <h1 className="text-lg text-green-dark">Last Name</h1>
                <input
                  type="text"
                  className="rounded-[5px] border-[1px] border-green-dark w-full h-[40px] text-base pl-4 mt-1.5"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
          ) : (
            <div className="flex space-x-4">
              <div className="flex-1">
                <h1 className="text-lg text-green-dark">Full Name</h1>
                <input
                  type="text"
                  className="rounded-[5px] border-[1px] border-green-dark w-full h-[40px] text-base pl-4 mt-1.5"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div className="flex-1">
                <h1 className="text-lg text-green-dark">Title</h1>
                <select
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="rounded-[5px] border-[1px] border-green-dark w-full h-[40px] text-base pl-4 mt-1.5"
                >
                  <option value="Dr">Dr</option>
                  <option value="Mr">Pharm</option>
                </select>
              </div>
            </div>
          )}

          {activeTab === "provider" && (
            <div className="mt-3.5">
              <h1 className="text-lg text-green-dark">Practice Specialty or Pharmacy Store Name</h1>
              <input
                type="text"
                className="rounded-[5px] border-[1.5px] border-green-dark w-full h-[40px] text-base pl-4 mt-1.5"
                placeholder="Practice Specialty or Pharmacy Store Name"
                value={specialty}
                onChange={(e) => setSpecialty(e.target.value)}
              />
            </div>
          )}

          <div className="mt-3.5">
            <h1 className="text-lg text-green-dark">Email Address</h1>
            <input
              type="text"
              className="rounded-[5px] border-[1.5px] border-green-dark w-full h-[40px] text-base pl-4 mt-1.5"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mt-3.5 flex space-x-4">
            <div className="flex-1">
              <h1 className="text-lg text-green-dark">Password</h1>
              <input
                type="password"
                className="rounded-[5px] border-[1.5px] border-green-dark w-full h-[40px] text-base pl-4 mt-1.5"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex-1">
              <h1 className="text-lg text-green-dark">Confirm Password</h1>
              <input
                type="password"
                className="rounded-[5px] border-[1.5px] border-green-dark w-full h-[40px] text-base pl-4 mt-1.5"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="mt-2.5 flex items-center">
            <input
              type="checkbox"
              checked={acceptTerms}
              onChange={() => setAcceptTerms(!acceptTerms)}
              className="mr-2"
            />
            <label className="text-green-dark text-base">
              I accept the{" "}
              <a href="/terms" className="text-green-dark underline">
                Terms and Conditions
              </a>
            </label>
          </div>

          <button
            onClick={handleSignup}
            className="bg-green-dark hover:bg-green-darker text-white w-full py-2.5 rounded-lg text-lg font-bold mt-3.5"
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}
