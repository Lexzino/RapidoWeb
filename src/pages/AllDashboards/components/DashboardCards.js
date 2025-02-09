import React from 'react';
import { 
  Users, 
  Stethoscope, 
  CalendarCheck, 
  ChartBar 
} from 'lucide-react';

const DashboardCards = () => {
  const cards = [
    { 
      icon: Users, 
      title: 'New Patients', 
      value: 125, 
      color: 'purple' 
    },
    { 
      icon: Stethoscope, 
      title: 'OPD Patients', 
      value: 218, 
      color: 'pink' 
    },
    { 
      icon: CalendarCheck, 
      title: "Today's Operations", 
      value: 25, 
      color: 'green' 
    },
    { 
      icon: ChartBar, 
      title: 'Visitors', 
      value: 2479, 
      color: 'blue' 
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
      {cards.map((card, index) => (
        <div 
          key={index} 
          className="bg-white p-2 md:p-4 rounded-lg shadow-md flex items-center justify-between"
        >
          <div>
            <p className="text-xs md:text-sm text-gray-500">{card.title}</p>
            <h3 className="text-base md:text-2xl font-bold">{card.value}</h3>
          </div>
          <card.icon 
            className={`text-${card.color}-500`} 
            size={24}
          />
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;