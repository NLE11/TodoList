import React from 'react'
import Login from './LogIn'
import Logout from './LogOut'
import Register from './Register'

export default function UserBar() {
    const user = '' // If I put a name in here, it returns Logout
    // If user return empty then log out, if not, return log in or register
    if (user) {
        return <Logout user={user} />
    } else {
        return (
            <>
              <Login />
              <Register />
            </>
        )
    }
}