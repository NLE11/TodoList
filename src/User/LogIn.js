import React from 'react'

export default function Login() {
   return (
       // Onsubmit prevent browsers to refresh the page
        <form onSubmit={evt => evt.preventDefault()}>
            <label htmlFor="login-username">Username:</label>
            <input type="text" name="login-username" id="login-username" />
            <label htmlFor="login-password">Password:</label>
            <input type="password" name="login-password" id="login-password" />
            <input type="submit" value="Login" />
        </form>
    )
}