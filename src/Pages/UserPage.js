import React, { useContext, useEffect } from "react";
import { useResource } from "react-request-hook";
import { StateContext } from "../Contexts";

import User from "../User";
import { Link } from "react-navi";
import TodoList from "../TodoList";

export default function UserPage({ id }) {
  console.log(id);
  const { state, dispatch } = useContext(StateContext);
  const [tasks, getTasks] = useResource(() => ({
    url: `/user/${id}`,
    method: "get",
  }));

  useEffect(getTasks, []);

  useEffect(() => {
    // This useEffect hoook only trigger the network call when the tasks change
    if (tasks && tasks.isLoading === false && tasks.data) {
      dispatch({ type: "FETCH_TASKS", tasks: tasks.data }); // Within the tasks reducers I need a new action FETCH_TASK
    }
  }, [tasks]);
  const { data, isLoading } = tasks;
  return (
    // In case the network is not completed, loading...
    <div>
      {/* {task && task.data ? <Task {...task.data} /> : "Loading..."} */}
      <hr />
      <div>
        <Link href="/">Go back</Link>
        {isLoading && "Tasks loading..."} <TodoList />
      </div>
    </div>
  );
}
