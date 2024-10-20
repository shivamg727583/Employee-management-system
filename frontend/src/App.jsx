import React, { useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import UserDashboard from './Components/Dashboard/UserDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { setLocalStorage } from './Context/LocalStorage'

function App() {


  const [user , setUser] = useState(null);

  const handleLogin =(email,password)=>{
   if(email =='admin@gmail.com' && password =='123'){
    // setLocalStorage('user','admin');
    setUser('admin');
    console.log('admin is here')
   }
   else if(email=='user@gmail.com' && password=='123'){
    // setLocalStorage('user','user');
    setUser('user');
    console.log('user is here')
   }
   else {
    alert('Invalid Credentials');

   }
  }

  useEffect( ()=> {


  },[])

 
   
    

  
  return (
    <>
{!user ? <Login handleLogin={handleLogin} /> :''}
{user ==='user' ? <UserDashboard /> :''}
{user && user === 'admin' ? <AdminDashboard /> :''}


    </>
  )
}

export default App