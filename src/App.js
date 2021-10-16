import { useReducer } from "react";
import UserBar from "./User/UserBar";
import CreateTask from "./CreateTask";
import TodoList from "./TodoList";

import appReducer from "./Reducers";

function App() {
  const initialTasks = [];

  // const [ user, setUser ] = useState('')  // Move the hook here
  // const [ tasks, setTasks ] = useState(initialTasks)
  // const [user, dispatchUser] = useReducer(userReducer, ""); // The first parameter is the function that we defines

  // const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks);

  // replace the two reducers in App.js with a single reducer hook

  const [state, dispatch] = useReducer(appReducer, {
    user: "",
    tasks: initialTasks,
  });

  // Update state
  const { user, tasks } = state;

  return (
    // <Task title = "First Note" content = "Empty" author = "Nghia Le" /> <br/>
    // {user && <CreateTask user={user} /> }  >>> If condition, showing nothing
    <div>
      <UserBar user={user} dispatchUser={dispatch} /> <br />
      {user && <CreateTask user={user} dispatch={dispatch} />}
      <TodoList tasks={tasks} dispatch={dispatch} />
    </div>
  ); //the TodoList iterates through the list and display each task
}

export default App;
