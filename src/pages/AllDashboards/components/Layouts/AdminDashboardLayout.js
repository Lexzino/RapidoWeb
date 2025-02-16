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
      <aside className={`
        fixed inset-y-0 left-0 transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        transition-transform duration-300 ease-in-out md:sticky md:translate-x-0 top-0
        z-40 md:z-auto md:h-screen md:w-64 lg:w-72 hidden md:block`}>
        <Sidebar className="" />
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
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