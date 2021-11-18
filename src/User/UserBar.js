import React, { useContext, useState } from "react";
import Login from "./LogIn";
import Register from "./Register";
import { StateContext } from "../Contexts";
import { Button } from "react-bootstrap";

// Start at Userbar: Import useState hook, set up some state to hold user and then use map to update user, pass setUser to login, logout component as a prob.
// Function setUser can now be used in LogIn LogOut and Register
export default function UserBar() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const Logout = React.lazy(() => import("./LogOut")); // Import the log out component here
  // const [ user, setUser ] = useState('') // This is the State hook. If I put a name in here, it returns Logout. Moving this to App.
  const { state } = useContext(StateContext); // Take the state from StateContext
  // If user return empty then log out, if not, return log in or register
  if (state.user.username) {
    return <Logout />;
  } else {
    return (
      <div className="justify-content-end">
        <Button variant="link" onClick={(e) => setShowLogin(true)}>
          Login
        </Button>
        <Login show={showLogin} handleClose={() => setShowLogin(false)} />
        <Button variant="link" onClick={(e) => setShowRegister(true)}>
          Register
        </Button>
        <Register
          show={showRegister}
          handleClose={() => setShowRegister(false)}
        />
      </div>
    );
  }
}
