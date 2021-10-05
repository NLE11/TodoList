import React from 'react'

export default function CreateTask ({ user }) {
    return (
         <form onSubmit={e => e.preventDefault()}>
            <div>User: <b>{user}</b></div>
            <div>
                <label htmlFor="create-title">Title:</label> <br/>
                <input type="text" name="create-title" id="create-title" />
            </div>
            <div>
                <label htmlFor="create-description">Description:</label> <br/>
                <textarea />
            </div>
            <input type="submit" value="Submit" />
        </form>
    )
}