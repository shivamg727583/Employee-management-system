import React from 'react'

function TaskListNumber() {
  return (
    <div className='flex justify-between gap-5 md:screen flex-wrap'>
        <div className=" w-[45%] md:w-[22%] bg-[#3a88e8] rounded-xl md:p-10 p-6">
<h1 className='font-bold text-3xl'>0</h1>
<h2 className='font-semibold text-xl'>New Task</h2>
        </div>
        <div className=" w-[45%] md:w-[22%] bg-[#A1C466] rounded-xl md:p-10 p-6">
<h1 className='font-bold text-3xl'>3</h1>
<h2 className='font-semibold text-xl'>Completed</h2>
        </div>
        <div className=" w-[45%] md:w-[22%] bg-[#F9D14D] rounded-xl md:p-10 p-6">
<h1 className='font-bold text-3xl'>1</h1>
<h2 className='font-semibold text-xl'>Accepted</h2>
        </div>
        <div className=" w-[45%] md:w-[22%] bg-[#D25F47] rounded-xl md:p-10 p-6">
<h1 className='font-bold text-3xl'>2</h1>
<h2 className='font-semibold text-xl'>Failed</h2>
        </div>

    </div>
  )
}

export default TaskListNumber



