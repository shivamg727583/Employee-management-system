import React from 'react'

function CompletedTask({task}) {
  return (
    
<div className="h-full flex-shrink-0 sm:w-[300px] w-full  rounded-xl bg-green-500 p-5 relative">
<div className="flex justify-between items-center">
<h3 className='bg-red-600 p-1 rounded-md text-white'>{task.category}</h3>
<h4 className='font-medium '>{task.date}</h4>
</div>
<div className="flex items-center gap-3 flex-col mt-2 overflow-auto h-[65%] ">
    <h1 className='font-bold text-3xl md:text-2xl'>{task.title}</h1>
    <p className='text-md '>{task.description}</p>

<div className="mt-2 w-full">
    <button className="bg-orange-600 p-2 w-full rounded-md text-white hover:bg-orange-500">Completed</button>
</div>
</div>
</div>
  )
}

export default CompletedTask