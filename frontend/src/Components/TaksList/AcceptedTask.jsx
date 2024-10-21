import React from 'react';

function AcceptedTask({task, idx}) {

  const {userData} = JSON.parse(localStorage.getItem('loggedInUser'));
  const employees = JSON.parse(localStorage.getItem('employees'));

  console.log(userData)

  const updateTaskStatus = (status) => {
    // Update the task status (either complete or fail)
    const updatedTask = { ...userData.tasks[idx] };
    if (status === 'complete') {
      updatedTask.completed = true;
      updatedTask.active = false;
      updatedTask.failed = false;
    } else if (status === 'fail') {
      updatedTask.completed = false;
      updatedTask.active = false;
      updatedTask.failed = true;
    }

    // Update loggedInUser tasks
    userData.tasks[idx] = updatedTask;

    // Save changes to loggedInUser in localStorage
    localStorage.setItem('loggedInUser', JSON.stringify({ userData }));

    // Update the corresponding employee in the employees list
    const updatedEmployees = employees.map(employee => {
      if (employee.id === userData.id) {
        return { ...employee, tasks: userData.tasks };
      }
      return employee;
    });

    // Save updated employees list in localStorage
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
  };

  return (
    <div className="h-full flex-shrink-0 sm:w-[300px] w-full rounded-xl bg-green-500 p-5 relative">
      <div className="flex justify-between items-center">
        <h3 className='bg-red-600 p-1 rounded-md text-white'>{task.category}</h3>
        <h4 className='font-medium'>{task.date}</h4>
      </div>
      <div className="flex items-center gap-3 flex-col mt-2 overflow-auto h-[65%] ">
        <h1 className='font-bold text-3xl md:text-2xl'>{task.title}</h1>
        <p className='text-md'>{task.description}</p>
      </div>
      <div className="flex w-full justify-between items-center absolute bottom-2 left-0 px-2">
        <button 
          onClick={() => updateTaskStatus('complete')} 
          className="bg-green-600 p-2 text-[15px] rounded-md text-white">
          {task.active ? "Mark as Completed" : (task.completed ? "Completed" : "")}
        </button>
        <button 
          onClick={() => updateTaskStatus('fail')} 
          className="bg-red-600 p-2 text-[15px] rounded-md text-white">
          {task.active ? "Mark as Failed" : (task.failed ? "Failed" : "")}
        </button>
      </div>
    </div>
  );
}

export default AcceptedTask;
