import { Line } from "react-chartjs-2";

const LineChart = () => {
  const data = {
    labels: ["Apr 24", "May 24", "Jun 24", "Jul 24", "Aug 24", "Sep 24"],
    datasets: [
      {
        label: "Cost per Mile",
        data: [5, 10, 15, 20, 25, 30],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
      },
    ],
  };

  return <Line data={data} />;
};

export default LineChart;
