import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

const requests = [
  { name: "Nitin Verma", disease: "Child Care", date: "01/27", approved: false },
  { name: "Leena Dua", disease: "Child Care", date: "01/27", approved: true },
];

const AppointmentRequests = () => (
  <div className="w-full shadow-md rounded-md mt-4 flex flex-col justify-start items-center px-4 py-4 bg-white">
    <h3 className="text-[#1A4700] font-bold text-left w-full">Appointment Requests</h3>

    <div className="w-full py-2 flex flex-col justify-center items-start">
      <table className="w-11/12">
          <thead>
            <tr>
              <td className="px-3 py-2 text-sm text-center font-bold text-[#555555]">Name</td>
              <td className="px-3 py-2 text-sm text-center font-bold text-[#555555]">Disease</td>
              <td className="px-3 py-2 text-sm text-center font-bold text-[#555555]">Date</td>
              <td className="px-3 py-2 text-sm text-center font-bold text-[#555555]">Approval</td>
            </tr>
          </thead>
          <tbody>
            {requests.map((req, index) => (
              <tr key={index} className="rounded-full w-full mt-4">
                <td className="px-3 py-3 font-bold text-sm text-[#1A4700] text-center">{req.name}</td>
                <td className="px-3 py-3 font-bold text-sm text-[#1A4700] text-center">{req.disease}</td>
                <td className="px-3 py-3 font-bold text-sm text-[#1A4700] text-center">{req.date}</td>
                <td className="px-3 py-3 font-bold text-sm text-[#1A4700] flex flex-row justify-center items-center">
                  <FaCheck className="bg-green-700 text-white text-2xl px-1 py-1 mx-1 rounded-3xl" /> 
                  <FaTimes className="bg-red-700 text-white text-2xl px-1 py-1 mx-1 rounded-3xl" />
                </td>
              </tr>
            ))}
          </tbody>
      </table>
    </div>
  </div>
);

export default AppointmentRequests;
