// Shift + Option + F
import React, { useState, useEffect } from "react";
import { useReducer } from "react";
//import UserBar from "./User/UserBar";
//import CreateTask from "./CreateTask";
//import TodoList from "./TodoList";
//import Header from "./Header";

import { ThemeContext, StateContext } from "./Contexts";

import appReducer from "./Reducers";
//import ChangeTheme from "./ChangeTheme";

import HeaderBar from "./Pages/HeaderBar";
import HomePage from "./Pages/HomePage";

//import { useResource } from "react-request-hook";

import { mount, route } from "navi";
import { Router, View } from "react-navi";
import CreateTask from "./CreateTask";
import TaskPage from "./Pages/TaskPage";
//export const ThemeContext = React.createContext({ primaryColor: "blue" }); //Create a context with one key blue

import { Container } from "react-bootstrap";
import UserListPage from "./Pages/UserListPage";

function App() {
  const initialTasks = [];

  // const [ user, setUser ] = useState('')  // Move the hook here
  // const [ tasks, setTasks ] = useState(initialTasks)
  // const [user, dispatchUser] = useReducer(userReducer, ""); // The first parameter is the function that we defines

  // const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks);

  // replace the two reducers in App.js with a single reducer hook

  // const [tasks, getTasks] = useResource(() => ({
  //   url: "/tasks",
  //   method: "get",
  // }));

  const [state, dispatch] = useReducer(appReducer, {
    user: {},
    tasks: initialTasks, // Define tasks with an empty list
    users: [],
  });

  // useEffect(getTasks, []);

  // useEffect(() => {
  //   // This useEffect hoook only trigger the network call when the tasks change
  //   if (tasks && tasks.data) {
  //     dispatch({ type: "FETCH_TASKS", tasks: tasks.data.reverse() }); // Within the tasks reducers I need a new action FETCH_TASK
  //   }
  // }, [tasks]);

  // Update state
  const { user } = state;

  const [theme, setTheme] = useState({
    primaryColor: "brown",
    secondaryColor: "green",
  });

  const routes = mount({
    "/": route({ view: <HomePage /> }),
    "/task/create": route({ view: <CreateTask /> }),
    "/task/:id": route((req) => {
      return { view: <TaskPage id={req.params.id} /> };
    }),
    "/users": route({ view: <UserListPage /> }),
  });

  return (
    // <Task title = "First Note" content = "Empty" author = "Nghia Le" /> <br/>
    // {user && <CreateTask user={user} /> }  >>> If condition, showing nothing
    // Set up ThemeContext.Provider override the color blue to red
    // Set up StateContext.Provider to pass the state and dispatch from Reducers, Userbar no longer accepts props
    // Define the fall back by React
    <div>
      <ThemeContext.Provider value={theme}>
        <StateContext.Provider value={{ state: state, dispatch: dispatch }}>
          {/* <HeaderBar setTheme={setTheme} />
          <HomePage /> */}
          <Router routes={routes}>
            {/* Replace div with container */}
            <Container>
              <HeaderBar setTheme={setTheme} />
              <hr />
              <View />
            </Container>
          </Router>

          {/* <Header text="My Todo List" />
          <ChangeTheme theme={theme} setTheme={setTheme} />
          <React.Suspense fallback={"Loading..."}>
            <UserBar /> <br />
          </React.Suspense>
          {user && <CreateTask />} */}
          {/* <TodoList /> */}
        </StateContext.Provider>
      </ThemeContext.Provider>
    </div>
  ); //the TodoList iterates through the list and display each task
}

export default App;
