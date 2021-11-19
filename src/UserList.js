import React, { useContext } from "react";
import User from "./User";

import { StateContext } from "./Contexts";

export default function UserList() {
  const { state } = useContext(StateContext);
  const { users } = state;
  //pass the dispatch
  return (
    // This supposes to be <User author = {u.author} key = {'user-' + i} />
    <div>
      <h2> User List</h2>
      {users
        .sort((argument1, argument2) =>
          argument1._id > argument2._id ? 1 : -1
        )
        .map((u, i) => (
          <User {...u} short={true} key={"user-" + i} index={u._id} />
        ))}
    </div>
  );
}
