import React from 'react';
import TopBar from "../components/TopBar";
import Sidebar from "../components/Sidebar";
import DashboardCards from "../components/DashboardCards";
import WaitingList from "../components/WaitingList";
import AppointmentRequests from "../components/AppointmentRequests";
import AudienceMap from "../components/AudienceMap";
import Announcements from "../components/Announcement";
import MobileMenuToggle from '../components/MobileMenuToggle';


function Index() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#EBF9D6]">
      <MobileMenuToggle
        isOpen={isMobileMenuOpen}
        setIsOpen={setIsMobileMenuOpen}
      />
      <div className={`
        fixed inset-y-0 left-0 transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        transition-transform duration-300 ease-in-out md:relative md:translate-x-0
        z-40 md:z-auto
      `}>
        <Sidebar className="hidden md:block md:w-64 lg:w-72 overflow-scroll" />
      </div>
      <div className="flex-grow bg-gray-50 sticky z-[1000]">
        <TopBar />
        <div className="p-4 md:p-6 flex flex-col md:flex-row gap-4 md:justify-between md:gap-6 bg-[#EBF9D6]">
          <div className="md:col-span-12 lg:col-span-8 space-y-4 md:space-y-6">
            <DashboardCards />
            <WaitingList />
            <AppointmentRequests />
            <AudienceMap />
          </div>
          <div className="md:col-span-12 lg:col-span-4 space-y-4 md:space-y-6">
            <Announcements />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;