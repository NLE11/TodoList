import React from "react";
import Task from "./Task";

export default function TodoList({ tasks = [], dispatch }) {
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
          <Task {...t} dispatch={dispatch} key={"task-" + i} />
        ))}
    </div>
  );
}
