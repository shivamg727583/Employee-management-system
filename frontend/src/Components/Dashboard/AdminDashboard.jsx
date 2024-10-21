import React from 'react'
import Header from '../Others/Header'
import CreateTask from '../Others/CreateTask'
import AllTask from '../Others/AllTask'

function AdminDashboard({userData,changeUser}) {
  return (
    <div className='min-h-screen w-full bg-zinc-800 text-white p-6'>
        <Header userData={userData} changeUser={changeUser} />
          <h1 className='text-3xl font-bold text-center'>Admin Panel</h1>
          <CreateTask userData={userData} />
          <AllTask userData={userData} />

    </div>
  )
}

export default AdminDashboard