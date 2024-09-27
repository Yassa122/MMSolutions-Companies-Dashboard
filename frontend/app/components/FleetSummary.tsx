import { motion } from "framer-motion";
import { FaTruck, FaTools, FaExclamationCircle } from "react-icons/fa";

const FleetSummary = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-lg rounded-lg p-6"
    >
      <h4 className="font-bold text-lg mb-6 text-gray-700">Fleet Overview</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="flex items-center space-x-3">
          <motion.div
            className="bg-blue-100 p-3 rounded-full text-blue-600"
            whileHover={{ scale: 1.2 }} // Individual hover effect
            transition={{ duration: 0.3 }}
          >
            <FaTruck className="text-xl" />
          </motion.div>
          <div>
            <h5 className="font-semibold text-gray-700">Total Vehicles</h5>
            <p className="text-2xl font-bold text-gray-900">200</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <motion.div
            className="bg-green-100 p-3 rounded-full text-green-600"
            whileHover={{ scale: 1.2 }} // Individual hover effect
            transition={{ duration: 0.3 }}
          >
            <FaTruck className="text-xl" />
          </motion.div>
          <div>
            <h5 className="font-semibold text-gray-700">Active Vehicles</h5>
            <p className="text-2xl font-bold text-gray-900">150</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <motion.div
            className="bg-orange-100 p-3 rounded-full text-orange-600"
            whileHover={{ scale: 1.2 }} // Individual hover effect
            transition={{ duration: 0.3 }}
          >
            <FaTools className="text-xl" />
          </motion.div>
          <div>
            <h5 className="font-semibold text-gray-700">In Maintenance</h5>
            <p className="text-2xl font-bold text-gray-900">30</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <motion.div
            className="bg-red-100 p-3 rounded-full text-red-600"
            whileHover={{ scale: 1.2 }} // Individual hover effect
            transition={{ duration: 0.3 }}
          >
            <FaExclamationCircle className="text-xl" />
          </motion.div>
          <div>
            <h5 className="font-semibold text-gray-700">Inactive Vehicles</h5>
            <p className="text-2xl font-bold text-gray-900">20</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FleetSummary;
