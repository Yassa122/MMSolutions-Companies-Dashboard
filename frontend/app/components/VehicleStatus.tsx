"use client";
import { motion } from "framer-motion";

export const VehicleStatus = () => {
  const vehicleStatuses = [
    { status: "Active", count: 4, color: "green-600", bgColor: "bg-green-50" },
    { status: "In Shop", count: 1, color: "red-600", bgColor: "bg-red-50" },
    {
      status: "Out of Service",
      count: 2,
      color: "yellow-600",
      bgColor: "bg-yellow-50",
    },
    {
      status: "Under Maintenance",
      count: 3,
      color: "blue-600",
      bgColor: "bg-blue-50",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-lg rounded-lg p-6"
    >
      <h3 className="text-xl font-bold mb-6 text-gray-700">Vehicle Status</h3>
      <div className="space-y-4">
        {vehicleStatuses.map((status, index) => (
          <motion.div
            key={index}
            className={`flex justify-between items-center p-3 rounded-lg shadow-sm ${status.bgColor}`}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className={`text-${status.color} font-semibold`}>
              {status.status}
            </div>
            <div className="text-3xl font-bold text-gray-900">
              {status.count}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default VehicleStatus;
