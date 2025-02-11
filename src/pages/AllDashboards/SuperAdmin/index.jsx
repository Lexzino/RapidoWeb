import React from 'react';
import DashboardCards from "../components/DashboardCards";
import UpComingAppointment from "../components/UpcomingAppointments";
import WaitingList from "../components/WaitingList";
import AppointmentRequests from "../components/AppointmentRequests";
import AudienceMap from "../components/AudienceMap";
// import Announcements from "../components/Announcement";
import UserInfo from "../components/UsersInfo";
import BlogPosts from "../components/BlogPost";
import IncomeStatistics from "../components/IncomeStatistics";



function Index() {
  return (
    <div className="p-4 md:p-6">
      <div className="min-w-[700px] flex flex-col md:flex-row gap-4 md:justify-between md:gap-6">
        <div className="flex-grow md:w-2/3 space-y-4 md:space-y-6">
          <DashboardCards />
          <UpComingAppointment />
          <WaitingList />
          <AppointmentRequests />
          <AudienceMap />
        </div>
        <div className="md:w-1/3 space-y-4 md:space-y-6">
          <UserInfo />
          <BlogPosts />
          <IncomeStatistics />
        </div>
      </div>
    </div>
  );
}

export default Index;