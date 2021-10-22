import React, { useContext, useState } from "react";
import { StateContext } from "../Contexts";

export default function Login() {
  const { dispatch } = useContext(StateContext); // Take dispatch from StateContext
  const [username, setUsername] = useState("");
  function handleUsername(evt) {
    setUsername(evt.target.value);
  }
  return (
    // Onsubmit prevent browsers to refresh the page
    <form
      onSubmit={(evt) => {
        evt.preventDefault();
        dispatch({ type: "LOGIN", username: username });
      }}
    >
      <label htmlFor="login-username">Username:</label>
      <input
        type="text"
        value={username}
        onChange={handleUsername}
        name="login-username"
        id="login-username"
      />
      <label htmlFor="login-password">Password:</label>
      <input type="password" name="login-password" id="login-password" />
      <input type="submit" value="Login" disabled={username.length === 0} />
    </form>
  );
}
