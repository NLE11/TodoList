import React, {useState} from 'react'

export default function CreateTask ({ user, tasks, dispatch }) {
    const [ title, setTitle ] = useState('')
    const [ description, setDescription ] = useState('')
    function handleTitle (evt) { setTitle(evt.target.value) }
    function handleDescription (evt) { setDescription(evt.target.value) }
    // function handleCreate () {    
    //     const newTask = { title, description, author: user } // Build a task object
    //     setTasks([ newTask, ...tasks ]) // Create a new array starting with newTask
    // }
    return (
         <form onSubmit={e => {e.preventDefault(); dispatch({type: "CREATE_TASK", title, description});}}>
            <div>User: <b>{user}</b></div>
            <div>
                <label htmlFor="create-title">Title:</label> <br/>
                <input type="text" value={title} onChange={handleTitle} name="create-title" id="create-title" />
            </div>
            <div>
                <label htmlFor="create-description">Description:</label> <br/>
                <textarea value={description} onChange={handleDescription}/>
            </div>
            <input type="submit" value="Submit" />
        </form>
    )
}