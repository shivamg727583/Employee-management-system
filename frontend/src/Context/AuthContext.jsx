import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from './LocalStorage';

export const AuthContextProvider = createContext();
function AuthContext({children}) {
 const [userData,setUserData] = useState([]);

 useEffect(()=>{
  // setLocalStorage();
  const {employees,admin} = getLocalStorage();
setUserData({employees,admin})
    },[])



  return (
    <AuthContextProvider.Provider value={userData}>
      {children}
      </AuthContextProvider.Provider>
  )
}

export default AuthContext