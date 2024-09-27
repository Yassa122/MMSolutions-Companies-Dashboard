interface SummaryCardProps {
  title: string;
  value: number;
  change?: number;
  color: string;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ title, value, change, color }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 text-center">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className={`text-${color}-500 text-3xl font-bold`}>{value}</p>
      {change && (
        <p className={`text-${change > 0 ? "red" : "green"}-500`}>
          {change > 0 ? `▲${change}%` : `▼${Math.abs(change)}%`}
        </p>
      )}
    </div>
  );
};

export default SummaryCard;
