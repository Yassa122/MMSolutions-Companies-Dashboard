import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaTruck,
  FaTools,
  FaRoute,
  FaUserCheck,
} from "react-icons/fa";

const RecentActivities = () => {
  const activities = [
    {
      activity: "Vehicle X assigned to driver Y",
      icon: <FaTruck />,
      time: "2 hours ago",
    },
    {
      activity: "Service completed for vehicle Z",
      icon: <FaTools />,
      time: "3 hours ago",
    },
    {
      activity: "New vehicle added to the fleet",
      icon: <FaCheckCircle />,
      time: "1 day ago",
    },
    {
      activity: "Maintenance scheduled for vehicle A",
      icon: <FaTools />,
      time: "2 days ago",
    },
    {
      activity: "Fuel refill for vehicle B",
      icon: <FaTruck />,
      time: "2 days ago",
    },
    {
      activity: "Tire change for vehicle C",
      icon: <FaTools />,
      time: "3 days ago",
    },
    {
      activity: "Vehicle D reassigned to a new route",
      icon: <FaRoute />,
      time: "4 days ago",
    },
    {
      activity: "License renewed for vehicle E",
      icon: <FaCheckCircle />,
      time: "5 days ago",
    },
    {
      activity: "Inspection passed for vehicle F",
      icon: <FaCheckCircle />,
      time: "6 days ago",
    },
    {
      activity: "Driver G completed a training course",
      icon: <FaUserCheck />,
      time: "1 week ago",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-lg rounded-lg p-6"
    >
      <h4 className="font-bold text-lg mb-4 text-gray-800">
        Recent Activities
      </h4>
      <ul className="list-none space-y-4">
        {activities.map((item, index) => (
          <motion.li
            key={index}
            whileHover={{ scale: 1.02, backgroundColor: "#f9fafb" }} // Slight scale and background color change on hover
            transition={{ duration: 0.3 }}
            className="flex items-center p-3 rounded-md cursor-pointer hover:shadow-md"
          >
            <div className="mr-4 text-blue-500 text-2xl">{item.icon}</div>
            <div className="flex-1">
              <p className="text-gray-700 font-semibold">{item.activity}</p>
              <p className="text-sm text-gray-500">{item.time}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default RecentActivities;
