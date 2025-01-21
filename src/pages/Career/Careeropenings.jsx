import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const CareerOpenings = () => {
  const [selectedCategory, setSelectedCategory] = useState("ENGINEERING");

  // Define the job cards for each category
  const jobCategories = {
    "HR & ADMIN": [
      {
        title: "Network Administrator",
        experience: "3 years",
        deadline: "2021-06-20",
      },
      {
        title: "System Administrator",
        experience: "4 years",
        deadline: "2021-07-25",
      },
      {
        title: "IT Support Specialist",
        experience: "2 years",
        deadline: "2021-08-18",
      },
      {
        title: "IT Project Manager",
        experience: "5 years",
        deadline: "2022-01-10",
      },
      {
        title: "Database Administrator",
        experience: "4 years",
        deadline: "2021-11-05",
      },
    ],

    ENGINEERING: [
      {
        title: "Software Engineer",
        experience: "4 years",
        deadline: "2021-07-10",
      },
      {
        title: "DevOps Engineer",
        experience: "3 years",
        deadline: "2021-08-01",
      },
      {
        title: "Backend Developer",
        experience: "5 years",
        deadline: "2022-01-15",
      },
      {
        title: "Cloud Architect",
        experience: "6 years",
        deadline: "2022-03-10",
      },
      {
        title: "QA Engineer",
        experience: "3 years",
        deadline: "2021-09-30",
      },
    ],
    SUPPORT: [
      {
        title: "Customer Support Representative",
        experience: "2 years",
        deadline: "2021-10-12",
      },
      {
        title: "Help Desk Specialist",
        experience: "1 year",
        deadline: "2021-09-30",
      },
      {
        title: "Technical Support Engineer",
        experience: "3 years",
        deadline: "2021-11-25",
      },
      {
        title: "Client Services Manager",
        experience: "4 years",
        deadline: "2022-02-18",
      },
      {
        title: "Customer Success Manager",
        experience: "3 years",
        deadline: "2021-12-20",
      },
    ],
    DESIGN: [
      {
        title: "UX/UI Designer",
        experience: "3 years",
        deadline: "2021-09-01",
      },
      {
        title: "Graphic Designer",
        experience: "2 years",
        deadline: "2021-08-15",
      },
      {
        title: "Web Designer",
        experience: "4 years",
        deadline: "2021-07-30",
      },
      {
        title: "Visual Designer",
        experience: "3 years",
        deadline: "2021-10-10",
      },
      {
        title: "Product Designer",
        experience: "5 years",
        deadline: "2022-01-05",
      },
    ],
    "DIGITAL MARKETING": [
      {
        title: "SEO Specialist",
        experience: "2 years",
        deadline: "2021-09-15",
      },
      {
        title: "PPC Specialist",
        experience: "3 years",
        deadline: "2021-10-20",
      },
      {
        title: "Content Marketing Specialist",
        experience: "2 years",
        deadline: "2021-11-12",
      },
      {
        title: "Social Media Manager",
        experience: "4 years",
        deadline: "2022-03-01",
      },
      {
        title: "Email Marketing Specialist",
        experience: "1 year",
        deadline: "2022-01-25",
      },
    ],
  };

  return (
    <div className="flex flex-col items-center mx-auto m-6">
      {/* Header Section */}
      <div className="text-center mb-10">
        <p className="text-lg font-light text-gray-800 mb-2 uppercase">
          Come join us
        </p>
        <h2 className="text-5xl font-bold text-[#1A4402] mb-4">
          Career Openings
        </h2>
        <p className="text-md text-gray-600 max-w-3xl">
          We’re always looking for creative, talented self-starters to join the
          JMC family. Check out our open roles below and fill out an application.
        </p>
      </div>

      {/* Career Categories and Job Cards Section */}
      <div className="flex w-full lg:flex-row flex-col justify-start items-start">
        {/* Sidebar with Career Categories */}
        <div className="lg:flex lg:flex-col w-full lg:w-[250px] lg:ml-[180px] text-center space-x-2 lg:space-x-0 flex-wrap mb-6 lg:mb-0 justify-center gap-4">
          {Object.keys(jobCategories).map((category) => (
            <button
              key={category}
              className={`text-lg font-semibold ${
                selectedCategory === category
                  ? "text-[#FCB83F]" // Active category color
                  : "text-gray-800 hover:text-[#1A4402]"
              }  lg:text-left`} // Add lg:text-left here
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Job Cards Section */}
        <div className="flex flex-col justify-start lg:w-full  m-auto lg:m-0 lg:max-w-[897px]">
          {jobCategories[selectedCategory].map((job, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-white shadow-md rounded-lg p-4  mb-6 border border-gray-200 w-full"
            >
              {/* Job Title */}
              <h3 className="lg:text-xl font-semibold text-gray-800 lg:ml-6">{job.title}</h3>

              {/* Experience & Deadline on the Same Line */}
              <div className="flex gap-6 items-center">
                <div className="lg:mr-[140px]">
                  <h4 className="text-sm font-medium text-[#D4D4D4]">Experience</h4>
                  <p className="text-md text-gray-800">{job.experience}</p>
                </div>
                <div className="lg:mr-[90px]">
                  <h4 className="text-sm font-medium text-[#D4D4D4]">Deadline</h4>
                  <p className="text-md text-gray-800">{job.deadline}</p>
                </div>
                <div className="text-[#D4D4D4] lg:mr-6">
                  <FaArrowRight />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerOpenings;