interface ProgressBarProps {
  percentage: number;
  label: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage, label }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-lg font-medium">{label}</span>
      <span>{percentage}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-3">
      <div
        className="bg-blue-600 h-3 rounded-full"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  </div>
);
export default ProgressBar;
