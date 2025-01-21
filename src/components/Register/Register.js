import React, { useState } from "react";
import Loginmobile from "../../assets/images/Loginmobile.svg";
import Googlered from "../../assets/images/Googlered.svg";
import Appleblack from "../../assets/images/Appleblack.svg";
import Facebookblue from "../../assets/images/Facebookblue.svg";
import { useAuth } from "../services/authService";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const [title, setTitle] = useState("Dr"); // Default title
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [activeTab, setActiveTab] = useState("Super Admin");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [specialty, setSpecialty] = useState(""); // Practice Specialty or Pharmacy Store Name

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      message.error("Passwords do not match");
      return;
    }

    if (!acceptTerms) {
      message.error("You must accept the terms and conditions");
      return;
    }

    const credentials = {
      firstName,
      lastName,
      fullName,
      title,
      email,
      password,
      activeTab,
      specialty,
    };

    try {
      await signup(credentials)
        .then((res) => {
          if (res) {
            message.success("Sign-up successful");
            navigate("/dashboard");
          } else {
            message.error("Error during sign-up");
          }
        })
        .catch(() => {});
    } catch (error) {
      console.error("Sign-up failed:", error.message);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-stretch w-full h-full lg:h-[80vh] bg-[#EAF9D6]">
      {/* Left Section - Hidden on small screens */}
      <div className="flex-1 hidden lg:flex justify-center items-center bg-green-dark py-10">
        <img src={Loginmobile} className="w-[250px] h-auto" alt="Signup Mobile" />
      </div>

      {/* Right Section */}
      <div className="flex flex-1 flex-col justify-center items-center lg:items-start px-6 sm:px-12">
        <div className="ext-center lg:text-start w-full">
          <ul className="inline-flex items-center mt-3 space-x-4 flex-col lg:flex-row">
            <li className="text-green-dark lg:text-5xl lg:w-[180px] sm:text-5xl font-bold">Create Account</li>
            {/* Stacked buttons on small screens */}
            <li className="w-[260px] border-[2px] border-green-dark rounded-md p-[6px] inline-flex space-x-2 items-center flex-col lg:flex-row mt-4 lg:mt-0">
              <button
                className={`hover:bg-green-dark hover:text-white w-full lg:w-[140px]  h-[25px] rounded-[5px] text-lg ${
                  activeTab === "Super Admin" ? "bg-green-dark text-white" : "bg-transparent text-green-dark"
                }`}
                onClick={() => setActiveTab("Super Admin")}
              >
                Super Admin
              </button>
              <button
                className={`hover:bg-green-dark hover:text-white w-full lg:w-[100px] h-[25px] rounded-[5px] text-lg ${
                  activeTab === "Provider" ? "bg-green-dark text-white" : "bg-transparent text-green-dark"
                }`}
                onClick={() => setActiveTab("Provider")}
              >
                Provider
              </button>
            </li>
          </ul>
        </div>

        {/* Sign-up Form */}
        <div className="mt-8 w-full max-w-md">
          {activeTab === "Super Admin" ? (
            <>
              <div className="flex space-x-4">
                <div className="flex-1">
                  <h1 className="text-lg text-green-dark">First Name</h1>
                  <input
                    type="text"
                    className="rounded-[5px] border-[1px] border-green-dark w-full h-[45px] text-base pl-4 mt-2"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <p className="text-tiny text-red-vlight">Required</p>
                </div>
                <div className="flex-1">
                  <h1 className="text-lg text-green-dark">Last Name</h1>
                  <input
                    type="text"
                    className="rounded-[5px] border-[1.5px] border-green-dark w-full h-[45px] text-base pl-4 mt-2"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  <p className="text-tiny text-red-vlight">Required</p>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex space-x-4">
                <div className="flex-1">
                  <h1 className="text-lg text-green-dark">Full Name</h1>
                  <input
                    type="text"
                    className="rounded-[5px] border-[1px] border-green-dark w-full h-[45px] text-base pl-4 mt-2"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                  <p className="text-tiny text-red-vlight">Required</p>
                </div>
                <div className="flex-1">
                  <h1 className="text-lg text-green-dark">Title</h1>
                  <select
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="rounded-[5px] border-[1px] border-green-dark w-full h-[45px] text-base pl-4 mt-2"
                  >
                    <option value="Dr">Dr</option>
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <h1 className="text-lg text-green-dark">Practice Specialty or Pharmacy Store Name</h1>
                <input
                  type="text"
                  className="rounded-[5px] border-[1.5px] border-green-dark w-full h-[45px] text-base pl-4 mt-2"
                  placeholder="Practice Specialty or Pharmacy Store Name"
                  value={specialty}
                  onChange={(e) => setSpecialty(e.target.value)}
                />
                <p className="text-tiny text-red-vlight">Required</p>
              </div>
            </>
          )}

          <div className="mt-6">
            <h1 className="text-lg text-green-dark">Email Address/Phone Number</h1>
            <input
              type="text"
              className="rounded-[5px] border-[1.5px] border-green-dark w-full h-[45px] text-base pl-4 mt-2"
              placeholder="Email Address/Phone Number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="text-tiny text-red-vlight">Required</p>
          </div>

          <div className="mt-6 flex space-x-4">
            <div className="flex-1">
              <h1 className="text-lg text-green-dark">Password</h1>
              <input
                type="password"
                className="rounded-[5px] border-[1.5px] border-green-dark w-full h-[45px] text-base pl-4 mt-2"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className="text-tiny text-red-vlight">Required</p>
            </div>
            <div className="flex-1">
              <h1 className="text-lg text-green-dark">Confirm Password</h1>
              <input
                type="password"
                className="rounded-[5px] border-[1.5px] border-green-dark w-full h-[45px] text-base pl-4 mt-2"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <p className="text-tiny text-red-vlight">Required</p>
            </div>
          </div>

          {/* Custom Terms and Conditions Checkbox */}
          <div className="mt-4 flex items-center">
            <div className="flex items-center h-5">
              <input
                id="helper-checkbox"
                aria-describedby="helper-checkbox-text"
                type="checkbox"
                checked={acceptTerms}
                onChange={() => setAcceptTerms(!acceptTerms)}
                className="w-4 h-4 bg-white border border-green-dark rounded-[5px] subscribe-set"
              />
            </div>
            <div className="ml-2 text-sm sm:text-base f-f-r text-red-vdark">
              <label htmlFor="helper-checkbox">
                I accept all{" "}
                <a href="/terms-and-conditions" className="text-blue-500">
                  terms and conditions
                </a>
              </label>
            </div>
          </div>

          {/* Centered Button and Account Text */}
          <div className="flex flex-col items-center mt-6">
            <button
              className="w-[90px] h-9 rounded-[3px] bg-green-dark text-lg text-white mt-5"
              onClick={handleSignup}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}