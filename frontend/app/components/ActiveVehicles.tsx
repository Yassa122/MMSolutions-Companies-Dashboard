import { FaTruckMoving } from "react-icons/fa";
import { motion } from "framer-motion";

interface ActiveVehiclesProps {
  count: number;
}

const ActiveVehicles = ({ count }: ActiveVehiclesProps) => {
  return (
    <motion.div
      className="flex items-center bg-white shadow-lg rounded-lg p-6"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
    >
      <motion.div
        className="text-blue-500 text-3xl"
        whileHover={{ rotate: 360 }}
      >
        <FaTruckMoving />
      </motion.div>
      <div className="ml-4">
        <h3 className="font-bold text-lg">Active Vehicles</h3>
        <p className="text-gray-600">{count}</p>
      </div>
    </motion.div>
  );
};

export default ActiveVehicles;
