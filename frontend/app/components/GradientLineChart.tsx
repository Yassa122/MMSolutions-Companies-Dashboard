import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
// import { useEffect } from "react";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const GradientLineChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Sales",
        data: [300, 400, 200, 500, 600],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "rgba(75,192,192,1)",
        pointBorderColor: "#fff",
        tension: 0.4,
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
export default GradientLineChart;
