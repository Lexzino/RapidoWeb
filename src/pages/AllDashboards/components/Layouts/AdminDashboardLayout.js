// components/layouts/DashboardLayout.jsx
import React from 'react';
import TopBar from "../TopBar";
import Sidebar from "../Sidebar";
import MobileMenuToggle from '../MobileMenuToggle';

const DashboardLayout = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Mobile Menu Toggle */}
      <MobileMenuToggle
        isOpen={isMobileMenuOpen}
        setIsOpen={setIsMobileMenuOpen}
      />

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        transition-transform duration-300 ease-in-out md:relative md:translate-x-0
        z-40 md:z-auto
      `}>
        <div className="flex-1 overflow-y-auto h-screen">
        <Sidebar className="md:w-64 lg:w-72" />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Fixed TopBar */}
        <div className="sticky top-0 z-30 bg-white">
          <TopBar />
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto bg-[#EBF9D6]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;