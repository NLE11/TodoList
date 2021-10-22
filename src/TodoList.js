import React, { useContext } from "react";
import Task from "./Task";

import { StateContext } from "./Contexts";

export default function TodoList() {
  const { state } = useContext(StateContext);
  const { tasks } = state;
  //pass the dispatch
  return (
    // This supposes to be <Task title = {t.title} description = {t.description} key = {'task-' + i} />
    <div>
      <h2> Todo List</h2>
      {tasks
        .sort((argument1, argument2) =>
          argument1.index > argument2.index ? 1 : -1
        )
        .map((t, i) => (
          <Task {...t} key={"task-" + i} />
        ))}
    </div>
  );
}
