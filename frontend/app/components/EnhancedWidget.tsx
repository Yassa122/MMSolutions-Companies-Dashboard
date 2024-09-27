import React from 'react';

interface EnhancedWidgetProps {
  title: string;
  value: number | string;
  icon: React.ReactNode;
  color: string;
  tooltip: string;
}

const EnhancedWidget: React.FC<EnhancedWidgetProps> = ({ title, value, icon, color, tooltip }) => (
  <div className="relative bg-white shadow-lg rounded-lg p-6 flex items-center justify-between group hover:bg-blue-50 transition-all duration-300">
    <div>
      <h3 className="text-lg font-bold">{title}</h3>
      <p className={`text-${color}-500 text-2xl font-bold`}>{value}</p>
    </div>
    <div className={`text-${color}-500 text-3xl`}>{icon}</div>

    {/* Tooltip for more information */}
    <div className="absolute left-0 bottom-0 ml-2 mb-2 p-2 text-sm bg-gray-700 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      {tooltip}
    </div>
  </div>
);
export default EnhancedWidget;
