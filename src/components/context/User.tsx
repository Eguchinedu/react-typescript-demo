import React, { useState, useContext } from "react";
import { UserContext } from "./UserContext";

const User = () => {
    const userContext = useContext(UserContext)
  const handleLogin = () => {

        userContext.setUser({
            name: 'Egu Chinedu',
            email: 'EguChinedu18@gmail.com',
        })

  };
  const handleLogout = () => {
    
       userContext.setUser(null);
 
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {userContext.user?.name}</div>
      <div>User's email is {userContext.user?.email}</div>

    </div>
  );
};

export default User;
