import React, { useEffect } from "react";
import { useResource } from "react-request-hook";

import Task from "../Task";
import { Link } from "react-navi";

export default function TaskPage({ id }) {
  const [task, getTask] = useResource(() => ({
    url: `/tasks/${id}`,
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
