import React from "react";

const BenefitsSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-start w-[1118px] m-auto justify-between">
      {/* Left Side */}
      <div className="md:w-1/2 flex items-start p-4">
        <div className="mt-[60px]">
          <h3 className="text-[#1A4402] font-light text-lg relative uppercase">
            Benefits
          </h3>
          <h1 className="text-6xl font-semibold text-[#1A4402] mt-2">
            Why You Should Join Our <br />
            Awesome Team
          </h1>
          <p className="text-gray-600 mt-4 text-sm w-[439px] leading-relaxed">
            We want to feel like home when you are working at JMC (Japan
            Marketing & Consultancy Limited) & for that we have curated a great
            set of benefits for you. It all starts with the free lunch!
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="md:w-1/2 grid grid-cols-2 gap-6 p-4">
        {/* Row 1, Column 1 */}
        <div className="flex flex-col items-start mt-[60px]">
          <div className="bg-[#E7F2FF] p-2 mb-4">
            <img src="/icons/contacts-icon.svg" alt="Teamwork Icon" className="w-8 h-8" />
          </div>
          <h4 className="text-xl font-semibold text-gray-800 text-left">
            Team Work
          </h4>
          <p className="text-gray-600 text-sm mt-2 text-left">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry.
          </p>
        </div>

        {/* Row 1, Column 2 */}
        <div className="flex flex-col items-start mt-[60px]">
          <div className="mb-4 p-2 bg-[#F1F7E8]">
            <img src="/icons/whined.svg" alt="Whined Icon" className="w-8 h-8" />
          </div>
          <h4 className="text-xl font-semibold text-gray-800 text-left">
            Whined Perks
          </h4>
          <p className="text-gray-600 text-sm mt-2 text-left">
            Enjoy exclusive benefits that enhance your personal and professional
            life while working with us.
          </p>
        </div>

        {/* Row 2, Column 1 */}
        <div className="flex flex-col items-start mt-[60px]">
          <div className="mb-4 p-2 bg-[#EFF2F5]">
            <img src="/icons/opportunity.svg" alt="Opportunity Icon" className="w-10 h-10" />
          </div>
          <h4 className="text-xl font-semibold text-gray-800 text-left">
            Opportunities
          </h4>
          <p className="text-gray-600 text-sm mt-2 text-left">
            Access a wide array of growth and learning opportunities to help you
            achieve your goals.
          </p>
        </div>

        {/* Row 2, Column 2 */}
        <div className="flex flex-col items-start mt-[60px]">
          <div className="mb-4 p-2 bg-[#FFEEED]">
            <img src="/icons/charts.svg" alt="Charts Icon" className="w-8 h-8" />
          </div>
          <h4 className="text-xl font-semibold text-gray-800 text-left">
            Data Insights
          </h4>
          <p className="text-gray-600 text-sm mt-2 text-left">
            Leverage data-driven insights to make impactful contributions to
            your team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;