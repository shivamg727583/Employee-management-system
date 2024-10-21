import React from 'react'
import Header from '../Others/Header'
import TaskListNumber from '../TaksList/TaskListNumber'
import TaskList from '../TaksList/TaskList'

function UserDashboard({userData,changeUser}) {
  return (
    <div className='w-full h-screen bg-[#1C1C1C] text-white px-10 py-2'>
<Header  userData={userData} changeUser={changeUser}/>
<TaskListNumber  userData={userData}/>
<TaskList userData={userData}/>
    </div>
  )
}

export default UserDashboard