import React, { useEffect } from "react";
import AOS from "aos"; // Import AOS

export default function RecentBlogPosts() {
  useEffect(() => {
    AOS.init({
      duration: 8000, // Animation duration in ms
      easing: "ease-in-out", // Easing function
      once: true, // If true, the animation will only happen once
    });
  }, []);

  return (
    <div className="w-full max-w-screen-xl m-auto py-8 px-6">
      <h2 className="text-2xl font-medium text-[#1A1A1A] mb-6" data-aos="fade-up">Recent Blog Posts</h2>

      <div className="flex flex-col lg:flex-row justify-between space-y-6 lg:space-y-0 lg:space-x-8">
        {/* Left Side */}
        <div className="w-full lg:w-1/2" data-aos="fade-right">
          <div className="p-2 rounded-md">
            <img src="/images/ux-review.svg" alt="UX Review" className="w-full h-[228px] mb-4 object-cover" />
            <p className="text-[#1A4402] text-sm mb-2">Olivia Rhye · Jan 2025</p>
            <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">UX Review Presentations</h3>
            <p className="text-[#667085] text-[16px] mb-4">
              How do you create compelling presentations that wow your colleagues and impress your managers?
            </p>
            <div className="flex space-x-4 text-sm">
              <button className="bg-[#F9F5FF] text-[#1A4402] px-2 py-2 rounded-2xl border-none cursor-pointer hover:underline">
                Design
              </button>
              <button className="bg-[#EEF4FF] text-[#FCB83F] px-2 py-2 rounded-2xl border-none cursor-pointer hover:underline">
                Research
              </button>
              <button className="bg-[#FDF2FA] text-[#C11574] px-2 py-2 rounded-2xl border-none cursor-pointer hover:underline">
                Presentation
              </button>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-[592px] space-y-6">
          {/* First Post */}
          <div className="flex flex-col lg:flex-row items-start space-x-4 p-2" data-aos="fade-left">
            <img src="/images/migrating.svg" alt="Blog Image" className="w-full lg:w-[320px] object-cover mb-4 lg:mb-0" />
            <div>
              <p className="text-[#1A4402] text-sm mb-2">Phoenix Baker • 1 Jan 2025</p>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">Migrating to Linear 101</h3>
              <p className="text-[#667085] text-[16px] mb-4">
                Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...
              </p>
              <div className="flex space-x-4 text-sm">
                <button className="bg-[#F0F9FF] text-[#026AA2] px-2 py-2 rounded-2xl border-none cursor-pointer hover:underline">
                  Design
                </button>
                <button className="bg-[#FDF2FA] text-[#C11574] px-2 py-2 rounded-2xl border-none cursor-pointer hover:underline">
                  Research
                </button>
              </div>
            </div>
          </div>

          {/* Second Post */}
          <div className="flex flex-col lg:flex-row items-start space-x-4 p-2" data-aos="fade-up">
            <img src="/images/api-stack.svg" loading="lazy" alt="Blog Image" className="w-full lg:w-[320px] object-cover mb-4 lg:mb-0" />
            <div>
              <p className="text-[#1A4402] text-sm mb-2">Lana Steiner • 1 Jan 2023</p>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">Building your API Stack</h3>
              <p className="text-[#667085] text-[16px] mb-4">
                The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing...
              </p>
              <div className="flex space-x-4 text-sm">
                <button className="bg-[#ECFDF3] text-[#027A48] px-2 py-2 rounded-2xl border-none cursor-pointer hover:underline">
                  Design
                </button>
                <button className="bg-[#FDF2FA] text-[#C11574] px-2 py-2 rounded-2xl border-none cursor-pointer hover:underline">
                  Research
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Third Post */}
      <div className="flex flex-col lg:flex-row items-start space-x-4 p-2 mt-14" data-aos="fade-up">
        <img
          src="/images/learn-banner.svg"
          loading="lazy"
          alt="Blog Image"
          className="w-full lg:w-[592px] object-cover mb-4 lg:mb-0"
        />
        <div>
          <p className="text-[#1A4402] text-sm mb-2">Olivia Rhye • 1 Jan 2025</p>
          <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">Grid system for better Design User Interface</h3>
          <p className="text-[#667085] text-[16px] mb-4">
            A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal
            lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid
            systems are used to create a consistent look and feel across a website, and can help to make the layout more
            visually appealing and easier to navigate.
          </p>
          <div className="flex space-x-4 text-sm">
            <button className="bg-[#F9F5FF] text-[#1A4402] px-2 py-2 rounded-2xl border-none cursor-pointer hover:underline">
              Design
            </button>
            <button className="bg-[#FDF2FA] text-[#C11574] px-2 py-2 rounded-2xl border-none cursor-pointer hover:underline">
              Interface
            </button>
          </div>
        </div>
      </div>

      {/* SupBg Section */}
      <div className="relative mt-[80px]" data-aos="zoom-in">
        <img
          src="/images/supplement-bg.jpeg"
          loading="lazy"
          alt="Supplement Background"
          className="w-full h-[296px] rounded-xl object-cover sm:h-[200px] lg:h-[296px]"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
          <p className="text-lg text-[#184363]">Pyridoxine Vitamin B6</p>
          <h3 className="text-3xl font-bold text-[#184363]">Vitamins & Supplements</h3>
          <button className="py-2 px-4 bg-[#39CB74] text-white rounded-full flex items-center justify-center mt-4">
            View more <span className="ml-2">&gt;</span>
          </button>
        </div>

        {/* Hidden on small screens */}
        <img
          src="/images/amber-glass.svg"
          alt="Amber Glass"
          className="absolute left-[5%] top-[50%] transform -translate-y-1/2 w-[382px] pb-8 hidden sm:block lg:w-[382px] h-auto"
        />
        <img
          src="/images/pill-box.svg"
          alt="Pill Box"
          className="absolute right-[5%] top-[50%] transform -translate-y-1/2 w-[382px] pt-[100px] hidden sm:block lg:w-[382px] h-auto"
        />
      </div>
    </div>
  );
}