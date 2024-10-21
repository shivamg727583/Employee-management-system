import React from 'react'

function Header({userData,changeUser}) {
 const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

   const logoutfunction =()=>{
    localStorage.removeItem('loggedInUser');
    changeUser('');

   }
  
  return (
    <div className='w-full h-24 flex items-center justify-between p-4 md:p-10'>
        <h1 className='text-2xl '>Hello <br /><span className='font-bold text-3xl'>{ userData.name }👋</span></h1>
        <button onClick={logoutfunction} className='p-3 rounded-xl font-semibold bg-red-700 text-white'>Log out</button>

    </div>
  )
}

export default Header