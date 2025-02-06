import React from "react";
import Sidebar from "../../components/SuperAdminDashboard/Sidebar";
import StatsCard from "../../components/SuperAdminDashboard/StatsCard";
import WaitingList from "../../components/SuperAdminDashboard/WaitingList";
import AppointmentRequests from "../../components/SuperAdminDashboard/AppointmentRequest";
import BlogPost from "../../components/SuperAdminDashboard/BlogPost";
import Announcements from "../../components/SuperAdminDashboard/Announcements";
import AudienceMap from "../../components/SuperAdminDashboard/AudienceMap";
import IncomeStatistics from "../../components/SuperAdminDashboard/IncomeStatistics";
import UpcomingAppointment from "../../components/SuperAdminDashboard/UpcomingAppointments";
import { BiBell } from "react-icons/bi";
import { FaInfoCircle, FaRegMoon } from "react-icons/fa";
import { stats } from "../../components/SuperAdminDashboard/components/StatItems";


const Dashboard = () => {

  const boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';

  return (
    <div className="w-screen h-full bg-['#E9FAD6'] overflow-y-auto flex flex-row justify-between items-start">
      {/* Sidebar */}
      <div className="w-1/6 flex flex-col justify-start items-center">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="w-5/6 px-4 bg-[#EBF9D6] flex flex-col justify-start items-center mt-0">
        {/* Header Section */}
        <div className="w-full flex flex-row justify-between items-center mb-2 mt-4">
          <h2 className="text-green-dark mt-2">
            <label className="font-bold text-gray-800">Welcome, </label>
            <label className="font-bold text-green-dark">Super Admin - </label> 
            <label className="font-bold text-light-green-700">Michael Tosin Adesanwo</label>
          </h2>
          <div className="w-[25vw] rounded-full bg-light-green-300 h-auto px-2 py-1 mt-3 flex flex-row justify-between items-center">
            <input
              type="text"
              placeholder="Search..."
              className="search-bar rounded-full text-white placeholder-white text-base px-3 py-1 w-2/3 outline-none bg-light-green-200"
            />
            <div className="w-1/3 flex flex-row justify-center items-center">
              <a href="#" className="social-icon mx-1">
                <BiBell color="gray" size={16} />
              </a>
              <a href="#" className="social-icon mx-1">
                <FaRegMoon color="gray" size={16} />
              </a>
              <a href="#" className="social-icon mx-1">
                <FaInfoCircle color="gray" size={16} />
              </a>
              <img src="/images/Doctors.svg" className="w-8 h-8 rounded-3xl border border-gray-50 ml-2" />
            </div>
          </div>
        </div>

        <div className="w-full flex flex-row justify-between items-center">
          <div className="w-2/3 flex flex-col justify-start items-center">
              <div className="w-full flex flex-row justify-between items-center">
                  {stats.map((item, index) => (
                      <div key={index} 
                        style={{background: item.linearGradient ? item.linearGradient : 'black' , boxShadow: boxShadow}}
                        className="rounded-md w-[19%] h-24 px-2 py-2 flex flex-col justify-around items-center"
                      >
                        {item.icon}
                        {item.volume ? <label className="font-bold text-white text-xs mt-4">{item.volume}</label> : ''}
                        <label className="text-white text-xs my-0 text-center leading-3 font-bold">{item.name}</label>
                      </div>
                  ))
                  }
              </div>
              <UpcomingAppointment />
              <WaitingList />
              <AppointmentRequests />
          </div>
          <div className="1/3 flex flex-col justify-start items-center">

          </div>
        </div>
        {/* Users Role Management */}
        <div className="users-role-management card">
          <h3>Users Role Management</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Michael Tosin Adesanwo</td>
                <td>Admin</td>
                <td>Active</td>
              </tr>
              <tr>
                <td>Toluwani Ogundele</td>
                <td>Editor</td>
                <td>Active</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Blog Post and Announcements */}
        <div className="content-row">
          <BlogPost />
          <Announcements />
        </div>

        {/* Audience Map and Income Statistics */}
        <div className="content-row">
          <AudienceMap />
          <IncomeStatistics />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
