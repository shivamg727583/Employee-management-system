
import { useForm } from 'react-hook-form';


function CreateTask() {
  const {register,reset , handleSubmit,watch} =  useForm();

  const submitHandler = (data)=>{
    console.log(watch());
    reset();
  }

  return (
    <div >

      
        <div className="flex flex-col items-center w-full justify-center bg-zinc-700 py-4 mt-4 rounded-xl">
            <form className='flex items-center justify-between flex-col md:flex-row w-full' onSubmit={handleSubmit(submitHandler)}>
                <div className="md:w-1/2 w-full flex  flex-col px-10">
              <h3 className='mt-4 text-md mb-1'>Task Title</h3>
              <input type="text" placeholder='Enter task title' {...register('title')}  className='w-full border-2 border-zinc-200 rounded bg-transparent p-1 outline-none' />
               
              <h3 className='mt-4 text-md mb-1'>Date</h3>
              <input type="date" {...register('date')}  className='w-full border-2 border-zinc-200 rounded bg-transparent p-1 outline-none'/>
                
              <h3 className='mt-4 text-md mb-1'>Assing to</h3>
              <input type="text" placeholder='Employee Name' {...register('employee_name')} className='w-full border-2 border-zinc-200 rounded bg-transparent p-1 outline-none' />
               
              <h3 className='mt-4 text-md mb-1'>Category</h3>
              <input type="text" placeholder='design ,dev,etc' {...register('category')} className='w-full border-2 border-zinc-200 rounded bg-transparent p-1 outline-none' />
                </div>
                <div className="md:w-1/2 w-full flex flex-col px-10 h-full">
                    <h3 className='mt-4 text-md mb-1'>Task Description</h3>
                    <textarea placeholder='Enter task description' {...register('description')} className='w-full outline-none border-2 p-2 border-zinc-200 rounded-md bg-transparent md:h-[200px] resize-none'></textarea>

               
              <input type="submit" value='Create Task' className='w-full bg-green-600 text-white font-bold py-2 rounded-xl mt-4' />
                </div>

            </form>
        </div>

    </div>
  )
}

export default CreateTask