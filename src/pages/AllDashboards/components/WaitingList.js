import React from 'react';

function WaitingList() {
  const doctors = [
    { 
      name: 'Brooklyn Simmons', 
      email: 'brooklyn@gmail.com', 
      specialty: 'Dermatologist', 
      date: '21/12/2025', 
      status: 'Approved' 
    },
    { 
      name: 'Kristin Watson', 
      email: 'kristin@gmail.com', 
      specialty: 'Infectious Disease', 
      date: '22/12/2025', 
      status: 'Declined' 
    },
    // More doctors...
  ];

  return (
    <div className="bg-white rounded-lg shadow-md overflow-x-auto">
      <div className="p-4 border-b flex flex-col md:flex-row justify-between items-center">
        <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-0">Waiting List</h3>
        <button className="text-green-600 hover:bg-green-50 px-2 py-1 rounded text-sm md:text-base">
          Add new doctor
        </button>
      </div>
      <div className="w-full overflow-x-scroll">
        <table className="w-full min-w-[600px]">
        <thead className="bg-gray-50">
          <tr>
            {['Name', 'Email', 'Profession', 'Date', 'Status'].map((header) => (
              <th 
                key={header} 
                className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="p-3 flex items-center">
                <img 
                  src="/path/to/avatar" 
                  alt={doctor.name} 
                  className="w-10 h-10 rounded-full mr-3" 
                />
                {doctor.name}
              </td>
              <td className="p-3">{doctor.email}</td>
              <td className="p-3">{doctor.specialty}</td>
              <td className="p-3">{doctor.date}</td>
              <td className="p-3">
                <span 
                  className={`px-2 py-1 rounded-full text-xs ${
                    doctor.status === 'Approved' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {doctor.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default WaitingList;