import React, { useContext } from 'react';
import { AuthContextProvider } from '../../Context/AuthContext';

function AllTask() {
  const data = useContext(AuthContextProvider);

  return (
    <div className="bg-[#1c1c1c] p-5 mt-6 rounded-md h-80 md:h-44 overflow-auto">
      <div className="bg-red-500 py-3 px-3 rounded-xl flex justify-between items-center mb-5 text-white">
        <h2 className="font-medium w-1/5 text-xs sm:text-lg">Employee Name</h2>
        <h3 className="w-1/5 text-xs sm:text-lg">New Task</h3>
        <h5 className="w-1/5 text-xs sm:text-lg">Active Task</h5>
        <h5 className="w-1/5 text-xs sm:text-lg">Completed</h5>
        <h3 className="w-1/5 text-xs sm:text-lg">Failed</h3>
      </div>

      {data.employees.map((emp, key) => (
        <div key={key} className="border-2 py-3 px-3 rounded-xl flex justify-between items-center mb-5 text-white text-sm md:text-base">
          <h2 className="font-medium w-1/5 text-xs sm:text-lg">{emp.name}</h2>
          <h3 className="text-blue-400 w-1/5 text-xs sm:text-lg">{emp.taskCount.newTask}</h3>
          <h5 className="text-green-400 w-1/5 text-xs sm:text-lg">{emp.taskCount.active}</h5>
          <h5 className="text-orange-400 w-1/5 text-xs sm:text-lg">{emp.taskCount.completed}</h5>
          <h3 className="text-violet-400 w-1/5 text-xs sm:text-lg">{emp.taskCount.failed}</h3>
        </div>
      ))}
    </div>
  );
}

export default AllTask;
