"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export const ActiveWorkOrders = () => {
  const [workOrders, setWorkOrders] = useState({ open: 0, pending: 0 });

  // Simulate fetching data
  useEffect(() => {
    const fetchData = () => {
      // Dummy data to simulate API response
      const data = {
        open: Math.floor(Math.random() * 100), // Random number between 0-99
        pending: Math.floor(Math.random() * 50), // Random number between 0-49
      };
      setWorkOrders(data);
    };

    fetchData();
  }, []);

  return (
    <motion.div
      className="bg-white shadow-md rounded-lg p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-xl font-bold mb-6">Active Work Orders</h3>

      {/* Open Work Orders */}
      <motion.div
        className="flex justify-between items-center bg-teal-50 p-3 rounded-lg shadow-sm mb-4"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <div className="text-teal-500 font-semibold">Open Work Orders</div>
        <div className="text-3xl font-bold text-gray-900">
          {workOrders.open}
        </div>
      </motion.div>

      {/* Pending Work Orders */}
      <motion.div
        className="flex justify-between items-center bg-yellow-50 p-3 rounded-lg shadow-sm"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <div className="text-yellow-600 font-semibold">Pending Work Orders</div>
        <div className="text-3xl font-bold text-gray-900">
          {workOrders.pending}
        </div>
      </motion.div>
    </motion.div>
  );
};
