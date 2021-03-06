import React, { useEffect, useContext } from "react";
import { StateContext } from "../Contexts";
import { useResource } from "react-request-hook";
import TodoList from "../TodoList";

export default function HomePage() {
  const { state, dispatch } = useContext(StateContext);
  const [tasks, getTasks] = useResource(() => ({
    url: "/task",
    method: "get",
    headers: { Authorization: `${state.user.access_token}` },
  }));

  // useEffect(() => {
  //   if (state.user.access_token) {
  //     getTasks();
  //   }
  // }, []);

  useEffect(() => {
    getTasks();
  }, [state.user.access_token]);

  useEffect(() => {
    // This useEffect hoook only trigger the network call when the tasks change
    if (tasks && tasks.isLoading === false && tasks.data) {
      dispatch({ type: "FETCH_TASKS", tasks: tasks.data.tasks }); // Within the tasks reducers I need a new action FETCH_TASK
    }
  }, [tasks]);

  const { data, isLoading } = tasks;
  return (
    <>
      {isLoading && "Tasks loading..."} <TodoList />
    </>
  );
}
