import React from 'react'

function TaskListNumber({userData}) {
        const totalTask = userData.tasks.length;
        const Active = userData.tasks.filter((t)=>t.active).length;
        const completed = userData.tasks.filter((t)=>t.completed).length;
        const failed = userData.tasks.filter((t)=>t.failed).length;
        const newTask = userData.tasks.filter((t)=>t.newTask).length;
        
        
  return (
    <div className='flex justify-between gap-5 md:screen flex-wrap'>
        <div className=" w-[45%] md:w-[22%] bg-[#3a88e8] rounded-xl md:p-10 p-6">
<h1 className='font-bold text-3xl'>{newTask}</h1>
<h2 className='font-semibold text-xl'>New Task</h2>
        </div>
        <div className=" w-[45%] md:w-[22%] bg-[#A1C466] rounded-xl md:p-10 p-6">
<h1 className='font-bold text-3xl'>{completed}</h1>
<h2 className='font-semibold text-xl'>Completed</h2>
        </div>
        <div className=" w-[45%] md:w-[22%] bg-[#F9D14D] rounded-xl md:p-10 p-6">
<h1 className='font-bold text-3xl'>{Active}</h1>
<h2 className='font-semibold text-xl'>Active</h2>
        </div>
        <div className=" w-[45%] md:w-[22%] bg-[#D25F47] rounded-xl md:p-10 p-6">
<h1 className='font-bold text-3xl'>{failed}</h1>
<h2 className='font-semibold text-xl'>Failed</h2>
        </div>

    </div>
  )
}

export default TaskListNumber



