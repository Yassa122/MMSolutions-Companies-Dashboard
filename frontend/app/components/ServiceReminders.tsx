"use client";
import { motion } from "framer-motion";
import { FaExclamationTriangle } from "react-icons/fa";

export const ServiceReminders = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.4 }}
      className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between"
    >
      <div>
        <h3 className="text-lg font-bold text-gray-700 mb-2">
          Service Reminders
        </h3>
        <div className="text-red-600 text-3xl font-bold mb-2">2 Overdue</div>
        <div className="text-yellow-500 text-xl">3 Due Soon</div>
      </div>
      <div className="bg-red-100 p-4 rounded-full text-red-500">
        <FaExclamationTriangle className="text-4xl" />
      </div>
    </motion.div>
  );
};

export default ServiceReminders;
