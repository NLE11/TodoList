import React, { useEffect, useContext } from "react";
import { StateContext } from "../Contexts";
import { useResource } from "react-request-hook";
import UserList from "../UserList";

export default function UserListPage() {
  const { state, dispatch } = useContext(StateContext);
  const [users, getUsers] = useResource(() => ({
    url: "/user",
    method: "get",
  }));

  useEffect(getUsers, []);

  useEffect(() => {
    // This useEffect hoook only trigger the network call when the tasks change
    if (users && users.isLoading === false && users.data) {
      dispatch({ type: "FETCH_USERS", users: users.data.users }); // Within the tasks reducers I need a new action FETCH_TASK
    }
  }, [users]);

  const { data, isLoading } = users;
  return (
    <>
      {isLoading && "Users loading..."} <UserList />
    </>
  );
}
