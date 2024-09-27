const TaskList = () => (
  <div className="bg-white shadow-lg rounded-lg p-6">
    <h3 className="text-lg font-bold mb-4">Pending Tasks</h3>
    <ul className="space-y-3">
      <li className="flex justify-between">
        <span>Check vehicle status</span>
        <span className="text-red-500">Overdue</span>
      </li>
      <li className="flex justify-between">
        <span>Approve work orders</span>
        <span className="text-yellow-500">Due Today</span>
      </li>
      <li className="flex justify-between">
        <span>Review inspection report</span>
        <span className="text-green-500">Completed</span>
      </li>
    </ul>
  </div>
);
export default TaskList;
