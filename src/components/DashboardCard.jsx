import React from "react";

const DashboardCard = ({ title, value }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
      <h3 className="text-gray-500 text-sm">{title}</h3>
      <p className="text-2xl font-bold mt-2">{value}</p>
    </div>
  );
};

export default DashboardCard;
