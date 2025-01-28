import React from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";

const data = [
  { name: "Patient Services", value: 53 },
  { name: "Pharmacy Services", value: 31 },
  { name: "Diagnostic Services", value: 16 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const IncomeStatistics = () => (
  <div className="card">
    <h3>Income Statistics</h3>
    <PieChart width={300} height={300}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index]} />
        ))}
      </Pie>
      <Legend />
    </PieChart>
  </div>
);

export default IncomeStatistics;
