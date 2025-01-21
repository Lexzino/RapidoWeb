import React, { useEffect, useState } from "react";
import Tableimg1 from "../../assets/images/Tableimg1.svg";
import pen from "../../assets/images/pen.svg";
import Delete from "../../assets/images/delete.svg";
import Drag from "../../assets/images/drag.svg";
import Dotss from "../../assets/images/3dot.svg";
import MAP from "../../assets/images/MAP.svg";
import Right from "../../assets/images/right.svg";
import { deleteUser, getUsers } from "../../components/services/api";
import { message } from "antd";
import Annimg1  from '../../assets/images/annimg1.svg'
import Annimg2  from '../../assets/images/Annimg2.svg'
import Annimg3  from '../../assets/images/Annimg3.svg'

export default function Table() {
  const [userList, setUserList] = useState("");
  const [loading, setLoading] = useState(true);
  const [activeSelection, setActiveSelection] = useState("Waiting List");
  const [filteredUserList, setFilteredUserList] = useState([]);
  const [regionCounts, setRegionCounts] = useState({});
  const [countryCounts, setCountryCounts] = useState({});
  const [asiaCount, setAsiaCount] = useState();
  const [europeCount, setEuropeCount] = useState();
  const [africaCount, setAfricaCount] = useState();
  const [americaCount, setAmericaCount] = useState();
  const [australiaCount, setAustraliaCount] = useState({
    NorthAmerica: 0,
    SouthAmerica: 0,
    Europe: 0,
    Asia: 0,
    Africa: 0,
    Oceania: 0,
    Antarctica: 0,
  });
  
  useEffect(() => {
    getUsers().then((response) => {
      setUserList(response.data);
      filterUserList(response.data, activeSelection);
      setLoading(false);
      countRegionUsers(response.data);
    });
  }, [activeSelection]);
  
  // Function to format date
  const formatDate = (createdAt) => {
    const date = new Date(createdAt);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };
  
  // Function to format visit time
  const formatVisitTime = (createdAt) => {
    const date = new Date(createdAt);
    const startTime = `${("0" + date.getHours()).slice(-2)}:${(
      "0" + date.getMinutes()
    ).slice(-2)}`;
    const endTime = `${("0" + (date.getHours() + 1)).slice(-2)}:${(
      "0" + date.getMinutes()
    ).slice(-2)}`;
    return `${startTime}-${endTime}${date.getHours() >= 12 ? "pm" : "am"}`;
  };
  
  const filterUserList = (users, selection) => {
    switch (selection) {
      case "Waiting List":
      setFilteredUserList(users.filter((user) => user.role === "individual"));
      break;
      case "Doctors":
      setFilteredUserList(
        users.filter(
          (user) =>
            user.role === "professional" &&
          user.profession.toLowerCase().includes("doctor")
        )
      );
      break;
      case "Pharmacies":
      setFilteredUserList(
        users.filter(
          (user) =>
            user.role === "professional" &&
          user.profession.toLowerCase().includes("pharma")
        )
      );
      break;
      default:
      setFilteredUserList([]);
      break;
    }
  };
  
  const handleDelete = (userId) => {
    deleteUser(userId)
    .then((response) => {
      if (response) {
        message.success("User deleted successfully");
        setUserList(userList.filter((user) => user._id !== userId));
        setFilteredUserList(
          filteredUserList.filter((user) => user._id !== userId)
        );
      }
    })
    .catch((error) => {
      console.error("Error deleting user:", error);
    });
  };
  
  const continentToCountry = {
    NA: "North America",
    SA: "South America",
    EU: "Europe",
    AS: "Asia",
    AF: "Africa",
    OC: "Oceania",
    AN: "Antarctica",
  };
  
  const countRegionUsers = (users) => {
    // Reset country counts
    const newCountryCounts = {};
    
    // Initialize continent counts variables
    let asiaCount = 0;
    let europeCount = 0;
    let africaCount = 0;
    let americaCount = 0;
    let australiaCount = 0;
    
    // Iterate through users to count regions
    users.forEach((user) => {
      if (user.region && user.region in continentToCountry) {
        const countryName = continentToCountry[user.region];
        const continentName = user.region;
        
        // Update country counts
        if (newCountryCounts[countryName]) {
          newCountryCounts[countryName]++;
        } else {
          newCountryCounts[countryName] = 1;
        }
        
        // Update continent counts
        switch (continentName) {
          case "AS":
          asiaCount++;
          break;
          case "EU":
          europeCount++;
          break;
          case "AF":
          africaCount++;
          break;
          case "NA":
          case "SA":
          americaCount++;
          break;
          case "OC":
          australiaCount++;
          break;
          default:
          break;
        }
      }
    });
    
    // Set new country counts
    setCountryCounts(newCountryCounts);
    
    // Set continent counts
    setAsiaCount(asiaCount);
    setEuropeCount(europeCount);
    setAfricaCount(africaCount);
    setAmericaCount(americaCount);
    setAustraliaCount(australiaCount);
  };
  
  return (
    <div>
    {loading ? (
      <div className="loader">
      {/* You can style this loader as per your design */}
      Loading...
      </div>
    ) : (
      <div className="ml-[50px]">
      <h1 className="f-f-r text-7xl font-light text-[#749D1C] mt-4">Super Admin</h1>
      <ul className="space-y-2 sm:space-y-0 sm:inline-flex items-center mt-4 space-x-[-10px] mb-[-8px] ml-8 relative">
      <li>
      <button
      className={`w-full sm:w-[176px] h-[49px] bg-white rounded-t-3xl f-f-m-m text-2xl ${
        activeSelection === "Waiting List"
        ? "text-black z-10 transform scale-105 shadow-lg"
        : "text-brown-vdark shadow-md"
      } transition-shadow duration-300 ease-in-out`}
      onClick={() => setActiveSelection("Waiting List")}
      >
      Waiting List
      </button>
      </li>
      <li>
      <button
      className={`w-full sm:w-[176px] h-[49px] bg-white rounded-t-3xl f-f-m-m text-2xl ${
        activeSelection === "Doctors"
        ? "text-black z-10 transform scale-105 shadow-lg"
        : "text-brown-vdark shadow-md"
      } transition-shadow duration-300 ease-in-out`}
      onClick={() => setActiveSelection("Doctors")}
      >
      Doctors
      </button>
      </li>
      <li>
      <button
      className={`w-full sm:w-[176px] h-[49px] bg-white rounded-t-3xl f-f-m-m text-2xl ${
        activeSelection === "Pharmacies"
        ? "text-black z-10 transform scale-105 shadow-lg"
        : "text-brown-vdark shadow-md"
      } transition-shadow duration-300 ease-in-out`}
      onClick={() => setActiveSelection("Pharmacies")}
      >
      Pharmacies
      </button>
      </li>
      </ul>
      
      {/* table section start */}
      
      <div className="relative overflow-x-auto overflow-y-auto rounded-[15px] bg-white tableset h-[341px] py-5 lg:pl-5">
      <table className="w-full  text-left rtl:text-right">
      <thead className="text-sm f-f-b-l  table-head h-[43px] text-[#25282B] ">
      <tr className="  ">
      <th
      scope="col"
      className="px-6 py-3 min-w-[175px] md:min-w-full "
      >
      Name
      </th>
      <th scope="col" className="px-6 py-3">
      Email
      </th>
      <th scope="col" className="px-6 py-3">
      Date
      </th>
      <th
      scope="col"
      className="px-6 py-3 min-w-[150px] md:min-w-full"
      >
      Visit Time
      </th>
      <th
      scope="col"
      className="px-6 py-3 min-w-[100px] md:min-w-full"
      ></th>
      </tr>
      </thead>
      <tbody>
      {filteredUserList?.map((user, index) => (
        <tr
        key={index}
        className="items-center bg-white text-blue-vdark border-b border-[#E8E8E8] h-[43px] f-f-r-l text-sm py-[10px] px-5"
        >
        <td scope="row" className="px-6">
        <ul className="inline-flex items-center space-x-2">
        <li>
        <img src={Tableimg1} className="w-6 h-6" alt="" />
        </li>
        <li>{user.name}</li>
        </ul>
        </td>
        <td className="px-6">{user.email}</td>
        <td className="px-6">{formatDate(user.createdAt)}</td>
        <td className="px-6">{formatVisitTime(user.createdAt)}</td>
        <td className="px-6 text-right">
        <ul className="inline-flex items-center space-x-2">
        <li>
        <button>
        <img src={pen} className="w-3 h-3" alt="" />
        </button>
        </li>
        <li>
        <button onClick={() => handleDelete(user._id)}>
        <img src={Delete} className="w-3 h-3" alt="" />
        </button>
        </li>
        </ul>
        </td>
        </tr>
      ))}
      </tbody>
      </table>
      </div>
      
      {/* table section end */}
      
      {/* Appointment requests start */}
      <div className="bg-white rounded-[20px] w-[680px] h-auto py-5 mt-[20px] sm:mt-[40px] 2xl:mt-[76px] announcementset">
      <h1 className="f-f-b text-4xl text-[#749D1C] pl-7">Appointment Requests</h1>
      
      <div className="pl-3 pr-3 mt-[23px]">
      {/* Table for appointment requests */}
      <table className="w-full bg-white rounded-[22px]">
      {/* Table header */}
      <thead>
      <tr>
      <th className="f-f-r text-tiny text-[#404040] px-3 py-2 text-left">Name</th>
      <th className="f-f-r text-tiny text-[#404040] px-3 py-2 text-left">Disease</th>
      <th className="f-f-r text-tiny text-[#404040] px-3 py-2 text-left">Date</th>
      <th className="f-f-r text-tiny text-[#404040] px-3 py-2 text-left">Approval</th>
      </tr>
      </thead>
      {/* Table body */}
      <tbody>
      <tr className="border-t border-gray-200">
      <td className="f-f-r text-tiny text-[#404040] px-3 py-2">
      <img src={Annimg1} className="w-[30px] h-[30px] inline mr-2" alt="" />
      John Doe
      </td>
      <td className="f-f-r text-tiny text-[#404040] px-3 py-2">Flu</td>
      <td className="f-f-r text-tiny text-[#404040] px-3 py-2">28 May 2024</td>
      <td className="f-f-r text-tiny text-[#404040] px-3 py-2">
      <span
      className="cursor-pointer inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#34A853] text-white"
      title="Approve"
      >
      <i className="fas fa-check"></i>
      </span>
      <span
      className="cursor-pointer inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#B51B1B] text-white ml-2"
      title="Reject"
      >
      <i className="fas fa-times"></i>
      </span>
      </td>
      </tr>
      <tr className="border-t border-gray-200">
      <td className="f-f-r text-tiny text-[#404040] px-3 py-2">
      <img src={Annimg2} className="w-[30px] h-[30px] inline mr-2" alt="" />
      Jane Smith
      </td>
      <td className="f-f-r text-tiny text-[#404040] px-3 py-2">Headache</td>
      <td className="f-f-r text-tiny text-[#404040] px-3 py-2">29 May 2024</td>
      <td className="f-f-r text-tiny text-[#404040] px-3 py-2">
      <span
      className="cursor-pointer inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#34A853] text-white"
      title="Approve"
      >
      <i className="fas fa-check"></i>
      </span>
      <span
      className="cursor-pointer inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#B51B1B] text-white ml-2"
      title="Reject"
      >
      <i className="fas fa-times"></i>
      </span>
      </td>
      </tr>
      <tr className="border-t border-gray-200">
      <td className="f-f-r text-tiny text-[#404040] px-3 py-2">
      <img src={Annimg3} className="w-[30px] h-[30px] inline mr-2" alt="" />
      Dr. Faisal
      </td>
      <td className="f-f-r text-tiny text-[#404040] px-3 py-2">Surgery</td>
      <td className="f-f-r text-tiny text-[#404040] px-3 py-2">30 May 2024</td>
      <td className="f-f-r text-tiny text-[#404040] px-3 py-2">
      <span
      className="cursor-pointer inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#34A853] text-white"
      title="Approve"
      >
      <i className="fas fa-check"></i>
      </span>
      <span
      className="cursor-pointer inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#B51B1B] text-white ml-2"
      title="Reject"
      >
      <i className="fas fa-times"></i>
      </span>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      
      <h6 className="text-end f-f-m-p text-tiny text-green-dark mt-4 mr-6">See more</h6>
      </div>
      {/* Appointment requests end */}
      
      {/* progress bar start */}
      
      <div className=" mt-[20px] sm:mt-[35px] w-full h-auto bg-white pt-5 rounded-[15px] ">
      <div className="grid grid-cols-12 pl-5 pr-5 sm:pr-0">
      <div className="col-span-10">
      <ul className="inline-flex items-center space-x-5">
      <li>
      <img src={Drag} className="w-8 h-8" alt="" />
      </li>
      <li>
      <h1 className="f-f-m text-lg text-brown">
      Audience Map Location
      </h1>
      <p className="f-f-r text-tiny text-brown-dark">
      Report Center
      </p>
      </li>
      </ul>
      </div>
      <div className="col-span-2">
      <img src={Dotss} className="w-8 h-8 ml-auto " alt="" />
      </div>
      </div>
      <div className="mt-[18px] h-[1px] bg-brown-light w-full"></div>
      <div className=" pt-5 pl-5 pr-5 sm:pr-0">
      <div className="grid grid-cols-12 gap-8 ">
      <div className=" col-span-12 sm:col-span-4">
      <div className="">
      <ul className="inline-flex items-center w-full justify-between">
      <li className="f-f-m text-sm text-brown">Europe</li>
      <li className="f-f-m text-sm text-brown-dark ">
      {europeCount || 0} Users
      </li>
      </ul>
      
      <div className="w-full bg-gray-200 rounded-full h-[15px] mt-2">
      <div className="bg-blue-600 h-[15px] rounded-full w-[35%]"></div>
      </div>
      </div>
      
      <div className="mt-5">
      <ul className="inline-flex items-center w-full justify-between">
      <li className="f-f-m text-sm text-brown">Asia</li>
      <li className="f-f-m text-sm text-brown-dark ">
      {asiaCount || 0} Users
      </li>
      </ul>
      <div className="w-full bg-gray-200 rounded-full h-[15px] mt-2">
      <div className="bg-blue-600 h-[15px] rounded-full w-[20%]"></div>
      </div>
      </div>
      
      <div className="mt-5">
      <ul className="inline-flex items-center w-full justify-between">
      <li className="f-f-m text-sm text-brown">Africa</li>
      <li className="f-f-m text-sm text-brown-dark ">
      {africaCount || 0} Users
      </li>
      </ul>
      <div className="w-full bg-gray-200 rounded-full h-[15px] mt-2">
      <div className="bg-blue-600 h-[15px] rounded-full w-[25%]"></div>
      </div>
      </div>
      
      <div className="mt-5">
      <ul className="inline-flex items-center w-full justify-between">
      <li className="f-f-m text-sm text-brown">Australia</li>
      <li className="f-f-m text-sm text-brown-dark ">
      {australiaCount || 0} Users
      </li>
      </ul>
      <div className="w-full bg-gray-200 rounded-full h-[15px] mt-2">
      <div className="bg-blue-600 h-[15px] rounded-full w-[15%]"></div>
      </div>
      </div>
      
      <div className="mt-5">
      <ul className="inline-flex items-center w-full justify-between">
      <li className="f-f-m text-sm text-brown">America</li>
      <li className="f-f-m text-sm text-brown-dark ">
      {americaCount||  0}{" "}
      Users
      </li>
      </ul>
      <div className="w-full bg-gray-200 rounded-full h-[15px] mt-2">
      <div className="bg-blue-600 h-[15px] rounded-full w-[30%]"></div>
      </div>
      </div>
      </div>
      <div className=" col-span-12 sm:col-span-8">
      <img src={MAP} className="w-full h-aut mt-[29px]" alt="" />
      </div>
      </div>
      </div>
      <div className="mt-[22px] h-[1px] bg-brown-light w-full"></div>
      <div className="text-end  pr-5 py-[18px]">
      <ul className="inline-flex items-center space-x-3">
      <li className="f-f-m text-lg text-brown">SEE DETAILS</li>
      <li>
      <img src={Right} className="w-6 h-6" alt="" />
      </li>
      </ul>
      </div>
      </div>
      </div>
    )}
    </div>
  );
}
