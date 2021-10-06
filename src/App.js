import { useReducer } from "react";
import UserBar from "./User/UserBar";
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

  function taskReducer (state, action) {
    switch (action.type) {
        case 'CREATE_TASK':
            const newTask = { 
                title: action.title,
                description: action.description,
                dateCreated: action.dateCreated,
                dateCompleted: action.dateCompleted,
                complete: action.complete
            }
            return [ newTask, ...state ]
        case 'DELETE_TASK':
          
        default:
              throw new Error()
      }
  }

  // const [ user, setUser ] = useState('')  // Move the hook here
  // const [ tasks, setTasks ] = useState(initialTasks)
  const [ user, dispatchUser ] = useReducer(userReducer, '') // The first parameter is the function that we defines

  const [ tasks, dispatchTasks ] = useReducer(taskReducer, initialTasks)

  return (
  // <Task title = "First Note" content = "Empty" author = "Nghia Le" /> <br/> 
  // {user && <CreateTask user={user} /> }  >>> If condition, showing nothing 
  <div>
    <UserBar user={user} dispatchUser={dispatchUser} /> <br/>  
    {user && <CreateTask user={user} dispatch={dispatchTasks} /> } 
    <TodoList tasks = {tasks}/> 
  </div>
  ) //the TodoList iterates through the list and display each task
}

export default App;
