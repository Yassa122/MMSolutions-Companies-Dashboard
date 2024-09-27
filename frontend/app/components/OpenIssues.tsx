"use client";
import { FaTools } from "react-icons/fa";
import { motion } from "framer-motion";

const OpenIssues = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between"
    >
      <div>
        <h3 className="text-lg font-bold text-gray-700 mb-2">Open Issues</h3>
        <p className="text-yellow-500 text-3xl font-bold">5 Open</p>
      </div>
      <div className="bg-yellow-100 p-4 rounded-full text-yellow-500">
        <FaTools className="text-4xl" />
      </div>
    </motion.div>
  );
};

export default OpenIssues;
