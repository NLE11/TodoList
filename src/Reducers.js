// import nextId from "react-id-generator"; // npm install react-id-generator

function userReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
    case "REGISTER":
      return {
        username: action.username,
        access_token: action.access_token,
      };
    case "LOGOUT":
      return {
        username: undefined,
        access_token: undefined,
      };
    default:
      return state;
  }
}

function taskReducer(state, action) {
  switch (action.type) {
    case "CREATE_TASK":
      const newTask = {
        id: action.id, // We cannot use the nextId() because the server sent us a new one
        title: action.title,
        description: action.description,
        dateCreated: action.dateCreated,
        dateCompleted: action.dateCompleted,
        complete: action.complete,
      };
      return [newTask, ...state];
    case "TOGGLE_TASK":
      const remainTask = state.filter((task) => task.id !== action.id);
      const updateTask = {
        id: action.id,
        title: action.title,
        description: action.description,
        dateCreated: action.dateCreated,
        dateCompleted: action.dateCompleted,
        complete: action.complete,
      };
      return [...remainTask, updateTask]; // prevTask has some values not just one
    case "DELETE_TASK":
      const prevTask = state.filter((task) => task.id !== action.id);
      return [...prevTask]; // only return the prev task
    case "FETCH_TASKS":
      return action.tasks; // Grab the tasks from the server
    default:
      return state;
  }
}

function usersReducer(state, action) {
  switch (action.type) {
    case "FETCH_USERS":
      return action.users;
    default:
      return state;
  }
}
export default function appReducer(state, action) {
  //In this appReducer function, we are going to call the other two reducer functions, and return the full state tree:

  return {
    user: userReducer(state.user, action),
    tasks: taskReducer(state.tasks, action),
    users: usersReducer(state.users, action),
  };
}
