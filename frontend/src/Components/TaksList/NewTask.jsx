import React from 'react';

function NewTask({ task, idx }) {

  const handleAcceptTask = () => {
    const { userData } = JSON.parse(localStorage.getItem('loggedInUser'));
    const employees = JSON.parse(localStorage.getItem('employees'));

    // Modify the task to mark it as accepted
    const newTask = { ...task, active: true, completed: false, failed: false };

    // Add the task to the logged-in user's tasks
    userData.tasks.push(newTask);

    // Save the updated loggedInUser in localStorage
    localStorage.setItem('loggedInUser', JSON.stringify({ userData }));

    // Update the corresponding employee in the employees list
    const updatedEmployees = employees.map(employee => {
      if (employee.id === userData.id) {
        return { ...employee, tasks: userData.tasks };
      }
      return employee;
    });

    // Save the updated employees list in localStorage
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
  };

  return (
    <div className="h-full flex-shrink-0 sm:w-[300px] w-full rounded-xl bg-green-500 p-5">
      <div className="flex justify-between items-center">
        <h3 className='bg-red-600 p-1 rounded-md text-white'>{task.category}</h3>
        <h4 className='font-medium'>{task.date}</h4>
      </div>
      <div className="flex items-center gap-3 flex-col mt-2 w-full">
        <h1 className='font-bold text-3xl md:text-2xl'>{task.title}</h1>
        <p className='text-md'>{task.description}</p>
      </div>
      <div className="mt-4 w-full">
        <button 
          onClick={handleAcceptTask}
          className="bg-green-600 p-2 px-3 rounded-md w-full text-white">
          {task.active ? "Accept Task":"Accepted"}
        </button>
      </div>
    </div>
  );
}

export default NewTask;
