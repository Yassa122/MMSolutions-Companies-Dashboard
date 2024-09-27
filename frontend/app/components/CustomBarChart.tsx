import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";

const data = [
  { name: "Jan", uv: 400, pv: 2400, amt: 2400 },
  { name: "Feb", uv: 300, pv: 4567, amt: 2400 },
  { name: "Mar", uv: 200, pv: 1398, amt: 2400 },
  { name: "Apr", uv: 278, pv: 3908, amt: 2400 },
  { name: "May", uv: 189, pv: 4800, amt: 2400 },
];

const CustomBarChart = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.6 }}
      className="bg-white p-6 shadow-lg rounded-lg"
    >
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="uv" fill="#8884d8" />
          <Bar dataKey="pv" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default CustomBarChart;
