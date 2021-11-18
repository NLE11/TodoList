import React, { useContext, useEffect } from "react";
import { useResource } from "react-request-hook";
import { StateContext } from "../Contexts";

import Task from "../Task";
import { Link } from "react-navi";

export default function TaskPage({ id }) {
  const { state } = useContext(StateContext);
  const [task, getTask] = useResource(() => ({
    url: `/task/${id}`,
    headers: { Authorization: `${state.user.access_token}` },
    method: "get",
  }));
  useEffect(getTask, [id]);

  return (
    // In case the network is not completed, loading...
    <div>
      {task && task.data ? <Task {...task.data} /> : "Loading..."}
      <hr />
      <div>
        <Link href="/">Go back</Link>
      </div>
    </div>
  );
}
