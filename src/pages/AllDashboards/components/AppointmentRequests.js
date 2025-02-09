import React from 'react';

function AppointmentRequests() {
  const requests = [
    { 
      name: 'Nitin Verma', 
      disease: 'Child Care', 
      date: '01/27',
      approved: true 
    },
    { 
      name: 'Leena Dua', 
      disease: 'Child Care', 
      date: '01/27',
      approved: false 
    },
    { 
      name: 'Megan Mac', 
      disease: 'Child Care', 
      date: '01/27',
      approved: true 
    }
  ];

  return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-3 md:p-4 border-b flex flex-col md:flex-row justify-between items-start md:items-center space-y-2 md:space-y-0">
              <h3 className="text-base md:text-lg font-semibold">Appointment Requests</h3>
              <button className="text-green-600 hover:bg-green-50 px-2 py-1 rounded text-sm">
                  See more
              </button>
          </div>
          <div className="overflow-x-auto">
              <table className="w-full min-w-[500px]">
                  <thead className="bg-gray-50">
                      <tr>
                          {['Name', 'Disease', 'Date', 'Approval'].map((header) => (
                              <th
                                  key={header}
                                  className="p-2 md:p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                  {header}
                              </th>
                          ))}
                      </tr>
                  </thead>
                  <tbody>
                      {requests.map((request, index) => (
                          <tr key={index} className="hover:bg-gray-50">
                              <td className="p-2 md:p-3 flex items-center">
                                  <img
                                      src="/path/to/avatar"
                                      alt={request.name}
                                      className="w-8 h-8 md:w-10 md:h-10 rounded-full mr-2 md:mr-3"
                                  />
                                  <span className="text-sm md:text-base">{request.name}</span>
                              </td>
                              <td className="p-2 md:p-3 text-sm md:text-base">{request.disease}</td>
                              <td className="p-2 md:p-3 text-sm md:text-base">{request.date}</td>
                              <td className="p-2 md:p-3">
                                  <div className="flex space-x-1 md:space-x-2">
                                      <button
                                          className={`px-1.5 md:px-2 py-0.5 md:py-1 rounded-full text-xs ${request.approved
                                                  ? 'bg-green-100 text-green-800'
                                                  : 'bg-red-100 text-red-800'
                                              }`}
                                      >
                                          {request.approved ? 'Approve' : 'Declined'}
                                      </button>
                                  </div>
                              </td>
                          </tr>
                      ))}
                  </tbody>
              </table>
          </div>
      </div>
  );
}

export default AppointmentRequests;