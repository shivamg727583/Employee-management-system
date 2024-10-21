import React, { useContext, useEffect, useState } from 'react';
import Login from './Components/Auth/Login';
import UserDashboard from './Components/Dashboard/UserDashboard';
import AdminDashboard from './Components/Dashboard/AdminDashboard';
import { AuthContextProvider } from './Context/AuthContext';

function App() {
  const [user, setUser] = useState(() => {
    // Retrieve the user from localStorage when the app initializes
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    return loggedInUser ? loggedInUser.role : null;
  });

  const [userData, setUserData] = useState(() => {
    // Retrieve the userData from localStorage when the app initializes
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    return loggedInUser ? loggedInUser.userData : null;
  });

  const data = useContext(AuthContextProvider);

  const handleLogin = (email, password) => {
    if (email === 'admin@gmail.com' && password === '123') {
      const adminData = data.admin;
      setUser('admin');
      setUserData(adminData);
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin', userData: adminData }));
    } else {
      const foundUser = data.employees?.find(e => e.email === email && e.password === password);
      if (foundUser) {
        setUser('user');
        setUserData(foundUser);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'user', userData: foundUser }));
      } else {
        alert('Invalid Credentials');
      }
    }
  };

  useEffect(() => {
    if (data) {
      const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
      if (loggedInUser) {
        setUser(loggedInUser.role);
        setUserData(loggedInUser.userData); // Retrieve and set the userData from localStorage
      }
    }
  }, [data]);

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user && user === 'admin' ? (
        <AdminDashboard userData={userData} changeUser={setUser} />
      ) : user === 'user' ? (
        <UserDashboard userData={userData} changeUser={setUser} />
      ) : (
        ''
      )}
    </>
  );
}

export default App;
