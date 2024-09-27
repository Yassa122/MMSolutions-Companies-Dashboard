"use client";
import { motion } from "framer-motion";
import { Line } from "react-chartjs-2";

export const TimeToResolve = () => {
  const data = {
    labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    datasets: [
      {
        label: "Avg. Time to Resolve (Days)",
        data: [2, 3, 1, 4, 3, 2],
        borderColor: "rgba(54, 162, 235, 1)", // Line color
        backgroundColor: "rgba(54, 162, 235, 0.2)", // Fill under the line
        tension: 0.4, // Smooth curves for the line
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: "#6b7280", // Customize axis text color
        },
        grid: {
          color: "#e5e7eb", // Customize grid lines color
        },
      },
      x: {
        ticks: {
          color: "#6b7280",
        },
        grid: {
          color: "#e5e7eb",
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Hides the legend to keep it clean
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className="bg-white shadow-lg rounded-lg p-6"
    >
      <h3 className="text-xl font-bold mb-6 text-gray-700">Time to Resolve</h3>
      <div className="h-48">
        <Line data={data} options={options} />
      </div>
    </motion.div>
  );
};

export default TimeToResolve;
