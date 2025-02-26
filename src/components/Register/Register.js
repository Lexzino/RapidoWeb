import React, { useState } from "react";
import { message } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    fullName: "",
    title: "Dr",
    email: "",
    password: "",
    confirmPassword: "",
    activeTab: "SuperAdmin",
    acceptTerms: false,
    specialty: "",
  });

  const {
    firstName,
    lastName,
    fullName,
    title,
    email,
    password,
    confirmPassword,
    activeTab,
    acceptTerms,
    specialty
  } = formData;

  const BASE_URL = "http://localhost:4000/api/auth/superadmin-signup";

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const setActiveTab = (tab) => {
    setFormData(prev => ({
      ...prev,
      activeTab: tab
    }));
  };

  const handleSignup = async () => {
    if (!email || !password || (!firstName && activeTab === "SuperAdmin") || (!lastName && activeTab === "SuperAdmin") || (activeTab === "Provider" && !fullName) || (activeTab === "Provider" && !specialty)) {
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

    const displayName = activeTab === "Provider" ? `${title} ${fullName}` : `${firstName} ${lastName}`;

    const credentials = {
      firstName,
      lastName,
      fullName: activeTab === "Provider" ? fullName : `${firstName} ${lastName}`,
      title,
      email,
      password,
      role: activeTab,
      specialty: activeTab === "Provider" ? specialty : undefined,
      displayName: displayName // Adding displayName to the credentials
    };

    try {
      const response = await axios.post(BASE_URL, credentials);
      console.log("User Role:", response);
      if (response.status === 201) {
        message.success("Sign-up successful");
        

        setTimeout(() => {
          const userRole = credentials.role; // Adjust based on actual API response
          console.log("User Role:", response); // Debugging
        
          if (userRole === "SuperAdmin") {
            navigate("/login");
          } else if (userRole === "Provider") {
            navigate("/login?user=Provider");
          } else {
            message.error("Unexpected role from server");
          }
        }, 100);
        
        
      } else {
        message.error(response.data.message || "Error during sign-up");
      }
    } catch (error) {
      message.error(error.response?.data?.message || "An unexpected error occurred");
    }
  };

  // Rest of the component remains the same
  return (
    <div className="flex flex-col lg:flex-row items-stretch w-full h-full lg:h-[80vh] bg-[#EAF9D6] lg:overflow-y-hidden">
      <div className="flex-1 hidden lg:flex justify-center items-center bg-green-dark h-full">
        <img src="/images/Loginmobile.svg" className="w-[250px] h-auto" alt="Signup Mobile" />
      </div>

      <div className="flex flex-1 flex-col justify-center items-center lg:items-center px-6 sm:px-12">
        <div className="text-center lg:text-start w-full">
          <ul className="inline-flex items-center mt-3.5 space-x-4 flex-col lg:flex-row">
            <li className="text-green-dark lg:text-5xl lg:w-[180px] sm:text-5xl font-bold">Create Account</li>
            <li className="lg:w-[260px] w-[525px] border-[2px] border-green-dark rounded-md p-[6px] inline-flex space-x-2 items-center flex-row lg:flex-row mt-4 lg:mt-2">
              <button
                className={`hover:bg-green-dark hover:text-white w-full lg:w-[140px] py-1.5 rounded-[5px] text-lg ${
                  activeTab === "SuperAdmin" ? "bg-green-dark text-white" : "bg-transparent text-green-dark"
                }`}
                onClick={() => setActiveTab("SuperAdmin")}
              >
                Super Admin
              </button>
              <button
                className={`hover:bg-green-dark hover:text-white w-full lg:w-[100px] py-1.5 rounded-[5px] text-lg ${
                  activeTab === "Provider" ? "bg-green-dark text-white" : "bg-transparent text-green-dark"
                }`}
                onClick={() => setActiveTab("Provider")}
              >
                Provider
              </button>
            </li>
          </ul>
        </div>

        <div className="mt-5 w-full max-w-md">
          {activeTab === "SuperAdmin" ? (
            <div className="flex space-x-4">
              <div className="flex-1">
                <h1 className="text-lg text-green-dark">First Name</h1>
                <input
                  type="text"
                  name="firstName"
                  className="rounded-[5px] border-[1px] border-green-dark w-full h-[40px] text-base pl-4 mt-1.5"
                  placeholder="First Name"
                  value={firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="flex-1">
                <h1 className="text-lg text-green-dark">Last Name</h1>
                <input
                  type="text"
                  name="lastName"
                  className="rounded-[5px] border-[1px] border-green-dark w-full h-[40px] text-base pl-4 mt-1.5"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={handleChange}
                />
              </div>
            </div>
          ) : (
            <div className="flex space-x-4">
              <div className="flex-1">
                <h1 className="text-lg text-green-dark">Full Name</h1>
                <input
                  type="text"
                  name="fullName"
                  className="rounded-[5px] border-[1px] border-green-dark w-full h-[40px] text-base pl-4 mt-1.5"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={handleChange}
                />
              </div>
              <div className="flex-1">
                <h1 className="text-lg text-green-dark">Title</h1>
                <select
                  name="title"
                  value={title}
                  onChange={handleChange}
                  className="rounded-[5px] border-[1px] border-green-dark w-full h-[40px] text-base pl-4 mt-1.5"
                >
                  <option value="Dr">Dr</option>
                  <option value="Mr">Pharm</option>
                </select>
              </div>
            </div>
          )}

          {activeTab === "Provider" && (
            <div className="mt-3.5">
              <h1 className="text-lg text-green-dark">Practice Specialty or Pharmacy Store Name</h1>
              <input
                type="text"
                name="specialty"
                className="rounded-[5px] border-[1.5px] border-green-dark w-full h-[40px] text-base pl-4 mt-1.5"
                placeholder="Practice Specialty or Pharmacy Store Name"
                value={specialty}
                onChange={handleChange}
              />
            </div>
          )}

          <div className="mt-3.5">
            <h1 className="text-lg text-green-dark">Email Address</h1>
            <input
              type="text"
              name="email"
              className="rounded-[5px] border-[1.5px] border-green-dark w-full h-[40px] text-base pl-4 mt-1.5"
              placeholder="Email Address"
              value={email}
              onChange={handleChange}
            />
          </div>

          <div className="mt-3.5 flex space-x-4">
            <div className="flex-1">
              <h1 className="text-lg text-green-dark">Password</h1>
              <input
                type="password"
                name="password"
                className="rounded-[5px] border-[1.5px] border-green-dark w-full h-[40px] text-base pl-4 mt-1.5"
                placeholder="Password"
                value={password}
                onChange={handleChange}
              />
            </div>
            <div className="flex-1">
              <h1 className="text-lg text-green-dark">Confirm Password</h1>
              <input
                type="password"
                name="confirmPassword"
                className="rounded-[5px] border-[1.5px] border-green-dark w-full h-[40px] text-base pl-4 mt-1.5"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="mt-2.5 flex items-center">
            <input
              type="checkbox"
              name="acceptTerms"
              checked={acceptTerms}
              onChange={handleChange}
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