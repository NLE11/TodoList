import React, { useContext } from "react";
import Login from "./LogIn";
import Logout from "./LogOut";
import Register from "./Register";
import { StateContext } from "../Contexts";

// Start at Userbar: Import useState hook, set up some state to hold user and then use map to update user, pass setUser to login, logout component as a prob.
// Function setUser can now be used in LogIn LogOut and Register
export default function UserBar() {
  // const [ user, setUser ] = useState('') // This is the State hook. If I put a name in here, it returns Logout. Moving this to App.
  const { state } = useContext(StateContext); // Take the state from StateContext
  // If user return empty then log out, if not, return log in or register
  if (state.user) {
    return <Logout />;
  } else {
    return (
      <>
        <Login />
        <Register />
      </>
    );
  }
}
