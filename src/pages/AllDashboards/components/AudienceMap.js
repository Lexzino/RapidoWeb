import React from 'react';

function AudienceMap() {
  const regions = [
    { name: 'Europe', users: 550 },
    { name: 'Asia', users: 123 },
    { name: 'Africa', users: 239 },
    { name: 'Australia', users: 78 },
    { name: 'America', users: 78 }
  ];

  return (
      <div className="bg-white rounded-lg shadow-md p-3 md:p-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-3 md:mb-4 space-y-2 md:space-y-0">
              <h3 className="text-base md:text-lg font-semibold">Audience Map Location</h3>
              <button className="text-green-600 hover:bg-green-50 px-2 py-1 rounded text-sm">
                  See Details
              </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                  {regions.map((region, index) => (
                      <div key={index} className="flex justify-between items-center">
                          <span className="text-sm md:text-base">{region.name}</span>
                          <div className="w-24 md:w-32 bg-gray-200 rounded-full h-2">
                              <div
                                  className="bg-green-600 h-2 rounded-full"
                                  style={{ width: `${(region.users / 1000) * 100}%` }}
                              ></div>
                          </div>
                      </div>
                  ))}
              </div>
              <div className="hidden md:block">
                  {/* World map graphic */}
                  <div className="bg-gray-100 h-36 md:h-48 rounded-lg flex items-center justify-center">
                      World Map Graphic
                  </div>
              </div>
          </div>
      </div>
  );
}


export default AudienceMap;