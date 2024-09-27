"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const VehicleAssignments = () => {
  const [assigned, setAssigned] = useState(2); // Initial value for assigned vehicles
  const [unassigned, setUnassigned] = useState(5); // Initial value for unassigned vehicles

  // Simulate changes to vehicle assignments using useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate random updates for assigned and unassigned vehicles
      const newAssigned = Math.floor(Math.random() * 5) + 1; // Random number between 1 and 5
      const newUnassigned = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10

      setAssigned(newAssigned);
      setUnassigned(newUnassigned);
    }, 5000); // Update every 5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-lg rounded-lg p-6"
    >
      <h3 className="text-xl font-bold mb-6 text-gray-700">
        Vehicle Assignments
      </h3>
      <div className="grid grid-cols-2 gap-4">
        {/* Assigned Vehicles */}
        <motion.div
          className="flex justify-between items-center p-4 bg-green-50 rounded-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-green-600 font-semibold">Assigned</div>
          <motion.div
            key={assigned} // To trigger animation on value change
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-900"
          >
            {assigned}
          </motion.div>
        </motion.div>

        {/* Unassigned Vehicles */}
        <motion.div
          className="flex justify-between items-center p-4 bg-gray-100 rounded-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-gray-500 font-semibold">Unassigned</div>
          <motion.div
            key={unassigned} // To trigger animation on value change
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-900"
          >
            {unassigned}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default VehicleAssignments;
