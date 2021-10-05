import React, {useState} from 'react'
import Login from './LogIn'
import Logout from './LogOut'
import Register from './Register'

// Start at Userbar: Import useState hook, set up some state to hold user and then use map to update user, pass setUser to login, logout component as a prob.
// Function setUser can now be used in LogIn LogOut and Register 
export default function UserBar({ user, setUser }) {
    // const [ user, setUser ] = useState('') // This is the State hook. If I put a name in here, it returns Logout. Moving this to App. 
    
    // If user return empty then log out, if not, return log in or register
    if (user) {
        return <Logout user={user} setUser = {setUser} />
    } else {
        return (
            <>
              <Login setUser = {setUser} />
              <Register setUser = {setUser} />
            </>
        )
    }
}