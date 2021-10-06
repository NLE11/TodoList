import react, { useState, useReducer } from "react";
import UserBar from "./User/UserBar";
//import Task from "./Task";
import CreateTask from "./CreateTask";
import TodoList from "./TodoList";


function App() {
  

  const initialTasks = [
    {
      title: "Homework 1",
      description: "Practice JavaScript",
    },
    {
      title: "Homework 2",
      description: "Practice HTML",
    },
    {
      title: "Project",
      description: "Practice React",
    }
  ]

  const [ tasks, setTasks ] = useState(initialTasks)

  function userReducer (state, action) {
    switch (action.type) {
        case 'LOGIN':
        case 'REGISTER':
            return action.username
        case 'LOGOUT':
            return ''
        default:
            throw new Error()
    }   
}

  // const [ user, setUser ] = useState('')  // Move the hook here
  const [ user, dispatchUser ] = useReducer(userReducer, '') // The first parameter is the function that we defines

  return (
  // <Task title = "First Note" content = "Empty" author = "Nghia Le" /> <br/> 
  // {user && <CreateTask user={user} /> }  >>> If condition, showing nothing 
  <div>
    <UserBar user={user} dispatchUser={dispatchUser} /> <br/>  
    {user && <CreateTask user={user} tasks={tasks} setTasks={setTasks} /> } 
    <TodoList tasks = {tasks}/> 
  </div>
  ) //the TodoList iterates through the list and display each task
}

export default App;
