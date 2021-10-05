import { useState } from "react";
import UserBar from "./User/UserBar";
//import Task from "./Task";
import CreateTask from "./CreateTask";
import TodoList from "./TodoList";

function App() {
  const [ user, setUser ] = useState('')  // Move the hook here

  const tasks = [
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
  return (
  // <Task title = "First Note" content = "Empty" author = "Nghia Le" /> <br/> 
  <div>
    <UserBar user={user} setUser={setUser} /> <br/>  
    <CreateTask user={user} />
    <TodoList tasks = {tasks}/> 
  </div>
  ) //the TodoList iterates through the list and display each task
}

export default App;
