import React, {useState} from 'react'
type AuthUser = {
    name: string
    email: string
}

const User = (props: AuthUser) => {
   const [user, setUser] = useState<AuthUser| null>(null);

   const handleLogin = () => {
     setUser ({
        name: 'Chinedu',
        email: 'chinedu@gmail.com'
     })
   };
   const handleLogout = () => {
     setUser(null)
   };
   return (
     <div>
       <button onClick={handleLogin}>Login</button>
       <button onClick={handleLogout}>Logout</button>
       <div>Username is {user?.name}</div>
       <div>User email is {user?.email}</div>
     </div>
   );
}

export default User