import { Pie } from "react-chartjs-2";

const PieChart = () => {
  const data = {
    labels: ["No Reason for Repair"],
    datasets: [
      {
        data: [100],
        backgroundColor: ["#FF6384"],
      },
    ],
  };

  return <Pie data={data} />;
};

export default PieChart;
