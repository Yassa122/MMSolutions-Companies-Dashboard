"use client";
import {  useState } from "react";
import { Line } from "react-chartjs-2";
import {
  FaBars,
  FaSearch,
  FaCog,
  FaUserCircle,
  FaBell,
  FaTimes,
  FaTools,
  FaDollarSign,
  FaTruckMoving,
  FaWrench,
  FaClipboardCheck,
  FaFilter,
  FaSort,
  FaHome,
} from "react-icons/fa";
import {
  Chart as ChartJS,
  LineElement,
  // BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
// import { useRouter } from "next/navigation";
import Image from "next/image";
import mmsoln from "../../mmsoln.png";
// Import the components
import ServiceReminders from "../../components/ServiceReminders";
import OpenIssues from "../../components/OpenIssues";
import TimeToResolve from "../../components/TimeToResolve";
import VehicleAssignments from "../../components/VehicleAssignments";
import VehicleStatus from "../../components/VehicleStatus";
import PieChart from "@/app/components/PieChart";
// import SummaryCard from "@/app/components/SummaryCard";
import CustomBarChart from "@/app/components/CustomBarChart";
import EnhancedWidget from "@/app/components/EnhancedWidget";
import ProgressBar from "@/app/components/ProgressBar";
import NotificationBell from "@/app/components/NotificationBell";
// import ActiveVehicles from "@/app/components/ActiveVehicles";
// import RecentActivities from "@/app/components/RecentActivities";
// import FleetSummary from "@/app/components/FleetSummary";
import { MdOutlineAssignment } from "react-icons/md";
import { ActiveWorkOrders } from "@/app/components/ActiveWorkOrders";
import { motion } from "framer-motion";
import FleetSummary from "@/app/components/FleetSummary";
import RecentActivities from "@/app/components/RecentActivities";
import { FaChartPie } from "react-icons/fa6";
// Chart.js registration
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  ArcElement
);

// Sidebar Component
interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({ isOpen }: SidebarProps) => {
  const [active, setActive] = useState("Dashboard");
  const [isCollapsed, setIsCollapsed] = useState(false); // State to handle collapse

  const handleNavClick = (section: string) => {
    setActive(section);
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const menuItems = [
    { name: "Dashboard", icon: <FaHome /> },
    { name: "Notifications", icon: <FaBell /> },
    { name: "Service", icon: <FaTools /> },
    { name: "Assignments", icon: <MdOutlineAssignment /> },
    { name: "Profile", icon: <FaUserCircle /> },
    { name: "Reports", icon: <FaChartPie /> },
    { name: "Fleet Summary", icon: <FaTruckMoving /> },
    { name: "Settings", icon: <FaCog /> },
  ];

  return (
    <div
      className={`fixed top-0 left-0 h-full bg-neutral-900 text-white shadow-lg z-20 transition-all duration-300 ease-in-out transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } ${isCollapsed ? "w-16" : "w-64"} md:translate-x-0`}
    >
      {/* Sidebar Header with logo and collapse button */}
      <div className="flex justify-between items-center p-4">
        {!isCollapsed && (
          <Image
            src={mmsoln} // Replace with your image
            alt="Fleet Logo"
            width={150}
            height={50}
            className="rounded-md"
          />
        )}
        <button
          className="text-white transition-all duration-300"
          onClick={toggleCollapse}
        >
          {isCollapsed ? <FaBars /> : <FaTimes />}
        </button>
      </div>

      {/* Sidebar Menu */}
      <ul className="space-y-6 p-4">
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={`flex items-center cursor-pointer p-3 rounded-lg transition-all duration-200 ease-in-out space-x-3 ${
              active === item.name
                ? "bg-blue-600 text-white"
                : "text-gray-400 hover:bg-gray-800 hover:text-white"
            }`}
            onClick={() => handleNavClick(item.name)}
          >
            <span className="text-xl">{item.icon}</span>
            {!isCollapsed && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {item.name}
              </motion.span>
            )}
          </li>
        ))}
      </ul>

      {/* Sidebar Footer with Settings */}
      <div className="absolute bottom-4 left-0 w-full">
        <div
          className={`flex items-center justify-center space-x-2 p-3 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white cursor-pointer transition-all duration-200 ${
            active === "Settings" ? "bg-blue-600 text-white" : ""
          }`}
          onClick={() => handleNavClick("Settings")}
        >
          <span className="text-xl">
            <FaCog />
          </span>
          {!isCollapsed && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Settings
            </motion.span>
          )}
        </div>
      </div>
    </div>
  );
};
// TopBar Component
interface TopBarProps {
  toggleSidebar: () => void;
}

const TopBar = ({ toggleSidebar }: TopBarProps) => {
  return (
    <motion.div
      className="flex justify-between items-center bg-white p-4 shadow-md fixed top-0 left-0 right-0 z-10 md:pl-64"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Left Side: Sidebar Toggle, Search, and Filters */}
      <div className="flex items-center space-x-4">
        <button className="text-gray-500 md:hidden" onClick={toggleSidebar}>
          <FaBars />
        </button>

        {/* Search Input */}
        <div className="relative">
          <FaSearch className="absolute left-3 top-3 text-gray-500" />
          <input
            type="text"
            placeholder="Search Fleet Manager..."
            className="border border-gray-300 rounded-lg pl-10 pr-4 py-2 w-80 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        {/* Filter Button */}
        <button className="text-gray-500 hover:text-blue-600 flex items-center space-x-1 transition">
          <FaFilter />
          <span className="hidden sm:inline">Filters</span>
        </button>

        {/* Sort Button */}
        <button className="text-gray-500 hover:text-blue-600 flex items-center space-x-1 transition">
          <FaSort />
          <span className="hidden sm:inline">Sort</span>
        </button>
      </div>

      {/* Right Side: Action Icons */}
      <div className="flex items-center space-x-6">
        {/* Notifications */}
        <div className="relative">
          <FaBell className="text-gray-500 hover:text-blue-600 text-xl cursor-pointer transition" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            3
          </span>
        </div>

        {/* Settings */}
        <div className="relative group">
          <FaCog className="text-gray-500 hover:text-blue-600 text-xl cursor-pointer transition" />
          <span className="absolute left-1/2 transform -translate-x-1/2 top-10 text-xs bg-black text-white p-1 rounded opacity-0 group-hover:opacity-100 transition">
            Settings
          </span>
        </div>

        {/* User Profile */}
        <div className="relative group">
          <FaUserCircle className="text-gray-500 hover:text-blue-600 text-xl cursor-pointer transition" />
          <span className="absolute left-1/2 transform -translate-x-1/2 top-10 text-xs bg-black text-white p-1 rounded opacity-0 group-hover:opacity-100 transition">
            Profile
          </span>
        </div>
      </div>
    </motion.div>
  );
};
// Chart Component
const LineChart = () => {
  const data = {
    labels: ["Apr 24", "May 24", "Jun 24", "Jul 24", "Aug 24", "Sep 24"],
    datasets: [
      {
        label: "No Repair Priority Class",
        data: [10, 30, 50, 70, 90, 100],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        fill: true,
      },
    ],
  };

  const options = {
    scales: {
      y: { beginAtZero: true },
    },
    plugins: {
      legend: {
        display: true,
        position: "bottom" as const,
      },
    },
  };

  return <Line data={data} options={options} />;
};

// const BarChart = () => {
//   const data = {
//     labels: ["Jan", "Feb", "Mar", "Apr", "May"],
//     datasets: [
//       {
//         label: "Sales",
//         data: [300, 400, 200, 500, 600],
//         backgroundColor: "rgba(75, 192, 192, 0.6)",
//         borderColor: "rgba(75, 192, 192, 1)",
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {
//     scales: {
//       y: { beginAtZero: true },
//     },
//     plugins: {
//       legend: {
//         display: true,
//         position: "bottom",
//       },
//     },
//   };

//   return <Bar data={data} options={options} />;
// };

// Fleet Summary Component

// Recent Activities Component

// NotificationBell Component

// Dashboard Layout
export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <TopBar toggleSidebar={toggleSidebar} />

      <div className="md:ml-64 pt-20 p-8 transition-all duration-300">
        <h1 className="text-3xl font-bold mb-6">My Dashboard</h1>

        {/* Key Metrics Section - Most Important */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <EnhancedWidget
            title="Total Revenue"
            value="$150,000"
            icon={<FaDollarSign />}
            color="green"
            tooltip="Total Revenue this Month"
          />
          <EnhancedWidget
            title="Active Vehicles"
            value="120"
            icon={<FaTruckMoving />}
            color="blue"
            tooltip="Number of Active Vehicles"
          />
          <EnhancedWidget
            title="Service Requests"
            value="45"
            icon={<FaWrench />}
            color="orange"
            tooltip="Service Requests in Progress"
          />
          <EnhancedWidget
            title="Tasks Completed"
            value="85%"
            icon={<FaClipboardCheck />}
            color="purple"
            tooltip="Percentage of Tasks Completed"
          />
        </div>

        {/* Widgets - Essential Dashboard Widgets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceReminders />
          <OpenIssues />
          <TimeToResolve />
          <VehicleAssignments />
          <VehicleStatus />
        </div>

        {/* Detailed Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-lg font-bold mb-4">
              Repair Priority Class Trends
            </h3>
            <div className="h-64">
              <LineChart />
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <ActiveWorkOrders />
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-lg font-bold mb-4">Sales Data</h3>
            <CustomBarChart />
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-lg font-bold mb-4">Pie Chart</h3>
            <PieChart />
          </div>

          {/* Additional Components */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-lg font-bold mb-4">Fleet Summary</h3>
            <FleetSummary />
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <RecentActivities />
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-lg font-bold mb-4">Monthly Target</h3>
            <ProgressBar percentage={85} label="Monthly Target" />
            <ProgressBar percentage={65} label="Tasks Completed" />
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <NotificationBell notifications={3} />
          </div>
        </div>
      </div>
    </div>
  );
}
