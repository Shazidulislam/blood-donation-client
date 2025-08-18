import React from 'react';
import { FaUser, FaHeartbeat, FaTint } from "react-icons/fa";

const ImpactCounters = () => {
      const stats = [
    {
      icon: <FaUser className="w-10 h-10 text-[#D25D5D] mb-2" />,
      number: 1500,
      label: "Donors",
    },
    {
      icon: <FaHeartbeat className="w-10 h-10 text-[#D25D5D] mb-2" />,
      number: 1200,
      label: "Patients Helped",
    },
    {
      icon: <FaTint className="w-10 h-10 text-[#D25D5D] mb-2" />,
      number: 3000,
      label: "Liters Donated",
    },
  ];
    return (
        <div>
             <section className="bg-red-50 py-12">
      <h2 className="text-3xl font-bold text-center text-[#D25D5D] mb-10">
        Our Impact So Far
      </h2>
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
          >
            <div className="flex justify-center">{stat.icon}</div>
            <h3 className="text-3xl font-bold mt-2">{stat.number.toLocaleString()}+</h3>
            <p className="text-gray-800 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
        </div>
    );
};

export default ImpactCounters;