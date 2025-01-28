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


const Dashboard = () => {
  return (
    <div className="container">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="main-content">
        {/* Header Section */}
        <div className="header">
          <h2>Welcome, Super Admin - Michael Tosin Adesanwo</h2>
          <div className="top-right">
            <input
              type="text"
              placeholder="Search..."
              className="search-bar"
            />
            <div className="social-media">
              <a href="#" className="social-icon">🔵</a>
              <a href="#" className="social-icon">🟣</a>
              <a href="#" className="social-icon">🟡</a>
            </div>
          </div>
        </div>

        {/* Statistics Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }}>
          <StatsCard title="Number of Visitors" value="500" bgColor="#4CAF50" />
          <StatsCard title="Registered Specialists" value="200" bgColor="#FF9800" />
          <StatsCard title="Registered Pharmacies" value="150" bgColor="#03A9F4" />
          <StatsCard title="Ratings" value="4.8/5" bgColor="#8BC34A" />
        </div>

        {/* Upcoming Appointment */}
        <UpcomingAppointment />

        {/* Waiting List and Appointment Requests */}
        <div className="content-row">
          <WaitingList />
          <AppointmentRequests />
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
