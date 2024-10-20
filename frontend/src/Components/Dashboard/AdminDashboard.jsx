import React from 'react'
import Header from '../Others/Header'
import CreateTask from '../Others/CreateTask'
import AllTask from '../Others/AllTask'

function AdminDashboard() {
  return (
    <div className='min-h-screen w-full bg-zinc-800 text-white p-6'>
        <Header />
          <h1 className='text-3xl font-bold text-center'>Admin Panel</h1>
          <CreateTask />
          <AllTask />

    </div>
  )
}

export default AdminDashboard