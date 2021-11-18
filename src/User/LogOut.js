import React, { useContext } from "react";
import { StateContext } from "../Contexts";

export default function Logout() {
  const { state, dispatch } = useContext(StateContext); // Take both user and dispatch from StateContext
  //const {user} = state >> I can destructure like this instead of state.user
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: "LOGOUT" });
      }}
    >
      Logged in as: <b>{state.user.username}</b>
      <input type="submit" value="Logout" />
    </form>
  );
}
