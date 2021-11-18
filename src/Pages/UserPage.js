import React, { useContext, useEffect } from "react";
import { useResource } from "react-request-hook";
import { StateContext } from "../Contexts";

import User from "../User";
import { Link } from "react-navi";

export default function UserPage({ id }) {
  const { state } = useContext(StateContext);
  const [user, getUser] = useResource(() => ({
    url: `/user/${id}`,
    headers: { Authorization: `${state.user.access_token}` },
    method: "get",
  }));
  useEffect(getUser, [id]);

  return (
    // In case the network is not completed, loading...
    <div>
      {/* {task && task.data ? <Task {...task.data} /> : "Loading..."} */}
      <hr />
      <div>
        <Link href="/">Go back</Link>
      </div>
    </div>
  );
}
