import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register the required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const EarningsCard = () => {
  // Data for the chart
  const data = {
    labels: ["SEP", "OCT", "NOV", "DEC", "JAN", "FEB"],
    datasets: [
      {
        label: "Earnings",
        data: [50, 75, 108, 90, 120, 130],
        borderColor: "#14532D", // Green
        backgroundColor: "rgba(20, 83, 45, 0.1)",
        borderWidth: 2,
        tension: 0.4,
        pointBackgroundColor: "#14532D",
        pointBorderColor: "#fff",
        pointHoverBorderWidth: 3,
      },
      {
        label: "Projected",
        data: [40, 55, 70, 60, 80, 100],
        borderColor: "#38BDF8", // Blue
        backgroundColor: "rgba(56, 189, 248, 0.1)",
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: {
        ticks: { color: "#6B7280", font: { size: 12 } },
        grid: { display: false },
      },
      y: {
        display: false, // Hides the y-axis
      },
    },
  };

  return (
    <div className="p-6 bg-white h-[248px] rounded-[20px] shadow-md w-full max-w-md overflow-hidden flex items-center">
        
      {/* Earnings Data Section */}
      <div className="flex flex-col justify-center pr-6">
         {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="bg-gray-100 text-green-600 text-sm px-3 py-1 rounded-lg flex items-center">
          <i className="far fa-calendar-alt mr-2"></i>
          <span>This month</span>
        </div>
      </div>

        <div className="text-2xl font-bold text-green-900">$20.9K</div>
        <div className="text-gray-500 text-xs">Total Earning</div>
        <div className="flex items-center text-green-600 text-xs mt-1">
          <i className="fas fa-arrow-up mr-1"></i>
          <span>+2.45%</span>
        </div>
        <div className="flex items-center mt-2">
          <span className="text-green-600 flex items-center">
            <i className="fas fa-check-circle mr-2"></i> On track
          </span>
        </div>
      </div>

      {/* Line Chart Section */}
      <div className="flex-1 h-[120px]">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default EarningsCard;